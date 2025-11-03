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

export default function EventsSection() {
  const upcoming = {
    title: 'Perseid Meteor Shower Night',
    date: '2025-08-12T19:30:00',
    description: 'Guided stargazing with telescopes, astrophotography booth, and meteor tracking session.',
    cover: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1600&auto=format&fit=crop',
  };
  const pastGallery = [
    'https://images.unsplash.com/photo-1454789548928-9edf093fd1b0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1473929735477-5e0c25c7c260?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="bg-gradient-to-r from-purple-200 via-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">Events</h2>

      {/* Upcoming */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="grid md:grid-cols-2">
          <div className="relative">
            <img src={upcoming.cover} alt={upcoming.title} className="h-full w-full object-cover" />
            <div className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white">Upcoming</div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">{upcoming.title}</h3>
            <p className="mt-1 text-sm text-purple-200/80">{new Date(upcoming.date).toLocaleString()}</p>
            <p className="mt-3 text-slate-300">{upcoming.description}</p>
            <div className="mt-5"><Countdown target={upcoming.date} /></div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-white">Register Interest</a>
              <a href="#" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20">Add to Calendar</a>
            </div>
          </div>
        </div>
      </div>

      {/* Past gallery */}
      <div className="mt-10">
        <h4 className="text-white/90 font-semibold">Highlights Gallery</h4>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {pastGallery.map((src, i) => (
            <div key={src} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="aspect-video w-full overflow-hidden">
                <img src={src} alt={`Event ${i + 1}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
