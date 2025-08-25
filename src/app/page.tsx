'use client';

import { useState, useEffect } from 'react';
import { getUser, removeUser, User } from '@/lib/auth';
import RiotAPISection from './components/RiotAPISection';

type PageMode = 'gather' | 'home' | 'settings';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [currentMode, setCurrentMode] = useState<PageMode>('home');

  useEffect(() => {
    setUser(getUser());
  }, []);

  const handleLogout = () => {
    removeUser();
    setUser(null);
  };
  return (
    <div className="min-h-screen">
      {/* 고정 헤더 */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">모아링</div>
          
          {user && (
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setCurrentMode('gather')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentMode === 'gather' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                모아
              </button>
              <button
                onClick={() => setCurrentMode('home')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentMode === 'home' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                홈
              </button>
              <button
                onClick={() => setCurrentMode('settings')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentMode === 'settings' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                설정
              </button>
            </div>
          )}
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-700">{user.username}</span>
              <button 
                onClick={handleLogout}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <a href="/auth" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              로그인
            </a>
          )}
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="pt-16">
        {user ? (
          // 로그인 후 - 모드에 따른 컨텐츠
          <>
            {currentMode === 'gather' && (
              
              // 모아 페이지 - 게시판 목록
              <section className="py-8">
                <div className="max-w-6xl mx-auto px-4">
                  {/* 미니게임 섹션 */}
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 mb-8 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">모아링 미니게임 🎮</h2>
                        <p className="text-purple-100 mb-4">
                          계정 인증을 완료한 플레이어만 입장 가능! 내 게임 실력에 따른 시작 아이템을 받고 시작하세요.
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="bg-white/20 px-3 py-1 rounded-full">✨ 랭크별 시작 아이템</span>
                          <span className="bg-white/20 px-3 py-1 rounded-full">🏆 리더보드 경쟁</span>
                          <span className="bg-white/20 px-3 py-1 rounded-full">🎁 매일 보상</span>
                        </div>
                      </div>
                      <a href="/minigame" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-block">
                        미니게임 입장
                      </a>
                    </div>
                  </div>

                  <h1 className="text-3xl font-bold text-gray-900 mb-8">게임 파티 모아보기</h1>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">리그 오브 레전드 랭크 같이 해요!</h3>
                          <p className="text-gray-600">실버 티어 이상 모집 | 3/5명</p>
                          <p className="text-sm text-gray-500">오늘 오후 8시</p>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">참여</button>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">배그 스쿼드 모집</h3>
                          <p className="text-gray-600">다이아 이상 | 2/4명</p>
                          <p className="text-sm text-gray-500">내일 오후 7시</p>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">참여</button>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">오버워치 2 경쟁전</h3>
                          <p className="text-gray-600">플래티너 티어 | 4/6명</p>
                          <p className="text-sm text-gray-500">오늘 오후 9시</p>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">참여</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {currentMode === 'home' && (
              // 홈 페이지 - 개인 대시보드
              <>
                <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
                  <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                      안녕하세요, {user.username}님! 🎮
                    </h1>
                    <p className="text-xl text-gray-600">
                      오늘도 즐거운 게임 시간을 보내세요.
                    </p>
                  </div>
                </section>

                <section className="py-16">
                  <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">나의 게임 기록</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                        <div className="text-gray-600">참여한 파티</div>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                        <div className="text-gray-600">완료한 게임</div>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
                        <div className="text-gray-600">평균 평점</div>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="text-3xl font-bold text-orange-600 mb-2">24</div>
                        <div className="text-gray-600">게임 친구</div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="py-16 bg-gray-50">
                  <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">최근 활동</h2>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">리그 오브 레전드 랭크게임</h3>
                            <p className="text-gray-600 text-sm">2024.01.15 - 승리</p>
                          </div>
                          <span className="text-green-600 font-semibold">+25 LP</span>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">배틀그라운드 스쿼드</h3>
                            <p className="text-gray-600 text-sm">2024.01.14 - 2등</p>
                          </div>
                          <span className="text-blue-600 font-semibold">#2</span>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">오버워치 2 경쟁전</h3>
                            <p className="text-gray-600 text-sm">2024.01.13 - 패배</p>
                          </div>
                          <span className="text-red-600 font-semibold">-18 SR</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {currentMode === 'settings' && (
              // 설정 페이지
              <section className="py-8">
                <div className="max-w-4xl mx-auto px-4">
                  <h1 className="text-3xl font-bold text-gray-900 mb-8">설정</h1>
                  <div className="space-y-6">
                    <RiotAPISection />
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <h3 className="text-lg font-semibold mb-6">게임 계정 연동</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">LoL</span>
                            </div>
                            <div>
                              <p className="font-medium">리그 오브 레전드</p>
                              <p className="text-sm text-gray-600">랭크 정보와 게임 기록을 동기화하세요</p>
                            </div>
                          </div>
                          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">연동하기</button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-xs">스팀</span>
                            </div>
                            <div>
                              <p className="font-medium">스팀 계정</p>
                              <p className="text-sm text-gray-600">스팀 게임 라이브러리와 친구 목록을 연동하세요</p>
                            </div>
                          </div>
                          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800">연동하기</button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-xs">OW</span>
                            </div>
                            <div>
                              <p className="font-medium">오버워치 2</p>
                              <p className="text-sm text-gray-600">경쟁전 랭크와 플레이 기록을 가져오세요</p>
                            </div>
                          </div>
                          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">연동하기</button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-xs">배그</span>
                            </div>
                            <div>
                              <p className="font-medium">배틀그라운드</p>
                              <p className="text-sm text-gray-600">티어와 전적 정보를 연동하세요</p>
                            </div>
                          </div>
                          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">연동하기</button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-xs">DC</span>
                            </div>
                            <div>
                              <p className="font-medium">디스코드</p>
                              <p className="text-sm text-gray-600">음성 채팅과 커뮤니티 기능을 연동하세요</p>
                            </div>
                          </div>
                          <button className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500">연동하기</button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <h3 className="text-lg font-semibold mb-4">자기소개</h3>
                      <textarea 
                        className="w-full p-3 border border-gray-300 rounded-lg resize-none h-24"
                        placeholder="자신을 소개해보세요..."
                        defaultValue="안녕하세요! 게임을 좋아하는 {user.username}입니다."
                      />
                      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">저장</button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <h3 className="text-lg font-semibold mb-4 text-red-600">위험 영역</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium text-red-600">계정 탈퇴</p>
                          <p className="text-sm text-gray-600 mb-3">계정을 영구적으로 삭제합니다. 이 작업은 되돌릴 수 없습니다.</p>
                          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">계정 탈퇴</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </>
        ) : (
          // 로그인 전 - 서비스 소개
          <>
            {/* 히어로 섹션 */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  모아링(more-ing)과 함께,<br />
                  게임할 사람들 같이 모아!
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  혼자 게임하기 지루하셨나요? 모아링에서 취향이 맞는 게임 파트너를 찾아보세요.
                </p>
                <a href="/auth" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                  지금 시작하기
                </a>
              </div>
            </section>

            {/* 서비스 소개 */}
            <section className="py-20">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎮</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">다양한 게임 지원</h3>
                    <p className="text-gray-600">
                      LOL, 배그, 오버워치부터 보드게임까지<br />
                      모든 장르의 게임 파티를 만들어보세요
                    </p>
                  </div>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">👥</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">쉬운 파티 구성</h3>
                    <p className="text-gray-600">
                      원하는 게임과 시간을 설정하면<br />
                      자동으로 비슷한 실력의 플레이어를 매칭해드려요
                    </p>
                  </div>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">신뢰할 수 있는 커뮤니티</h3>
                    <p className="text-gray-600">
                      평점 시스템과 리뷰를 통해<br />
                      건전하고 즐거운 게임 문화를 만들어가요
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA 섹션 */}
            <section className="bg-gray-50 py-20">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  더 이상 혼자 게임하지 마세요!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  지금 모아링에 가입하고 새로운 게임 친구들을 만나보세요.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/auth" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    무료로 시작하기
                  </a>
                  <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    서비스 둘러보기
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
