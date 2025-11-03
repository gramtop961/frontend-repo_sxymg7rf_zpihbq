import React, { useEffect, useMemo, useState } from 'react';

function Countdown({ target }) {
  const targetTime = useMemo(() => new Date(target).getTime(), [target]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, targetTime - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  return (
    <div className="flex items-center gap-3 text-sm text-purple-200">
      <TimeBox label="Days" value={d} />
      <span className="opacity-50">:</span>
      <TimeBox label="Hrs" value={h} />
      <span className="opacity-50">:</span>
      <TimeBox label="Min" value={m} />
      <span className="opacity-50">:</span>
      <TimeBox label="Sec" value={s} />
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="text-center">
      <div className="rounded-md bg-white/10 px-3 py-2 text-lg font-bold text-white backdrop-blur">
        {String(value).padStart(2, '0')}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-wide text-purple-200/70">{label}</div>
    </div>
  );
}

export default function HomeSection({ onSeeNews, onSeeArchives }) {
  // Calculate next team birthday (example date: 15 Dec)
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthday = new Date(`${currentYear}-12-15T00:00:00`);
  if (birthday.getTime() < today.getTime()) birthday.setFullYear(currentYear + 1);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      {/* Mission */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-purple-500/10">
          <h2 className="bg-gradient-to-r from-purple-200 via-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
            Our Mission: Exploring the Cosmos, One Star at a Time
          </h2>
          <p className="mt-3 text-slate-300">
            We are more than just a club — we are a community of passionate stargazers, aspiring astronomers, and cosmic explorers. From telescope observations to deep space research, we bring the universe closer to you.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {['Stargazing', 'Workshops', 'Research'].map((t) => (
              <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-purple-100">
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Stellarium + Birthday countdown */}
        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3 rounded-2xl overflow-hidden border border-white/10 bg-black">
            <iframe
              title="Stellarium Web"
              src="https://stellarium-web.org/"
              className="h-full min-h-[240px] w-full"
              allowFullScreen
            />
          </div>
          <div className="md:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-b from-purple-900/30 to-slate-900 p-5">
            <h3 className="text-white font-semibold">Next Team Birthday</h3>
            <p className="mt-1 text-sm text-purple-200/80">Celebrating the stars among us</p>
            <div className="mt-4">
              <Countdown target={birthday.toISOString()} />
            </div>
            <p className="mt-3 text-xs text-slate-300">Next on: {birthday.toDateString()}</p>
          </div>
        </div>
      </div>

      {/* Latest News preview */}
      <div className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Latest Space News</h3>
          <button onClick={onSeeNews} className="text-sm text-purple-300 hover:text-purple-200">See more</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'NASA unveils new deep-space findings',
              src: 'https://img.youtube.com/vi/21X5lGlDOfg/hqdefault.jpg',
              link: 'https://www.nasa.gov/',
            },
            {
              title: 'ISRO mission update and milestones',
              src: 'https://images.unsplash.com/photo-1759327806217-22269754802a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJU1JPJTIwbWlzc2lvbiUyMHVwZGF0ZSUyMGFuZHxlbnwwfDB8fHwxNzYyMTc2NjI3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
              link: 'https://www.isro.gov.in/',
            },
            {
              title: 'ESA shares new cosmic imagery',
              src: 'https://images.unsplash.com/photo-1719448779841-4ebfe2f7af40?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFU0ElMjBzaGFyZXMlMjBuZXclMjBjb3NtaWMlMjBpbWFnZXJ5fGVufDB8MHx8fDE3NjIxNzY2Mjd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
              link: 'https://www.esa.int/',
            },
          ].map((n) => (
            <a
              key={n.title}
              href={n.link}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img src={n.src} alt={n.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4 text-white/90 group-hover:text-white">
                <p className="text-sm">{n.title}</p>
                <p className="mt-1 text-xs text-purple-200/70">Source: Official agency site</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Archives spotlight */}
      <div className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Team Archives</h3>
          <button onClick={onSeeArchives} className="text-sm text-purple-300 hover:text-purple-200">View all</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'Aarav Sharma',
              role: 'President',
              tagline: 'Charting constellations, leading horizons',
              img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop',
            },
            {
              name: 'Meera Kapoor',
              role: 'Research Lead',
              tagline: 'Black holes, bright ideas',
              img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
            },
            {
              name: 'Rohan Iyer',
              role: 'Events Head',
              tagline: 'From star parties to supernovas',
              img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
            },
          ].map((m) => (
            <div key={m.name} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="aspect-[16/11] w-full overflow-hidden">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <p className="text-white font-medium">{m.name}</p>
                <p className="text-purple-200/80 text-sm">{m.role}</p>
                <p className="mt-2 text-xs text-slate-300">{m.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
