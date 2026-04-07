"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import {
  ArrowRight,
  Shield,
  Code2,
  Server,
  Clock,
  FileCheck,
  Lock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Database,
  Layers,
  Zap,
  Users,
  BarChart3,
  ShoppingCart,
  BookOpen,
} from "lucide-react";

// ─── GLOW CARD ──────────────────────────────────────────────────────────────
export function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-900/60 backdrop-blur-md transition-colors hover:border-white/20 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(19,123,176,0.12), transparent 80%)`,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(19,123,176,0.35), transparent 80%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

// ─── NAVBAR ─────────────────────────────────────────────────────────────────
export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Tentang", "Layanan", "Manfaat", "Jaminan"];

  return (
    <nav className="fixed left-0 right-0 top-5 z-50 mx-auto max-w-5xl px-5">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "circOut" }}
        className="flex items-center justify-between rounded-full border border-white/10 bg-black/70 px-6 py-3 backdrop-blur-xl shadow-2xl"
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#137bb0] text-white font-black font-mono text-sm">
            T
          </div>
          <span className="text-lg font-black tracking-tight text-white font-mono">
            TACHYON<span className="text-[#5aadd4]">TECH</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden items-center gap-7 text-sm font-medium text-neutral-400 md:flex">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-white">
              {l}
            </a>
          ))}
        </div>

        <a
          href="#kontak"
          className="rounded-full bg-[#137bb0] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#0d5f8a] hover:scale-105 active:scale-95"
        >
          Hubungi Kami
        </a>
      </motion.div>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 250]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-0 text-center">
      {/* Beam background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_72%)]" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(19,123,176,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(19,123,176,0.4) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />
        {/* Glow orbs */}
        <motion.div style={{ y, opacity }} className="h-full w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#137bb0]/20 blur-[120px]" />
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-[#5aadd4]/10 blur-[80px]" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex max-w-4xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-[#137bb0]/30 bg-[#137bb0]/10 px-4 py-1.5 text-sm text-[#5aadd4] backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#137bb0] animate-pulse" />
          <span>Pontianak, Kalimantan Barat</span>
          <ArrowRight size={13} />
        </motion.div>

        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-mono text-5xl font-black tracking-tight text-white md:text-7xl lg:text-[5.5rem] leading-none"
        >
          Bukan Sekadar <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#5aadd4] to-[#137bb0]">
            Vendor IT.
          </span>
          <br />
          Mitra Digital Anda.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-7 max-w-2xl text-lg text-neutral-400 leading-relaxed"
        >
          Solusi teknologi yang dibangun khusus untuk instansi pemerintah dan bisnis swasta —
          bukan template, bukan one-size-fits-all. Sistem Anda, cara Anda.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#kontak"
            className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-transform hover:scale-105"
          >
            Mulai Diskusi
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </a>
          <a
            href="#layanan"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Lihat Layanan
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 flex items-center gap-10 text-left"
        >
          {[
            { num: "2 Jam", label: "Respon Kritikal" },
            { num: "6 Bulan", label: "Garansi Pasca-Proyek" },
            { num: "100%", label: "Source Code Milik Anda" },
          ].map((s, i) => (
            <React.Fragment key={s.num}>
              {i > 0 && <div className="w-px h-10 bg-white/10" />}
              <div>
                <div className="font-mono text-2xl font-black text-[#137bb0]">{s.num}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Floating mockup */}
      <motion.div
        initial={{ y: 80, opacity: 0, rotateX: 15 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        style={{ perspective: "1000px" }}
        className="mt-20 w-full max-w-5xl"
      >
        <div className="overflow-hidden rounded-t-[2rem] border-x border-t border-white/10 bg-black/40 p-3 shadow-2xl backdrop-blur-sm">
          {/* Simulated dashboard */}
          <div className="rounded-xl bg-neutral-900 p-5 min-h-[280px] border border-white/5">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <div className="mx-auto h-6 w-56 rounded bg-white/5 border border-white/10 text-[10px] text-neutral-500 flex items-center justify-center">
                tachyon-technologies.com
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "Proyek Aktif", val: "12", color: "#137bb0" },
                { label: "Klien", val: "8", color: "#5aadd4" },
                { label: "Uptime", val: "99.9%", color: "#22c55e" },
                { label: "Respon", val: "< 2j", color: "#f59e0b" },
              ].map((c) => (
                <div key={c.label} className="rounded-xl bg-white/5 border border-white/5 p-3">
                  <div className="text-xs text-neutral-500 mb-1">{c.label}</div>
                  <div className="text-xl font-black font-mono" style={{ color: c.color }}>{c.val}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div className="col-span-2 rounded-xl bg-white/5 border border-white/5 p-3 h-28 flex flex-col justify-between">
                <div className="text-xs text-neutral-500">Aktivitas Sistem</div>
                <div className="flex items-end gap-1 h-16">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 65].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-[#137bb0]/40" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-[#137bb0]/10 border border-[#137bb0]/20 p-3 flex flex-col justify-between">
                <div className="text-xs text-[#5aadd4]">Status</div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-white font-medium">Semua sistem aktif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── SERVICES BENTO ─────────────────────────────────────────────────────────
export function Services() {
  const systems = [
    "POS & Kasir", "Inventaris & Gudang", "Booking Aset",
    "Dashboard Analitik", "Aplikasi Internal", "E-Commerce Kustom",
    "CRM", "Sistem Pemerintahan",
  ];

  return (
    <section id="layanan" className="relative z-10 bg-black pb-28 pt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#137bb0]/30 bg-[#137bb0]/10 px-4 py-1.5 text-xs text-[#5aadd4] font-mono font-bold tracking-widest uppercase mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#137bb0]" />
            Layanan
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black tracking-tight text-white md:text-5xl font-mono"
          >
            Apa yang Kami Kerjakan.{" "}
            <span className="text-neutral-600">Dari hulu ke hilir.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[280px]">

          {/* Large — IT Support */}
          <GlowCard className="md:col-span-2 lg:col-span-2 lg:row-span-2 p-8 flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex rounded-xl bg-[#137bb0]/20 p-3 text-[#5aadd4]">
                <Server size={24} />
              </div>
              <h3 className="text-2xl font-black text-white font-mono">IT Support &<br />Infrastruktur</h3>
              <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                Pengelolaan infrastruktur IT harian agar operasional Anda berjalan tanpa hambatan —
                remote maupun on-site.
              </p>
            </div>
            <div className="space-y-2.5 mt-6">
              {[
                "Technical Support — Remote & on-site, cepat & terukur",
                "Digital Data Management — Akurasi basis data terjamin",
                "IT Consultant — Arah kebijakan teknologi strategis",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/5 px-4 py-2.5 text-sm text-neutral-300">
                  <div className="mt-0.5 h-1.5 w-1.5 min-w-[6px] rounded-full bg-[#137bb0]" />
                  {item}
                </div>
              ))}
            </div>
          </GlowCard>

          {/* System Dev */}
          <GlowCard className="md:col-span-1 lg:col-span-1 p-6">
            <div className="mb-4 inline-flex rounded-xl bg-purple-500/20 p-3 text-purple-400">
              <Code2 size={22} />
            </div>
            <h3 className="text-lg font-black text-white font-mono">System Development</h3>
            <p className="mt-2 text-xs text-neutral-400">End-to-end pengembangan sistem kustom.</p>
            <div className="mt-5 space-y-2">
              {["Analysis & Architecture", "UI/UX Design System", "Front-End & Back-End", "QA & Testing"].map((s) => (
                <div key={s} className="flex items-center gap-2 text-xs text-neutral-400">
                  <div className="h-px flex-1 bg-white/5" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </GlowCard>

          {/* Training */}
          <GlowCard className="p-6 md:col-span-1 lg:col-span-1">
            <div className="mb-4 inline-flex rounded-xl bg-green-500/20 p-3 text-green-400">
              <BookOpen size={22} />
            </div>
            <h3 className="text-lg font-black text-white font-mono">Pelatihan & Serah Terima</h3>
            <p className="mt-2 text-xs text-neutral-400">Source code, manual, dan SOP lengkap.</p>
            <div className="mt-5 flex items-center justify-center">
              <div className="relative h-20 w-20 rounded-full border-4 border-neutral-800">
                <div className="absolute inset-0 rounded-full border-4 border-green-500 border-r-transparent border-b-transparent rotate-[135deg]" />
                <div className="absolute inset-0 flex items-center justify-center text-xs font-black text-white font-mono">100%</div>
              </div>
            </div>
          </GlowCard>

          {/* Systems wide */}
          <GlowCard className="md:col-span-3 lg:col-span-4 p-7 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-orange-500/20 p-2.5 text-orange-400">
                <Layers size={18} />
              </div>
              <h3 className="text-lg font-black text-white font-mono">Sistem yang Dapat Kami Bangun</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {systems.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:border-[#137bb0]/50 hover:bg-[#137bb0]/10 hover:text-[#5aadd4] cursor-default"
                >
                  {s}
                </span>
              ))}
              <span className="rounded-full border border-[#137bb0]/30 bg-[#137bb0]/15 px-3 py-1.5 text-sm text-[#5aadd4] font-semibold">
                + kebutuhan spesifik Anda
              </span>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

// ─── BENEFITS ────────────────────────────────────────────────────────────────
export function Benefits() {
  const items = [
    { icon: <Zap size={20} />, num: "01", title: "Efisiensi Operasional", text: "Proses manual menjadi otomatis. SDM fokus pada hal yang lebih bernilai.", color: "text-yellow-400", bg: "bg-yellow-500/20" },
    { icon: <BarChart3 size={20} />, num: "02", title: "Akuntabilitas Data", text: "Data akurat, mudah diaudit, tersedia real-time untuk keputusan solid.", color: "text-blue-400", bg: "bg-blue-500/20" },
    { icon: <Shield size={20} />, num: "03", title: "Kepatuhan Regulasi", text: "Selaras SPBE, PDN, dan UU PDP — terlindungi dari risiko hukum dan siber.", color: "text-green-400", bg: "bg-green-500/20" },
    { icon: <Users size={20} />, num: "04", title: "Kualitas Layanan Publik", text: "Aplikasi intuitif dan responsif meningkatkan kepuasan pengguna akhir.", color: "text-purple-400", bg: "bg-purple-500/20" },
    { icon: <Database size={20} />, num: "05", title: "Alih Teknologi", text: "Tim Anda dilatih dan dilengkapi dokumentasi untuk mandiri sepenuhnya.", color: "text-orange-400", bg: "bg-orange-500/20" },
    { icon: <MapPin size={20} />, num: "06", title: "Mitra Lokal Kontekstual", text: "Berbasis di Kalbar — kami paham dinamika birokrasi dan regulasi daerah.", color: "text-pink-400", bg: "bg-pink-500/20" },
  ];

  return (
    <section id="manfaat" className="bg-black border-t border-white/5 py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#137bb0]/30 bg-[#137bb0]/10 px-4 py-1.5 text-xs text-[#5aadd4] font-mono font-bold tracking-widest uppercase mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#137bb0]" />
            Manfaat
          </motion.div>
          <h2 className="text-4xl font-black text-white font-mono">
            Dampak Nyata. <span className="text-neutral-600">Yang Anda Rasakan.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlowCard className="p-6 h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className={`inline-flex rounded-xl p-2.5 ${item.bg} ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="font-mono text-3xl font-black text-white/5">{item.num}</span>
                </div>
                <h3 className="text-base font-black text-white font-mono mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.text}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SLA / JAMINAN ───────────────────────────────────────────────────────────
