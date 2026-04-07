export default function UICss() {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

      *,*::before,*::after { margin:0; padding:0; box-sizing:border-box; }
      :root { --blue:#137bb0; --bd:#0d5f8a; --bl:#e8f4fb; --bm:#5aadd4; --blk:#0a0f14; --blk2:#1a2530; --w:#fff; --off:#f7fafd; --txt:#0d1c26; --mu:#5a7282; --br:rgba(19,123,176,0.13); }
      .tachyon-container { font-family:'Outfit',sans-serif; background:var(--w); color:var(--txt); overflow-x:hidden; }
      html { scroll-behavior:smooth; }

      nav { display:flex; align-items:center; justify-content:space-between; padding:0 5vw; height:62px; background:var(--w); border-bottom:1px solid var(--br); position:fixed; top:0; left:0; right:0; z-index:100; }
      .logo { font-family:'Oxanium',monospace; font-weight:800; font-size:1rem; color:var(--txt); display:flex; align-items:center; gap:9px; text-decoration:none; }
      .hex { width:32px; height:32px; background:var(--blue); clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%); display:flex; align-items:center; justify-content:center; animation:hs 6s ease-in-out infinite; }
      @keyframes hs { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(12deg)} }
      .hex span { color:white; font-weight:800; font-size:.85rem; }
      .nav-links { display:flex; gap:1.8rem; list-style:none; }
      .nav-links a { text-decoration:none; color:var(--mu); font-size:.8rem; font-weight:500; letter-spacing:.04em; text-transform:uppercase; transition:color .2s; }
      .nav-links a:hover { color:var(--blue); }
      .nav-cta { background:var(--blue)!important; color:white!important; padding:7px 18px; border-radius:4px; }
      .nav-cta:hover { background:var(--bd)!important; }

      .hero { min-height:100vh; display:flex; align-items:center; padding:100px 5vw 80px; position:relative; overflow:hidden; background:var(--w); }
      .hgrid { position:absolute; inset:0; background-image:linear-gradient(var(--br) 1px,transparent 1px),linear-gradient(90deg,var(--br) 1px,transparent 1px); background-size:50px 50px; animation:gd 20s linear infinite; }
      @keyframes gd { from{transform:translateY(0)} to{transform:translateY(50px)} }
      .hgrid::after { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 65% 80% at 55% 50%,transparent 0%,rgba(255,255,255,.93) 60%); }
      .hcont { position:relative; z-index:2; max-width:580px; }
      .badge { display:inline-flex; align-items:center; gap:7px; background:var(--bl); border:1px solid rgba(19,123,176,.25); color:var(--bd); padding:5px 12px; border-radius:100px; font-size:.7rem; font-weight:600; letter-spacing:.07em; text-transform:uppercase; margin-bottom:1.5rem; }
      .bdot { width:5px; height:5px; background:var(--blue); border-radius:50%; animation:p 2s ease-in-out infinite; }
      @keyframes p { 0%,100%{opacity:1} 50%{opacity:.3;transform:scale(1.4)} }
      h1 { font-family:'Oxanium',monospace; font-size:clamp(2.5rem,5.5vw,4.2rem); font-weight:800; line-height:1.06; color:var(--txt); margin-bottom:1.2rem; }
      .acc { color:var(--blue); position:relative; display:inline-block; }
      .acc::after { content:''; position:absolute; bottom:3px; left:0; right:0; height:3px; background:var(--blue); transform:scaleX(0); transform-origin:left; animation:li .6s .8s ease forwards; }
      @keyframes li { to{transform:scaleX(1)} }
      .hsub { font-size:1rem; line-height:1.8; color:var(--mu); max-width:480px; margin-bottom:2rem; }
      .hbtns { display:flex; gap:.8rem; flex-wrap:wrap; margin-bottom:2.2rem; }
      .bp { background:var(--blue); color:white; padding:12px 24px; border-radius:4px; text-decoration:none; font-weight:600; font-size:.88rem; display:inline-flex; align-items:center; gap:6px; transition:all .25s; border:none; cursor:pointer; }
      .bp:hover { background:var(--bd); transform:translateY(-2px); box-shadow:0 8px 20px rgba(19,123,176,.3); }
      .bo { color:var(--blue); padding:12px 24px; border-radius:4px; text-decoration:none; font-weight:600; font-size:.88rem; border:1.5px solid var(--blue); transition:all .25s; }
      .bo:hover { background:var(--bl); }
      .hstats { display:flex; gap:2rem; }
      .stn { font-family:'Oxanium',monospace; font-size:1.7rem; font-weight:800; color:var(--blue); line-height:1; }
      .stl { font-size:.72rem; color:var(--mu); text-transform:uppercase; letter-spacing:.05em; margin-top:3px; }
      .sdiv { width:1px; background:var(--br); }

      .hvis { position:absolute; right:5vw; top:50%; transform:translateY(-50%); width:360px; height:360px; }
      .ring { position:absolute; border-radius:50%; border:1px solid rgba(19,123,176,.15); animation:rot linear infinite; }
      .r1 { width:360px; height:360px; top:0; left:0; animation-duration:28s; }
      .r2 { width:250px; height:250px; top:55px; left:55px; border-color:rgba(19,123,176,.28); animation-duration:18s; animation-direction:reverse; }
      .r3 { width:140px; height:140px; top:110px; left:110px; border-color:rgba(19,123,176,.5); animation-duration:12s; }
      @keyframes rot { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      .rdot { position:absolute; width:7px; height:7px; background:var(--blue); border-radius:50%; top:-3.5px; left:50%; transform:translateX(-50%); }
      .core { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:80px; height:80px; background:var(--blue); clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%); display:flex; align-items:center; justify-content:center; animation:cp 3s ease-in-out infinite; }
      @keyframes cp { 0%,100%{transform:translate(-50%,-50%) scale(1)} 50%{transform:translate(-50%,-50%) scale(1.07)} }
      .core-t { font-family:'Oxanium',monospace; font-weight:800; font-size:1.1rem; color:white; }

      .sec { padding:90px 5vw; }
      .slabel { font-family:'Oxanium',monospace; font-size:.68rem; letter-spacing:.14em; text-transform:uppercase; color:var(--blue); font-weight:700; display:flex; align-items:center; gap:8px; margin-bottom:.8rem; }
      .slabel::before { content:''; width:20px; height:2px; background:var(--blue); }
      .stitle { font-family:'Oxanium',monospace; font-size:clamp(1.7rem,3vw,2.6rem); font-weight:800; line-height:1.15; color:var(--txt); margin-bottom:1rem; }
      .sdesc { font-size:.92rem; line-height:1.8; color:var(--mu); max-width:520px; }

      .about { background:var(--off); }
      .about-in { display:grid; grid-template-columns:1fr 1fr; gap:5vw; align-items:start; }
      .prow { display:flex; justify-content:space-between; padding:.5rem 0; border-bottom:1px solid var(--br); font-size:.83rem; }
      .pk { color:var(--mu); font-weight:500; }
      .pv { color:var(--txt); font-weight:600; text-align:right; max-width:60%; }
      .vmtitle { font-family:'Oxanium',monospace; font-size:.7rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--blue); margin-bottom:.4rem; margin-top:1.2rem; }
      .vmtext { font-size:.85rem; color:var(--mu); line-height:1.65; }
      .mlist { list-style:none; display:flex; flex-direction:column; gap:.3rem; margin-top:.3rem; }
      .mlist li { font-size:.83rem; color:var(--mu); padding-left:1.1rem; position:relative; line-height:1.5; }
      .mlist li::before { content:'→'; position:absolute; left:0; color:var(--blue); font-size:.75rem; }
      .floats { display:flex; gap:.8rem; margin-top:1.5rem; }
      .fc { flex:1; border-radius:10px; padding:1.2rem; border:1px solid var(--br); background:var(--w); }
      .fcn { font-family:'Oxanium',monospace; font-size:2rem; font-weight:800; color:var(--blue); line-height:1; }
      .fcl { font-size:.75rem; color:var(--mu); margin-top:3px; }
      .fc.blk-card { background:var(--blk); border-color:var(--blk); flex:1.5; }
      .fc.blk-card .fcn { font-size:1.1rem; color:var(--bm); }
      .fc.blk-card .fcl { color:rgba(255,255,255,.45); }

      .svgrid { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-top:2.5rem; }
      .svc { border:1px solid var(--br); border-radius:10px; padding:2rem; transition:all .3s; position:relative; overflow:hidden; background:var(--w); }
      .svc::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:var(--blue); transform:scaleX(0); transform-origin:left; transition:transform .4s; }
      .svc:hover::before { transform:scaleX(1); }
      .svc:hover { transform:translateY(-3px); box-shadow:0 16px 32px rgba(19,123,176,.08); border-color:rgba(19,123,176,.3); }
      .sico { width:44px; height:44px; background:var(--bl); border-radius:8px; display:flex; align-items:center; justify-content:center; margin-bottom:1.2rem; transition:background .3s; }
      .svc:hover .sico { background:var(--blue); }
      .svc:hover .sico svg { stroke:white; }
      .svt { font-family:'Oxanium',monospace; font-size:1rem; font-weight:700; margin-bottom:.6rem; color:var(--txt); }
      .svd { font-size:.82rem; color:var(--mu); line-height:1.65; margin-bottom:1.2rem; }
      .svlist { list-style:none; display:flex; flex-direction:column; gap:.4rem; }
      .svlist li { font-size:.78rem; color:var(--mu); padding:.4rem .7rem; background:var(--off); border-radius:5px; border-left:2px solid var(--bm); line-height:1.45; transition:all .2s; }
      .svlist li:hover { background:var(--bl); border-color:var(--blue); }
      .svlist li b { color:var(--txt); }
      .tags { display:flex; flex-wrap:wrap; gap:.5rem; margin-top:1.8rem; padding:1.5rem 2rem; background:var(--off); border-radius:10px; border:1px solid var(--br); }
      .taglabel { font-family:'Oxanium',monospace; font-size:.68rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--blue); width:100%; margin-bottom:.6rem; }
      .tag { background:var(--w); border:1px solid var(--br); border-radius:100px; padding:4px 12px; font-size:.75rem; color:var(--mu); font-weight:500; }
      .tag.hl { background:var(--bl); border-color:rgba(19,123,176,.3); color:var(--bd); font-weight:600; }

      .bens { background:var(--off); }
      .bngrid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.2rem; margin-top:2.5rem; }
      .bnc { background:var(--w); border:1px solid var(--br); border-radius:10px; padding:1.6rem; transition:all .3s; position:relative; overflow:hidden; }
      .bnc:hover { transform:translateY(-3px); box-shadow:0 12px 30px rgba(19,123,176,.08); border-color:rgba(19,123,176,.25); }
      .bnn { font-family:'Oxanium',monospace; font-size:2rem; font-weight:800; color:rgba(19,123,176,.1); line-height:1; position:absolute; top:.8rem; right:1.2rem; }
      .bni { width:38px; height:38px; background:var(--blue); border-radius:7px; display:flex; align-items:center; justify-content:center; margin-bottom:1rem; }
      .bnt { font-family:'Oxanium',monospace; font-size:.88rem; font-weight:700; color:var(--txt); margin-bottom:.5rem; line-height:1.3; }
      .bntx { font-size:.78rem; color:var(--mu); line-height:1.65; }

      .appin { display:grid; grid-template-columns:1fr 1fr; gap:5vw; align-items:start; }
      .appts { display:flex; flex-direction:column; gap:.9rem; margin-top:1.5rem; }
      .appt { display:flex; gap:.8rem; align-items:flex-start; padding:1rem; border-radius:7px; border:1px solid transparent; transition:all .25s; cursor:default; }
      .appt:hover { background:var(--bl); border-color:rgba(19,123,176,.2); }
      .adot { width:8px; height:8px; min-width:8px; background:var(--blue); border-radius:50%; margin-top:4px; }
      .apttl { font-weight:600; font-size:.85rem; color:var(--txt); margin-bottom:3px; }
      .apttx { font-size:.78rem; color:var(--mu); line-height:1.6; }
      .techgrid { display:grid; grid-template-columns:1fr 1fr; gap:.9rem; margin-top:.8rem; }
      .tc { background:var(--off); border:1px solid var(--br); border-radius:7px; padding:1rem 1.2rem; transition:all .25s; }
      .tc:hover { border-color:var(--blue); background:var(--bl); transform:translateY(-2px); }
      .tct { font-family:'Oxanium',monospace; font-weight:700; font-size:.72rem; color:var(--blue); letter-spacing:.05em; text-transform:uppercase; margin-bottom:.3rem; }
      .tcx { font-size:.76rem; color:var(--mu); line-height:1.45; }

      .sla-sec { background:var(--blue); padding:90px 5vw; position:relative; overflow:hidden; }
      .sla-sec::before { content:''; position:absolute; inset:0; background-image:linear-gradient(rgba(0,0,0,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.12) 1px,transparent 1px); background-size:36px 36px; }
      .sla-sec::after { content:''; position:absolute; top:-80px; right:-80px; width:360px; height:360px; border-radius:50%; background:rgba(255,255,255,.06); }
      .slag { display:grid; grid-template-columns:repeat(4,1fr); gap:1.2rem; margin-top:2.5rem; position:relative; z-index:1; }
      .slac { background:rgba(0,0,0,.18); border:1px solid rgba(255,255,255,.15); border-radius:10px; padding:1.6rem; text-align:center; transition:all .3s; }
      .slac:hover { background:rgba(0,0,0,.3); transform:translateY(-3px); }
      .slanum { font-family:'Oxanium',monospace; font-size:1.8rem; font-weight:800; color:white; line-height:1; margin-bottom:.4rem; margin-top:.8rem; }
      .slat { font-size:.8rem; font-weight:600; color:rgba(255,255,255,.9); margin-bottom:.4rem; }
      .slax { font-size:.74rem; color:rgba(255,255,255,.6); line-height:1.5; }

      .legal-sec { display:flex; align-items:center; gap:5vw; padding:90px 5vw; background:var(--w); }
      .lgcards { display:grid; grid-template-columns:1fr 1fr; gap:.9rem; }
      .lgc { background:var(--off); border:1px solid var(--br); border-radius:8px; padding:1.2rem; transition:all .25s; }
      .lgc:hover { border-color:var(--blue); background:var(--bl); transform:translateY(-2px); }
      .lgc.blk { background:var(--blk); border-color:var(--blk); }
      .lgc.blk:hover { border-color:var(--bm); background:var(--blk2); }
      .lgk { font-family:'Oxanium',monospace; font-size:.65rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--blue); margin-bottom:.4rem; }
      .lgc.blk .lgk { color:var(--bm); }
      .lgv { font-size:.83rem; font-weight:600; color:var(--txt); }
      .lgc.blk .lgv { color:rgba(255,255,255,.85); }

      .cta-sec { background:var(--w); padding:90px 5vw; text-align:center; }
      .cta-inner { max-width:620px; margin:0 auto; }
      .cta-sec .slabel { justify-content:center; }
      .cta-sec .slabel::before { display:none; }
      .cta-strip { background:var(--blk); border-radius:12px; padding:2rem 2.5rem; margin-top:2rem; display:flex; align-items:center; justify-content:space-between; gap:1.5rem; flex-wrap:wrap; text-align:left; }
      .cstrip-text { font-family:'Oxanium',monospace; font-size:.9rem; font-weight:700; color:white; }
      .cstrip-sub { font-size:.78rem; color:rgba(255,255,255,.45); margin-top:4px; }
      .ctacs { display:flex; flex-direction:row; gap:2rem; justify-content:center; flex-wrap:wrap; margin-top:1.5rem; }
      .ctac { display:flex; align-items:center; gap:8px; color:var(--mu); font-size:.84rem; text-decoration:none; transition:color .2s; }
      .ctac:hover { color:var(--blue); }
      .cico { width:30px; height:30px; background:var(--bl); border-radius:6px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }

      footer { background:var(--blk); color:rgba(255,255,255,.4); padding:2rem 5vw; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.8rem; }
      .flogo { font-family:'Oxanium',monospace; font-weight:800; font-size:.92rem; color:white; }
      .ftag { font-size:.74rem; color:rgba(255,255,255,.3); font-style:italic; margin-top:2px; }

      .rv { opacity:0; transform:translateY(20px); transition:opacity .6s ease,transform .6s ease; }
      .rv.in { opacity:1; transform:translateY(0); }
      .d1 { transition-delay:.1s; } .d2 { transition-delay:.2s; } .d3 { transition-delay:.3s; } .d4 { transition-delay:.4s; } .d5 { transition-delay:.5s; } .d6 { transition-delay:.6s; }

      @media(max-width:900px){ .hvis,.nav-links{display:none} .svgrid,.about-in,.appin{grid-template-columns:1fr} .bngrid{grid-template-columns:1fr 1fr} .slag{grid-template-columns:1fr 1fr} .legal-sec{flex-direction:column} }
      @media(max-width:540px){ .bngrid,.slag,.lgcards{grid-template-columns:1fr} }
    `}} />
  );
}