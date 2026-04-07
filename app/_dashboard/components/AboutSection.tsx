export default function AboutSection() {
  return (
    <div className="sec about" id="about">
      <div className="about-in">
        <div>
          <p className="slabel">Tentang Kami</p>
          <h2 className="stitle rv">Teknologi Lokal.<br />Solusi Nasional.</h2>
          <p className="sdesc rv d1">
            Software house berbasis di Pontianak, Kalimantan Barat, dibangun oleh talenta lokal yang memahami dinamika bisnis dan birokrasi daerah secara mendalam.
          </p>
          <div style={{ marginTop: '1.2rem' }} className="rv d2">
            <div className="prow"><span className="pk">Nama</span><span className="pv">Tachyon Technologies</span></div>
            <div className="prow"><span className="pk">Tahun Berdiri</span><span className="pv">2026</span></div>
            <div className="prow" style={{ border: 'none' }}>
              <span className="pk">Bidang Usaha</span>
              <span className="pv">IT &amp; Pengembangan Perangkat Lunak</span>
            </div>
          </div>
        </div>
        <div className="rv d2">
          <div className="vmtitle">// Visi</div>
          <p className="vmtext">
            Menjadi mitra teknologi digital terpercaya bagi institusi publik dan swasta dalam mendukung kedaulatan digital nasional.
          </p>
          <div className="vmtitle">// Misi</div>
          <ul className="mlist">
            <li>Menghadirkan solusi IT yang patuh regulasi dan tepat sasaran</li>
            <li>Mendukung kedaulatan data nasional melalui infrastruktur lokal</li>
            <li>Memberdayakan talenta digital putra daerah</li>
          </ul>
          <div className="floats rv d3">
            <div className="fc" style={{ borderLeft: '3px solid var(--blue)' }}>
              <div className="fcn">2026</div>
              <div className="fcl">Tahun Berdiri</div>
            </div>
            <div className="fc blk-card">
              <div className="fcn">ISO 27001</div>
              <div className="fcl">
                <p className="text-slate-200">Standar Keamanan Informasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}