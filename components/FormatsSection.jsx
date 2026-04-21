import { useEffect, useRef } from "react";
import img1 from './assets/format1.webp';
import img2 from './assets/format2.webp';
import img3 from './assets/format3.webp';
import img4 from './assets/format4.webp';
import Image from "next/image";

const formats = [
  {
    num: "01",
    label: "Format One",
    name: "Mall Location",
    size: "500–750 sq ft",
    investment: "$180K–$200K",
    accentClass: "mall",
    image: img3,
    imageAlt: "Mall Location",
    features: [
      "Captive foot traffic — customers come to you",
      "Full double-deck oven + delivery capability",
      "Dine-in and takeaway in a compact footprint",
      "Strong landlord appeal as a foot-traffic anchor",
      "Proven QSR layout — efficient from day one",
    ],
    color:'red',
    bestFor:
      "First-time franchise investors wanting a proven, high-footfall setup with lower real estate risk.",
  },
  {
    num: "02",
    label: "Format Two",
    name: "High Street",
    size: "120–200 m²",
    investment: "$225K–$250K",
    accentClass: "street",
    image: img2,
    imageAlt: "High Street Restaurant",
    features: [
      "Full Hawaiian ambience — the complete BKP experience",
      "Larger dine-in capacity for families and groups",
      "Maximum brand visibility and community presence",
      "Strong for university districts and urban centers",
      "Delivery + dine-in + events revenue streams",
    ],
    color:'green',
    bestFor:
      "Investors focused on building a flagship location with strong brand presence and multi-revenue-stream potential.",
  },
  {
    num: "03",
    label: "Format Three",
    name: "Container",
    size: "Mobile / Beachside",
    investment: "$150K–$175K",
    accentClass: "container",
    image: img1,
    imageAlt: "Container Store",
    features: [
      "Lowest fixed entry point in the BKP system",
      "Flexible — events, beach towns, seasonal spots",
      "Move locations if demand shifts",
      "Ideal for testing a new market before committing",
      "Full BKP menu and brand experience",
    ],
    color:'yellow',
    bestFor:
      "Investors who want the lowest capital entry point, or want to prove a market before investing in a fixed location.",
  },
  {
    num: "04",
    label: "Format Four",
    name: "Food Truck",
    size: "Fully Mobile",
    investment: "$120K–$150K",
    accentClass: "truck",
    image: img4,
    imageAlt: "Food Truck",
    features: [
      "Most flexible format — go where the crowd is",
      "Festivals, markets, sports events, private catering",
      "Fastest route to market and brand building",
      "No lease risk — you own the asset outright",
      "Full BKP kitchen setup and branded wrap",
    ],
    color:'blue',
    bestFor:
      "Entrepreneurs who want maximum mobility and the ability to build a BKP following city-wide before anchoring in a fixed site.",
  },
];

export default function BKPFormats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeEls = sectionRef.current?.querySelectorAll(".fade-up");
    fadeEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="bkp-formats-root" id="formats" ref={sectionRef}>
        <div className="fade-up">
          <span className="section-label">Four Ways to Enter</span>
          <h2 className="section-h">
            Pick the format that fits &nbsp;
            <br className="d-sm-flex d-none"/>
             your market and capital.
          </h2>
        </div>

        <div className="formats-grid fade-up delay-1">
          {formats.map((f) => (
            <div className="format-card" key={f.num}>
              <div className="format-img-wrap">
                <Image src={f.image} alt={f.imageAlt} />
              </div>

              <div className={`format-header-overlay ${f.accentClass}`}>
                <div className="format-header-num">{f.num}</div>
                <div className="format-type">{f.label}</div>
                <div className="format-name">{f.name}</div>
                <div className="format-size">{f.size}</div>
              </div>

              <div className="format-body">
                <div className="format-invest">{f.investment}</div>
                <div className="format-invest-label">Total Investment</div>

                <ul className="format-feature-list">
                  {f.features.map((feat, i) => (
                    <li key={i}>
                      <div className={`format-check format-check--${f.color}`}>
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.5L3.75 7.25L10 1" stroke="#4FA834" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="format-best">
                  <strong>Best for:</strong> {f.bestFor}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}