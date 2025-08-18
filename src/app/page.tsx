export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 고정 헤더 */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">모아링</div>
          <a href="/auth" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            로그인
          </a>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="pt-16">
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
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              지금 시작하기
            </button>
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
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                무료로 시작하기
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                서비스 둘러보기
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
