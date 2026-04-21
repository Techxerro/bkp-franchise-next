// components/Navbar.jsx
import Link from 'next/link';
import logo from './assets/BigLOGO.svg';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bkp-nav">
      <div className="d-flex align-items-center gap-2">
        <Image src={logo} className="logo-mark"alt="" />
      </div>
      <div className="d-flex align-items-center gap-5">
        <a href="#why"     className="bkp-nav__link">Why</a>
        <a href="#numbers" className="bkp-nav__link">Numbers</a>
        <a href="#formats" className="bkp-nav__link">Formats</a>
        <a href="#apply"   className="bkp-nav__btn">Request Brochure</a>
      </div>
    </nav>
  );
}
