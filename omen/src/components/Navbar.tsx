import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#f8f9fa] border-b-2 border-[#1f2937] z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex-shrink-0 flex items-center gap-2">
                    <span className="text-2xl font-bold font-mono text-alert">⚠</span>
                    <span className="font-mono font-bold tracking-widest text-lg">O.M.E.N.</span>
                </div>
                <div className="hidden md:flex space-x-8 font-mono text-sm">
                    <a href="#context" className="hover:text-alert transition-colors">HOME</a>
                    <a href="#timeline" className="hover:text-alert transition-colors">ARQUIVOS</a>
                    <a href="#projection" className="hover:text-alert transition-colors">PROJEÇÕES</a>
                    <a href="#terminal" className="hover:text-alert transition-colors">TERMINAL</a>
                    <a href="#protocol" className="text-alert font-bold hover:underline">PROTOCOLO</a>
                    <a href="#UFOmap" className="hover:text-alert transition-colors">MAPA UAP</a>
                    <a href="#uplinkpursue" className="hover:text-alert transition-colors animate-pulse text-green-600 font-bold">PURSUE (UPLINK)</a>
                </div>
            </div>
        </div>
    </nav>
  );
}