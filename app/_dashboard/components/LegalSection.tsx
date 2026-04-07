const legalData = [
  { label: 'Nama', value: 'Tachyon Technologies', dark: false },
  { label: 'Tahun Berdiri', value: '2026', dark: true },
  { label: 'NIB', value: '1901260164042', dark: false },
  { label: 'Bidang Usaha', value: 'IT & Pengembangan Perangkat Lunak', dark: true },
];

export default function LegalSection() {
  return (
    <div className="legal-sec" id="legal">
      <div style={{ flex: 1 }}>
        <p className="slabel">Legalitas</p>
        <h2 className="stitle rv">Resmi &amp; Terpercaya</h2>
        <p className="sdesc rv d1">
          Badan hukum resmi yang memenuhi standar administratif untuk pengadaan jasa pemerintah dan swasta.
        </p>
      </div>
      <div className="lgcards rv d2" style={{ flex: 1 }}>
        {legalData.map((item) => (
          <div key={item.label} className={`lgc${item.dark ? ' blk' : ''}`}>
            <div className="lgk">{item.label}</div>
            <div className="lgv">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}