export function SLA() {
  const items = [
    { icon: <Clock size={28} />, num: "2 Jam", title: "Waktu Respon", text: "Respon kritikal pada jam operasional" },
    { icon: <Shield size={28} />, num: "6 Bulan", title: "Garansi Pasca-Proyek", text: "Pemeliharaan gratis & bug fix setelah Go-Live" },
    { icon: <Lock size={28} />, num: "NDA", title: "Kerahasiaan Penuh", text: "Ditandatangani sebelum diskusi teknis" },
    { icon: <FileCheck size={28} />, num: "100%", title: "Kepemilikan Penuh", text: "Source code milik klien sepenuhnya" },
  ];

  return (
    <section id="jaminan" className="relative bg-[#0d5282] py-24 px-6 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4 blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white/70 font-mono font-bold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            Jaminan
          </div>
          <h2 className="text-4xl font-black text-white font-mono">
            Komitmen yang Kami Pegang.
          </h2>
          <p className="mt-3 text-white/60 text-lg">Setiap jaminan ini mengikat secara kontraktual.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[1.5rem] border border-white/15 bg-black/25 p-7 text-center backdrop-blur-sm transition-all hover:bg-black/40 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4 text-white/70">{item.icon}</div>
              <div className="font-mono text-3xl font-black text-white mb-1">{item.num}</div>
              <div className="text-sm font-bold text-white/90 mb-2">{item.title}</div>
              <p className="text-xs text-white/55 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TECH STACK / APPROACH ───────────────────────────────────────────────────
export function Approach() {
  const techs = [
    { label: "Multi-Platform", desc: "Web & Mobile Android/iOS" },
    { label: "Scalable DB", desc: "Data modern, fleksibel & aman" },
    { label: "Cloud-Agnostic", desc: "AWS, GCP, DO, On-Premise" },
    { label: "ISO 27001", desc: "Audit internal setiap sistem" },
    { label: "SPBE / PDN", desc: "Selaras regulasi nasional" },
    { label: "Legacy Integration", desc: "Integrasi tanpa ganti semua" },
  ];

  return (
    <section className="bg-black border-t border-white/5 py-24 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start gap-16">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#137bb0]/30 bg-[#137bb0]/10 px-4 py-1.5 text-xs text-[#5aadd4] font-mono font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#137bb0]" />
            Pendekatan
          </div>
          <h2 className="text-4xl font-black text-white font-mono leading-tight">
            Fleksibel <br /> <span className="text-neutral-600">dari Awal sampai Akhir.</span>
          </h2>
          <p className="mt-5 text-lg text-neutral-400 leading-relaxed">
            Kami tidak memaksakan satu metodologi atau satu teknologi.
            Pendekatan kami menyesuaikan kebutuhan, skala, dan budaya kerja Anda.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { t: "Kebutuhan berubah? Wajar.", d: "Kami tangani perubahan di tengah jalan sebagai bagian dari proses, bukan hambatan." },
              { t: "Transparansi penuh", d: "Komunikasi terbuka dan laporan progres berkala di setiap tahap pengerjaan." },
              { t: "Zero lock-in", d: "Cloud, On-Premise, atau Hybrid — sistem berjalan di mana Anda inginkan." },
            ].map((item) => (
              <div key={item.t} className="flex gap-4 rounded-xl border border-white/5 bg-white/3 p-4 transition-colors hover:border-[#137bb0]/30 hover:bg-[#137bb0]/5">
                <div className="mt-1 h-2 w-2 min-w-[8px] rounded-full bg-[#137bb0]" />
                <div>
                  <div className="font-bold text-white text-sm">{item.t}</div>
                  <div className="text-xs text-neutral-400 mt-0.5 leading-relaxed">{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#5aadd4] mb-5">// Kapabilitas Teknologi</div>
          <div className="grid grid-cols-2 gap-3">
            {techs.map((t) => (
              <GlowCard key={t.label} className="p-4">
                <div className="text-xs font-black font-mono text-[#5aadd4] uppercase tracking-wider mb-1">{t.label}</div>
                <div className="text-xs text-neutral-400">{t.desc}</div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA / CONTACT ───────────────────────────────────────────────────────────
export function CTA() {
  return (
    <section id="kontak" className="bg-black border-t border-white/5 py-28 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-white font-mono md:text-6xl leading-tight"
        >
          Ada Proyek <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#5aadd4] to-[#137bb0]">
            di Pikiran Anda?
          </span>
        </motion.h2>
        <p className="mt-6 text-xl text-neutral-400">
          Satu sesi diskusi awal — tanpa komitmen, tanpa biaya.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="mailto:techlabstachyon@gmail.com"
            className="group flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-black text-black transition-transform hover:scale-105"
          >
            Kirim Pesan Sekarang
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={22} />
          </a>
        </motion.div>

        <div className="mt-12 flex justify-center gap-10 flex-wrap">
          {[
            { icon: <Phone size={15} />, text: "0895383394352", href: "tel:0895383394352" },
            { icon: <Mail size={15} />, text: "techlabstachyon@gmail.com", href: "mailto:techlabstachyon@gmail.com" },
          ].map((c) => (
            <a key={c.text} href={c.href} className="flex items-center gap-2 text-neutral-500 text-sm hover:text-[#5aadd4] transition-colors">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#137bb0]/15 text-[#137bb0]">
                {c.icon}
              </div>
              {c.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pb-10 pt-16 text-neutral-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#137bb0] text-white font-black font-mono text-sm">T</div>
              <span className="text-xl font-black tracking-tight text-white font-mono">
                TACHYON<span className="text-[#5aadd4]">TECH</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Mitra teknologi digital terpercaya untuk instansi pemerintah dan bisnis swasta di Kalimantan Barat.
            </p>
          </div>
          {[
            { col: "Layanan", links: ["IT Support", "System Development", "IT Consultant", "QA & Testing"] },
            { col: "Perusahaan", links: ["Tentang Kami", "Legalitas", "Kontak", "Karir"] },
          ].map((col) => (
            <div key={col.col}>
              <h4 className="mb-4 font-black text-white text-sm font-mono">{col.col}</h4>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-[#5aadd4] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 border-t border-white/10 pt-8 text-xs">
          <span>© 2026 Tachyon Technologies. All rights reserved.</span>
          <span className="italic text-neutral-600">"Teknologi Lokal. Solusi Nasional."</span>
        </div>
      </div>
    </footer>
  );
}