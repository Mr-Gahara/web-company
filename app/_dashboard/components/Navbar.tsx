export default function Navbar() {
  return (
    <nav>
      <a href="" className="logo">
        <div className="hex"><span>T</span></div>
        TACHYON<span style={{ color: 'var(--blue)' }}>TECH</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">Tentang</a></li>
        <li><a href="#sv">Layanan</a></li>
        <li><a href="#bn">Manfaat</a></li>
        <li><a href="#ap">Pendekatan</a></li>
        <li><a href="#ct" className="nav-cta">Hubungi Kami</a></li>
      </ul>
    </nav>
  );
}