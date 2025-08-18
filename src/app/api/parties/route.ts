import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT p.*, g.name as game_name, u.username as host_name
      FROM parties p
      JOIN games g ON p.game_id = g.id
      JOIN users u ON p.host_id = u.id
      WHERE p.status = 'open'
      ORDER BY p.created_at DESC
    `);
    
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}