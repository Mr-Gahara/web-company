// 'use client';
// import React, { useEffect } from 'react';

// export default function Dashboard() {
//   // Mengganti tag <script> vanilla dengan useEffect standar React/Next.js
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('in');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('.rv').forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="tachyon-container">
//       <style dangerouslySetInnerHTML={{ __html: `
//         @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');
        
//         *,*::before,*::after { margin:0; padding:0; box-sizing:border-box; }
//         :root { --blue:#137bb0; --bd:#0d5f8a; --bl:#e8f4fb; --bm:#5aadd4; --blk:#0a0f14; --blk2:#1a2530; --w:#fff; --off:#f7fafd; --txt:#0d1c26; --mu:#5a7282; --br:rgba(19,123,176,0.13); }
//         .tachyon-container { font-family:'Outfit',sans-serif; background:var(--w); color:var(--txt); overflow-x:hidden; }
//         html { scroll-behavior:smooth; }
        
//         nav { display:flex; align-items:center; justify-content:space-between; padding:0 5vw; height:62px; background:var(--w); border-bottom:1px solid var(--br); position:fixed; top:0; left:0; right:0; z-index:100; }
//         .logo { font-family:'Oxanium',monospace; font-weight:800; font-size:1rem; color:var(--txt); display:flex; align-items:center; gap:9px; text-decoration:none; }
//         .hex { width:32px; height:32px; background:var(--blue); clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%); display:flex; align-items:center; justify-content:center; animation:hs 6s ease-in-out infinite; }
//         @keyframes hs { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(12deg)} }
//         .hex span { color:white; font-weight:800; font-size:.85rem; }
//         .nav-links { display:flex; gap:1.8rem; list-style:none; }
//         .nav-links a { text-decoration:none; color:var(--mu); font-size:.8rem; font-weight:500; letter-spacing:.04em; text-transform:uppercase; transition:color .2s; }
//         .nav-links a:hover { color:var(--blue); }
//         .nav-cta { background:var(--blue)!important; color:white!important; padding:7px 18px; border-radius:4px; }
//         .nav-cta:hover { background:var(--bd)!important; }
        
//         .hero { min-height:100vh; display:flex; align-items:center; padding:100px 5vw 80px; position:relative; overflow:hidden; background:var(--w); }
//         .hgrid { position:absolute; inset:0; background-image:linear-gradient(var(--br) 1px,transparent 1px),linear-gradient(90deg,var(--br) 1px,transparent 1px); background-size:50px 50px; animation:gd 20s linear infinite; }
//         @keyframes gd { from{transform:translateY(0)} to{transform:translateY(50px)} }
//         .hgrid::after { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 65% 80% at 55% 50%,transparent 0%,rgba(255,255,255,.93) 60%); }
//         .hcont { position:relative; z-index:2; max-width:580px; }
//         .badge { display:inline-flex; align-items:center; gap:7px; background:var(--bl); border:1px solid rgba(19,123,176,.25); color:var(--bd); padding:5px 12px; border-radius:100px; font-size:.7rem; font-weight:600; letter-spacing:.07em; text-transform:uppercase; margin-bottom:1.5rem; }
//         .bdot { width:5px; height:5px; background:var(--blue); border-radius:50%; animation:p 2s ease-in-out infinite; }
//         @keyframes p { 0%,100%{opacity:1} 50%{opacity:.3;transform:scale(1.4)} }
//         h1 { font-family:'Oxanium',monospace; font-size:clamp(2.5rem,5.5vw,4.2rem); font-weight:800; line-height:1.06; color:var(--txt); margin-bottom:1.2rem; }
//         .acc { color:var(--blue); position:relative; display:inline-block; }
//         .acc::after { content:''; position:absolute; bottom:3px; left:0; right:0; height:3px; background:var(--blue); transform:scaleX(0); transform-origin:left; animation:li .6s .8s ease forwards; }
//         @keyframes li { to{transform:scaleX(1)} }
//         .hsub { font-size:1rem; line-height:1.8; color:var(--mu); max-width:480px; margin-bottom:2rem; }
//         .hbtns { display:flex; gap:.8rem; flex-wrap:wrap; margin-bottom:2.2rem; }
//         .bp { background:var(--blue); color:white; padding:12px 24px; border-radius:4px; text-decoration:none; font-weight:600; font-size:.88rem; display:inline-flex; align-items:center; gap:6px; transition:all .25s; border:none; cursor:pointer; }
//         .bp:hover { background:var(--bd); transform:translateY(-2px); box-shadow:0 8px 20px rgba(19,123,176,.3); }
//         .bo { color:var(--blue); padding:12px 24px; border-radius:4px; text-decoration:none; font-weight:600; font-size:.88rem; border:1.5px solid var(--blue); transition:all .25s; }
//         .bo:hover { background:var(--bl); }
//         .hstats { display:flex; gap:2rem; }
//         .stn { font-family:'Oxanium',monospace; font-size:1.7rem; font-weight:800; color:var(--blue); line-height:1; }
//         .stl { font-size:.72rem; color:var(--mu); text-transform:uppercase; letter-spacing:.05em; margin-top:3px; }
//         .sdiv { width:1px; background:var(--br); }
        
