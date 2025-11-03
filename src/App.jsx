import React, { useState } from 'react';
import { Rocket, Calendar, Newspaper, Users, Instagram, Twitter, Linkedin } from 'lucide-react';
import HeroCover from './components/HeroCover.jsx';
import HomeSection from './components/HomeSection.jsx';
import EventsSection from './components/EventsSection.jsx';
import NewsSection from './components/NewsSection.jsx';

function ArchivesInline() {
  const members = [
    {
      name: 'Aarav Sharma',
      role: 'President (2024-25)',
      tagline: 'Charting constellations, leading horizons',
      img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop',
      socials: { instagram: '#', twitter: '#', linkedin: '#' },
    },
    {
      name: 'Meera Kapoor',
      role: 'Research Lead (2024-25)',
      tagline: 'Black holes, bright ideas',
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
      socials: { instagram: '#', twitter: '#', linkedin: '#' },
    },
    {
      name: 'Rohan Iyer',
      role: 'Events Head (2024-25)',
      tagline: 'From star parties to supernovas',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
      socials: { instagram: '#', twitter: '#', linkedin: '#' },
    },
    {
      name: 'Sara Dutta',
      role: 'Outreach (2023-24)',
      tagline: 'Sharing the universe, one story at a time',
      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop',
      socials: { instagram: '#', twitter: '#', linkedin: '#' },
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="bg-gradient-to-r from-purple-200 via-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">Archives</h2>
      <p className="mt-2 text-slate-300">A living record of our teams through the years.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <div key={m.name} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <p className="text-white font-semibold">{m.name}</p>
              <p className="text-sm text-purple-200/80">{m.role}</p>
              <p className="mt-2 text-xs text-slate-300">{m.tagline}</p>
              <div className="mt-4 flex items-center gap-3 text-purple-200">
                <a href={m.socials.instagram} aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
                <a href={m.socials.twitter} aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
                <a href={m.socials.linkedin} aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [tab, setTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Rocket },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'news', label: 'News', icon: Newspaper },
    { id: 'archives', label: 'Archives', icon: Users },
  ];

  const handleContact = () => {
    // Replace with your Google Form/Airtable or email link
    window.open('https://forms.gle', '_blank');
  };
  const handleSocials = () => {
    // Replace with your club social link
    window.open('https://instagram.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <div className="flex items-center gap-3 text-white">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-600"></div>
            <div>
              <p className="text-sm leading-tight text-purple-200/90">Astronomy Club</p>
              <p className="text-base font-semibold leading-tight">Bennett University</p>
            </div>
          </div>
          <nav className="hidden gap-2 rounded-full border border-white/10 bg-white/5 p-1 sm:flex">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                  tab === id ? 'bg-white text-slate-900' : 'text-purple-100 hover:bg-white/10'
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero only on Home */}
      {tab === 'home' && (
        <HeroCover onContactClick={handleContact} onSocialClick={handleSocials} />
      )}

      {/* Mobile nav */}
      <div className="sm:hidden sticky top-14 z-30 mx-6 mt-3 rounded-xl border border-white/10 bg-white/5 p-2">
        <div className="grid grid-cols-4 gap-2">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`rounded-lg px-2 py-1.5 text-xs ${tab === id ? 'bg-white text-slate-900' : 'text-purple-100'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Routed content */}
      {tab === 'home' && (
        <HomeSection onSeeNews={() => setTab('news')} onSeeArchives={() => setTab('archives')} />
      )}
      {tab === 'events' && <EventsSection />}
      {tab === 'news' && <NewsSection />}
      {tab === 'archives' && <ArchivesInline />}

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-purple-200/80">
          © {new Date().getFullYear()} Astronomy Club, Bennett University — StellarVault
        </div>
      </footer>
    </div>
  );
}
