export default function ServicesSection() {
  return (
    <div className="sec" id="layanan" style={{ background: 'var(--w)' }}>
      <p className="slabel">Layanan</p>
      <h2 className="stitle rv">Apa yang Kami Kerjakan</h2>
      <p className="sdesc rv d1">
        Dari infrastruktur harian hingga sistem kustom penuh — kami tangani dari hulu ke hilir.
      </p>

      <div className="svgrid">
        {/* IT Support & Infrastruktur */}
        <div className="svc rv d1">
          <div className="sico">
            <svg width="22" height="22" fill="none" stroke="var(--blue)" strokeWidth={1.8} viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" />
            </svg>
          </div>
          <div className="svt">IT Support &amp; Infrastruktur</div>
          <p className="svd">Pengelolaan infrastruktur IT harian agar operasional Anda berjalan tanpa hambatan.</p>
          <ul className="svlist">
            <li><b>Technical Support</b> — Remote &amp; on-site, cepat &amp; terukur</li>
            <li><b>Digital Data Management</b> — Akurasi dan integritas basis data</li>
            <li><b>IT Consultant</b> — Arah kebijakan &amp; investasi teknologi strategis</li>
          </ul>
        </div>

        {/* System Engineering & Development */}
        <div className="svc rv d2">
          <div className="sico">
            <svg width="22" height="22" fill="none" stroke="var(--blue)" strokeWidth={1.8} viewBox="0 0 24 24">
              <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <div className="svt">System Engineering &amp; Development</div>
          <p className="svd">Pengembangan sistem kustom end-to-end dari analisis hingga serah terima siap pakai.</p>
          <ul className="svlist">
            <li><b>Analysis &amp; Architecture</b> — Audit kebutuhan &amp; spesifikasi teknis</li>
            <li><b>UI/UX &amp; Design System</b> — Antarmuka modern via Figma</li>
            <li><b>Front-End &amp; Back-End</b> — Web &amp; Mobile Android/iOS</li>
            <li><b>Quality Assurance</b> — Pengujian menyeluruh bebas celah</li>
            <li><b>Pelatihan &amp; Serah Terima</b> — Source code + manual + SOP</li>
          </ul>
        </div>
      </div>

      {/* Tech Tags */}
      <div className="tags rv d3">
        <div className="taglabel">// Sistem yang Dapat Kami Bangun</div>
        <span className="tag">POS &amp; Kasir</span>
        <span className="tag">Inventaris &amp; Gudang</span>
        <span className="tag">Booking Aset</span>
        <span className="tag">Dashboard Analitik</span>
        <span className="tag">Aplikasi Internal</span>
        <span className="tag">E-Commerce Kustom</span>
        <span className="tag">CRM</span>
        <span className="tag hl">+ kebutuhan spesifik Anda</span>
      </div>
    </div>
  );
}