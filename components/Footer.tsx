import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 md:px-24 py-16 flex flex-col md:flex-row justify-between items-center border-t border-grid-line gap-12">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <span className="font-black tracking-tighter text-3xl uppercase leading-none">sajin</span>
        <span className="technical-label opacity-30 !text-[8px] tracking-[0.5em]">FRONTEND ENGINEER CORE // 2024</span>
      </div>
      <div className="flex gap-12">
        <Link className="technical-label !text-[10px] hover:text-accent transition-colors" href="/projects">Archive</Link>
        <Link className="technical-label !text-[10px] hover:text-accent transition-colors" href="/experience">Experience</Link>
        <span className="technical-label !text-[10px] opacity-20">Terms_01</span>
      </div>
      <div className="flex flex-col gap-1 items-center md:items-end technical-label !text-[8px] opacity-60 font-mono text-center md:text-right">
        <div className="flex gap-4 items-center">
          <span>SYSTEM_LATENCY: 0MS</span>
          <div className="w-1 h-1 rounded-full bg-[#22c55e] animate-pulse" />
          <span>PAGE_LOAD: 0.00S</span>
        </div>
        <div className="mt-1 opacity-40">
          TIMESTAMP: 0000-00-00T00:00:00Z<br />COORD: 12.9716° N, 77.5946° E
        </div>
      </div>
    </footer>
  );
}
