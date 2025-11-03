import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover({ onContactClick, onSocialClick }) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-b-3xl">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft galaxy glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <p className="mb-3 text-sm uppercase tracking-widest text-purple-200/90">Astronomy Club</p>
          <h1 className="font-extrabold leading-tight">
            <span className="block text-3xl sm:text-4xl md:text-5xl">Bennett University</span>
            <span className="mt-2 block bg-gradient-to-r from-purple-200 via-white to-purple-300 bg-clip-text text-4xl sm:text-5xl md:text-6xl text-transparent">
              StellarVault
            </span>
          </h1>
          <p className="mt-4 text-lg italic text-purple-100/90">“By Starlight, We Unfurl the Sky”</p>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-purple-100/90">
            Guided by our motto, we are Bennett University’s Astronomy Club—where curiosity meets the cosmos. From stargazing nights and space-themed games to deep dives into black holes and nebulae, every event becomes discovery. Join us and let starlight reveal new worlds.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onContactClick}
              className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-purple-500/20 transition hover:bg-white"
            >
              Collab / Contact
            </button>
            <button
              onClick={onSocialClick}
              className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Follow Our Socials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
