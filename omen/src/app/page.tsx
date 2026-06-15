import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Archives from '../components/Archives';
import Projection from '../components/Projection';
import Terminal from '../components/Terminal';
import Protocol from '../components/Protocol';
import NuforcMap from '../components/nUFOrcMap';
import UplinkRecords from '../components/UplinkRecords'

export default function Home() {
  return (
    <main className="bg-[#f8f9fa] text-[#1f2937] font-sans antialiased leading-relaxed min-h-screen">
      <Navbar />
      <Hero />
      <Timeline />
      <Archives />
      <Projection />
      <Terminal />
      <Protocol />
      <NuforcMap />
      <UplinkRecords />

      {/* O motor de renderização chamará os próximos blocos aqui */}
      
    </main>
  );
}