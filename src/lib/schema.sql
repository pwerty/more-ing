-- 사용자 테이블
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 게임 테이블
CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  max_players INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 게임 파티 테이블
CREATE TABLE parties (
  id SERIAL PRIMARY KEY,
  game_id INTEGER REFERENCES games(id),
  host_id INTEGER REFERENCES users(id),
  title VARCHAR(200) NOT NULL,
  description TEXT,
  max_members INTEGER NOT NULL,
  current_members INTEGER DEFAULT 1,
  scheduled_at TIMESTAMP,
  status VARCHAR(20) DEFAULT 'open',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 파티 멤버 테이블
CREATE TABLE party_members (
  id SERIAL PRIMARY KEY,
  party_id INTEGER REFERENCES parties(id),
  user_id INTEGER REFERENCES users(id),
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(party_id, user_id)
);

-- 기본 게임 데이터 삽입
INSERT INTO games (name, category, max_players) VALUES
('리그 오브 레전드', 'MOBA', 5),
('배틀그라운드', 'Battle Royale', 4),
('오버워치 2', 'FPS', 6),
('발로란트', 'FPS', 5),
('마인크래프트', 'Sandbox', 10);