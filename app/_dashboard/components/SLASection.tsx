const slaItems = [
  {
    num: '2 Jam',
    label: 'Waktu Respon',
    desc: 'Respon kritikal pada jam operasional',
    icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
  },
  {
    num: '6 Bulan',
    label: 'Garansi Pasca-Proyek',
    desc: 'Pemeliharaan gratis & bug fix setelah Go-Live',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    num: 'NDA',
    label: 'Kerahasiaan Penuh',
    desc: 'Sebelum diskusi teknis dimulai',
    icon: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></>,
  },
  {
    num: '100%',
    label: 'Kepemilikan Penuh',
    desc: 'Source code milik klien sepenuhnya',
    icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></>,
  },
];

const delayClass = ['rv d1', 'rv d2', 'rv d3', 'rv d4'];

export default function SLASection() {
  return (
    <div className="sla-sec">
      <p className="slabel" style={{ color: 'rgba(255,255,255,.6)', position: 'relative', zIndex: 1 }}>
        <span style={{ display: 'inline-block', width: '20px', height: '2px', background: 'rgba(255,255,255,.4)' }}></span>
        Jaminan
      </p>
      <h2 className="stitle rv" style={{ color: 'white', position: 'relative', zIndex: 1 }}>
        Komitmen yang Kami Pegang
      </h2>
      <p className="sdesc rv d1" style={{ color: 'rgba(255,255,255,.7)', maxWidth: '100%', position: 'relative', zIndex: 1 }}>
        Setiap jaminan ini mengikat secara kontraktual.
      </p>
      <div className="slag">
        {slaItems.map((item, i) => (
          <div key={item.label} className={`slac ${delayClass[i]}`}>
            <svg width="28" height="28" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth={1.5} viewBox="0 0 24 24" style={{ display: 'block', margin: '0 auto' }}>
              {item.icon}
            </svg>
            <div className="slanum">{item.num}</div>
            <div className="slat">{item.label}</div>
            <p className="slax">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}