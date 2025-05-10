import React, { useEffect, useRef } from 'react';

const cards = [
  {
    type: 'Website Design',
    name: 'Maxer',
    img: 'https://framerusercontent.com/images/l8xt6W0CZGtv9oD7BXHI9lRn6w.png',
    mode: 'web',
  },
  {
    type: 'App Design',
    name: 'Zento',
    img: 'https://framerusercontent.com/images/SoevjsifIL4aNfcMJPVQvgveFI.png',
    mode: 'app',
  },
  {
    type: 'Website Design',
    name: 'Tasklytic',
    img: 'https://framerusercontent.com/images/MVzKIjp0sB9b5M4TqQ30fR84H4I.png',
    mode: 'web',
  },
  {
    type: 'App Design',
    name: 'Waitlista',
    img: 'https://framerusercontent.com/images/1rCGk9rGL7oN5nt4mhg3eTVrGnU.png',
    mode: 'app',
  },
];

export default function App() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scroll = 0;
    let raf: number;
    const speed = 0.7;

    const loop = () => {
      scroll += speed;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        scroll = 0;
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft = scroll;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const displayCards = [...cards, ...cards]; // kayma devamlılığı için kopya ama tek satır olacak

  return (
    <section className="w-full min-h-screen bg-[#0e1333] flex flex-col items-center justify-center py-24 px-2">
      <div className="relative w-full max-w-6xl overflow-hidden">
        <div className="absolute z-10 left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0e1333ee] to-transparent pointer-events-none" />
        <div className="absolute z-10 right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0e1333ee] to-transparent pointer-events-none" />

        <div
          ref={sliderRef}
          className="flex gap-10 py-8 items-end select-none whitespace-nowrap"
          style={{ scrollbarWidth: 'none', overflowX: 'scroll' }}
        >
          {displayCards.map((card, idx) => (
            <div
              key={card.name + idx}
              className="relative flex-shrink-0 flex flex-col items-center"
              style={{
                minWidth: card.mode === 'web' ? 360 : 160,
                maxWidth: card.mode === 'web' ? 400 : 180,
              }}
            >
              {card.mode === 'web' ? (
                <div className="bg-[#181b28] rounded-2xl shadow-lg border border-[#2e3751]/70 overflow-hidden transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 group w-full">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="w-full h-[230px] md:h-[270px] object-cover object-top"
                    draggable="false"
                    loading="lazy"
                    style={{ background: '#181b28' }}
                  />
                  <div className="w-full text-center py-4 px-1 flex flex-col">
                    <span className="text-sm font-medium text-[#cbcfe2bb] tracking-wide">
                      {card.type} <span className="font-normal">– {card.name}</span>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="relative w-[100px] h-[200px] bg-[#262047] rounded-[32px] border border-[#7e3cdf]/70 flex items-center justify-center shadow-lg overflow-hidden transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 group">
                    <img
                      src={card.img}
                      alt={card.name}
                      className="w-[87%] h-[84%] object-cover object-top rounded-xl drop-shadow-[0_4px_24px_rgba(161,85,255,0.13)]"
                      draggable="false"
                      loading="lazy"
                      style={{ background: '#232040' }}
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 top-2 w-12 h-[7px] bg-[#191924] rounded-full opacity-80" />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-7 h-[7px] bg-[#1e1941] rounded-full opacity-70" />
                  </div>
                  <div className="w-full text-center pt-3 pb-1 px-1 flex flex-col">
                    <span className="text-sm font-medium text-[#cbcfe2bb] tracking-wide">
                      {card.type} <span className="font-normal">– {card.name}</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
