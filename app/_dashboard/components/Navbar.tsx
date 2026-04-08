export default function Navbar() {
  return (
    <nav>
      <a href="" className="logo">
        <div className="hex"><span>T</span></div>
        TACHYON<span style={{ color: 'var(--blue)' }}>TECH</span>
      </a>
      <ul className="nav-links">
        <li><a href="#tentang">Tentang</a></li>
        <li><a href="#layanan">Layanan</a></li>
        <li><a href="#benefit">Manfaat</a></li>
        <li><a href="#pendekatan">Pendekatan</a></li>
        <li><a href="#kontak" className="nav-cta">Hubungi Kami</a></li>
      </ul>
    </nav>
  );
}