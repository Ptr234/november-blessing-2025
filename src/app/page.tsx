import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 py-5 flex justify-between items-center">
        <div className="w-10 h-10 border-2 border-white flex items-center justify-center text-white font-medium text-xl">
          C
        </div>
        <nav className="hidden md:flex gap-6 lg:gap-10">
          <a href="/" className="text-white text-xs tracking-wider uppercase font-normal hover:opacity-70 transition-opacity">HOME</a>
          <a href="/events" className="text-white text-xs tracking-wider uppercase font-normal hover:opacity-70 transition-opacity">EVENTS</a>
        </nav>
        <div className="flex gap-4 md:gap-6 items-center">
          <span className="hidden sm:inline text-white text-lg cursor-pointer hover:opacity-70 transition-opacity">🔔</span>
          <span className="hidden sm:inline text-white text-lg cursor-pointer hover:opacity-70 transition-opacity">🔍</span>
          <div className="flex flex-col gap-1 cursor-pointer md:hidden">
            <span className="w-6 h-0.5 bg-white transition-all"></span>
            <span className="w-6 h-0.5 bg-white transition-all"></span>
            <span className="w-6 h-0.5 bg-white transition-all"></span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-r from-yellow-600 to-orange-500 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/november-blessing-main.jpg"
            alt="November Blessing Conference 2025"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30"></div>
        </div>
        <div className="text-center text-white z-10">
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 md:py-24 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="text-center mb-8 md:mb-16">
          <div className="italic text-yellow-600 text-base md:text-lg mb-4">November Blessing Conference</div>
          <h2 className="text-2xl md:text-4xl font-normal tracking-wider uppercase text-gray-800 mb-6 relative px-4 md:px-16 inline-block">
            <span className="hidden lg:block absolute left-0 top-1/2 w-36 h-px bg-gray-300 transform -translate-y-1/2 -translate-x-44"></span>
            CURRENTLY ON VIEW
            <span className="hidden lg:block absolute right-0 top-1/2 w-36 h-px bg-gray-300 transform -translate-y-1/2 translate-x-44"></span>
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto px-4">
            Join us for seven days of powerful ministry, worship, and fellowship at the November Blessing Conference 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {/* Event Card 1 */}
          <div className="bg-white overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
            <div className="h-72 bg-gradient-to-br from-amber-500 to-orange-600 relative">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-medium">
                Main Sessions
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="italic text-yellow-600 text-sm mb-3">Nov 17 - Nov 21 2025</div>
              <h3 className="text-lg md:text-xl font-medium tracking-wider uppercase text-gray-800 mb-5 leading-tight">
                MTN ARENA KAMPALA
              </h3>
              <a href="#" className="text-gray-800 text-xs tracking-wider uppercase border-b border-gray-800 pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors">
                View more
              </a>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
            <div className="h-72 bg-gradient-to-br from-blue-500 to-indigo-600 relative">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-medium">
                Leadership
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="italic text-yellow-600 text-sm mb-3">Nov 19 - Nov 21 2025</div>
              <h3 className="text-lg md:text-xl font-medium tracking-wider uppercase text-gray-800 mb-5 leading-tight">
                CHURCH LEADERS SESSION
              </h3>
              <a href="#" className="text-gray-800 text-xs tracking-wider uppercase border-b border-gray-800 pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors">
                View more
              </a>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
            <div className="h-72 bg-gradient-to-br from-green-500 to-teal-600 relative">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-medium">
                Fellowship
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="italic text-yellow-600 text-sm mb-3">Nov 22 - Nov 23 2025</div>
              <h3 className="text-lg md:text-xl font-medium tracking-wider uppercase text-gray-800 mb-5 leading-tight">
                MUKONO CHURCH HQ
              </h3>
              <a href="#" className="text-gray-800 text-xs tracking-wider uppercase border-b border-gray-800 pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors">
                View more
              </a>
            </div>
          </div>

          {/* Event Card 4 */}
          <div className="bg-white overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
            <div className="h-72 bg-gradient-to-br from-purple-500 to-pink-600 relative">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-medium">
                Theme
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="italic text-yellow-600 text-sm mb-3">Isaiah 37:31</div>
              <h3 className="text-lg md:text-xl font-medium tracking-wider uppercase text-gray-800 mb-5 leading-tight">
                ROOTED, FERVENT & RADIANT
              </h3>
              <a href="#" className="text-gray-800 text-xs tracking-wider uppercase border-b border-gray-800 pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors">
                View more
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="px-12 py-4 bg-transparent border border-gray-800 text-gray-800 text-xs tracking-wider uppercase hover:bg-gray-800 hover:text-white transition-colors">
            Load more
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-16 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 mb-6 md:mb-10">
          <div>
            <div className="w-12 h-12 border-2 border-white flex items-center justify-center text-2xl mb-6">
              C
            </div>
            <div className="text-sm leading-relaxed text-gray-300 mb-3">
              Christ&apos;s Heart Church Mukono & Kampala, Uganda
            </div>
            <div className="text-sm text-gray-300 mb-5">
              +256 39 2177825
            </div>
            <div className="text-xs text-gray-500">
              Copyright © Christ&apos;s Heart Ministries 2025
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">Conference info</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 text-sm hover:text-yellow-600 transition-colors">Events & Shows</a></li>
              <li><a href="#" className="text-gray-300 text-sm hover:text-yellow-600 transition-colors">Speakers</a></li>
              <li><a href="#" className="text-gray-300 text-sm hover:text-yellow-600 transition-colors">News & Updates</a></li>
              <li><a href="#" className="text-gray-300 text-sm hover:text-yellow-600 transition-colors">Register</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">Schedule</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 text-sm">Mon 17th — Fri 21st: 5pm — 8:30pm</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Leadership: 10am — 1pm</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Sat 22nd — Sun 23rd: TBA</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">Follow us</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 text-sm hover:text-yellow-600 transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-300 text-sm hover:text-yellow-600 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-300 text-sm hover:text-yellow-600 transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-11 h-11 bg-gray-800 text-white flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity hover:bg-yellow-600">
        ↑
      </div>
    </div>
  )
}