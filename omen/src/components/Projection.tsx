"use client";
import React from 'react';
import { Target, Radio, Zap, AlertTriangle, Fuel, ShoppingCart, TrendingDown } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale,
} from 'chart.js';
import { Line, Radar } from 'react-chartjs-2';

// Registrando módulos avançados do Chart.js
ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, BarElement, 
  RadialLinearScale, Title, Tooltip, Legend, Filler
);

// Configuração Global de Fontes do Gráfico
ChartJS.defaults.font.family = "'JetBrains Mono', 'Courier New', monospace";
ChartJS.defaults.color = '#9ca3af';

export default function Projection() {
  
  // --- MOCK DATA: GRÁFICO PRINCIPAL ---
  const mainChartData = {
    labels: ['T-0', 'T+6h', 'T+12h', 'T+18h', 'T+24h', 'T+36h', 'T+48h', 'T+60h', 'T+72h'],
    datasets: [
      {
        label: 'Pânico de Saque (Alimentos/Água)',
        data: [100, 120, 180, 250, 310, 350, 200, 50, 10], 
        borderColor: '#10b981', 
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        hoverPointRadius: 5,
      },
      {
        label: 'Evasão Urbana (Demanda Combustível)',
        data: [100, 150, 250, 400, 484, 150, 20, 0, 0],
        borderColor: '#f59e0b',
        borderDash: [5, 5],
        tension: 0.3,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Ruptura Energética (Grid Failure)',
        data: [100, 98, 95, 80, 40, 10, 5, 2, 2],
        borderColor: '#3b82f6',
        tension: 0,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Incapacidade de Resposta Estatal',
        data: [0, 10, 30, 60, 90, 100, 100, 100, 100],
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.05)',
        fill: true,
        tension: 0.2,
        borderWidth: 2,
        pointRadius: 0,
      }
    ]
  };

  const mainChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index' as const, intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        titleColor: '#fff',
        bodyColor: '#d1d5db',
        borderColor: '#374151',
        borderWidth: 1,
        padding: 12,
        boxPadding: 5,
        usePointStyle: true,
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.parsed.y}%`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        grid: { color: 'rgba(55, 65, 81, 0.3)' },
        ticks: { callback: (value: any) => `${value}%`, stepSize: 100 }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#6b7280' }
      }
    }
  };

  // --- MOCK DATA: GRÁFICO RADAR ---
  const radarData = {
    labels: ['Comunicação', 'Logística Água', 'Energia Grid', 'Segurança Civil', 'Saúde', 'Transporte Food'],
    datasets: [
      {
        label: 'Pré-Disclosure (T-0)',
        data: [95, 90, 98, 85, 80, 92],
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderColor: 'rgba(59, 130, 246, 0.5)',
        borderWidth: 1,
      },
      {
        label: 'Pós-Shock (T+48h)',
        data: [10, 5, 20, 15, 30, 2],
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        borderColor: '#ef4444',
        borderWidth: 2,
        pointBackgroundColor: '#ef4444',
      }
    ]
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      r: {
        angleLines: { color: 'rgba(55, 65, 81, 0.5)' },
        grid: { color: 'rgba(55, 65, 81, 0.5)' },
        pointLabels: { color: '#d1d5db', font: { size: 10 } },
        ticks: { display: false },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  return (
    <section id="projection" className="scroll-mt-24 mb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* HEADER DA SEÇÃO */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#b91c1c] pb-4 mb-10 mt-12">
        <h2 className="text-3xl md:text-4xl font-black font-mono text-[#1f2937]">
          <span className="text-[#b91c1c]"></span> SITREP: Anomalia Operacional
        </h2>
        <div className="flex items-center gap-3 bg-[#1f2937] text-white p-2 border border-gray-700">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </span>
          <span className="font-mono text-xs font-bold tracking-widest animate-pulse">UPLINK ATIVO</span>
        </div>
      </div>

      {/* DASHBOARD PRINCIPAL */}
      <div className="bg-black border border-gray-800 p-1 md:p-2 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        
        {/* Top Bar do Terminal */}
        <div className="bg-gray-900 border-b border-gray-800 p-3 flex flex-wrap gap-2 justify-between items-center font-mono text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span>MODO: OSINT/PREDITIVO</span>
            <span className="text-red-500 font-bold">NÍVEL DE AMEAÇA: CRÍTICO (DEFCON 2)</span>
          </div>
          <div>MODELAGEM: PURSUE_v4.1</div>
        </div>

        {/* Área de Conteúdo Empilhada */}
        <div className="p-4 md:p-6 bg-gradient-to-b from-gray-950 to-black space-y-6">
          
          {/* LINHA 1: Fraude SETI + Incursões Táticas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-gray-700 bg-gray-900/50 p-5 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 text-gray-800 group-hover:text-[#b91c1c]/10 transition-colors duration-500">
                <Radio size={120} strokeWidth={1} />
              </div>
              <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3 relative z-10">
                <Radio className="text-[#b91c1c]" size={24} />
                <h3 className="text-xl font-bold font-mono text-white">A Fraude do 3I/ATLAS & SETI</h3>
              </div>
              <div className="text-sm text-gray-300 font-mono space-y-3 text-justify relative z-10">
                <p>A obsessão institucional em varrer o espectro de 1-9 GHz do visitante interestelar <strong className="text-white">3I/ATLAS</strong> expõe nossa miopia. Procurar emissões de rádio primárias pressupõe uma Inteligência (NHI) limitada à nossa física clássica.</p>
                <p>Veículos que manipulam a métrica do espaço-tempo possivelmente <strong className="text-[#b91c1c]">não irradiam telemetria em bandas estreitas</strong> limitadas por transformadas de Fourier convencionais. A ausência de rádio não é ausência de tecnologia; é a prova da nossa obsolescência.</p>
              </div>
            </div>

            <div className="border border-gray-700 bg-gray-900/50 p-5 relative group overflow-hidden">
              <div className="absolute -right-5 -bottom-5 text-gray-800 group-hover:text-amber-500/10 transition-colors duration-500">
                <Target size={100} strokeWidth={1} />
              </div>
              <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3 relative z-10">
                <Target className="text-amber-500" size={24} />
                <h3 className="text-xl font-bold font-mono text-white">Incursões Táticas & Transmeio</h3>
              </div>
              <div className="text-sm text-gray-300 font-mono space-y-3 text-justify relative z-10">
                <p><strong className="text-white">CERCO DE LANGLEY (2023):</strong> Enxames anômalos operando em coordenação total por 17 noites sobre a base de F-22s furtivos. Paralisia total das defesas C-UAS aéreas continental.</p>
                <p><strong className="text-white">DOW-UAP FILES:</strong> Arquivos formais atestam veículos executando mergulhos da atmosfera para o oceano <strong className="text-amber-400">sem quebra acústica ou atrito termodinâmico detectável via FLIR</strong>. A aerodinâmica humana foi invalidada.</p>
              </div>
            </div>
          </div>

          {/* LINHA 2: Risco Nuclear Assimétrico */}
          <div className="border-2 border-red-900 bg-black p-5 shadow-[0_0_15px_rgba(185,28,28,0.2)]">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3 pb-2 border-b border-red-900">
              <div className="flex items-center gap-3">
                <Zap className="text-red-500 animate-pulse" size={24} />
                <h3 className="text-lg font-bold font-mono text-red-100 uppercase tracking-tight">Risco Nuclear Assimétrico (PANTEX)</h3>
              </div>
              <span className="text-xs text-red-500 font-bold ml-auto md:ml-auto md:mr-0">VETOR CRÍTICO DE SEGURANÇA</span>
            </div>
            <div className="text-sm text-gray-300 font-mono text-justify">
              <p className="mb-2">Vínculo indissociável entre frotas UAP e a infraestrutura atômica terrestre. O espaço aéreo da Usina Nuclear Pantex (Texas) — epicentro de montagem de núcleos de plutônio primários — sofreu violações impunes.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-400 border-l-2 border-red-800 ml-1">
                <li>Vigilância em pairar absoluto sobre reatores, burlando radares militares e defesas cinéticas anti-drone.</li>
                <li>Mapeamento de campo confirma risco exógeno de <strong className="text-red-400">injetar ataques cibernéticos wireless</strong> diretamente na rede isolada (Air-Gapped) da usina a partir da atmosfera.</li>
              </ul>
            </div>
          </div>

          {/* LINHA 3: Gráfico Principal de Projeção */}
          <div className="border border-gray-700 bg-black p-5 relative overflow-hidden group">
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_50%,rgba(0,0,0,1)_50%)] bg-[size:100%_4px]"></div>
            
            <div className="flex justify-between items-center mb-5 relative z-10">
              <div className="flex items-center gap-3">
                <TrendingDown className="text-[#b91c1c]" size={22} />
                <h3 className="text-xl font-bold font-mono text-white tracking-tight">Projeção algorítmica de Colapso Sistêmico (72h)</h3>
              </div>
              <span className="text-xs bg-[#b91c1c] text-white px-2 py-1 font-mono font-bold animate-pulse hidden sm:inline-block">LIVE PREDICTION</span>
            </div>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 font-mono text-[10px] sm:text-xs relative z-10 border-b border-gray-800 pb-4">
              <div className="flex items-center gap-2"><span className="w-3 h-3 border-2 border-[#10b981] bg-[#10b981]/10"></span><span className="text-green-300">Pânico de Saque</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 border-2 border-[#f59e0b] border-dashed"></span><span className="text-amber-300">Combustível</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 border-2 border-[#3b82f6]"></span><span className="text-blue-300">Ruptura Elétrica</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 border-2 border-[#ef4444] bg-[#ef4444]/10"></span><span className="text-red-300">Paralisia Estatal</span></div>
            </div>

            <div className="relative h-[300px] sm:h-[400px] w-full z-10">
              <Line data={mainChartData} options={mainChartOptions} />
            </div>
          </div>

          {/* LINHA 4: Radar e Vetores Logísticos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="border border-gray-700 bg-gray-900/50 p-4 flex flex-col items-center">
              <h4 className="text-xs font-bold font-mono text-gray-400 mb-3 tracking-widest uppercase text-center border-b border-gray-800 w-full pb-2">Ruptura de Resposta Estatal</h4>
              <div className="relative h-48 w-full max-w-[250px] mx-auto mt-2">
                <Radar data={radarData} options={radarOptions} />
              </div>
              <div className="flex gap-4 mt-auto pt-4 font-mono text-[10px]">
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-blue-500/20 border border-blue-500/50"></span>T-0 (Pré-Shock)</div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-red-500 border border-red-500"></span>T+48h (Colapso)</div>
              </div>
            </div>

            <div className="lg:col-span-2 border border-gray-700 bg-gray-900/50 p-4 flex flex-col">
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-800">
                <h4 className="text-xs font-bold font-mono text-gray-400 tracking-widest uppercase">Vetores de Paralisia Logística (Predição)</h4>
                <AlertTriangle className="text-red-500 animate-pulse" size={16} />
              </div>
              
              <div className="space-y-4 font-mono text-xs flex-1 flex flex-col justify-center">
                <div className="bg-black/50 p-3 border border-gray-800 flex items-center gap-4">
                  <Fuel className="text-amber-500 flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <div className="text-gray-200 font-bold text-sm">Esgotamento de Bombas de Combustível</div>
                    <div className="text-gray-500 text-[11px] mt-1">Pânico estrutural e fuga urbana impedem reabastecimento via malha rodoviária.</div>
                  </div>
                  <span className="text-amber-400 font-bold text-sm bg-amber-900/20 px-2 py-1 border border-amber-900">≤ 48h</span>
                </div>

                <div className="bg-black/50 p-3 border border-gray-800 flex items-center gap-4">
                  <ShoppingCart className="text-green-500 flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <div className="text-gray-200 font-bold text-sm">Exaustão de Estoque Varejista (Saque Total)</div>
                    <div className="text-gray-500 text-[11px] mt-1">Ruptura da cadeia Just-in-Time alimentar civil devido ao abandono de postos logísticos.</div>
                  </div>
                  <span className="text-green-400 font-bold text-sm bg-green-900/20 px-2 py-1 border border-green-900">≤ 24h</span>
                </div>

                <div className="bg-black/50 p-3 border border-red-950 flex items-center gap-4">
                  <TrendingDown className="text-red-500 flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <div className="text-red-100 font-bold text-sm">Colapso de Confiança Monetária (Fiat Crash)</div>
                    <div className="text-gray-500 text-[11px] mt-1">Interrupção sistêmica de transações digitais, pânico bancário e rejeição de moedas estatais.</div>
                  </div>
                  <span className="text-red-400 font-bold text-sm animate-pulse bg-red-900/20 px-2 py-1 border border-red-900">IMEDIATO</span>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}