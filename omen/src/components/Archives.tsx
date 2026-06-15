"use client";
import React from 'react';

const bancoDeDados = [
  {
    id: "apollo",
    date: "1947 - 1972",
    tag: "FBI / NASA ARCHIVES",
    title: "PROVA HISTÓRICA: CASO 62-HQ E APOLLO 17",
    dossier: <>O "Caso FBI 62-HQ-83894" documenta o monitoramento governamental ininterrupto de anomalias aéreas desde 1947. Além disso, uma fotografia militar desclassificada da missão Apollo 17 (Dez 1972) exibe nitidamente três fontes luminosas exógenas e de origem não humana monitorando as atividades da NASA sobre o terreno lunar.</>,
    translation: "A presença deles precede o advento de nossos satélites artificiais por gerações. A humanidade sempre esteve sob intensa vigilância externa durante seus avanços espaciais e testes atômicos.",
    isCritical: false,
    url: "https://vault.fbi.gov/UFO"
  },
  {
    id: "gulf",
    date: "OUTUBRO DE 2020",
    tag: "PURSUE / MISREP (DOW)",
    title: "A ROTA DO PETRÓLEO: GOLFO ÁRABE E ADEN",
    dossier: <>Desclassificação PURSUE exibe o arquivo <strong>DOW-UAP-D63</strong> (Estreito de Ormuz) e o <strong>DOW-UAP-D5</strong> (Golfo Árabe), detalhando vigilância militar contínua sobre UAPs pairando acima do oceano. Adicionalmente, registros <em>Range Fouler</em> (ex: <strong>DOW-UAP-D44</strong>, Gulf of Aden) descrevem "objetos redondos, frios ao infravermelho" realizando manobras erráticas em pleno estreito naval.</>,
    translation: "Há intenção estrutural explícita. As frotas exógenas estão mapeando ativamente e fisicamente os gargalos de transporte de combustíveis fósseis (petróleo) da Terra.",
    isCritical: false,
    url: "#"
  },
  {
    id: "iraq",
    date: "MAIO DE 2022",
    tag: "USCENTCOM / PURSUE (DOW)",
    title: "DOW-UAP-D12/D14: O \"VOO DIRIGIDO\" NO IRAQUE",
    dossier: <>Dois relatórios formais de missão do teatro do Oriente Médio (Iraque, Maio 2022) demonstram oficiais rastreando UAPs e emitindo parecer técnico formal atestando "voo dirigido" e coordenado. Adicionalmente, o relatório <strong>DOW-UAP-PR20</strong> (não-resolvido, do USCENTCOM) confirma anomalias insolúveis pela força americana no Kuwait em períodos adjacentes.</>,
    translation: "Militares confessam que os fenômenos não são drones perdidos ou falhas de radar; são naves dotadas de rotas de navegação inteligentes operando em teatros de guerra ativos da humanidade.",
    isCritical: false,
    url: "#"
  },
  {
    id: "grusch",
    date: "JULHO DE 2023",
    tag: "REGISTRO DO CONGRESSO",
    title: "TESTEMUNHO SOB JURAMENTO: GRUSCH, GRAVES E FRAVOR",
    dossier: <>David Grusch (ex-NRO) afirma perante o Congresso a existência de programas clandestinos de engenharia reversa e recuperação física de "biológicos não-humanos". Os pilotos Comandante Fravor e Ryan Graves detalham a supremacia do objeto "Tic Tac" e os "cubos dentro de esferas" imobilizando os caças F-18.</>,
    translation: "Veteranos de combate, sob risco literal de prisão criminal (perjúrio), afirmaram ao legislativo americano que a física como a conhecemos já foi superada e o governo mantém as provas trancadas em hangares corporativos.",
    isCritical: false,
    tagColor: "bg-[#b91c1c]",
    url: "https://oversight.house.gov/release/national-security-subcommittee-to-hold-hearing-on-unidentified-anomalous-phenomena%EF%BF%BC/"
  },
  {
    id: "aaro",
    date: "MARÇO DE 2024",
    tag: "PENTÁGONO / AARO",
    title: "A FARSA DO RELATÓRIO AARO (VOL. 1)",
    dossier: <>O AARO (escritório do Pentágono para anomalias) lançou um relatório vergonhoso de 63 páginas negando veementemente qualquer visitação ou recuperação alienígena. Especialistas revelaram que o AARO atuou como uma barreira cega e sumidouro de dados, chegando a citar abertamente wikis de internet para forçar narrativas paliativas frente ao Congresso.</>,
    translation: "O escritório de \"transparência\" militar atuou estruturalmente como uma máquina de gás (gaslighting) contra a população civil, tentando forçar o mercado financeiro e a imprensa a olhar para o outro lado.",
    isCritical: false,
    url: "https://media.defense.gov/2024/Mar/08/2003409233/-1/-1/0/DOPSR-2024-0263-AARO-HISTORICAL-RECORD-REPORT-VOLUME-1-2024.PDF"
  },
  {
    id: "fbi",
    date: "2023 - AGO 2024",
    tag: "FBI / PURSUE EMAILS",
    title: "SUPRESSÃO DO FBI E O \"ELIPSOIDE\"",
    dossier: <>Em setembro de 2023, o FBI analisa registros de um enorme "objeto metálico bronzeado elipsoidal" materializando-se via raios de luz na atmosfera. Contudo, e-mails classificados do lote de desclassificação (como o <strong>DOW-UAP-D52</strong> de agosto de 2024) comprovam que o FBI e agências adjacentes suprimiam ativamente dados de campo e os remetiam com tarjas restritivas massivas para neutralizar o ciclo investigativo.</>,
    translation: "Os objetos estão literalmente dobrando o espaço-tempo local (materialização luminosa síncrona), operando física quântica macroscópica em céus abertos enquanto o FBI varre os sensores para debaixo do tapete.",
    isCritical: false,
    url: "https://vault.fbi.gov/UFO"
  },
  {
    id: "indo_pacific",
    date: "MARÇO DE 2023",
    tag: "COMANDO INDO-PACÍFICO",
    title: "DOW-UAP-D51: O COLAPSO NO INDO-PACÍFICO",
    dossier: <>Arquivo <strong>DOW-UAP-D51</strong> revela e-mails trocados no fuso do Pacífico em março de 2023 detalhando a confusão sistêmica de operadores militares ao observar e rastrear UAPs operando com a morfologia de uma "bola de futebol americano" na costa do Japão. O relatório demonstra a falha da cadeia de comando diante do comportamento "transmeio" (mergulhos não-balísticos da atmosfera para o oceano sem quebra acústica ou atrito).</>,
    translation: "Toda a doutrina naval mundial baseada em aerodinâmica e hidrodinâmica foi invalidada instantaneamente pelos artefatos que não sofrem interação mecânica com nossos oceanos.",
    isCritical: false,
    url: "#"
  },
  {
    id: "langley",
    date: "DEZ 2023 - DEZ 2024",
    tag: "NORAD / GUARDA COSTEIRA",
    title: "A INVASÃO DA BASE DE LANGLEY E O MAR DE NEW JERSEY",
    dossier: <>Base Aérea Conjunta de Langley (coração do Comando de Combate) foi invadida por 17 noites consecutivas por enxames anômalos descritos como "esteiras celestes". Os caríssimos caças furtivos F-22 tiveram de ser evacuados. Um ano depois (dezembro/2024), esquadrilhas de objetos intimidaram fisicamente e assediaram uma embarcação da Guarda Costeira em Barnegat Light (NJ), forçando o fechamento do espaço aéreo civil (TFR).</>,
    translation: "A superpotência militar não pode defender nem a sua base aérea de caças de quinta geração nem sua própria polícia costeira em território continental.",
    isCritical: false,
    url: "#"
  },
  {
    id: "pantex",
    date: "ONGOING",
    tag: "NRC / NNSA",
    title: "AMEAÇA E INVASÃO DA USINA NUCLEAR PANTEX",
    dossier: <>O espaço aéreo da Usina Nuclear Pantex (o epicentro vital de montagem e armazenamento de núcleos de plutônio americano) foi violado em reiteradas ocasiões. Relatórios regulatórios da NNSA e NRC confirmam o temor do Estado de que a frota UAP possua capacidade de burlar cineticamente radares militares anti-drone e realizar ataques cibernéticos wireless na rede isolada da usina.</>,
    translation: "A humanidade está jogando xadrez com pombos e ogivas. Os observadores exógenos podem desligar a capacidade atômica da Terra sempre que acharem necessário.",
    isCritical: false,
    url: "#"
  },
  {
    id: "ndaa",
    date: "DEZEMBRO DE 2023",
    tag: "NDAA 2024 / SENADO",
    title: "CASTRAÇÃO DO UAP DISCLOSURE ACT (UAPDA)",
    dossier: <>A Emenda Schumer-Rounds, proposta pelas lideranças do Senado, tentou forçar o uso da lei de "Domínio Eminente" para realizar o confisco e arresto automático de todas as tecnologias UAP mantidas ilegalmente por corporações privadas. A emenda foi esvaziada e castrada nos bastidores por legisladores comprados pelo lobby do complexo aeroespacial e de defesa.</>,
    translation: "Há empreiteiras bélicas operando acima do Estado, lucrando trilhões com segredos mantidos fora da constituição republicana, sequestrando o futuro energético e tecnológico de toda a população.",
    isCritical: false,
    url: "https://www.democrats.senate.gov/newsroom/press-releases/schumer-rounds-introduce-new-legislation-to-declassify-government-records-related-to-unidentified-anomalous-phenomena-and-ufos_modeled-after-jfk-assassination-records-collection-act--as-an-amendment-to-ndaa"
  },
  {
    id: "immaculate",
    date: "NOVEMBRO DE 2024",
    tag: "USAP NÃO RECONHECIDO",
    title: "PROGRAMA IMMACULATE CONSTELLATION",
    dossier: <>O jornalista Michael Shellenberger publica dossiês entregues ao Congresso detalhando o <strong>IMMACULATE CONSTELLATION</strong>. É um Programa Especial de Acesso (USAP) ilegal do Pentágono focado inteiramente em agir como um "sumidouro mestre" e coletor (isolando em bases privadas sem supervisão civil) de absolutamente todos os registros espectrais e evidências de naves atuando sob céus ocidentais.</>,
    translation: "A elite no Departamento de Defesa utiliza as brechas do executivo americano para escravizar o progresso científico. Eles veem os óvnis diariamente em alta resolução há anos, e ativamente impedem que cientistas civis o saibam.",
    isCritical: false,
    tagColor: "bg-[#b91c1c] text-white border-red-500",
    url: "#"
  },
  {
    id: "disclosure",
    date: "08 DE MAIO DE 2026",
    tag: "THE GREAT DISCLOSURE",
    title: "O Fim da Represa: O Pânico de Liberação (Portal PURSUE)",
    dossier: <>O paradigma se quebra por definitivo. A administração americana, sob pressões irremediáveis de legisladores e avistamentos transnacionais incontingíveis, descarrega uma matriz massiva (132 arquivos e dezenas de gigabytes) de memorandos do Departamento da Guerra (DOW) e gravações não-redigidas da Constelação em portais abertos governamentais (war.gov).</>,
    translation: "Nenhum Estado Soberano possui mais a ilusão do domínio e da segurança de seu espaço-tempo local. O choque de Disclosure foi imposto à força. Acionem os protocolos imediatos.",
    isCritical: true, 
    translationTitle: "O INÍCIO DO COLAPSO:",
    url: "#"
  }
];

