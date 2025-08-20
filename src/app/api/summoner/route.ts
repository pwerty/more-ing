import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const summonerName = searchParams.get('name');
    const region = 'kr'; // 한국 서버 기준

    if (!summonerName) {
        return NextResponse.json({ error: '소환사 이름을 입력해주세요.' }, { status: 400 });
    }

    const API_KEY = process.env.RIOT_API_KEY;
    if (!API_KEY) {
        return NextResponse.json({ error: 'API 키가 설정되지 않았습니다.' }, { status: 500 });
    }

    try {
        const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(summonerName)}?api_key=${API_KEY}`;
        
        const res = await fetch(url);
        
        if (!res.ok) {
            return NextResponse.json({ error: '소환사를 찾을 수 없거나 요청에 실패했습니다.' }, { status: res.status });
        }

        const summonerData = await res.json();
        return NextResponse.json(summonerData);
        
    } catch (error) {
        return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
    }
}