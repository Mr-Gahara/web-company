export default function ApproachSection() {
  return (
    <div className="sec" id="ap" style={{ background: 'var(--w)' }}>
      <div className="appin">
        {/* Left: Pendekatan */}
        <div>
          <p className="slabel">Pendekatan</p>
          <h2 className="stitle rv">Fleksibel dari<br />Awal sampai Akhir</h2>
          <p className="sdesc rv d1">
            Tidak ada satu metodologi yang cocok untuk semua. Kami menyesuaikan dengan kondisi nyata bisnis Anda.
          </p>
          <div className="appts">
            <div className="appt rv d1">
              <div className="adot"></div>
              <div>
                <div className="apttl">Kebutuhan berubah? Wajar.</div>
                <p className="apttx">Kami tangani perubahan di tengah jalan sebagai bagian dari proses.</p>
              </div>
            </div>
            <div className="appt rv d2">
              <div className="adot"></div>
              <div>
                <div className="apttl">Transparansi penuh</div>
                <p className="apttx">Komunikasi terbuka dan laporan progres berkala di setiap tahap.</p>
              </div>
            </div>
            <div className="appt rv d3">
              <div className="adot"></div>
              <div>
                <div className="apttl">Teknologi dipilih untuk Anda</div>
                <p className="apttx">Rekomendasi berdasarkan efisiensi dan skalabilitas kebutuhan bisnis Anda.</p>
              </div>
            </div>
            <div className="appt rv d4">
              <div className="adot"></div>
              <div>
                <div className="apttl">Portabilitas penuh, zero lock-in</div>
                <p className="apttx">Cloud, On-Premise, atau Hybrid — sistem berjalan di mana Anda inginkan.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rv d2">
          <p style={{ fontFamily: "'Oxanium', monospace", fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '.8rem' }}>
            // Kapabilitas Teknologi
          </p>
          <div className="techgrid">
            <div className="tc"><div className="tct">Multi-Platform</div><p className="tcx">Web &amp; Mobile Android/iOS.</p></div>
            <div className="tc"><div className="tct">Scalable DB</div><p className="tcx">Data modern, fleksibel &amp; aman.</p></div>
            <div className="tc"><div className="tct">Cloud-Agnostic</div><p className="tcx">AWS, GCP, DO, On-Premise.</p></div>
            <div className="tc"><div className="tct">ISO 27001</div><p className="tcx">Audit internal setiap sistem.</p></div>
            <div className="tc"><div className="tct">SPBE / PDN Ready</div><p className="tcx">Selaras regulasi nasional.</p></div>
            <div className="tc"><div className="tct">Legacy Integration</div><p className="tcx">Integrasi tanpa ganti semua.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}