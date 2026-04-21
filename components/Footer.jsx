import Image from "next/image";
import logo from './assets/BigLOGO.svg'

// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bkp-footer">
      <div className="d-flex align-items-center gap-2">
        <Image src={logo} alt="footer-logo"/>
      </div>

      <div className="bkp-footer__est">
        
          Est. 1994
        
      </div>

      <div className="bkp-footer__copy">
        <a href="https://techxerro.com/ " target="_blank" rel="noopener noreferrer">Powered by Techxerro</a><br/>
        © 2025 Big Kahuna&apos;s Pizza. All rights reserved.
      </div>
    </footer>
  );
}
