import Image from 'next/image'

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-black sticky top-0 z-50">
        <div className="flex justify-between items-center h-20 px-12">
          <div className="text-white font-serif text-3xl font-normal italic">
            Christ&apos;s Heart
            <span className="block text-xs tracking-wider uppercase font-normal font-sans font-light">
              • MINISTRIES •
            </span>
          </div>
          <nav className="flex gap-9 items-center">
            <a href="/" className="text-white text-sm font-normal hover:text-amber-400 transition-colors">
              HOME
            </a>
            <a href="/events" className="text-white text-sm font-normal hover:text-amber-400 transition-colors">
              EVENTS
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="h-[150vh] bg-gradient-to-br from-orange-800 via-red-700 to-amber-600 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/november-blessing-speakers.jpg"
            alt="November Blessing Conference Speakers"
            fill
            className="object-cover object-top opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
        </div>
        <div className="text-center text-white z-10">
          <div className="text-sm mb-4 text-yellow-200">• The November Blessing Conference Events •</div>
          <h1 className="font-serif text-6xl lg:text-7xl font-normal tracking-wider">
            November 17th – 23rd
          </h1>
        </div>

        {/* Event Modal */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white w-full max-w-4xl flex rounded-none overflow-hidden shadow-2xl">
          <div className="flex-1 p-10">
            <div className="text-sm font-bold tracking-wider uppercase text-gray-700 mb-4">CONFERENCE</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900">
              November Blessing Conference 2025
            </h2>
            <div className="text-xl font-bold text-gray-800 mb-6">
              Rooted, Fervent & Radiant – 14th Edition
            </div>
            <div className="flex gap-8 mb-8 text-lg font-semibold">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📅</span>
                <span className="font-bold text-gray-800">Nov 17-23</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🕐</span>
                <span className="font-bold text-gray-800">Multiple Times</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-3 border-2 border-gray-700 text-gray-900 font-bold hover:border-amber-700 hover:text-amber-700 hover:bg-amber-50 transition-colors">
                View Details
              </button>
            </div>
          </div>
          <div className="w-80 bg-gradient-to-br from-purple-800 to-purple-600 relative">
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
              <button className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                ‹
              </button>
              <button className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto mt-20 px-12">
        <h2 className="font-serif text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
          Featured Conference Events
        </h2>
        <p className="text-lg font-semibold text-gray-800 mb-16 max-w-3xl leading-relaxed">
          Keep coming back to our website to stay informed about the conference activities and reserve your preferred seats in advance.
        </p>

        {/* Event List */}
        <div className="flex flex-col gap-8 mb-12">
          {/* Main Sessions Event */}
          <div className="flex bg-white shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1 transition-all">
            <div className="w-32 bg-gray-50 flex flex-col items-center justify-center p-5 border-r border-gray-100">
              <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">NOV</div>
              <div className="font-serif text-6xl font-bold leading-none text-gray-900">17</div>
              <div className="bg-black text-white px-4 py-2 text-sm font-bold mt-4">
                5:00 PM
              </div>
            </div>
            <div className="flex-1 p-9 flex flex-col justify-center">
              <div className="text-sm font-bold tracking-wider uppercase text-gray-700 mb-3">MAIN EVENT</div>
              <h3 className="font-serif text-4xl font-bold mb-3 leading-tight text-gray-900">
                Opening Night - Rooted in Faith
              </h3>
              <p className="text-base font-semibold text-gray-700 mb-5">
                MTN Arena, Kampala - Powerful worship and apostolic teaching
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 border-2 border-gray-700 text-gray-900 font-bold hover:border-amber-700 hover:text-amber-700 hover:bg-amber-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            <div className="w-96 bg-gradient-to-br from-amber-500 to-orange-600 relative">
              <button className="absolute top-5 right-5 w-11 h-11 bg-white bg-opacity-95 rounded-full flex items-center justify-center text-lg hover:bg-opacity-100 transition-all">
                ♡
              </button>
            </div>
          </div>

          {/* Church Leaders Event */}
          <div className="flex bg-white shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1 transition-all">
            <div className="w-32 bg-gray-50 flex flex-col items-center justify-center p-5 border-r border-gray-100">
              <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">NOV</div>
              <div className="font-serif text-6xl font-bold leading-none text-gray-900">19</div>
              <div className="bg-black text-white px-4 py-2 text-sm font-bold mt-4">
                10:00 AM
              </div>
            </div>
            <div className="flex-1 p-9 flex flex-col justify-center">
              <div className="text-sm font-bold tracking-wider uppercase text-gray-700 mb-3">LEADERSHIP</div>
              <h3 className="font-serif text-4xl font-bold mb-3 leading-tight text-gray-900">
                Church Leaders Conference
              </h3>
              <p className="text-base font-semibold text-gray-700 mb-5">
                Equipping leaders for greater Kingdom impact in their ministries
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 border-2 border-gray-700 text-gray-900 font-bold hover:border-amber-700 hover:text-amber-700 hover:bg-amber-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            <div className="w-96 bg-gradient-to-br from-blue-600 to-indigo-700 relative">
              <button className="absolute top-5 right-5 w-11 h-11 bg-white bg-opacity-95 rounded-full flex items-center justify-center text-lg hover:bg-opacity-100 transition-all">
                ♡
              </button>
            </div>
          </div>

          {/* Mid-Conference Event */}
          <div className="flex bg-white shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1 transition-all">
            <div className="w-32 bg-gray-50 flex flex-col items-center justify-center p-5 border-r border-gray-100">
              <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">NOV</div>
              <div className="font-serif text-6xl font-bold leading-none text-gray-900">20</div>
              <div className="bg-black text-white px-4 py-2 text-sm font-bold mt-4">
                5:00 PM
              </div>
            </div>
            <div className="flex-1 p-9 flex flex-col justify-center">
              <div className="text-sm font-bold tracking-wider uppercase text-gray-700 mb-3">WORSHIP</div>
              <h3 className="font-serif text-4xl font-bold mb-3 leading-tight text-gray-900">
                Fervent Worship Night
              </h3>
              <p className="text-base font-semibold text-gray-700 mb-5">
                MTN Arena, Kampala - Powerful worship and prophetic ministry
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 border-2 border-gray-700 text-gray-900 font-bold hover:border-amber-700 hover:text-amber-700 hover:bg-amber-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            <div className="w-96 bg-gradient-to-br from-purple-600 to-pink-600 relative">
              <button className="absolute top-5 right-5 w-11 h-11 bg-white bg-opacity-95 rounded-full flex items-center justify-center text-lg hover:bg-opacity-100 transition-all">
                ♡
              </button>
            </div>
          </div>

          {/* Mukono Sessions Event */}
          <div className="flex bg-white shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1 transition-all">
            <div className="w-32 bg-gray-50 flex flex-col items-center justify-center p-5 border-r border-gray-100">
              <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">NOV</div>
              <div className="font-serif text-6xl font-bold leading-none text-gray-900">22</div>
              <div className="bg-black text-white px-4 py-2 text-sm font-bold mt-4">
                9:00 AM
              </div>
            </div>
            <div className="flex-1 p-9 flex flex-col justify-center">
              <div className="text-sm font-bold tracking-wider uppercase text-gray-700 mb-3">FELLOWSHIP</div>
              <h3 className="font-serif text-4xl font-bold mb-3 leading-tight text-gray-900">
                Radiant Fellowship - Mukono
              </h3>
              <p className="text-base font-semibold text-gray-700 mb-5">
                Christ&apos;s Heart Church HQ - Intimate fellowship and ministry
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 border-2 border-gray-700 text-gray-900 font-bold hover:border-amber-700 hover:text-amber-700 hover:bg-amber-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            <div className="w-96 bg-gradient-to-br from-green-600 to-teal-600 relative">
              <button className="absolute top-5 right-5 w-11 h-11 bg-white bg-opacity-95 rounded-full flex items-center justify-center text-lg hover:bg-opacity-100 transition-all">
                ♡
              </button>
            </div>
          </div>

          {/* Closing Event */}
          <div className="flex bg-white shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1 transition-all">
            <div className="w-32 bg-gray-50 flex flex-col items-center justify-center p-5 border-r border-gray-100">
              <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">NOV</div>
              <div className="font-serif text-6xl font-bold leading-none text-gray-900">23</div>
              <div className="bg-black text-white px-4 py-2 text-sm font-bold mt-4">
                6:00 PM
              </div>
            </div>
            <div className="flex-1 p-9 flex flex-col justify-center">
              <div className="text-sm font-bold tracking-wider uppercase text-gray-700 mb-3">CLOSING</div>
              <h3 className="font-serif text-4xl font-bold mb-3 leading-tight text-gray-900">
                Closing Celebration - Radiant Send-Off
              </h3>
              <p className="text-base font-semibold text-gray-700 mb-5">
                Christ&apos;s Heart Church HQ - Final commissioning and blessing
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 border-2 border-gray-700 text-gray-900 font-bold hover:border-amber-700 hover:text-amber-700 hover:bg-amber-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            <div className="w-96 bg-gradient-to-br from-yellow-500 to-amber-600 relative">
              <button className="absolute top-5 right-5 w-11 h-11 bg-white bg-opacity-95 rounded-full flex items-center justify-center text-lg hover:bg-opacity-100 transition-all">
                ♡
              </button>
            </div>
          </div>
        </div>

        <div className="text-center my-12">
          <button className="px-12 py-4 border-2 border-gray-900 text-gray-900 text-lg font-bold tracking-wide hover:bg-gray-900 hover:text-white transition-all">
            View All Events
          </button>
        </div>

        {/* Event Calendar Section */}
        <div className="bg-white p-16 mt-24">
          <h2 className="font-serif text-4xl font-medium mb-4">
            Event Calendar
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            View a complete calendar of all the conference events for the entire week.
          </p>
          <p className="text-sm text-gray-600">
            Please check our calendar frequently as we update it with the latest information and additional sessions.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-12 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-10">
            <div>
              <div className="font-serif text-2xl italic mb-5">
                Christ&apos;s Heart
                <span className="block text-xs tracking-wider uppercase font-normal font-sans font-light">
                  • MINISTRIES •
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mt-5">
                Experience transformative spiritual conferences and ministry events. Join us for life-changing encounters with God.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">Events</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">Tickets</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">Contact</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">info@christsheart.org</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">+256 39 2177825</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">Mukono & Kampala, Uganda</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">Follow Us</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-700 text-gray-500 text-xs">
            © 2025 Christ&apos;s Heart Ministries International. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}