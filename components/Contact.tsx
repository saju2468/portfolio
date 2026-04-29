"use client";

import { Mail, User, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-24 py-32 md:py-48 border-t border-grid-line bg-background relative z-10 mt-12 md:mt-0">
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <span className="font-mono text-[20vw] font-black leading-none">@</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        <div className="lg:col-span-12 flex flex-col gap-6 mb-12">
          <div className="technical-label flex items-center gap-4">
            <Mail className="w-4 h-4 text-accent" />
            <span>SYSTEM_CONTACT_BRIDGE_v1.2</span>
          </div>
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
            Start a.<br />
            <span className="text-accent underline decoration-4 md:decoration-8 underline-offset-12">Session.</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-60 max-w-2xl tracking-tight">
            For industrial architecture inquiries, system optimizations, or global collaborations, initiate the handshake protocol below.
          </p>
        </div>
        <div className="lg:col-span-8">
          <form className="flex flex-col gap-10 w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3">
                <label className="technical-label text-[10px]! opacity-40">01_USER_NAME</label>
                <div className="flex items-center gap-4 border-b border-grid-line p-4 focus-within:border-accent transition-all group">
                  <span className="technical-label text-accent! font-black opacity-0 group-focus-within:opacity-100 group-focus-within:animate-pulse transition-opacity">USER: {">"}</span>
                  <input type="text" required placeholder="INPUT NAME..." className="w-full bg-transparent outline-none text-xl font-black uppercase tracking-tighter transition-all placeholder:text-foreground/50" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="technical-label text-[10px]! opacity-40">02_EMAIL_PROTOCOL</label>
                <div className="flex items-center gap-4 border-b border-grid-line p-4 focus-within:border-accent transition-all group">
                  <span className="technical-label text-accent! font-black opacity-0 group-focus-within:opacity-100 group-focus-within:animate-pulse transition-opacity">MAIL: {">"}</span>
                  <input type="email" required placeholder="INPUT EMAIL..." className="w-full bg-transparent outline-none text-xl font-black uppercase tracking-tighter transition-all placeholder:text-foreground/50" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="technical-label text-[10px]! opacity-40">03_SUBJECT_MANIFEST</label>
              <div className="flex items-center gap-4 border-b border-grid-line p-4 focus-within:border-accent transition-all group">
                <span className="technical-label text-accent! font-black opacity-0 group-focus-within:opacity-100 group-focus-within:animate-pulse transition-opacity">SUBJ: {">"}</span>
                <input type="text" placeholder="INPUT SUBJECT..." className="w-full bg-transparent outline-none text-xl font-black uppercase tracking-tighter transition-all placeholder:text-foreground/50" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="technical-label text-[10px]! opacity-40">04_MESSAGE_DATA_BUFFER</label>
              <div className="flex flex-col gap-3 border border-grid-line p-6 focus-within:border-accent transition-all group">
                <span className="technical-label text-accent! font-black opacity-40 group-focus-within:opacity-100 group-focus-within:animate-pulse transition-opacity">DATA_STREAM: {">"}</span>
                <textarea required placeholder="TRANSMIT MESSAGE..." rows={4} className="bg-transparent outline-none text-lg font-medium tracking-tight transition-all resize-none placeholder:text-foreground/50" />
              </div>
            </div>
            <button className="w-full py-8 border-2 border-accent text-accent font-black text-xs md:text-2xl uppercase tracking-[0.2em] md:tracking-[0.5em] transition-all flex items-center justify-center gap-6 group overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(255,77,0,0.1)] hover:shadow-none hover:bg-accent hover:text-white" tabIndex={0}>
              <span className="relative z-10">INITIATE_TRANSMISSION</span>
              <Send className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4" />
            </button>
          </form>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-12">
          <div className="border border-grid-line p-10 space-y-8 h-fit bg-foreground/[0.01] dark:bg-white/[0.01]">
            <div className="space-y-4">
              <span className="technical-label text-[8px]! opacity-40">DIRECT_NODES</span>
              <div className="flex flex-col gap-3">
                <a href="mailto:sajinpp77@gmail.com" className="group flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-grid-line flex items-center justify-center group-hover:border-accent transition-colors">
                    <Mail className="w-3 h-3 group-hover:text-accent" />
                  </div>
                  <span className="font-mono text-xs opacity-60 group-hover:opacity-100 group-hover:text-accent transition-all">Sajinpp@gmail.com</span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-grid-line flex items-center justify-center">
                    <User className="w-3 h-3" />
                  </div>
                  <span className="font-mono text-xs opacity-60">@sajin</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8 border-t border-grid-line">
              <span className="technical-label text-[8px]! opacity-40">AVAILABILITY_STATE</span>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_10px_#22c55e]" />
                <span className="technical-label text-[10px]! font-black">ACTIVE_FOR_NEW_VENTURES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
