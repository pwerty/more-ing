'use client';

import { useState, useEffect } from 'react';
import { getUser, User } from '@/lib/auth';

export default function MinigamePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">로그인이 필요합니다</h1>
          <a href="/auth" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            로그인하기
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* 헤더 */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-purple-600">모아링 미니게임</a>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">{user.username}님</span>
            <a href="/" className="text-gray-600 hover:text-gray-900">돌아가기</a>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* 환영 섹션 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🎮 모아링 미니게임에 오신 것을 환영합니다!
            </h1>
            <p className="text-xl text-gray-600">
              계정 인증을 완료하고 나만의 게임 여정을 시작하세요
            </p>
          </div>

          {/* 게임 소개 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 게임 시스템</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">계정 인증</h3>
                    <p className="text-gray-600 text-sm">리그 오브 레전드 계정을 연동하여 본인 인증을 완료하세요</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">시작 아이템 획득</h3>
                    <p className="text-gray-600 text-sm">현재 랭크와 게임 실력에 따라 특별한 시작 아이템을 받으세요</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">게임 플레이</h3>
                    <p className="text-gray-600 text-sm">다른 플레이어들과 경쟁하며 순위를 올려보세요</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">보상 획득</h3>
                    <p className="text-gray-600 text-sm">매일 접속하고 게임을 플레이하여 특별한 보상을 받으세요</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 랭크별 시작 아이템 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">⚔️ 랭크별 시작 아이템</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-bronze-100 to-bronze-200 p-4 rounded-lg">
                <h3 className="font-bold text-bronze-800 mb-2">🥉 브론즈~실버</h3>
                <p className="text-sm text-bronze-700">기본 장비 세트 + 체력 포션</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-lg">
                <h3 className="font-bold text-yellow-800 mb-2">🥇 골드~플래티넘</h3>
                <p className="text-sm text-yellow-700">강화된 무기 + 마나 포션 + 경험치 부스터</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-200 p-4 rounded-lg">
                <h3 className="font-bold text-purple-800 mb-2">💎 다이아몬드+</h3>
                <p className="text-sm text-purple-700">전설 장비 + 희귀 아이템 + 특별 스킬</p>
              </div>
            </div>
          </div>

          {/* 준비 중 안내 */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">🚧 게임 준비 중</h2>
            <p className="text-lg mb-6">
              현재 미니게임을 개발 중입니다. 곧 흥미진진한 게임을 만나보실 수 있어요!
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                알림 신청하기
              </button>
              <a href="/" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                메인으로 돌아가기
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}