import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|kr|co\.kr)$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: '올바른 이메일 형식이 아닙니다.' }, { status: 400 });
    }

    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    
    if (result.rows.length === 0) {
      return NextResponse.json({ error: '존재하지 않는 사용자입니다.' }, { status: 400 });
    }

    const user = result.rows[0];
    const isValidPassword = await bcrypt.compare(password, user.password_hash);

    if (!isValidPassword) {
      return NextResponse.json({ error: '비밀번호가 일치하지 않습니다.' }, { status: 400 });
    }

    return NextResponse.json({ 
      user: { 
        id: user.id, 
        username: user.username, 
        email: user.email 
      } 
    });
  } catch (error) {
    return NextResponse.json({ error: '로그인에 실패했습니다.' }, { status: 500 });
  }
}