export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hgrid"></div>
      <div className="hcont">
        <h1>
          Bukan Sekadar<br />
          <span className="acc">Vendor IT.</span><br />
          Mitra Digital Anda.
        </h1>
        <p className="hsub">
          Solusi teknologi yang dibangun khusus untuk instansi pemerintah dan bisnis swasta — bukan template, bukan one-size-fits-all.
        </p>
        <div className="hbtns">
          <a href="#ct" className="bp">
            Mulai Diskusi{' '}
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#sv" className="bo">Lihat Layanan</a>
        </div>
        <div className="hstats">
          <div>
            <div className="stn">2 Jam</div>
            <div className="stl">Respon Kritikal</div>
          </div>
          <div className="sdiv"></div>
          <div>
            <div className="stn">6 Bln</div>
            <div className="stl">Garansi Pasca-Proyek</div>
          </div>
          <div className="sdiv"></div>
          <div>
            <div className="stn">100%</div>
            <div className="stl">Source Code Milik Anda</div>
          </div>
        </div>
      </div>
      <div className="hvis">
        <div className="ring r1"><div className="rdot"></div></div>
        <div className="ring r2"><div className="rdot"></div></div>
        <div className="ring r3"><div className="rdot"></div></div>
        <div className="core"><span className="core-t">TTL</span></div>
      </div>
    </div>
  );
}