//         .hvis { position:absolute; right:5vw; top:50%; transform:translateY(-50%); width:360px; height:360px; }
//         .ring { position:absolute; border-radius:50%; border:1px solid rgba(19,123,176,.15); animation:rot linear infinite; }
//         .r1 { width:360px; height:360px; top:0; left:0; animation-duration:28s; }
//         .r2 { width:250px; height:250px; top:55px; left:55px; border-color:rgba(19,123,176,.28); animation-duration:18s; animation-direction:reverse; }
//         .r3 { width:140px; height:140px; top:110px; left:110px; border-color:rgba(19,123,176,.5); animation-duration:12s; }
//         @keyframes rot { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//         .rdot { position:absolute; width:7px; height:7px; background:var(--blue); border-radius:50%; top:-3.5px; left:50%; transform:translateX(-50%); }
//         .core { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:80px; height:80px; background:var(--blue); clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%); display:flex; align-items:center; justify-content:center; animation:cp 3s ease-in-out infinite; }
//         @keyframes cp { 0%,100%{transform:translate(-50%,-50%) scale(1)} 50%{transform:translate(-50%,-50%) scale(1.07)} }
//         .core-t { font-family:'Oxanium',monospace; font-weight:800; font-size:1.1rem; color:white; }
        
//         .sec { padding:90px 5vw; }
//         .slabel { font-family:'Oxanium',monospace; font-size:.68rem; letter-spacing:.14em; text-transform:uppercase; color:var(--blue); font-weight:700; display:flex; align-items:center; gap:8px; margin-bottom:.8rem; }
//         .slabel::before { content:''; width:20px; height:2px; background:var(--blue); }
//         .stitle { font-family:'Oxanium',monospace; font-size:clamp(1.7rem,3vw,2.6rem); font-weight:800; line-height:1.15; color:var(--txt); margin-bottom:1rem; }
//         .sdesc { font-size:.92rem; line-height:1.8; color:var(--mu); max-width:520px; }
        
//         .about { background:var(--off); }
//         .about-in { display:grid; grid-template-columns:1fr 1fr; gap:5vw; align-items:start; }
//         .prow { display:flex; justify-content:space-between; padding:.5rem 0; border-bottom:1px solid var(--br); font-size:.83rem; }
//         .pk { color:var(--mu); font-weight:500; }
//         .pv { color:var(--txt); font-weight:600; text-align:right; max-width:60%; }
//         .vmtitle { font-family:'Oxanium',monospace; font-size:.7rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--blue); margin-bottom:.4rem; margin-top:1.2rem; }
//         .vmtext { font-size:.85rem; color:var(--mu); line-height:1.65; }
//         .mlist { list-style:none; display:flex; flex-direction:column; gap:.3rem; margin-top:.3rem; }
//         .mlist li { font-size:.83rem; color:var(--mu); padding-left:1.1rem; position:relative; line-height:1.5; }
//         .mlist li::before { content:'→'; position:absolute; left:0; color:var(--blue); font-size:.75rem; }
//         .floats { display:flex; gap:.8rem; margin-top:1.5rem; }
//         .fc { flex:1; border-radius:10px; padding:1.2rem; border:1px solid var(--br); background:var(--w); }
//         .fcn { font-family:'Oxanium',monospace; font-size:2rem; font-weight:800; color:var(--blue); line-height:1; }
//         .fcl { font-size:.75rem; color:var(--mu); margin-top:3px; }
//         .fc.blk-card { background:var(--blk); border-color:var(--blk); flex:1.5; }
//         .fc.blk-card .fcn { font-size:1.1rem; color:var(--bm); }
//         .fc.blk-card .fcl { color:rgba(255,255,255,.45); }
        
