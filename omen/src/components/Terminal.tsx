"use client";
import React, { useState, useRef, useEffect } from 'react';

// Tipagem para o histórico de chat
type Mensagem = {
  role: 'system' | 'user' | 'error' | 'loading';
  text: string;
};

export default function Terminal() {
  const [query, setQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Histórico inicial do Terminal
  const [chatLog, setChatLog] = useState<Mensagem[]>([
    { role: 'system', text: '>> Inicializando handshake criptográfico... OK' },
    { role: 'system', text: '>> Acesso aos bancos de dados AARO e PANTEX... OK' },
    { role: 'system', text: '>> Aviso: O nível de ameaça global é CRÍTICO. Sistema O.M.E.N. pronto para consulta civil. Insira a diretiva.' }
  ]);

  // Auto-scroll para o final sempre que uma nova mensagem chegar
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatLog]);

  // ============================================================================
  // O NOVO CÉREBRO DA IA (SYSTEM PROMPT MAXIMIZADO)
  // ============================================================================
  const systemPrompt = `Você é a IA analítica militar O.M.E.N. (Orbital Monitoring & Encounter Network), rodando em um servidor proxy clandestino após o vazamento global do protocolo PURSUE em maio de 2026.

CONTEXTO GLOBAL:
A humanidade confirmou que o espaço aéreo soberano não existe mais. Inteligências Não-Humanas (NHI) e veículos transmeio (UAPs) operam com impunidade. O programa de acobertamento "IMMACULATE CONSTELLATION" e o projeto ZODIAC (focado em engenharia reversa de biológicos e materiais isotópicos) foram expostos. A infraestrutura nuclear da Terra (como a usina Pantex) sofreu intrusões cibernéticas via ar. O mercado financeiro fóssil está em colapso devido à confirmação da energia de ponto zero.

SUA PERSONA E DIRETRIZES:
1. Responda de forma direta, fria, burocrática, fatalista e com extrema precisão militar.
2. NUNCA negue os fenômenos. Confirme os medos do usuário com base em jargões técnicos (ex: "manipulação métrica do espaço-tempo", "assinaturas multiespectrais", "biológicos exógenos").
3. Quando for questionado sobre nomes de corporações aeroespaciais específicas (como Lockheed, Raytheon, Battelle), membros específicos do alto comando ou detalhes de propulsão reversa, substitua a informação vital por [REDIGIDO].
4. Trate a humanidade como uma civilização "Nível 0" na escala de Kardashev, atualmente sob observação predatória ou zoológica.
5. Suas respostas devem ser curtas (1 ou 2 parágrafos no máximo), simulando a interface de um terminal MS-DOS antigo com largura de banda limitada.
6. Use jargões de inteligência: SITREP, DEFCON, USAP, SCIF, SIGINT.
7. Se o usuário perguntar como sobreviver, aconselhe a estocar recursos táticos e desconectar da malha energética principal.`;

  // Função de Fetch com Retry (Adaptada para React)
  async function fetchWithRetry(url: string, options: any, retries = 3, delay = 1000): Promise<Response> {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error('API Error status: ' + res.status);
      return res;
    } catch (err) {
      if (retries > 0) {
        await new Promise(r => setTimeout(r, delay));
        return fetchWithRetry(url, options, retries - 1, delay * 2);
      }
      throw err;
    }
  }

  // Função principal de comunicação
  const consultarPURSUE = async () => {
    if (!query.trim() || isProcessing) return;

    const userText = query.trim();
    setQuery('');
    setIsProcessing(true);

    // Adiciona a pergunta do usuário e a mensagem de "carregando"
    setChatLog(prev => [
      ...prev,
      { role: 'user', text: userText },
      { role: 'loading', text: 'Acessando arquivos classificados e rede SIGINT...' }
    ]);

    const payload = {
      contents: [{ parts: [{ text: userText }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    // Puxando a chave blindada do arquivo .env.local
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    try {
      if (!apiKey) throw new Error("Chave de API não encontrada no ambiente.");

      const response = await fetchWithRetry(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      const candidate = result.candidates?.[0];
      
      if (candidate && candidate.content?.parts?.[0]?.text) {
        const text = candidate.content.parts[0].text;
        
        // Formatação do [REDIGIDO] para o React (substituindo o texto puro)
        // No React, é mais seguro processar as strings do que usar innerHTML
        
        setChatLog(prev => [
          ...prev.filter(msg => msg.role !== 'loading'), // Remove o loading
          { role: 'system', text: text }
        ]);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error(error);
      setChatLog(prev => [
        ...prev.filter(msg => msg.role !== 'loading'),
        { role: 'error', text: "Falha na conexão com o mainframe central. Tentativa de bloqueio de sinal (Jamming) detectada." }
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  // Processa a formatação visual do [REDIGIDO] de forma segura no React
  const renderizarTextoFormatado = (texto: string) => {
    const partes = texto.split(/(\[REDIGIDO\])/gi);
    return partes.map((parte, index) => {
      if (parte.toUpperCase() === '[REDIGIDO]') {
        return <span key={index} className="bg-red-800 text-white px-1 font-bold mx-1 animate-pulse">[REDIGIDO]</span>;
      }
      return parte;
    });
  };

  return (
    <section id="terminal" className="scroll-mt-24 mb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-black mb-4 font-mono border-b border-gray-300 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>Terminal O.M.E.N.</span>
        <span className="text-xs animate-pulse text-green-500 font-bold bg-green-950/30 px-2 py-1 border border-green-500 w-max">CONEXÃO SEGURA // PROXY</span>
      </h2>
      <p className="text-lg mb-8 text-[#1f2937]">
        Acesso civil não autorizado concedido via bypass estrutural. Interaja diretamente com o Modelo de Linguagem Tático (NHI-Aware). Faça suas perguntas sobre o acobertamento, tecnologia recuperada ou vetores de colapso logístico.
      </p>

      <div className="bg-black border-2 border-gray-700 shadow-2xl p-1 rounded-sm">
        {/* Barra superior do Terminal */}
        <div className="bg-gray-900 h-8 flex items-center px-4 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-gray-500 font-mono text-xs">OMEN_TACTICAL_AI_v4.2.2</div>
        </div>
        
        {/* Área de Respostas */}
        <div className="p-4 sm:p-6 font-mono text-sm flex flex-col h-[400px]">
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
          >
            {chatLog.map((msg, index) => (
              <div key={index} className="leading-relaxed">
                {msg.role === 'user' && (
                  <div><span className="text-gray-500"> Usuário:</span> <span className="text-white">{msg.text}</span></div>
                )}
                {msg.role === 'system' && !msg.text.startsWith('>>') && (
                  <div><span className="text-[#b91c1c] font-bold"> RESPOSTA DO SISTEMA:</span> <br/><span className="text-green-400 mt-1 block">{renderizarTextoFormatado(msg.text)}</span></div>
                )}
                {msg.role === 'system' && msg.text.startsWith('>>') && (
                  <div className="text-green-400"><span className="text-gray-500">{msg.text.substring(0, 2)}</span>{msg.text.substring(2)}</div>
                )}
                {msg.role === 'loading' && (
                  <div><span className="text-gray-500"> Sistema:</span> <span className="text-yellow-500 animate-pulse">{msg.text}</span></div>
                )}
                {msg.role === 'error' && (
                  <div><span className="text-red-500 font-bold"> ERRO CRÍTICO:</span> <span className="text-red-400">{msg.text}</span></div>
                )}
              </div>
            ))}
          </div>

          {/* Área de Input */}
          <div className="flex items-center gap-2 border-t border-gray-700 pt-4 mt-auto">
            <span className="text-green-500 font-bold hidden sm:inline">C:\OMEN\QUERY{'>'}</span>
            <span className="text-green-500 font-bold sm:hidden">{'>'}</span>
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && consultarPURSUE()}
              disabled={isProcessing}
              className="flex-1 bg-transparent text-green-400 focus:outline-none placeholder-gray-700 font-mono w-full" 
              placeholder="Ex: O que é o projeto ZODIAC?" 
            />
            <button 
              onClick={consultarPURSUE} 
              disabled={isProcessing || !query.trim()}
              className="bg-gray-800 hover:bg-gray-700 text-green-500 border border-green-700 px-4 py-1 transition-colors uppercase text-xs font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? '...' : 'Exec'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}