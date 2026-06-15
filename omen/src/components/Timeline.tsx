"use client";
import React, { useState } from 'react';

export default function Timeline() {
  // Motor de estado: Guarda qual sanfona está aberta no momento
  const [faseAberta, setFaseAberta] = useState<string | null>('fase5'); // Inicializa na Fase dos Vazamentos Recentes para maior impacto

  // Função que inverte o estado ao clicar
  const alternarFase = (fase: string) => {
    setFaseAberta(faseAberta === fase ? null : fase);
  };

  return (
    <section id="timeline" className="scroll-mt-24 mb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-black mb-4 font-mono border-b border-gray-300 pb-2 uppercase tracking-tight text-slate-900">
        A Linha do Tempo
      </h2>
      <p className="text-lg mb-8 text-slate-700">
        Esta secção expõe a cronologia detalhada do acobertamento institucional, revelando a erosão progressiva do controlo do espaço aéreo global. 
        Clique nos cartões abaixo para expandir os relatórios de inteligência desclassificados e aceder às fontes primárias na rede militar e governamental (Links sublinhados direcionam aos cofres oficiais).
      </p>

      <div className="space-y-4 max-w-4xl mx-auto">
        
        {/* FASE 1 */}
        <div className="border-2 border-slate-800 bg-white shadow-sm">
          <button 
            className="w-full text-left p-4 sm:p-6 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors" 
            onClick={() => alternarFase('fase1')}
          >
            <div>
              <div className="font-mono text-sm font-bold text-slate-600 mb-1">1947 - 1999</div>
              <div className="font-bold text-xl sm:text-2xl text-slate-900">A Era Clássica e a Fundação do Sigilo</div>
            </div>
            <span className={`text-3xl font-mono transform transition-transform duration-300 select-none text-slate-600 ${faseAberta === 'fase1' ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          
          {faseAberta === 'fase1' && (
            <div className="border-t-2 border-slate-800 bg-gray-50 p-6 animate-fade-in">
              <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base text-slate-800">
                <li>
                  <strong>Julho de 1947 [A Queda de Roswell e a Engenharia de Negação]:</strong> O 509º Grupo de Bombardeiros do Exército dos EUA emite — e retrata horas depois — um comunicado de imprensa confirmando a recuperação de um "disco voador" em Roswell, Novo México. A narrativa é abruptamente substituída pela farsa do "balão meteorológico", estabelecendo a doutrina fundacional de contenção de danos e negação (gaslighting) que guiaria o Pentágono pelas próximas 8 décadas.
                </li>
                <li>
                  <a href="https://vault.fbi.gov/hottel_guy/Guy%20Hottel%20Part%201%20of%201/view" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Março de 1950 [O Memorando Guy Hottel - FBI Vault]
                  </a>: Um memorando interno endereçado ao Diretor do FBI, J. Edgar Hoover, documenta formalmente o testemunho de um investigador da Força Aérea sobre a recuperação de três &quot;discos voadores&quot; no Novo México, contendo corpos humanoides de 90 cm. 
                </li>
                <li>
                  <strong>Julho de 1952 [A Invasão do Espaço Aéreo de Washington D.C.]:</strong> Durante fins de semana consecutivos, frotas de UAPs sobrevoam a Casa Branca e o Capitólio com total impunidade. Detetados visualmente e por múltiplos radares terrestres, os objetos realizam acelerações impossíveis, deixando os caças interceptadores F-94 Starfire para trás com extrema facilidade.
                </li>
                <li>
                  <a href="https://www.cbsnews.com/news/ufo-sightings-minuteman-missile-base-malmstrom-afb-montana-robert-salas/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Março de 1967 [Vulnerabilidade Nuclear em Malmstrom AFB]
                  </a>: O evento fundacional do terror atômico. Um UAP em formato de disco vermelho paira sobre o silo de mísseis na Base Aérea de Malmstrom (Montana). Simultaneamente, dez mísseis nucleares intercontinentais Minuteman são desativados de forma remota, alterando o seu status para &quot;No-Go&quot;. Fica comprovado o domínio cibernético e físico exógeno sobre as defesas atômicas terrestres.
                </li>
                <li>
                  <strong>Dezembro de 1969 [O Fim do Projeto Blue Book]:</strong> A Força Aérea Americana encerra publicamente a sua investigação sobre OVNIs (Project Blue Book), alegando que o fenômeno "não representa ameaça à segurança nacional". Memorandos vazados (como o Memorando Bolender) provariam mais tarde que a intercepção de UAPs continuou de forma brutal e clandestina, repassada para jurisdições militares secretas.
                </li>
                <li>
                  <strong>Dezembro de 1972 [Missão Apollo 17]:</strong> Arquivos fotográficos classificados da NASA (como o frame AS17-135-20680) registram diretamente fontes luminosas e anômalas monitorizando as operações do módulo de pouso no terreno lunar.
                </li>
                <li>
                  <a href="https://www.dia.mil/FOIA/FOIA-Electronic-Reading-Room/FOIA-Reading-Room-Iran/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Setembro de 1976 [O Dogfight de Teerão - Relatório DIA]
                  </a>: Memorando desclassificado da Defense Intelligence Agency detalha o engajamento de caças F-4 Phantom contra um UAP brilhante. Sempre que os pilotos tentavam travar os seus mísseis para atirar, as suas matrizes de armamento e comunicações sofriam apagões cibernéticos, atestando uma guerra eletrônica de superioridade insuperável.
                </li>
                <li>
                  <strong>Dezembro de 1980 [A Incursão Nuclear na Floresta de Rendlesham]:</strong> Nas proximidades das bases militares gémeas de RAF Bentwaters e Woodbridge (Reino Unido), onde os EUA armazenavam armas nucleares táticas. O Subcomandante da base, Coronel Charles Halt, documenta através de áudios e num memorando oficial do Ministério da Defesa britânico a aterragem de uma nave estruturada que emitia feixes de luz para o interior dos silos de armas e deixou marcas físicas de radiação anômala no solo.
                </li>
                <li>
                  <strong>Março de 1990 [A Onda Belga e a Humilhação dos F-16]:</strong> Numa atitude de transparência inédita para a OTAN, o Chefe da Força Aérea Belga desclassifica registros de radar militar documentando a perseguição de OVNIs triangulares negros. Os caças F-16 conseguiram bloqueios de radar múltiplos, apenas para registrar os objetos a executarem manobras impossíveis, descendo de 10.000 pés para 500 pés em cinco segundos e quebrando a barreira do som sem produzir estrondo sônico.
                </li>
              </ul>
            </div>
          )}
        </div>

       {/* FASE 2 */}
        <div className="border-2 border-slate-800 bg-white shadow-sm">
          <button 
            className="w-full text-left p-4 sm:p-6 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors" 
            onClick={() => alternarFase('fase2')}
          >
            <div>
              <div className="font-mono text-sm font-bold text-slate-600 mb-1">2000 - 2017</div>
              <div className="font-bold text-xl sm:text-2xl text-slate-900">O Novo Milénio e os Programas Ocultos</div>
            </div>
            <span className={`text-3xl font-mono transform transition-transform duration-300 select-none text-slate-600 ${faseAberta === 'fase2' ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          
          {faseAberta === 'fase2' && (
            <div className="border-t-2 border-slate-800 bg-gray-50 p-6 animate-fade-in">
              <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base text-slate-800">
                <li>
                  <a href="https://www.youtube.com/watch?v=7vyVe-6YdUk" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Maio de 2001 [O "Disclosure Project" no National Press Club]
                  </a>: Numa conferência histórica em Washington D.C., mais de 20 testemunhas militares, de inteligência e de aviação (incluindo oficiais de silos nucleares e generais da FAA) quebram os seus juramentos de segurança nacional. Denunciam perante a imprensa mundial o sequestro de tecnologia alienígena por parte de projetos não reconhecidos (USAPs) e a ameaça contínua às instalações atómicas.
                </li>
                <li>
                  <a href="https://www.defense.gov/News/Releases/Release/Article/2165713/statement-by-the-department-of-defense-on-the-release-of-historical-navy-videos/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Novembro de 2004 [O Incidente Nimitz e o Vídeo FLIR]
                  </a>: Registado pelos potentes radares SPY-1 do cruzador USS Princeton e intercetado pelo esquadrão Black Aces. O objeto apelidado de &quot;Tic Tac&quot; desce de 80.000 pés para o nível do mar em segundos sem gerar estrondo sônico. O Cmdr. David Fravor documenta a anulação (jamming) dos radares dos caças F/A-18, obliterando as leis da inércia humana.
                </li>
                <li>
                  <a href="https://www.chicagotribune.com/2007/01/01/in-the-sky-a-bird-a-plane-a-ufo/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Novembro de 2006 [Incursão no Aeroporto Internacional O'Hare]
                  </a>: Um UAP em formato de disco paira silenciosamente sobre a Porta C-17 do aeroporto de Chicago perante dezenas de pilotos e funcionários da United Airlines. O objeto dispara verticalmente, perfurando um buraco perfeito nas nuvens. A FAA tenta encobrir o caso como "fenómeno meteorológico", mas a Lei FOIA liberta áudios provando que os controladores de tráfego aéreo acompanharam a intrusão.
                </li>
                <li>
                  <a href="https://www.nytimes.com/2017/12/16/us/politics/pentagon-program-ufo-harry-reid.html" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    2007 - 2012 [A Fundação do AAWSAP / AATIP]
                  </a>: O Pentágono aloca silenciosamente US$ 22 milhões em orçamentos negros (black money) para criar o Programa de Identificação de Ameaças Aeroespaciais Avançadas. Os fundos são repassados clandestinamente para uma instalação no Nevada gerida pela empreiteira privada Bigelow Aerospace, visando isolar o estudo físico de metamateriais fora do alcance da Lei de Liberdade de Informação (FOIA).
                </li>
                <li>
                  <a href="https://www.explorescu.org/post/2013-aguadilla-puerto-rico-uap" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Abril de 2013 [O Vídeo Transmeio de Aguadilla - DHS]
                  </a>: Uma aeronave DHC-8 da Alfândega e Proteção de Fronteiras dos EUA (DHS) filma, via sensor termal infravermelho, um UAP a voar a baixa altitude sobre um aeroporto em Porto Rico. O objeto entra e sai do oceano sem perder velocidade (transmeio), não gera distúrbios na água e divide-se em dois objetos distintos enquanto submerso. A prova definitiva da física não-balística.
                </li>
                <li>
                  <strong>2014 - 2015 [Radares AESA e a Anomalia "Gimbal/Go-Fast"]:</strong> Com a modernização dos radares em caças da costa leste dos EUA, pilotos do esquadrão VFA-11 Red Rippers começam a rastrear diariamente frotas de artefatos. Descritos como &quot;cubos cinza escuro contidos dentro de esferas transparentes&quot;, os objetos operam com impunidade em ventos de força furacão e sem assinatura térmica de exaustão, forçando quase-colisões (near misses) no ar.
                </li>
                <li>
                  <strong>Outubro / Dezembro de 2017 [A Fratura Interna e o NYT]:</strong> O oficial de inteligência Luis Elizondo renuncia à direção do AATIP denunciando o excessivo sigilo e a ameaça não mitigada. Semanas depois, o New York Times publica a matéria histórica a expor o programa e os vídeos FLIR da Marinha. O Estado Profundo entra em contenção de danos, trancando todos os novos dados num USAP impenetrável sob o nome de código IMMACULATE CONSTELLATION.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* FASE 3 */}
        <div className="border-2 border-slate-800 bg-white shadow-sm">
          <button 
            className="w-full text-left p-4 sm:p-6 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors" 
            onClick={() => alternarFase('fase3')}
          >
            <div>
              <div className="font-mono text-sm font-bold text-slate-600 mb-1">2020 - 2022</div>
              <div className="font-bold text-xl sm:text-2xl text-slate-900">Vigilância Global e a Transição Pública</div>
            </div>
            <span className={`text-3xl font-mono transform transition-transform duration-300 select-none text-slate-600 ${faseAberta === 'fase3' ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          
          {faseAberta === 'fase3' && (
            <div className="border-t-2 border-slate-800 bg-gray-50 p-6 animate-fade-in">
              <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base text-slate-800">
                <li>
                  <a href="https://www.defense.gov/News/Releases/Release/Article/2165713/statement-by-the-department-of-defense-on-the-release-of-historical-navy-videos/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Abril de 2020 [A Admissão Oficial do Pentágono]
                  </a>: Numa mudança de postura sem precedentes impulsionada pelos vazamentos de 2017, o Departamento de Defesa publica e autentica oficialmente os três vídeos da Marinha (FLIR, GOFAST e GIMBAL). O comunicado atesta que os fenómenos aéreos observados permanecem classificados como &quot;Não Identificados&quot;, legitimando a ameaça contínua aos corredores de treino militar da Marinha.
                </li>
                <li>
                  <a href="https://www.defense.gov/News/Releases/Release/Article/2314065/establishment-of-unidentified-aerial-phenomena-task-force/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Agosto de 2020 [Estabelecimento da Força-Tarefa UAP - UAPTF]
                  </a>: Sob pressão do Comitê de Inteligência do Senado, o DoD é forçado a criar a Força-Tarefa UAP, subordinada ao Departamento da Marinha. A sua missão declarada é detetar, analisar e catalogar incursões que representem ameaça à segurança nacional, marcando a primeira vez em 50 anos que o Estado reconhece investigar ativamente o fenómeno.
                </li>
                <li>
                  <strong>Outubro de 2020 [A Rota do Petróleo - DOW-UAP-D63]:</strong> Relatórios de missão (MISREP) desclassificados do Departamento de Guerra detalham a presença de frotas de UAPs a pairar ativamente sobre as rotas logísticas estratégicas do suprimento fóssil no Estreito de Ormuz e Golfo Árabe, atestando um mapeamento tático de infraestruturas energéticas críticas do planeta.
                </li>
                <li>
                  <strong>Março a Julho de 2021 [Incidente Range Fouler e USS Omaha]:</strong> Operadores de radar no Golfo de Aden registram objetos esféricos, completamente frios ao espetro infravermelho, realizando manobras de assédio contra frotas aliadas (DOW-UAP-D44). Paralelamente, vaza o vídeo do USS Omaha mostrando um objeto esférico a sobrevoar um navio de guerra de forma desafiadora antes de mergulhar intacto no oceano (transmeio), vídeo este que o Pentágono é forçado a confirmar como autêntico.
                </li>
                <li>
                  <a href="https://www.dni.gov/index.php/newsroom/reports-publications/reports-publications-2021/item/2223-preliminary-assessment-unidentified-aerial-phenomena" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Junho de 2021 [Relatório Preliminar do ODNI]
                  </a>: O Diretor de Inteligência Nacional (DNI) entrega ao Congresso um relatório explosivo admitindo que, de 144 incidentes registados por sensores militares múltiplos desde 2004, 143 permanecem sem explicação. O documento confirma categoricamente que os UAPs são objetos físicos que demonstram tecnologia avançada, incluindo voo estacionário contra ventos extremos e capacidade de despistar assinaturas de radar (jamming) sem propulsão visível.
                </li>
                <li>
                  <a href="https://intelligence.house.gov/news/documentsingle.aspx?DocumentID=1173" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Maio de 2022 [Primeira Audiência Pública em 50 Anos]
                  </a>: O Subcomité de Inteligência da Câmara dos EUA realiza a primeira audição pública sobre OVNIs desde o encerramento do Projeto Blue Book. Oficiais do Pentágono (Ronald Moultrie e Scott Bray) testemunham sob juramento, exibindo vídeos desclassificados de objetos esféricos reflexivos a passar por caças F-18 em frações de segundo, admitindo total falta de controlo e incapacidade de interceptação.
                </li>
                <li>
                  <strong>Maio de 2022 [DOW-UAP-D12/D14 no Iraque]:</strong> Arquivos operacionais táticos documentam o rastreamento multiespectral de veículos anómalos a realizar &quot;voo dirigido&quot; coordenado em zonas de guerra ativas no Médio Oriente. A intenção de voo e evasão de armamento militar demonstra inteligência viva, descartando definitivamente hipóteses de lixo aéreo.
                </li>
                <li>
                  <a href="https://www.defense.gov/News/Releases/Release/Article/3098284/dod-announces-the-establishment-of-the-all-domain-anomaly-resolution-office/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Julho de 2022 [A Estruturação do AARO]
                  </a>: O Pentágono expande o escopo da investigação e converte a força-tarefa no All-domain Anomaly Resolution Office (AARO). Estruturado ostensivamente para acalmar o Congresso, o escritório seria posteriormente denunciado como o principal mecanismo de contenção de danos e filtro asfixiante de informações críticas (blindando o acesso aos programas de engenharia reversa).
                </li>
                <li>
                  <a href="https://www.congress.gov/bill/117th-congress/house-bill/7776" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Dezembro de 2022 [A Lei de Proteção a Whistleblowers]
                  </a>: O Presidente assina o NDAA para o ano fiscal de 2023. Através de um esforço bipartidário silencioso, o Congresso insere provisões legais históricas garantindo imunidade e proteção a denunciantes (whistleblowers) militares ou civis contratados que tenham participado de programas ilegais de recuperação de destroços alienígenas e de engenharia reversa — pavimentando o caminho para a quebra definitiva do sigilo em 2023.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* FASE 4 (ALERTA LARANJA) */}
        <div className="border-2 border-orange-600 bg-orange-50 shadow-sm">
          <button 
            className="w-full text-left p-4 sm:p-6 flex justify-between items-center focus:outline-none hover:bg-orange-100 transition-colors" 
            onClick={() => alternarFase('fase4')}
          >
            <div>
              <div className="font-mono text-sm font-bold text-orange-700 mb-1">2023 - Início de 2024</div>
              <div className="font-bold text-xl sm:text-2xl text-orange-700">O Alarme no Congresso e as Invasões</div>
            </div>
            <span className={`text-3xl font-mono transform transition-transform duration-300 select-none text-orange-600 ${faseAberta === 'fase4' ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          
          {faseAberta === 'fase4' && (
            <div className="border-t-2 border-orange-600 bg-white p-6 animate-fade-in">
              <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base text-slate-800">
                <li>
                  <a href="https://thedebrief.org/intelligence-officials-say-u-s-has-retrieved-non-human-craft/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Junho de 2023 [A Denúncia ao ICIG e o Estopim]
                  </a>: O jornalista Ross Coulthart e o portal The Debrief publicam a entrevista histórica com David Grusch. Revela-se que o Inspetor-Geral da Comunidade de Inteligência (ICIG), Thomas Monheim, avaliou as denúncias de Grusch sobre programas ilegais de recuperação de naves (Crash Retrieval) e apropriação indevida de fundos do Congresso como &quot;críveis e urgentes&quot;, acendendo o alerta máximo em Washington.
                </li>
                <li>
                  <a href="https://oversight.house.gov/release/national-security-subcommittee-to-hold-hearing-on-unidentified-anomalous-phenomena%EF%BF%BC/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Julho de 2023 [Testemunho Sob Juramento no Congresso]
                  </a>: David Grusch (ex-NRO), Cmdr. David Fravor e o piloto Ryan Graves depõem perante o Subcomitê da Câmara. Sob risco de prisão por perjúrio, atestam a supremacia de voo dos UAPs (como o objeto Tic-Tac) e a retenção secreta de materiais intactos e &quot;biológicos não-humanos&quot; retirados de locais de acidente.
                </li>
                <li>
                  <strong>Setembro de 2023 [Análise Forense do FBI e o &quot;Elipsoide&quot;]:</strong> Conforme documentos vazados do laboratório do FBI cruzados na época, inicia-se a análise secreta de dados de radar e imagens sobre um massivo objeto metálico bronzeado elipsoidal de 195 pés, capaz de materializar-se via feixe de luz e desaparecer instantaneamente sem gerar distúrbio na atmosfera.
                </li>
                <li>
                  <a href="https://science.nasa.gov/uap/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Setembro de 2023 [O Relatório Independente da NASA]
                  </a>: A NASA publica as conclusões da sua equipa de estudo independente sobre UAPs e nomeia o seu primeiro diretor dedicado ao tema. Embora a agência mantenha uma postura pública conservadora, o relatório atesta a necessidade urgente de calibrar satélites e inteligência artificial para monitorizar os céus de forma sistemática contra anomalias.
                </li>
                <li>
                  <strong>Outubro / Novembro de 2023 [O Bloqueio do SCIF]:</strong> Deputados do Comitê de Supervisão tentam obter as evidências classificadas citadas por Grusch. O Pentágono e a Comunidade de Inteligência bloqueiam ativamente o acesso dos legisladores eleitos aos SCIFs (Instalações de Informação Compartimentada Sensível), escancarando a insubordinação militar ao poder civil.
                </li>
                <li>
                  <strong>Dezembro de 2023 [O Cerco à Base de Langley]:</strong> O coração do Comando de Combate Aéreo (Virginia) sofre uma intrusão massiva por frotas de objetos anómalos movendo-se a 160 km/h por 17 noites consecutivas. A falência da guerra eletrónica (anti-jamming) força o Pentágono a evacuar os jatos stealth F-22 Raptor para outras bases por absoluta vulnerabilidade.
                </li>
                <li>
                  <a href="https://www.democrats.senate.gov/newsroom/press-releases/schumer-rounds-introduce-new-legislation-to-declassify-government-records-related-to-unidentified-anomalous-phenomena-and-ufos_modeled-after-jfk-assassination-records-collection-act--as-an-amendment-to-ndaa" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Dezembro de 2023 [A Castração do UAPDA no NDAA]
                  </a>: A Emenda bipartidária Schumer-Rounds (UAP Disclosure Act) é alvo do lobby feroz de empreiteiras da defesa (Lockheed Martin, Boeing, etc). A cláusula vital de &quot;Domínio Eminente&quot; — que forçaria o confisco estatal de tecnologias alienígenas sob posse de corporações civis — é extirpada, mantendo o monopólio corporativo sobre a física do ponto zero.
                </li>
                <li>
                  <a href="https://oversight.house.gov/release/comer-burchett-demand-information-from-icig-regarding-uaps/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Janeiro de 2024 [Briefing Classificado com o ICIG]
                  </a>: O Inspetor-Geral Thomas Monheim realiza um briefing ultrassecreto no SCIF do Capitólio para os membros do Comitê de Supervisão da Câmara. Ao saírem, os congressistas confirmam à imprensa que muitas das alegações de Grusch sobre programas sem supervisão e apropriação indébita (black budgets) possuem profundo mérito, intensificando a crise institucional.
                </li>
                <li>
                  <a href="https://media.defense.gov/2024/Mar/08/2003409233/-1/-1/0/DOPSR-2024-0263-AARO-HISTORICAL-RECORD-REPORT-VOLUME-1-2024.PDF" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Março de 2024 [A Farsa do Relatório AARO Vol. 1]
                  </a>: Num ato de contenção de danos, o escritório AARO do Pentágono lança um relatório histórico negando veementemente qualquer prova de visitação exógena. Denunciantes, legisladores e oficiais veteranos de inteligência (como Chris Mellon) destroem o documento publicamente, classificando-o como uma fraude metodológica (que citou até wikis abertas) para executar &quot;gaslighting&quot; (manipulação psicológica) contra a população.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* FASE 5 (ALERTA VERMELHO) */}
        <div className="border-2 border-[#b91c1c] bg-red-50 shadow-sm">
          <button 
            className="w-full text-left p-4 sm:p-6 flex justify-between items-center focus:outline-none hover:bg-red-100 transition-colors" 
            onClick={() => alternarFase('fase5')}
          >
            <div>
              <div className="font-mono text-sm font-bold text-[#b91c1c] mb-1">Final de 2024 - 2025</div>
              <div className="font-bold text-xl sm:text-2xl text-[#b91c1c]">Immaculate Constellation & Colapso Tático</div>
            </div>
            <span className={`text-3xl font-mono transform transition-transform duration-300 select-none text-[#b91c1c] ${faseAberta === 'fase5' ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          
          {faseAberta === 'fase5' && (
            <div className="border-t-2 border-[#b91c1c] bg-white p-6 animate-fade-in">
              <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base text-slate-800">
                <li>
                  <a href="https://public.substack.com/p/pentagon-is-illegally-hiding-secret" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Outubro de 2024 [O Vazamento do IMMACULATE CONSTELLATION]
                  </a>: O jornalista Michael Shellenberger publica um relatório explosivo entregue por denunciantes da comunidade de inteligência. O documento expõe um USAP (Programa de Acesso Especial Não Reconhecido) ilegal que atua como &quot;sumidouro mestre&quot; de Inteligência de Imagens (IMINT). O programa sequestra vídeos em alta resolução e dados de sensores de UAPs antes que cheguem ao conhecimento do Congresso.
                </li>
                <li>
                  <a href="https://oversight.house.gov/hearing/unidentified-anomalous-phenomena-exposing-the-truth/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    13 de Novembro de 2024 [Audiência &quot;Exposing the Truth&quot;]
                  </a>: O Comitê de Supervisão da Câmara realiza uma audiência histórica. Luis Elizondo, o Contra-Almirante Tim Gallaudet e Michael Shellenberger testemunham sob juramento. Atestam a existência de uma cabala de empreiteiras militares operando à margem da lei, a presença de veículos transmeio (USOs) operando impunemente nos oceanos e inserem formalmente o documento do <em>Immaculate Constellation</em> no registo do Congresso (via Deputada Nancy Mace).
                </li>
                <li>
                  <a href="https://www.twz.com/air/mystery-drones-swarm-new-jersey-military-base" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Novembro - Dezembro de 2024 [O Contágio de Enxames no Nordeste dos EUA]
                  </a>: O espaço aéreo civil e militar colapsa. Frotas de aeronaves anómalas (algumas do tamanho de automóveis comerciais) invadem o estado de Nova Jersey. As incursões sobrevoam intencionalmente infraestruturas críticas, incluindo o Picatinny Arsenal (instalação de P&D do Exército), o Trump National Golf Club, reservatórios de água e centrais elétricas na Pensilvânia e Nova York. Caças F-15 e helicópteros Black Hawk falham em interceptar os alvos.
                </li>
                <li>
                  <strong>Dezembro de 2024 [O Assédio à Guarda Costeira]:</strong> A crise intensifica-se na costa. No Condado de Ocean (NJ), uma embarcação de 47 pés da Guarda Costeira é taticamente caçada no oceano por esquadrilhas de UAPs emitindo flashes luminosos a meros 30 metros de altitude, sincronizando movimentos evasivos perfeitos. A gravidade força a FAA a emitir dezenas de Restrições Temporárias de Voo (TFRs) fechando o espaço aéreo doméstico.
                </li>
                <li>
                  <a href="https://www.democrats.senate.gov/newsroom/press-releases/schumer-rounds-introduce-new-legislation-to-declassify-government-records-related-to-unidentified-anomalous-phenomena-and-ufos_modeled-after-jfk-assassination-records-collection-act--as-an-amendment-to-ndaa" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Dezembro de 2024 [A Segunda Queda do UAPDA no NDAA FY25]
                  </a>: Pelo segundo ano consecutivo, a Emenda Schumer-Rounds (Lei de Divulgação UAP 2.0) é destruída nos bastidores. Líderes dos comitês de inteligência manobram para extirpar a cláusula de &quot;poder de intimação&quot; (subpoena) e o painel de revisão civil, garantindo que as empresas aeroespaciais (Lockheed, Northrop) mantenham os materiais biológicos e físicos sem supervisão governamental.
                </li>
                <li>
                  <a href="https://www.twz.com/air/swarms-of-unidentified-drones-are-invading-bases-in-the-u-k" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Janeiro de 2025 [O Cerco Nuclear no Reino Unido - RAF Lakenheath]
                  </a>: O padrão de invasão exporta-se para a Europa. As bases aéreas gémeas de RAF Lakenheath, Mildenhall e Feltwell (operadas pela Força Aérea dos EUA no Reino Unido e que albergam caças F-35A com capacidade nuclear) são sobrevoadas por dias seguidos por enxames anómalos. Sistemas de defesa de ponto e interferência de rádio falham em derrubar os alvos.
                </li>
                <li>
                  <strong>Fevereiro de 2025 [Incursões em Skunk Works / Plant 42]:</strong> O epicentro de desenvolvimento tecnológico negro dos EUA, a Air Force Plant 42 em Palmdale (Califórnia), sofre violações de espaço aéreo por plataformas não identificadas. A instalação abriga os hangares de testes dos bombardeiros B-21 Raider e tecnologia furtiva sensível, provando que o aparato de segurança militar é cego dentro de casa.
                </li>
                <li>
                  <a href="https://www.dni.gov/files/documents/FOIA/DF-2025-00021-Immaculate-Constellation-descrp-from-UNCLASS-Press-22-Oct-2024.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:text-blue-900 underline decoration-blue-300">
                    Fevereiro/Abril de 2025 [Documentos FOIA e Supressão]
                  </a>: Levas de documentos desclassificados pelo Diretor de Inteligência Nacional (DNI) e e-mails corporativos expõem a guerra fria interagências. Fica comprovado que o FBI enviou evidências massivas (como as famigeradas <em>FBI Photo B20/B21</em>) ao escritório AARO sob severas tarjas de restrição, e que o AARO atuou ativamente para higienizar as investigações civis.
                </li>
                <li>
                  <strong>Maio de 2025 [Vulnerabilidade Extrema em Pantex]:</strong> O núcleo da dissuasão nuclear norte-americana colapsa. A Usina Nuclear de Pantex (Texas) — a única infraestrutura responsável pela montagem e manutenção dos núcleos de plutônio (pits) do país — sofre violações constantes. Relatórios da NRC e NNSA atestam que as frotas UAP possuem capacidade de anular as arquiteturas contra-drone (C-UAS) e executar interceções cibernéticas wireless diretamente na rede isolada da usina.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* FASE 6 (DARK) */}
        <div className="border-2 border-slate-900 bg-slate-900 text-white shadow-sm">
          <button 
            className="w-full text-left p-4 sm:p-6 flex justify-between items-center focus:outline-none hover:bg-slate-800 transition-colors" 
            onClick={() => alternarFase('fase6')}
          >
            <div>
              <div className="font-mono text-sm font-bold text-red-500 mb-1">Maio de 2026 (Atualidade)</div>
              <div className="font-bold text-xl sm:text-2xl text-red-50">A Desclassificação Forçada (Projeto PURSUE)</div>
            </div>
            <span className={`text-3xl font-mono transform transition-transform duration-300 select-none text-white ${faseAberta === 'fase6' ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          
          {faseAberta === 'fase6' && (
            <div className="border-t-2 border-slate-700 bg-black p-6 animate-fade-in">
              <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base text-gray-300">
                <li>
                  <strong className="text-red-400">8 de Maio de 2026 [A Ativação do Protocolo PURSUE]:</strong> Pressionado por uma frente bipartidária inédita e pela proliferação incontrolável de sensores civis em Órbita Terrestre Baixa (LEO), o Executivo cede. Ocorre o maior despejo de dados da história (Data Dump): terabytes de memorandos não-redigidos do Departamento de Guerra (DOW), registros do FBI e vídeos FMV de alta resolução são libertados num portal público.
                </li>
                <li>
                  <strong className="text-red-400">A Morte da Narrativa Oficial:</strong> Os arquivos vazados pulverizam as décadas de "gaslighting" promovidas pelo AARO e pelo Pentágono. A tese de que as incursões eram meras anomalias climáticas, lixo espacial ou drones estrangeiros é oficialmente refutada com a publicação das telemetrias de guerra eletrónica.
                </li>
                <li>
                  <strong className="text-red-400">A Evidência da Falência Sistémica:</strong> Os documentos atestam sob rigor militar a total falência da premissa de soberania. Fica comprovado que o Estado não detém o controlo do seu próprio espaço aéreo e que a infraestrutura militar terrestre (incluindo todo o arsenal de dissuasão nuclear) é inútil contra veículos que dominam a manipulação de massa e inércia.
                </li>
                <li>
                  <strong className="text-red-400">O Choque Ontológico e o Derretimento Fiduciário:</strong> A confirmação de que inteligências superiores operam com física de ponto zero e evadem o aparato militar causa uma rejeição instantânea dos ativos fiduciários (Fiat). A confiança na economia baseada em combustíveis fósseis e na autoridade do Estado evapora em horas.
                </li>
                <li>
                  <strong className="text-red-400">Diretriz de Sobrevivência e Colapso Logístico:</strong> Inicia-se a fase aguda de paralisia cognitiva social. Conforme modelado pela inteligência, a humanidade reorienta-se para a preservação primária. Em 48 horas, o pânico logístico seca as refinarias locais e esvazia o retalho essencial, forçando a burocracia a considerar enclaves militares e a aplicação de Lei Marcial velada para gerir a rutura total da cadeia de suprimentos.
                </li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