//         .svgrid { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-top:2.5rem; }
//         .svc { border:1px solid var(--br); border-radius:10px; padding:2rem; transition:all .3s; position:relative; overflow:hidden; background:var(--w); }
//         .svc::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:var(--blue); transform:scaleX(0); transform-origin:left; transition:transform .4s; }
//         .svc:hover::before { transform:scaleX(1); }
//         .svc:hover { transform:translateY(-3px); box-shadow:0 16px 32px rgba(19,123,176,.08); border-color:rgba(19,123,176,.3); }
//         .sico { width:44px; height:44px; background:var(--bl); border-radius:8px; display:flex; align-items:center; justify-content:center; margin-bottom:1.2rem; transition:background .3s; }
//         .svc:hover .sico { background:var(--blue); }
//         .svc:hover .sico svg { stroke:white; }
//         .svt { font-family:'Oxanium',monospace; font-size:1rem; font-weight:700; margin-bottom:.6rem; color:var(--txt); }
//         .svd { font-size:.82rem; color:var(--mu); line-height:1.65; margin-bottom:1.2rem; }
//         .svlist { list-style:none; display:flex; flex-direction:column; gap:.4rem; }
//         .svlist li { font-size:.78rem; color:var(--mu); padding:.4rem .7rem; background:var(--off); border-radius:5px; border-left:2px solid var(--bm); line-height:1.45; transition:all .2s; }
//         .svlist li:hover { background:var(--bl); border-color:var(--blue); }
//         .svlist li b { color:var(--txt); }
//         .tags { display:flex; flex-wrap:wrap; gap:.5rem; margin-top:1.8rem; padding:1.5rem 2rem; background:var(--off); border-radius:10px; border:1px solid var(--br); }
//         .taglabel { font-family:'Oxanium',monospace; font-size:.68rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--blue); width:100%; margin-bottom:.6rem; }
//         .tag { background:var(--w); border:1px solid var(--br); border-radius:100px; padding:4px 12px; font-size:.75rem; color:var(--mu); font-weight:500; }
//         .tag.hl { background:var(--bl); border-color:rgba(19,123,176,.3); color:var(--bd); font-weight:600; }
        
//         .bens { background:var(--off); }
//         .bngrid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.2rem; margin-top:2.5rem; }
//         .bnc { background:var(--w); border:1px solid var(--br); border-radius:10px; padding:1.6rem; transition:all .3s; position:relative; overflow:hidden; }
//         .bnc:hover { transform:translateY(-3px); box-shadow:0 12px 30px rgba(19,123,176,.08); border-color:rgba(19,123,176,.25); }
//         .bnn { font-family:'Oxanium',monospace; font-size:2rem; font-weight:800; color:rgba(19,123,176,.1); line-height:1; position:absolute; top:.8rem; right:1.2rem; }
//         .bni { width:38px; height:38px; background:var(--blue); border-radius:7px; display:flex; align-items:center; justify-content:center; margin-bottom:1rem; }
//         .bnt { font-family:'Oxanium',monospace; font-size:.88rem; font-weight:700; color:var(--txt); margin-bottom:.5rem; line-height:1.3; }
//         .bntx { font-size:.78rem; color:var(--mu); line-height:1.65; }
        
//         .appin { display:grid; grid-template-columns:1fr 1fr; gap:5vw; align-items:start; }
//         .appts { display:flex; flex-direction:column; gap:.9rem; margin-top:1.5rem; }
//         .appt { display:flex; gap:.8rem; align-items:flex-start; padding:1rem; border-radius:7px; border:1px solid transparent; transition:all .25s; cursor:default; }
//         .appt:hover { background:var(--bl); border-color:rgba(19,123,176,.2); }
//         .adot { width:8px; height:8px; min-width:8px; background:var(--blue); border-radius:50%; margin-top:4px; }
//         .apttl { font-weight:600; font-size:.85rem; color:var(--txt); margin-bottom:3px; }
//         .apttx { font-size:.78rem; color:var(--mu); line-height:1.6; }
//         .techgrid { display:grid; grid-template-columns:1fr 1fr; gap:.9rem; margin-top:.8rem; }
//         .tc { background:var(--off); border:1px solid var(--br); border-radius:7px; padding:1rem 1.2rem; transition:all .25s; }
//         .tc:hover { border-color:var(--blue); background:var(--bl); transform:translateY(-2px); }
//         .tct { font-family:'Oxanium',monospace; font-weight:700; font-size:.72rem; color:var(--blue); letter-spacing:.05em; text-transform:uppercase; margin-bottom:.3rem; }
//         .tcx { font-size:.76rem; color:var(--mu); line-height:1.45; }
        
