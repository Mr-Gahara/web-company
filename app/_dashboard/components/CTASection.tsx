export default function CTASection() {
  return (
    <div className="cta-sec" id="ct">
      <div className="cta-inner">
        <p className="slabel rv">Mulai Sekarang</p>
        <h2 className="stitle rv d1">Satu Sesi Diskusi.<br />Tanpa Komitmen.</h2>
        <p className="sdesc rv d2" style={{ margin: '0 auto 1.5rem' }}>
          Ceritakan kebutuhan Anda — kami identifikasi bersama di mana teknologi bisa memberi dampak terbesar.
        </p>
        <div className="cta-strip rv d3">
          <div>
            <div className="cstrip-text">Ada proyek di pikiran Anda?</div>
            <div className="cstrip-sub">Diskusi awal gratis, tanpa tekanan, tanpa agenda tersembunyi.</div>
          </div>
          <a href="mailto:techlabstachyon@gmail.com" className="bp" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
            Kirim Pesan{' '}
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="ctacs rv d4">
          <a href="tel:0895383394352" className="ctac">
            <div className="cico">
              <svg width="13" height="13" fill="none" stroke="var(--blue)" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            0895383394352
          </a>
          <a href="mailto:techlabstachyon@gmail.com" className="ctac">
            <div className="cico">
              <svg width="13" height="13" fill="none" stroke="var(--blue)" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            techlabstachyon@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}