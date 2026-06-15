'use client';
import { useState } from 'react';

export default function NuforcMapBlock() {
  const [isInteractive, setIsInteractive] = useState(false);

  return (
    <section id="UFOmap" className="scroll-mt-24 mb-20 border-b-4 border-docink pb-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      <div className="flex items-center gap-4 mb-6">
        <div className="px-3 py-1 bg-alert text-white font-mono text-xs font-bold uppercase tracking-wider">
          Geolocalização: Dados Ativos
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-none">
        Mapa de <span className="text-alert">Avistamentos</span>
      </h2>

      {/* Container Adaptativo com estado de interação */}
      <div className="relative w-full aspect-[9/16] md:aspect-[16/9] overflow-hidden border-4 border-black bg-black">
        
        {/* Camada de sobreposição (Overlay) */}
        {!isInteractive ? (
          <div 
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 cursor-pointer"
            onClick={() => setIsInteractive(true)}
          >
            <span className="text-white font-mono font-bold uppercase border-2 px-4 py-2 hover:bg-alert transition-colors">
              Tocar para Interagir
            </span>
          </div>
        ) : (
          <button 
            onClick={() => setIsInteractive(false)}
            className="absolute top-2 right-2 z-20 bg-alert text-white font-mono text-xs px-3 py-2 uppercase hover:bg-black transition-colors border border-white"
          >
            Fechar Mapa
          </button>
        )}

        {/* Iframe com corte e controle de ponteiro */}
        <iframe
          src="https://nuforc.org/map/"
          className={`absolute -top-[120px] left-0 w-full h-[calc(100%+120px)] border-none transition-opacity ${
            isInteractive ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          title="NUFORC Map"
          scrolling="no"
        />
      </div>

      <div className="mt-8 bg-gray-200 p-6 border-l-4 border-alert shadow-sm">
        <p className="font-mono text-sm">
          Dados extraídos via interface de monitoramento. O deslocamento de coordenadas reflete a frequência de relatos nos últimos 30 dias. 
          {isInteractive ? ' Modo de navegação ativo.' : ' Clique no mapa para desbloquear a interação.'}
        </p>
      </div>
    </section>
  );
}