//         .sla-sec { background:var(--blue); padding:90px 5vw; position:relative; overflow:hidden; }
//         .sla-sec::before { content:''; position:absolute; inset:0; background-image:linear-gradient(rgba(0,0,0,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.12) 1px,transparent 1px); background-size:36px 36px; }
//         .sla-sec::after { content:''; position:absolute; top:-80px; right:-80px; width:360px; height:360px; border-radius:50%; background:rgba(255,255,255,.06); }
//         .slag { display:grid; grid-template-columns:repeat(4,1fr); gap:1.2rem; margin-top:2.5rem; position:relative; z-index:1; }
//         .slac { background:rgba(0,0,0,.18); border:1px solid rgba(255,255,255,.15); border-radius:10px; padding:1.6rem; text-align:center; transition:all .3s; }
//         .slac:hover { background:rgba(0,0,0,.3); transform:translateY(-3px); }
//         .slanum { font-family:'Oxanium',monospace; font-size:1.8rem; font-weight:800; color:white; line-height:1; margin-bottom:.4rem; margin-top:.8rem; }
//         .slat { font-size:.8rem; font-weight:600; color:rgba(255,255,255,.9); margin-bottom:.4rem; }
//         .slax { font-size:.74rem; color:rgba(255,255,255,.6); line-height:1.5; }
        
//         .legal-sec { display:flex; align-items:center; gap:5vw; padding:90px 5vw; background:var(--w); }
//         .lgcards { display:grid; grid-template-columns:1fr 1fr; gap:.9rem; }
//         .lgc { background:var(--off); border:1px solid var(--br); border-radius:8px; padding:1.2rem; transition:all .25s; }
//         .lgc:hover { border-color:var(--blue); background:var(--bl); transform:translateY(-2px); }
//         .lgc.blk { background:var(--blk); border-color:var(--blk); }
//         .lgc.blk:hover { border-color:var(--bm); background:var(--blk2); }
//         .lgk { font-family:'Oxanium',monospace; font-size:.65rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--blue); margin-bottom:.4rem; }
//         .lgc.blk .lgk { color:var(--bm); }
//         .lgv { font-size:.83rem; font-weight:600; color:var(--txt); }
//         .lgc.blk .lgv { color:rgba(255,255,255,.85); }
        
//         .cta-sec { background:var(--w); padding:90px 5vw; text-align:center; }
//         .cta-inner { max-width:620px; margin:0 auto; }
//         .cta-sec .slabel { justify-content:center; }
//         .cta-sec .slabel::before { display:none; }
//         .cta-strip { background:var(--blk); border-radius:12px; padding:2rem 2.5rem; margin-top:2rem; display:flex; align-items:center; justify-content:space-between; gap:1.5rem; flex-wrap:wrap; text-align:left; }
//         .cstrip-text { font-family:'Oxanium',monospace; font-size:.9rem; font-weight:700; color:white; }
//         .cstrip-sub { font-size:.78rem; color:rgba(255,255,255,.45); margin-top:4px; }
//         .ctacs { display:flex; flex-direction:row; gap:2rem; justify-content:center; flex-wrap:wrap; margin-top:1.5rem; }
//         .ctac { display:flex; align-items:center; gap:8px; color:var(--mu); font-size:.84rem; text-decoration:none; transition:color .2s; }
//         .ctac:hover { color:var(--blue); }
//         .cico { width:30px; height:30px; background:var(--bl); border-radius:6px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        
//         footer { background:var(--blk); color:rgba(255,255,255,.4); padding:2rem 5vw; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.8rem; }
//         .flogo { font-family:'Oxanium',monospace; font-weight:800; font-size:.92rem; color:white; }
//         .ftag { font-size:.74rem; color:rgba(255,255,255,.3); font-style:italic; margin-top:2px; }
        
//         .rv { opacity:0; transform:translateY(20px); transition:opacity .6s ease,transform .6s ease; }
//         .rv.in { opacity:1; transform:translateY(0); }
//         .d1 { transition-delay:.1s; } .d2 { transition-delay:.2s; } .d3 { transition-delay:.3s; } .d4 { transition-delay:.4s; } .d5 { transition-delay:.5s; } .d6 { transition-delay:.6s; }
        
