'use client';

import { useState } from 'react';

export default function RiotAPISection() {
    const [summonerName, setSummonerName] = useState('');
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        setError(null);
        setData(null);
        try {
            const res = await fetch(`/api/summoner?name=${summonerName}`);
            const result = await res.json();
            if (res.ok) {
                setData(result);
            } else {
                setError(result.error || '알 수 없는 오류가 발생했습니다.');
            }
        } catch (err) {
            setError('요청 실패: 네트워크 오류');
        }
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">소환사 정보 검색</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center space-x-4 mb-4">
                        <input 
                            type="text" 
                            value={summonerName} 
                            onChange={(e) => setSummonerName(e.target.value)}
                            placeholder="소환사 이름"
                            className="flex-grow p-3 border border-gray-300 rounded-lg"
                        />
                        <button 
                            onClick={handleSearch}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            검색
                        </button>
                    </div>
                    {error && <p className="text-red-600 mb-4">{error}</p>}
                    {data && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">소환사 정보</h3>
                            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                                {JSON.stringify(data, null, 2)}
                            </pre>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}