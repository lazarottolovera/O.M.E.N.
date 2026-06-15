export default function Hero() {
  return (
    <header id="context" className="scroll-mt-24 mb-20 border-b-4 border-docink pb-10 pt-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="px-3 py-1 bg-alert text-white font-mono text-xs font-bold uppercase tracking-wider">Nível de Ameaça: Crítico</div>
        <div className="font-mono text-sm text-accent">Desclassificado: Maio 2026</div>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">O Protocolo <br /> <span className="text-alert">de Contato</span></h1>
      
      <p className="text-xl md:text-2xl font-bold mb-8 text-accent">A Verdade Que Não Conseguem Omitir Desde 2024</p>
      
      <div className="bg-gray-200 p-6 border-l-4 border-alert shadow-sm mb-8">
        <h3 className="font-mono font-bold text-alert mb-2 flex items-center gap-2"><span>Aviso Legal de Sistema</span></h3>
        <p className="font-mono text-sm">O conteúdo deste documento contém informações recentemente desclassificadas, vazamentos de audiências do Congresso Americano e análises do sistema militar PURSUE. Se você não tem estômago para a verdade, feche este arquivo agora. A ignorância é uma escolha. A sobrevivência, não.</p>
      </div>
    </header>
  );
}