//         @media(max-width:900px){ .hvis,.nav-links{display:none} .svgrid,.about-in,.appin{grid-template-columns:1fr} .bngrid{grid-template-columns:1fr 1fr} .slag{grid-template-columns:1fr 1fr} .legal-sec{flex-direction:column} }
//         @media(max-width:540px){ .bngrid,.slag,.lgcards{grid-template-columns:1fr} }
//       `}} />

//       <nav>
//         <a href="" className="logo">
//           <div className="hex"><span>T</span></div>
//           TACHYON<span style={{ color: 'var(--blue)' }}>TECH</span>
//         </a>
//         <ul className="nav-links">
//           <li><a href="about">Tentang</a></li>
//           <li><a href="sv">Layanan</a></li>
//           <li><a href="bn">Manfaat</a></li>
//           <li><a href="ap">Pendekatan</a></li>
//           <li><a href="ct" className="nav-cta">Hubungi Kami</a></li>
//         </ul>
//       </nav>

//       <div className="hero">
//         <div className="hgrid"></div>
//         <div className="hcont">
//           <h1>Bukan Sekadar<br/><span className="acc">Vendor IT.</span><br/>Mitra Digital Anda.</h1>
//           <p className="hsub">Solusi teknologi yang dibangun khusus untuk instansi pemerintah dan bisnis swasta — bukan template, bukan one-size-fits-all.</p>
//           <div className="hbtns">
//             <a href="#ct" className="bp">
//               Mulai Diskusi 
//               <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//             </a>
//             <a href="#sv" className="bo">Lihat Layanan</a>
//           </div>
//           <div className="hstats">
//             <div><div className="stn">2 Jam</div><div className="stl">Respon Kritikal</div></div>
//             <div className="sdiv"></div>
//             <div><div className="stn">6 Bln</div><div className="stl">Garansi Pasca-Proyek</div></div>
//             <div className="sdiv"></div>
//             <div><div className="stn">100%</div><div className="stl">Source Code Milik Anda</div></div>
//           </div>
//         </div>
//         <div className="hvis">
//           <div className="ring r1"><div className="rdot"></div></div>
//           <div className="ring r2"><div className="rdot"></div></div>
//           <div className="ring r3"><div className="rdot"></div></div>
//           <div className="core"><span className="core-t">TTL</span></div>
//         </div>
//       </div>

