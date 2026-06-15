"use client";
import React, { useState } from 'react';

export default function ProtocoloSobrevivencia() {
  // Estado das checkboxes do Protocolo (Fase 1 a 4)
  const [fase1, setFase1] = useState({ filtro: false, osint: false, fiat: false, evasao_regional: false });
  const [fase2, setFase2] = useState({ agua: false, energia: false, comunicacao: false, medico: false });
  const [fase3, setFase3] = useState({ silencio: false, perimetro: false, evasao: false, fortificacao: false });
  const [fase4, setFase4] = useState({ desapego: false, mental: false, isolamento: false });

  // Calcula o progresso do usuário no protocolo (Opcional: você pode usar isso para uma barra de progresso)
  const totalItems = 11;
  const completedItems = Object.values({...fase1, ...fase2, ...fase3, ...fase4}).filter(Boolean).length;
  const progress = Math.round((completedItems / totalItems) * 100);

  return (
    <section id="protocol" className="scroll-mt-24 mb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Cabeçalho do Protocolo */}
      <div className="bg-red-900 text-white p-6 sm:p-8 border-l-4 border-red-500 mb-8 shadow-xl">
        <h2 className="text-3xl font-black mb-2 font-mono uppercase tracking-tight flex items-center gap-3">
          Protocolo de Contato Imediato (D-DAY)
        </h2>
        <p className="text-red-100 text-sm sm:text-base mb-4 font-mono">
          NÍVEL DE AMEAÇA: COLAPSO LOGÍSTICO IMINENTE // DIRETRIZ DE SOBREVIVÊNCIA CIVIL
        </p>
        <p className="text-gray-200 leading-relaxed text-sm">
          A assunção pública da falência do Estado em garantir a segurança territorial desencadeará um colapso imediato da cadeia de suprimentos global ("Just-in-Time"). As forças de segurança focarão na proteção de enclaves institucionais e zonas ricas, abandonando o tecido civil periférico. O protocolo abaixo é um manual pragmático de desvinculação da malha estatal e preparação para os primeiros 90 dias pós-Disclosure. Marque os itens conforme consolida sua independência.
        </p>
        
        {/* Barra de Progresso Tática */}
        <div className="mt-6 flex items-center gap-4">
          <div className="text-xs font-bold font-mono tracking-widest text-red-300">PREPARAÇÃO TÁTICA:</div>
          <div className="flex-1 bg-red-950 h-3 rounded-full overflow-hidden border border-red-800">
            <div 
              className="bg-red-500 h-full transition-all duration-500 ease-out flex items-center justify-end pr-1"
              style={{ width: `${progress}%` }}
            >
              <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
            </div>
          </div>
          <div className="text-xs font-mono font-bold">{progress}%</div>
        </div>
      </div>

      <div className="space-y-10 max-w-4xl mx-auto">
        
        {/* FASE 1: DESVINCULAÇÃO E INTELIGÊNCIA */}
        <div>
          <h3 className="font-mono font-bold text-lg mb-4 flex items-center gap-2 bg-slate-800 text-white px-4 py-2 inline-flex shadow-sm rounded-sm">
            <span className="text-red-500 animate-pulse">▶</span> FASE 1: INDEPENDÊNCIA E INFORMAÇÃO TÁTICA
          </h3>
          <div className="space-y-3 pl-2 sm:pl-4 border-l-2 border-slate-800 ml-2">
            
            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase1.filtro}
                onChange={() => setFase1({...fase1, filtro: !fase1.filtro})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Auditoria de Dados Brutos e Descarte Institucional</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Cesse o consumo de canais oficiais e mídia de massa. Durante a transição, o Estado aplicará táticas estritas de "Contenção de Pânico", ocultando a disrupção logística. A sua fonte de inteligência deve migrar imediatamente para dados brutos inalteráveis: radares de aviação abertos (ADS-B), tráfego marítimo global (AIS) e agregadores de inteligência de fontes abertas (OSINT). O colapso será visível na paralisação das frotas comerciais, não nos discursos.
                </div>
              </div>
            </label>

            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase1.osint}
                onChange={() => setFase1({...fase1, osint: !fase1.osint})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Redundância de Comunicação e Escuta (SDR)</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  A infraestrutura de internet civil (ISPs) sofrerá estrangulamento ou cortes táticos para evitar aglomerações. Adquira receptores SDR (Software Defined Radio) portáteis para varrer frequências de emergência, aviação e segurança local não criptografadas. Estabeleça uma malha de comunicação de contingência utilizando rádios UHF/VHF independentes e redes mesh offline (como Meshtastic) para coordenar a sua rede de apoio quando os telemóveis falharem.
                </div>
              </div>
            </label>

            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase1.fiat}
                onChange={() => setFase1({...fase1, fiat: !fase1.fiat})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Choque Bancário e Liquidez de Sobrevivência</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  O pânico causará "Bank Holidays" (congelamento instantâneo de saques e transferências) para evitar o derretimento do sistema financeiro. Converta capital digital em reservas fracionadas de moeda física para a primeira semana de choque. Mais importante: liquide investimentos não essenciais e transforme-os em suprimentos de altíssima liquidez para escambo logístico: antibióticos de amplo espectro, sistemas de purificação de água, baterias, ferramentas e combustível.
                </div>
              </div>
            </label>

            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase1.evasao_regional}
                onChange={() => setFase1({...fase1, evasao_regional: !fase1.evasao_regional})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Evasão Tática e Autonomia Mecânica</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Ignore rotas de fuga principais ou dependência de GPS; autoestradas tornar-se-ão armadilhas mortais de congestionamento (Chokepoints). Mantenha mapas topográficos físicos e trace rotas rurais secundárias. Para a frota de evacuação familiar, priorize veículos de engenharia analógica desprovidos de unidades de controle eletrônico (ECUs) complexas ou atualizações via satélite. A dependência de sistemas digitais o tornará vulnerável a bloqueios ou falhas sistêmicas na malha elétrica.
                </div>
              </div>
            </label>

          </div>
        </div>

        {/* FASE 2: PREPARAÇÃO LOGÍSTICA E AUTONOMIA MATERIAL */}
        <div>
          <h3 className="font-mono font-bold text-lg mb-4 flex items-center gap-2 bg-slate-800 text-white px-4 py-2 inline-flex shadow-sm rounded-sm">
            <span className="text-red-500 animate-pulse">▶</span> FASE 2: PREPARAÇÃO LOGÍSTICA
          </h3>
          <div className="space-y-3 pl-2 sm:pl-4 border-l-2 border-slate-800 ml-2">
            
            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase2.agua}
                onChange={() => setFase2({...fase2, agua: !fase2.agua})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Independência Hídrica e Nutricional Silenciosa</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  As bombas municipais e estações de tratamento de água colapsarão em menos de 72 horas por falta de manutenção e produtos químicos. Adquira sistemas de filtração por gravidade de alta capacidade e tabletes de purificação. Estoque provisões de alta densidade calórica (grãos, proteínas desidratadas, MREs) para um mínimo de 90 dias de isolamento (Shelter-in-Place). A preparação de alimentos não deve exigir fogo aberto ou emitir odores que denunciem a presença de suprimentos no seu perímetro.
                </div>
              </div>
            </label>

            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase2.energia}
                onChange={() => setFase2({...fase2, energia: !fase2.energia})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Micro-Rede Energética de Baixa Assinatura</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  A rede elétrica falhará em cascata. Descarte geradores a combustão tradicionais: o ruído mecânico atrai atenção predatória imediata e a cadeia de abastecimento de gasolina secará em dias. Estruture sistemas solares off-grid (painéis portáteis e bancos de bateria LiFePO4) dimensionados estritamente para manter cargas críticas: refrigeração de medicamentos, recarga de rádios de comunicação e lanternas táticas. O conforto térmico é secundário.
                </div>
              </div>
            </label>

            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase2.comunicacao}
                onChange={() => setFase2({...fase2, comunicacao: !fase2.comunicacao})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Rede de Comunicação Tática e OPSEC</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  As torres de celular (ERBs) desligarão assim que seus geradores de backup esgotarem o diesel (aprox. 48h). Estabeleça comunicação via rádios bidirecionais (VHF/UHF) limitados à sua rede local de confiança. Defina "Janelas de Comunicação" restritas para poupar bateria e aplique disciplina de segurança operacional (OPSEC): nunca transmita localizações exatas, nomes ou inventários pelo rádio. Proteja equipamentos reserva em gaiolas de Faraday testadas.
                </div>
              </div>
            </label>

            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase2.medico}
                onChange={() => setFase2({...fase2, medico: !fase2.medico})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Triagem Médica e Gestão Sanitária Urbana</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Em cenários de ruptura institucional, doenças infecciosas e saneamento precário matam mais do que a violência direta. Hospitais fecharão as portas sob contingência militar. Armazene kits de trauma avançados (IFAKs, torniquetes, hemostáticos) e antibióticos de amplo espectro. Estabeleça um sistema de descarte biológico rigoroso (latrinas secas com cal ou serragem) distante da fonte de água e das áreas de convivência para evitar surtos de cólera ou disenteria.
                </div>
              </div>
            </label>

          </div>
        </div>

        {/* FASE 3: DEFESA E EVASÃO URBANA */}
        <div>
          <h3 className="font-mono font-bold text-lg mb-4 flex items-center gap-2 bg-slate-800 text-white px-4 py-2 inline-flex shadow-sm rounded-sm">
            <span className="text-red-500 animate-pulse">▶</span> FASE 3: DEFESA DE PERÍMETRO E EVASÃO
          </h3>
          <div className="space-y-3 pl-2 sm:pl-4 border-l-2 border-slate-800 ml-2">
            
            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase3.silencio}
                onChange={() => setFase3({...fase3, silencio: !fase3.silencio})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Doutrina do Homem-Cinzento (Grey Man) e Disciplina de Assinatura</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Oculte qualquer indício de preparação. Num cenário de escassez absoluta, a ostentação de recursos transforma o seu perímetro num alvo primário. Aplique "Disciplina de Assinatura": bloqueie as frestas das janelas (blackout total) para evitar vazamento de luz durante apagões, cozinhe apenas em horários de menor propagação de odor e adote uma postura pública de vulnerabilidade mimetizada. Pareça tão faminto, esgotado e assustado quanto a multidão ao seu redor.
                </div>
              </div>
            </label>

            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase3.fortificacao}
                onChange={() => setFase3({...fase3, fortificacao: !fase3.fortificacao})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Endurecimento do Perímetro (Target Hardening)</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Atrasar a invasão é a essência da defesa civil passiva. Reforce os pontos de entrada críticos da sua residência. Substitua os parafusos padrão das dobradiças e fechaduras por equivalentes de 3 a 4 polegadas que penetrem na alvenaria, instale películas anti-estilhaço (security film) nas janelas do piso térreo e remova escadas ou ferramentas do quintal que possam facilitar o acesso ao telhado. O objetivo não é ser impenetrável, mas ser um alvo difícil o suficiente para que saqueadores oportunistas busquem presas mais fáceis.
                </div>
              </div>
            </label>

            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase3.perimetro}
                onChange={() => setFase3({...fase3, perimetro: !fase3.perimetro})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Coalizão de Zona e Rondas de Dissuasão (Micro-Tribalismo)</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Quando os serviços de emergência (112/190) colapsarem na "Janela Crítica de 72 Horas", a sobrevivência solitária a longo prazo torna-se estatisticamente improvável. Forme alianças de contingência estritamente com vizinhos imediatos ou indivíduos com competências vitais (médicos, ex-militares, engenheiros). Estabeleça protocolos de vigília e rondas ostensivas em turnos de vigilância mútua (overwatch). A presença coordenada na rua é o principal fator de dissuasão psicológica contra multidões desesperadas oriundas dos centros urbanos.
                </div>
              </div>
            </label>

            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase3.evasao}
                onChange={() => setFase3({...fase3, evasao: !fase3.evasao})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Gatilhos de Abandono e Vetor de Evasão (INCH / Bug Out)</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  O abandono do perímetro fortificado é a medida de último recurso. Defina "Gatilhos de Evasão" claros com a sua família com antecedência (ex: incêndios incontroláveis no bairro ou rutura total do perímetro de bairro). Mantenha mochilas de evacuação rápida pesadas prontas (Bags INCH - <em>I'm Never Coming Home</em>) e veículos previamente abastecidos. Evite artérias rodoviárias principais, que estarão em estado de estrangulamento terminal (Gridlock). Utilize as rotas secundárias pré-mapeadas em direção a um Ponto de Recuo (Bug Out Location) isolado.
                </div>
              </div>
            </label>

          </div>
        </div>

        {/* FASE 4: HIGIENE ONTOLÓGICA E GESTÃO DE DISSONÂNCIA COGNITIVA */}
        <div>
          <h3 className="font-mono font-bold text-lg mb-4 flex items-center gap-2 bg-slate-800 text-white px-4 py-2 inline-flex shadow-sm rounded-sm">
            <span className="text-red-500 animate-pulse">▶</span> FASE 4: HIGIENE ONTOLÓGICA AND RESILIÊNCIA COGNITIVA
          </h3>
          <div className="space-y-3 pl-2 sm:pl-4 border-l-2 border-slate-800 ml-2">
            
            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase4.desapego}
                onChange={() => setFase4({...fase4, desapego: !fase4.desapego})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Aniquilação do Paradigma Antropocêntrico e Desvinculação do Estado</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Processe e aceite de forma pragmática a quebra definitiva do modelo geopolítico tradicional. A confirmação documental de que a segurança e o espaço aéreo global são sumariamente sonegados por tecnologias de matriz exógena invalida o contrato social básico de proteção estatal. Renuncie imediatamente a qualquer expectativa de intervenção, resgate ou assistência governamental estruturada. A superação imediata desta dissonância cognitiva é o divisor crítico entre os indivíduos que sofrerão paralisia psicológica e os operadores que agirão de forma adaptativa.
                </div>
              </div>
            </label>

            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase4.mental}
                onChange={() => setFase4({...fase4, mental: !fase4.mental})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Comando de Crise Emocional e Manutenção de Rotinas Dinâmicas</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Compreenda que o desespero e o luto pelo antigo modo de vida não possuem valor calórico e drenam recursos críticos de tomada de decisão. O líder do núcleo familiar ou do grupo de apoio deve impor uma conduta baseada em dados e estabilidade emocional. Estabeleça e aplique rotinas diárias rígidas de manutenção de inventário, checagem física de perímetros, purificação de água e avaliações táticas dentro do abrigo. O cérebro humano necessita de metas operacionais contínuas de curto prazo para mitigar a depressão e a letargia geradas pelo choque existencial.
                </div>
              </div>
            </label>

            <label className="flex items-start gap-4 p-4 bg-white border border-gray-200 cursor-pointer hover:bg-red-50 transition-colors group rounded-r-md">
              <input 
                type="checkbox" 
                checked={fase4.isolamento}
                onChange={() => setFase4({...fase4, isolamento: !fase4.isolamento})}
                className="mt-1 w-5 h-5 accent-red-700 cursor-pointer flex-shrink-0" 
              />
              <div>
                <div className="font-bold text-base font-mono group-hover:text-red-700 transition-colors">Isolamento Cognitivo contra a Histéria Coletiva e o Niilismo Social</div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                  O colapso simultâneo das estruturas socioeconômicas, financeiras e filosóficas tradicionais empurrará o tecido civil não preparado para duas reações extremas: o fanatismo histérico ou o niilismo destrutivo. Proteja a sua mente e a dos seus dependentes contra o contágio psicológico dessas massas desancoradas. Interrompa interações não essenciais com indivíduos tomados pelo pânico e descarte debates filosóficos estéreis nas frequências de rádio. O foco absoluto do grupo deve ser restrito à manutenção da coesão interna e à resiliência física do perímetro.
                </div>
              </div>
            </label>

          </div>
        </div>

      </div>
    </section>
  );
}