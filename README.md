# 모아링 (More-ing)

**게임할 사람들 같이 모아!**

모아링은 게임 파티를 쉽게 구성하고 새로운 게임 친구들을 만날 수 있는 커뮤니티 플랫폼입니다.

## 🎮 주요 기능

### 인증 시스템
- 회원가입/로그인 (이메일 기반)
- PostgreSQL 데이터베이스 연동
- 비밀번호 암호화 (bcrypt)
- 로그인 상태 관리 (localStorage)

### 사용자 인터페이스
- **로그인 전**: 서비스 소개 페이지
- **로그인 후**: 개인 대시보드 (3가지 모드)
  - **홈**: 개인 게임 기록 및 최근 활동
  - **모아**: 게임 파티 모집 게시판 + 미니게임 입장
  - **설정**: 계정 설정 및 게임 연동

### 게임 연동
- 리그 오브 레전드 (Riot API)
- 스팀, 오버워치 2, 배틀그라운드, 디스코드 연동 준비
- 소환사 정보 검색 기능

### 미니게임 시스템
- 계정 인증 기반 입장
- 랭크별 시작 아이템 차등 지급
- 게임 안내 페이지 (개발 예정)

## 🛠 기술 스택

### Frontend
- **Next.js 15** - React 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 스타일링
- **React Hooks** - 상태 관리

### Backend
- **Next.js API Routes** - 서버리스 API
- **PostgreSQL** - 관계형 데이터베이스
- **node-postgres (pg)** - 데이터베이스 클라이언트
- **bcryptjs** - 비밀번호 해싱

### External APIs
- **Riot Games API** - 리그 오브 레전드 데이터

## 🚀 시작하기

### 1. 저장소 클론
```bash
git clone <repository-url>
cd more-ing
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
`.env.local` 파일을 생성하고 다음 내용을 추가:
```env
DATABASE_URL=postgresql://username@localhost:5432/moreing
RIOT_API_KEY=your_riot_api_key_here
```

### 4. PostgreSQL 설정
```bash
# PostgreSQL 설치 (macOS)
brew install postgresql
brew services start postgresql

# 데이터베이스 생성
createdb moreing

# 스키마 설정
npm run setup-db
```

### 5. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── api/                 # API 라우트
│   │   ├── auth/           # 인증 API
│   │   ├── parties/        # 파티 관련 API
│   │   └── summoner/       # Riot API 연동
│   ├── auth/               # 로그인/회원가입 페이지
│   ├── minigame/           # 미니게임 페이지
│   ├── components/         # 재사용 컴포넌트
│   ├── globals.css         # 전역 스타일
│   ├── layout.tsx          # 레이아웃
│   └── page.tsx            # 메인 페이지
├── lib/
│   ├── auth.ts             # 인증 유틸리티
│   ├── db.ts               # 데이터베이스 연결
│   └── schema.sql          # 데이터베이스 스키마
└── setup-db.js             # DB 초기화 스크립트
```

## 🗄 데이터베이스 스키마

- **users**: 사용자 정보 (id, username, email, password_hash)
- **games**: 게임 정보 (id, name, category, max_players)
- **parties**: 게임 파티 (id, game_id, host_id, title, description)
- **party_members**: 파티 멤버 (id, party_id, user_id)

## 🔧 사용 가능한 스크립트

```bash
npm run dev        # 개발 서버 실행
npm run build      # 프로덕션 빌드
npm run start      # 프로덕션 서버 실행
npm run lint       # ESLint 실행
npm run setup-db   # 데이터베이스 초기화
```

## 🌟 향후 개발 계획

- [ ] 실시간 채팅 시스템
- [ ] 미니게임 실제 구현
- [ ] 파티 매칭 알고리즘
- [ ] 모바일 앱 개발
- [ ] 소셜 기능 확장
- [ ] 게임 통계 대시보드

## 📝 라이선스

MIT License
