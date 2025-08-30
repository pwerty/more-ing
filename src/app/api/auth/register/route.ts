import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();

    // 닉네임 유효성 검사
    if (!username || username.length < 4) {
      return NextResponse.json({ error: '닉네임은 4글자 이상이어야 합니다.' }, { status: 400 });
    }

    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|kr|co\.kr)$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: '올바른 이메일 형식이 아닙니다. (.com, .net, .org, .kr, .co.kr 도메인만 허용)' }, { status: 400 });
    }

    // 비밀번호 유효성 검사
    if (!password || password.length < 6) {
      return NextResponse.json({ error: '비밀번호는 6글자 이상이어야 합니다.' }, { status: 400 });
    }

    const existingUser = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return NextResponse.json({ error: '이미 존재하는 이메일입니다.' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email',
      [username, email, hashedPassword]
    );

    return NextResponse.json({ user: result.rows[0] });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: '회원가입에 실패했습니다.' }, { status: 500 });
  }
}