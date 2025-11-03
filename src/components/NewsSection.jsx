import React, { useEffect } from 'react';

export default function NewsSection() {
  useEffect(() => {
    // Load Twitter widgets script once
    if (!document.querySelector('script#twitter-wjs')) {
      const s = document.createElement('script');
      s.id = 'twitter-wjs';
      s.src = 'https://platform.twitter.com/widgets.js';
      s.async = true;
      document.body.appendChild(s);
    } else if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="bg-gradient-to-r from-purple-200 via-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">Space News</h2>
      <p className="mt-2 text-slate-300">Curated from official and reliable sources: NASA, ISRO, ESA, and more.</p>

      {/* Video briefs from official channels */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="aspect-video">
            <iframe className="h-full w-full" src="https://www.youtube.com/embed/21X5lGlDOfg" title="NASA Live" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
          <div className="p-4 text-white/90">
            <p className="text-sm font-medium">NASA Live</p>
            <a href="https://www.nasa.gov/" target="_blank" rel="noreferrer" className="text-xs text-purple-300 hover:text-purple-200">nasa.gov</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="aspect-video">
            <iframe className="h-full w-full" src="https://www.youtube.com/embed/2-6P2oQwQTo" title="ISRO Updates" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
          <div className="p-4 text-white/90">
            <p className="text-sm font-medium">ISRO Highlights</p>
            <a href="https://www.isro.gov.in/" target="_blank" rel="noreferrer" className="text-xs text-purple-300 hover:text-purple-200">isro.gov.in</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="aspect-video">
            <iframe className="h-full w-full" src="https://www.youtube.com/embed/y3niFzo5VLI" title="ESA Highlights" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
          <div className="p-4 text-white/90">
            <p className="text-sm font-medium">ESA Highlights</p>
            <a href="https://www.esa.int/" target="_blank" rel="noreferrer" className="text-xs text-purple-300 hover:text-purple-200">esa.int</a>
          </div>
        </div>
      </div>

      {/* Embedded posts (X/Twitter) */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
          <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Keep looking up. 🚀✨ <a href="https://twitter.com/NASA/status/1765413700000000000?ref_src=twsrc%5Etfw">Link</a></p>&mdash; NASA (@NASA) <a href="https://twitter.com/NASA/status/1765413700000000000?ref_src=twsrc%5Etfw">March 6, 2024</a></blockquote>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
          <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Mission update from ISRO 🛰️ <a href="https://twitter.com/isro/status/1765413800000000000?ref_src=twsrc%5Etfw">Link</a></p>&mdash; ISRO (@isro) <a href="https://twitter.com/isro/status/1765413800000000000?ref_src=twsrc%5Etfw">March 6, 2024</a></blockquote>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20" href="https://www.nasa.gov/news/" target="_blank" rel="noreferrer">NASA Newsroom</a>
        <a className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20" href="https://www.isro.gov.in/Updates.html" target="_blank" rel="noreferrer">ISRO Updates</a>
        <a className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20" href="https://www.esa.int/Newsroom" target="_blank" rel="noreferrer">ESA Newsroom</a>
        <a className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20" href="https://roscosmos.ru/" target="_blank" rel="noreferrer">ROSCOSMOS</a>
      </div>
    </section>
  );
}