export default function Archives() {
  return (
    <section id="archives" className="scroll-mt-24 mb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-black mb-4 font-mono border-b border-gray-300 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>Arquivos PURSUE & Evidências Físicas</span>
        <span className="text-sm font-normal bg-[#1f2937] text-white px-2 py-1 animate-pulse w-max">
          war.gov/UFO
        </span>
      </h2>
      <p className="text-lg mb-8 text-slate-800 text-justify">
        O banco de dados abaixo consolida todos os arquivos extraídos do vazamento PURSUE, documentos FOIA, registros do Congresso e a histórica liberação maciça do Departamento de Defesa/Guerra (DOW) de maio de 2026. A lista está exposta cronologicamente. Passe o mouse sobre a análise para decodificar o jargão governamental para uso civil.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bancoDeDados.map((item) => (
          <div 
            key={item.id} 
            className={`border-2 group flex flex-col relative overflow-hidden shadow-md ${item.isCritical ? 'border-[#b91c1c] bg-red-50' : 'border-[#1f2937] bg-white'}`}
          >
            {/* Cabeçalho do Card */}
            <div className={`p-4 font-mono border-b h-32 ${item.isCritical ? 'bg-[#b91c1c] text-white border-red-900' : 'bg-gray-900 text-white border-gray-700'}`}>
              <div className="flex justify-between items-start mb-2">
                <div className={`${item.isCritical ? 'text-red-200' : 'text-gray-400'} text-xs font-bold`}>
                  DATA: {item.date}
                </div>
                
                {/* RENDERIZAÇÃO CONDICIONAL: É Link Válido ou Texto Estático? */}
                {item.url && item.url !== "#" ? (
                  <a 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative z-30 text-xs px-2 py-1 border hover:scale-105 hover:shadow-lg transition-all cursor-pointer ${
                      item.isCritical 
                        ? 'bg-[#1f2937] text-red-500 border-gray-500 font-bold' 
                        : item.tagColor ? item.tagColor : 'bg-gray-600 hover:bg-gray-500 text-white border-gray-500'
                    }`}
                  >
                    {item.tag} ↗
                  </a>
                ) : (
                  <span 
                    className={`relative z-30 text-xs px-2 py-1 border cursor-default ${
                      item.isCritical 
                        ? 'bg-[#1f2937] text-red-500 border-gray-500 font-bold' 
                        : item.tagColor ? item.tagColor : 'bg-gray-600 text-white border-gray-500'
                    }`}
                  >
                    {item.tag}
                  </span>
                )}
                
              </div>
              <div className={`font-black text-lg leading-tight uppercase mt-2 ${item.isCritical ? 'text-white' : 'text-red-400'}`}>
                {item.title}
              </div>
            </div>

            {/* Dossiê (Frente do Card) */}
            <div className={`p-5 flex-1 transition-opacity duration-300 group-hover:opacity-0 relative z-10 ${item.isCritical ? 'bg-red-50' : 'bg-white'}`}>
              <h4 className={`font-bold mb-1 font-mono text-xs ${item.isCritical ? 'text-[#b91c1c]' : 'text-slate-600'}`}>
                DADOS DO DOSSIÊ:
              </h4>
              <p className="text-sm text-[#1f2937] text-justify">{item.dossier}</p>
            </div>

            {/* Tradução Civil (Revelado no Hover) */}
            <div className={`absolute inset-x-0 bottom-0 top-32 p-5 flex flex-col justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20 border-t-4 border-[#b91c1c] pointer-events-none overflow-y-auto ${item.isCritical ? 'bg-[#1f2937]' : 'bg-red-50'}`}>
              <h4 className={`font-bold mb-1 font-mono ${item.isCritical ? 'text-[#b91c1c] text-lg' : 'text-[#b91c1c] text-xs'}`}>
                {item.translationTitle || "TRADUÇÃO PARA CIVIL:"}
              </h4>
              <p className={`text-sm font-bold text-justify ${item.isCritical ? 'text-white' : 'text-[#1f2937]'}`}>
                {item.translation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}