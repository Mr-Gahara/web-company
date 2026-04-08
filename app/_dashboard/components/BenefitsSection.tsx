const benefits = [
  {
    num: '01',
    title: 'Efisiensi Operasional',
    desc: 'Proses manual menjadi otomatis. SDM fokus pada hal yang lebih bernilai.',
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    num: '02',
    title: 'Akuntabilitas Data',
    desc: 'Data akurat, mudah diaudit, tersedia real-time untuk keputusan solid.',
    icon: <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></>,
  },
  {
    num: '03',
    title: 'Kepatuhan Regulasi',
    desc: 'Selaras SPBE, PDN, dan UU PDP — terlindungi dari risiko hukum dan siber.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    num: '04',
    title: 'Kualitas Layanan Publik',
    desc: 'Aplikasi intuitif dan responsif meningkatkan kepuasan pengguna akhir.',
    icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>,
  },
  {
    num: '05',
    title: 'Alih Teknologi',
    desc: 'Tim Anda dilatih dan dilengkapi dokumentasi untuk mandiri sepenuhnya.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></>,
  },
  {
    num: '06',
    title: 'Mitra Lokal Kontekstual',
    desc: 'Berbasis di Kalbar — kami paham dinamika birokrasi dan regulasi daerah.',
    icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>,
  },
];

const delayClass = ['rv d1', 'rv d2', 'rv d3', 'rv d4', 'rv d5', 'rv d6'];

export default function BenefitsSection() {
  return (
    <div className="sec bens" id="benefit">
      <p className="slabel">Manfaat</p>
      <h2 className="stitle rv">Dampak Nyata yang Anda Rasakan</h2>
      <p className="sdesc rv d1">
        Bermitra dengan Tachyon Technologies adalah tentang transformasi cara kerja dan kualitas layanan secara nyata.
      </p>
      <div className="bngrid">
        {benefits.map((b, i) => (
          <div key={b.num} className={`bnc ${delayClass[i]}`}>
            <span className="bnn">{b.num}</span>
            <div className="bni">
              <svg width="16" height="16" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                {b.icon}
              </svg>
            </div>
            <div className="bnt">{b.title}</div>
            <p className="bntx">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}