//       <div className="sec about" id="about">
//         <div className="about-in">
//           <div>
//             <p className="slabel">Tentang Kami</p>
//             <h2 className="stitle rv">Teknologi Lokal.<br/>Solusi Nasional.</h2>
//             <p className="sdesc rv d1">Software house berbasis di Pontianak, Kalimantan Barat, dibangun oleh talenta lokal yang memahami dinamika bisnis dan birokrasi daerah secara mendalam.</p>
//             <div style={{ marginTop: '1.2rem' }} className="rv d2">
//               <div className="prow"><span className="pk">Nama</span><span className="pv">Tachyon Technologies</span></div>
//               <div className="prow"><span className="pk">Tahun Berdiri</span><span className="pv">2026</span></div>
//               <div className="prow" style={{ border: 'none' }}><span className="pk">Bidang Usaha</span><span className="pv">IT & Pengembangan Perangkat Lunak</span></div>
//             </div>
//           </div>
//           <div className="rv d2">
//             <div className="vmtitle">// Visi</div>
//             <p className="vmtext">Menjadi mitra teknologi digital terpercaya bagi institusi publik dan swasta dalam mendukung kedaulatan digital nasional.</p>
//             <div className="vmtitle">// Misi</div>
//             <ul className="mlist">
//               <li>Menghadirkan solusi IT yang patuh regulasi dan tepat sasaran</li>
//               <li>Mendukung kedaulatan data nasional melalui infrastruktur lokal</li>
//               <li>Memberdayakan talenta digital putra daerah</li>
//             </ul>
//             <div className="floats rv d3">
//               <div className="fc" style={{ borderLeft: '3px solid var(--blue)' }}>
//                 <div className="fcn">2026</div><div className="fcl">Tahun Berdiri</div>
//               </div>
//               <div className="fc blk-card">
//                 <div className="fcn">ISO 27001</div><div className="fcl "><p className='text-slate-200'>
//                     Standar Keamanan Informasi</p></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="sec" id="sv" style={{ background: 'var(--w)' }}>
//         <p className="slabel">Layanan</p>
//         <h2 className="stitle rv">Apa yang Kami Kerjakan</h2>
//         <p className="sdesc rv d1">Dari infrastruktur harian hingga sistem kustom penuh — kami tangani dari hulu ke hilir.</p>
//         <div className="svgrid">
//           <div className="svc rv d1">
//             <div className="sico">
//               <svg width="22" height="22" fill="none" stroke="var(--blue)" strokeWidth={1.8} viewBox="0 0 24 24">
//                 <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
//               </svg>
//             </div>
//             <div className="svt">IT Support & Infrastruktur</div>
//             <p className="svd">Pengelolaan infrastruktur IT harian agar operasional Anda berjalan tanpa hambatan.</p>
//             <ul className="svlist">
//               <li><b>Technical Support</b> — Remote & on-site, cepat & terukur</li>
//               <li><b>Digital Data Management</b> — Akurasi dan integritas basis data</li>
//               <li><b>IT Consultant</b> — Arah kebijakan & investasi teknologi strategis</li>
//             </ul>
//           </div>
//           <div className="svc rv d2">
//             <div className="sico">
//               <svg width="22" height="22" fill="none" stroke="var(--blue)" strokeWidth={1.8} viewBox="0 0 24 24">
//                 <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
//               </svg>
//             </div>
//             <div className="svt">System Engineering & Development</div>
//             <p className="svd">Pengembangan sistem kustom end-to-end dari analisis hingga serah terima siap pakai.</p>
//             <ul className="svlist">
//               <li><b>Analysis & Architecture</b> — Audit kebutuhan & spesifikasi teknis</li>
//               <li><b>UI/UX & Design System</b> — Antarmuka modern via Figma</li>
//               <li><b>Front-End & Back-End</b> — Web & Mobile Android/iOS</li>
//               <li><b>Quality Assurance</b> — Pengujian menyeluruh bebas celah</li>
//               <li><b>Pelatihan & Serah Terima</b> — Source code + manual + SOP</li>
//             </ul>
//           </div>
//         </div>
//         <div className="tags rv d3">
//           <div className="taglabel">// Sistem yang Dapat Kami Bangun</div>
//           <span className="tag">POS & Kasir</span><span className="tag">Inventaris & Gudang</span><span className="tag">Booking Aset</span>
//           <span className="tag">Dashboard Analitik</span><span className="tag">Aplikasi Internal</span><span className="tag">E-Commerce Kustom</span>
//           <span className="tag">CRM</span><span className="tag hl">+ kebutuhan spesifik Anda</span>
//         </div>
//       </div>

//       <div className="sec bens" id="bn">
//         <p className="slabel">Manfaat</p>
//         <h2 className="stitle rv">Dampak Nyata yang Anda Rasakan</h2>
//         <p className="sdesc rv d1">Bermitra dengan Tachyon Technologies adalah tentang transformasi cara kerja dan kualitas layanan secara nyata.</p>
//         <div className="bngrid">
//           <div className="bnc rv d1"><span className="bnn">01</span><div className="bni"><svg width="16" height="16" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div><div className="bnt">Efisiensi Operasional</div><p className="bntx">Proses manual menjadi otomatis. SDM fokus pada hal yang lebih bernilai.</p></div>
//           <div className="bnc rv d2"><span className="bnn">02</span><div className="bni"><svg width="16" height="16" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div><div className="bnt">Akuntabilitas Data</div><p className="bntx">Data akurat, mudah diaudit, tersedia real-time untuk keputusan solid.</p></div>
//           <div className="bnc rv d3"><span className="bnn">03</span><div className="bni"><svg width="16" height="16" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div className="bnt">Kepatuhan Regulasi</div><p className="bntx">Selaras SPBE, PDN, dan UU PDP — terlindungi dari risiko hukum dan siber.</p></div>
//           <div className="bnc rv d4"><span className="bnn">04</span><div className="bni"><svg width="16" height="16" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div><div className="bnt">Kualitas Layanan Publik</div><p className="bntx">Aplikasi intuitif dan responsif meningkatkan kepuasan pengguna akhir.</p></div>
//           <div className="bnc rv d5"><span className="bnn">05</span><div className="bni"><svg width="16" height="16" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div><div className="bnt">Alih Teknologi</div><p className="bntx">Tim Anda dilatih dan dilengkapi dokumentasi untuk mandiri sepenuhnya.</p></div>
//           <div className="bnc rv d6"><span className="bnn">06</span><div className="bni"><svg width="16" height="16" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div className="bnt">Mitra Lokal Kontekstual</div><p className="bntx">Berbasis di Kalbar — kami paham dinamika birokrasi dan regulasi daerah.</p></div>
//         </div>
//       </div>

//       <div className="sec" id="ap" style={{ background: 'var(--w)' }}>
//         <div className="appin">
//           <div>
//             <p className="slabel">Pendekatan</p>
//             <h2 className="stitle rv">Fleksibel dari<br/>Awal sampai Akhir</h2>
//             <p className="sdesc rv d1">Tidak ada satu metodologi yang cocok untuk semua. Kami menyesuaikan dengan kondisi nyata bisnis Anda.</p>
//             <div className="appts">
//               <div className="appt rv d1"><div className="adot"></div><div><div className="apttl">Kebutuhan berubah? Wajar.</div><p className="apttx">Kami tangani perubahan di tengah jalan sebagai bagian dari proses.</p></div></div>
//               <div className="appt rv d2"><div className="adot"></div><div><div className="apttl">Transparansi penuh</div><p className="apttx">Komunikasi terbuka dan laporan progres berkala di setiap tahap.</p></div></div>
//               <div className="appt rv d3"><div className="adot"></div><div><div className="apttl">Teknologi dipilih untuk Anda</div><p className="apttx">Rekomendasi berdasarkan efisiensi dan skalabilitas kebutuhan bisnis Anda.</p></div></div>
//               <div className="appt rv d4"><div className="adot"></div><div><div className="apttl">Portabilitas penuh, zero lock-in</div><p className="apttx">Cloud, On-Premise, atau Hybrid — sistem berjalan di mana Anda inginkan.</p></div></div>
//             </div>
//           </div>
//           <div className="rv d2">
//             <p style={{ fontFamily: "'Oxanium', monospace", fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '.8rem' }}>// Kapabilitas Teknologi</p>
//             <div className="techgrid">
//               <div className="tc"><div className="tct">Multi-Platform</div><p className="tcx">Web & Mobile Android/iOS.</p></div>
//               <div className="tc"><div className="tct">Scalable DB</div><p className="tcx">Data modern, fleksibel & aman.</p></div>
//               <div className="tc"><div className="tct">Cloud-Agnostic</div><p className="tcx">AWS, GCP, DO, On-Premise.</p></div>
//               <div className="tc"><div className="tct">ISO 27001</div><p className="tcx">Audit internal setiap sistem.</p></div>
//               <div className="tc"><div className="tct">SPBE / PDN Ready</div><p className="tcx">Selaras regulasi nasional.</p></div>
//               <div className="tc"><div className="tct">Legacy Integration</div><p className="tcx">Integrasi tanpa ganti semua.</p></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="sla-sec">
//         <p className="slabel" style={{ color: 'rgba(255,255,255,.6)', position: 'relative', zIndex: 1 }}>
//           <span style={{ display: 'inline-block', width: '20px', height: '2px', background: 'rgba(255,255,255,.4)' }}></span>Jaminan
//         </p>
//         <h2 className="stitle rv" style={{ color: 'white', position: 'relative', zIndex: 1 }}>Komitmen yang Kami Pegang</h2>
//         <p className="sdesc rv d1" style={{ color: 'rgba(255,255,255,.7)', maxWidth: '100%', position: 'relative', zIndex: 1 }}>Setiap jaminan ini mengikat secara kontraktual.</p>
//         <div className="slag">
//           <div className="slac rv d1">
//             <svg width="28" height="28" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth={1.5} viewBox="0 0 24 24" style={{ display: 'block', margin: '0 auto' }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
//             <div className="slanum">2 Jam</div><div className="slat">Waktu Respon</div><p className="slax">Respon kritikal pada jam operasional</p>
//           </div>
//           <div className="slac rv d2">
//             <svg width="28" height="28" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth={1.5} viewBox="0 0 24 24" style={{ display: 'block', margin: '0 auto' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
//             <div className="slanum">6 Bulan</div><div className="slat">Garansi Pasca-Proyek</div><p className="slax">Pemeliharaan gratis & bug fix setelah Go-Live</p>
//           </div>
//           <div className="slac rv d3">
//             <svg width="28" height="28" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth={1.5} viewBox="0 0 24 24" style={{ display: 'block', margin: '0 auto' }}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
//             <div className="slanum">NDA</div><div className="slat">Kerahasiaan Penuh</div><p className="slax">Sebelum diskusi teknis dimulai</p>
//           </div>
//           <div className="slac rv d4">
//             <svg width="28" height="28" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth={1.5} viewBox="0 0 24 24" style={{ display: 'block', margin: '0 auto' }}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
//             <div className="slanum">100%</div><div className="slat">Kepemilikan Penuh</div><p className="slax">Source code milik klien sepenuhnya</p>
//           </div>
//         </div>
//       </div>

//       <div className="legal-sec" id="legal">
//         <div style={{ flex: 1 }}>
//           <p className="slabel">Legalitas</p>
//           <h2 className="stitle rv">Resmi & Terpercaya</h2>
//           <p className="sdesc rv d1">Badan hukum resmi yang memenuhi standar administratif untuk pengadaan jasa pemerintah dan swasta.</p>
//         </div>
//         <div className="lgcards rv d2" style={{ flex: 1 }}>
//           <div className="lgc"><div className="lgk">Nama</div><div className="lgv">Tachyon Technologies</div></div>
//           <div className="lgc blk"><div className="lgk">Tahun Berdiri</div><div className="lgv">2026</div></div>
//           <div className="lgc"><div className="lgk">NIB</div><div className="lgv">1901260164042</div></div>
//           <div className="lgc blk"><div className="lgk">Bidang Usaha</div><div className="lgv">IT & Pengembangan Perangkat Lunak</div></div>
//         </div>
//       </div>

//       <div className="cta-sec" id="ct">
//         <div className="cta-inner">
//           <p className="slabel rv">Mulai Sekarang</p>
//           <h2 className="stitle rv d1">Satu Sesi Diskusi.<br/>Tanpa Komitmen.</h2>
//           <p className="sdesc rv d2" style={{ margin: '0 auto 1.5rem' }}>Ceritakan kebutuhan Anda — kami identifikasi bersama di mana teknologi bisa memberi dampak terbesar.</p>
//           <div className="cta-strip rv d3">
//             <div>
//               <div className="cstrip-text">Ada proyek di pikiran Anda?</div>
//               <div className="cstrip-sub">Diskusi awal gratis, tanpa tekanan, tanpa agenda tersembunyi.</div>
//             </div>
//             <a href="mailto:techlabstachyon@gmail.com" className="bp" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
//               Kirim Pesan <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//             </a>
//           </div>
//           <div className="ctacs rv d4">
//             <a href="tel:0895383394352" className="ctac"><div className="cico"><svg width="13" height="13" fill="none" stroke="var(--blue)" strokeWidth={2} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>0895383394352</a>
//             <a href="mailto:techlabstachyon@gmail.com" className="ctac"><div className="cico"><svg width="13" height="13" fill="none" stroke="var(--blue)" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>techlabstachyon@gmail.com</a>
//           </div>
//         </div>
//       </div>

//       <footer>
//         <div>
//           <div className="flogo">TACHYON <span style={{ color: 'var(--bm)' }}>TECHNOLOGIES</span></div>
//           <div className="ftag"><p className='text-slate-200'>"Teknologi Lokal. Solusi Nasional."</p></div>
//         </div>
//         <div style={{ fontSize: '.74rem' }} className='text-slate-200'>© 2026 Tachyon Technologies. All rights reserved.</div>
//       </footer>
//     </div>
//   );
// }

'use client';

import { useRevealAnimation } from '@/app/_dashboard/hooks/UseRevealAnimation';
import UICss from '@/app/_dashboard/components/UiCss';
import Navbar from '@/app/_dashboard/components/Navbar';
import HeroSection from '@/app/_dashboard/components/HeroSection';
import AboutSection from '@/app/_dashboard/components/AboutSection';
import ServicesSection from '@/app/_dashboard/components/ServiceSection';
import BenefitsSection from '@/app/_dashboard/components/BenefitsSection';
import ApproachSection from '@/app/_dashboard/components/ApproachSection';
import SLASection from '@/app/_dashboard/components/SLASection';
import LegalSection from '@/app/_dashboard/components/LegalSection';
import CTASection from '@/app/_dashboard/components/CTASection';
import Footer from '@/app/_dashboard/components/Footer';

export default function CompanyProfilePage() {
  useRevealAnimation();

  return (
    <div className="tachyon-container">
      <UICss />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <ApproachSection />
      <SLASection />
      <LegalSection />
      <CTASection />
      <Footer />
    </div>
  );
}