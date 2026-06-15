"use client";
import React, { useState, useEffect, useMemo, useRef } from 'react';

// ==========================================
// INTERFACE DE DADOS
// ==========================================
interface RecordData {
  id: string;
  title: string;
  agency: string;
  release: string;
  date: string;
  incidentDate: string;
  location: string;
  type: string;
  isFeatured: boolean;
  description: string;
  documentUrls: string[]; 
  imageUrls: string[];    
  videoIds: string[];     
  directMp4Urls: string[]; 
}

export default function UplinkRecords() {
  const [records, setRecords] = useState<RecordData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [agency, setAgency] = useState("All Agencies");
  const [release, setRelease] = useState("All Releases");
  const [fileType, setFileType] = useState("All Types");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const [selectedRecord, setSelectedRecord] = useState<RecordData | null>(null);
  
  // Referência para rolar a tela ao mudar de página
  const tableTopRef = useRef<HTMLDivElement>(null);

  const buildHotlink = (url: string) => {
    if (!url || url === "N/A" || url.trim() === "") return "";
    let cleanUrl = url.trim();
    if (cleanUrl.startsWith("http")) return cleanUrl;
    if (cleanUrl.startsWith("/")) return `https://www.war.gov${cleanUrl}`;
    return `https://www.war.gov/${cleanUrl}`;
  };

  // ==========================================
  // LEITURA DO CSV
  // ==========================================
  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('/uap-data.csv');
        if (!response.ok) throw new Error("Falha ao carregar o arquivo CSV. Verifique se ele está na pasta public.");
        
        const csvText = await response.text();
        const parsedRows = parseCSV(csvText);
        if (parsedRows.length < 2) throw new Error("CSV vazio ou inválido.");

        const headers = parsedRows[0].map(h => h.trim().toLowerCase());
        const getIdx = (exactNames: string[]) => headers.findIndex(h => exactNames.includes(h));

        const idxTitle = getIdx(["title"]);
        const idxAgency = getIdx(["agency"]);
        const idxRelease = getIdx(["release date"]);
        const idxIncidentDate = getIdx(["incident date"]);
        const idxLocation = getIdx(["incident location"]);
        const idxType = getIdx(["type"]);
        const idxFeatured = getIdx(["featured"]);
        const idxDesc = getIdx(["description blurb"]);
        const idxDocUrl = getIdx(["pdf | image link"]); 
        const idxImgUrl = getIdx(["modal image"]);
        const idxVideoUrl = getIdx(["dvids video id"]); 

        const formattedData: RecordData[] = parsedRows.slice(1).map((row, index) => {
          const getValue = (idx: number) => (idx !== -1 && row[idx] ? row[idx].trim() : "");
          
          const getArray = (idx: number) => {
            const val = getValue(idx);
            return val && val !== "N/A" ? val.split("|").map(s => s.trim()).filter(Boolean) : [];
          };

          const extractedMp4s: string[] = [];
          row.forEach(cell => {
            if (cell && typeof cell === 'string') {
              cell.split("|").forEach(part => {
                const cleanPart = part.trim();
                if (cleanPart.toLowerCase().endsWith('.mp4') || cleanPart.toLowerCase().endsWith('.mov')) {
                  extractedMp4s.push(buildHotlink(cleanPart));
                }
              });
            }
          });

          let fileType = getValue(idxType) || "N/A";
          if (!fileType.startsWith('.') && fileType !== "N/A") {
            fileType = `.${fileType.toLowerCase()}`;
          }

          const featuredValue = getValue(idxFeatured).toUpperCase();

          return {
            id: `record-${String(index + 1).padStart(4, "0")}`,
            title: getValue(idxTitle) || "N/A",
            agency: getValue(idxAgency) || "N/A",
            release: getValue(idxRelease) || "N/A",
            date: getValue(idxRelease) || "N/A",
            incidentDate: getValue(idxIncidentDate) || "N/A",
            location: getValue(idxLocation) || "N/A",
            type: fileType,
            isFeatured: featuredValue === "YES" || featuredValue === "TRUE" || featuredValue === "1",
            description: getValue(idxDesc),
            documentUrls: getArray(idxDocUrl).map(buildHotlink),
            imageUrls: getArray(idxImgUrl).map(buildHotlink),
            videoIds: getArray(idxVideoUrl), 
            directMp4Urls: extractedMp4s
          };
        }).filter(r => r.title !== "N/A" && r.title !== "");

        setRecords(formattedData);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    }
    loadData();
  }, []);

  function parseCSV(csvText: string) {
    const rows: string[][] = [];
    let row: string[] = [];
    let cell = "";
    let insideQuotes = false;
    for (let i = 0; i < csvText.length; i++) {
      const char = csvText[i];
      const nextChar = csvText[i + 1];
      if (char === '"' && insideQuotes && nextChar === '"') { cell += '"'; i++; } 
      else if (char === '"') { insideQuotes = !insideQuotes; } 
      else if (char === "," && !insideQuotes) { row.push(cell.trim()); cell = ""; } 
      else if ((char === "\n" || char === "\r") && !insideQuotes) {
        if (cell || row.length) { row.push(cell.trim()); rows.push(row); row = []; cell = ""; }
        if (char === "\r" && nextChar === "\n") i++;
      } else { cell += char; }
    }
    if (cell || row.length) { row.push(cell.trim()); rows.push(row); }
    return rows;
  }

  const availableAgencies = useMemo(() => ["All Agencies", ...Array.from(new Set(records.map(r => r.agency).filter(a => a !== "N/A"))).sort()], [records]);
  const availableReleases = useMemo(() => ["All Releases", ...Array.from(new Set(records.map(r => r.release).filter(r => r !== "N/A"))).sort()], [records]);
  const availableTypes = useMemo(() => ["All Types", ...Array.from(new Set(records.map(r => r.type).filter(t => t !== "N/A"))).sort()], [records]);

  const recordsFiltrados = useMemo(() => {
    return records.filter((record) => {
      const matchSearch = record.title.toLowerCase().includes(search.toLowerCase()) || record.location.toLowerCase().includes(search.toLowerCase());
      const matchAgency = agency === "All Agencies" || record.agency === agency;
      const matchRelease = release === "All Releases" || record.release === release;
      const matchType = fileType === "All Types" || record.type === fileType;
      return matchSearch && matchAgency && matchRelease && matchType;
    });
  }, [search, agency, release, fileType, records]);

  const totalPages = Math.ceil(recordsFiltrados.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const recordsAtuais = recordsFiltrados.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Rola a tela suavemente para o topo do bloco quando mudar de página
      tableTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Gerador de Paginação Inteligente (Ex: 1 2 3 ... 86)
  const getPaginationRange = () => {
    const delta = 2; // Quantos números mostrar ao redor do atual
    const range = [];
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }
    if (currentPage - delta > 2) range.unshift("...");
    if (currentPage + delta < totalPages - 1) range.push("...");
    
    range.unshift(1);
    if (totalPages > 1) range.push(totalPages);
    
    return range;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedRecord(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="uplinkpursue" className="scroll-mt-24 mb-20 border-b-4 border-docink pb-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      <div className="flex items-center gap-4 mb-6">
        <div className="px-3 py-1 bg-alert text-white font-mono text-xs font-bold uppercase tracking-wider">
          UPLINK: Ativo
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-none text-slate-900">
        Presidential Unsealing and Reporting System for UAP Encounters <span className="text-alert">[PURSUE]</span>
      </h2>
      
      {/* BARRA DE FILTROS E PESQUISA */}
      <div ref={tableTopRef} className="bg-[#111827] border border-gray-700 p-4 mb-6 flex flex-col lg:flex-row gap-4 shadow-lg scroll-mt-24">
        <div className="relative flex-grow flex items-center">
          <input 
            type="text" 
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            className="w-full bg-[#1f2937] text-white border border-gray-600 p-3 outline-none focus:border-[#4896a6] transition-colors"
            placeholder="Search records, locations..." 
            disabled={loading}
          />
          {search && <button onClick={() => setSearch("")} className="absolute right-3 text-gray-400 hover:text-white">✕</button>}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 font-mono text-sm">
          <select value={agency} onChange={(e) => { setAgency(e.target.value); setCurrentPage(1); }} className="bg-[#1f2937] text-white border border-gray-600 p-3 outline-none focus:border-[#4896a6] cursor-pointer disabled:opacity-50" disabled={loading}>
            {availableAgencies.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
          <select value={release} onChange={(e) => { setRelease(e.target.value); setCurrentPage(1); }} className="bg-[#1f2937] text-white border border-gray-600 p-3 outline-none focus:border-[#4896a6] cursor-pointer disabled:opacity-50" disabled={loading}>
            {availableReleases.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <select value={fileType} onChange={(e) => { setFileType(e.target.value); setCurrentPage(1); }} className="bg-[#1f2937] text-white border border-gray-600 p-3 outline-none focus:border-[#4896a6] cursor-pointer disabled:opacity-50" disabled={loading}>
            {availableTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <button onClick={() => { setSearch(""); setAgency("All Agencies"); setRelease("All Releases"); setFileType("All Types"); setCurrentPage(1); }} className="bg-transparent text-[#4896a6] border border-[#4896a6] hover:bg-[#4896a6] hover:text-white px-4 py-3 transition-colors uppercase font-bold text-xs disabled:opacity-50" disabled={loading}>
            Reset
          </button>
        </div>
      </div>

      {/* CABEÇALHO DA TABELA */}
      <div className="hidden lg:grid grid-cols-12 gap-4 pb-2 border-b-2 border-gray-300 text-slate-800 uppercase text-xs font-bold mb-4 px-4 font-mono">
        <div className="col-span-4"><span className="text-alert">{loading ? '...' : recordsFiltrados.length}</span> Files</div>
        <div className="col-span-2">Agency</div>
        <div className="col-span-2">Release</div>
        <div className="col-span-2">Incident Date</div>
        <div className="col-span-1">Location</div>
        <div className="col-span-1 text-right">Type</div>
      </div>

      {/* ÁREA DE REGISTROS */}
      <div className="space-y-2 mb-8 font-mono text-sm">
        {loading ? (
          <div className="p-8 text-center border border-gray-800 bg-[#111827] text-gray-500 animate-pulse">
            SINCRONIZANDO COM O BANCO DE DADOS...
          </div>
        ) : error ? (
          <div className="p-8 text-center border border-alert bg-red-50 text-alert font-bold shadow-sm">
            FALHA NO UPLINK: {error}
          </div>
        ) : recordsAtuais.length > 0 ? (
          recordsAtuais.map((record) => (
            <button 
              key={record.id} 
              onClick={() => setSelectedRecord(record)}
              className={`w-full text-left grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 p-4 border transition-colors hover:bg-slate-50 focus:outline-none ${record.isFeatured ? 'border-alert bg-red-50 shadow-sm' : 'border-slate-800 bg-white text-slate-900 shadow-sm'}`}
            >
              <div className="col-span-4 font-bold truncate pr-4" title={record.title}>{record.title}</div>
              <div className="col-span-2 text-slate-500 text-xs lg:text-sm truncate">[{record.agency}]</div>
              <div className="col-span-2 text-slate-500 text-xs lg:text-sm truncate">[{record.date}]</div>
              <div className="col-span-2 text-slate-500 text-xs lg:text-sm truncate">[{record.incidentDate}]</div>
              <div className="col-span-1 text-slate-500 text-xs lg:text-sm truncate" title={record.location}>[{record.location}]</div>
              <div className="col-span-1 text-right font-bold text-alert text-xs lg:text-sm">[{record.type}]</div>
            </button>
          ))
        ) : (
          <div className="p-8 text-center border border-slate-800 bg-white text-slate-600 shadow-sm">
            NENHUM REGISTRO ENCONTRADO PARA ESTES PARÂMETROS.
          </div>
        )}
      </div>

      {/* PAGINAÇÃO AVANÇADA */}
      {!loading && totalPages > 1 && (
        <nav aria-label="Records pagination" className="flex justify-center items-center gap-2 font-mono text-sm mt-10">
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1} 
            className="px-4 py-2 border border-slate-800 bg-white hover:bg-slate-100 disabled:opacity-30 transition-colors text-slate-900 font-bold"
          >
            Prev
          </button>
          
          <div className="flex gap-1">
            {getPaginationRange().map((page, idx) => (
              page === "..." ? (
                <span key={`dots-${idx}`} className="px-3 py-2 text-slate-500">...</span>
              ) : (
                <button 
                  key={page} 
                  onClick={() => handlePageChange(page as number)}
                  className={`px-3 py-2 border font-bold transition-colors ${currentPage === page ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100'}`}
                >
                  {page}
                </button>
              )
            ))}
          </div>

          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages} 
            className="px-4 py-2 border border-slate-800 bg-white hover:bg-slate-100 disabled:opacity-30 transition-colors text-slate-900 font-bold"
          >
            Next
          </button>
        </nav>
      )}

      {selectedRecord && (
        <RecordModal record={selectedRecord} onClose={() => setSelectedRecord(null)} />
      )}

    </section>
  );
}

// ==========================================
// COMPONENTE DO MODAL (SEM HACK DE CSS NO IFRAME)
// ==========================================
function RecordModal({ record, onClose }: { record: RecordData, onClose: () => void }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [videoMp4Url, setVideoMp4Url] = useState<string | null>(null);
  const [videoLoading, setVideoLoading] = useState(false);
  
  const [apiBlocked, setApiBlocked] = useState(false);
  const [useIframeFallback, setUseIframeFallback] = useState(false);

  const DVIDS_API_KEY = "key-68bb60d16b35e";
  const isVideoOrAudio = record.type === '.vid' || record.type === '.mp4' || record.type === '.aud';
  const allMediaTokens = Math.max(record.documentUrls.length, record.imageUrls.length, record.videoIds.length, record.directMp4Urls.length, 1);
  const hasMultipleMedia = allMediaTokens > 1;

  useEffect(() => {
    let isMounted = true;
    
    if (isVideoOrAudio) {
      const directMp4 = record.directMp4Urls[activeMediaIndex] || record.directMp4Urls[0];
      if (directMp4) {
        setVideoMp4Url(directMp4);
        setVideoLoading(false);
        return;
      }

      const videoId = record.videoIds[activeMediaIndex] || record.videoIds[0];
      if (videoId) {
        setVideoLoading(true);
        const targetUrl = `https://api.dvidshub.net/asset?api_key=${DVIDS_API_KEY}&id=video:${videoId}`;
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;

        fetch(proxyUrl)
          .then(res => {
            if (!res.ok) throw new Error("API Blocked");
            return res.json();
          })
          .then(json => {
            if (!isMounted) return;
            const data = json.results || json.data || json;
            if (data.files && data.files.length > 0) {
              const mp4Files = data.files.filter((f: any) => f.type === "video/mp4").sort((a: any, b: any) => b.height - a.height);
              if (mp4Files.length > 0) setVideoMp4Url(mp4Files[0].src);
              else if (data.hls_url) setVideoMp4Url(data.hls_url);
            }
          })
          .catch((e) => {
            console.error("DVIDS API blocked. Switching to Native iframe.", e);
            if (isMounted) {
              setApiBlocked(true);
              setUseIframeFallback(true);
            }
          })
          .finally(() => {
            if (isMounted) setVideoLoading(false);
          });
      } else {
        setVideoLoading(false);
      }
    }
    return () => { isMounted = false; };
  }, [record, activeMediaIndex, isVideoOrAudio]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0e151b] border border-gray-700 w-full max-w-5xl shadow-2xl flex flex-col max-h-[95vh]">
        
        {/* CABEÇALHO */}
        <header className="border-b border-gray-700 p-4 flex justify-between items-start bg-[#111827]">
          <div className="flex flex-col">
            <div className="text-[#4896a6] text-xs font-bold mb-1 tracking-widest uppercase">
              <span>[{record.agency}]</span><span className="text-gray-600 mx-2">\\</span> RECORD DETAIL
            </div>
            <h2 className="text-white text-lg font-bold font-sans pr-8">
              {record.title}
            </h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl font-bold px-3 py-1">✕</button>
        </header>

        {/* CORPO DO MODAL */}
        <div className="flex flex-col lg:flex-row overflow-y-auto min-h-[400px]">
          
          {/* ESQUERDA */}
          <div className="p-6 lg:w-1/2 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-700 bg-[#0e151b]">
            <div className="space-y-6">
              <div className="text-gray-300 text-sm font-sans leading-relaxed text-justify space-y-4">
                {record.description ? (
                  <p dangerouslySetInnerHTML={{ __html: record.description.replace(/[\r\n]+/g, '<br/><br/>') }} />
                ) : (
                  <p className="italic text-gray-500">Record summary not available.</p>
                )}
                <p className="text-gray-500 text-[11px] italic mt-4 border-t border-gray-800 pt-4 uppercase tracking-wide">
                  Redactions have been made to protect the identity of eyewitnesses, the location of government facilities, or potentially sensitive information about military sites not related to UAP.
                </p>
              </div>

              <div>
                {record.type === '.pdf' && record.documentUrls.length > 0 ? (
                  <a href={record.documentUrls[activeMediaIndex] || record.documentUrls[0]} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#111827] text-white border border-[#4896a6] hover:bg-[#4896a6] px-6 py-3 font-bold uppercase text-xs tracking-wider transition-colors">
                    Download Document {hasMultipleMedia ? `#${activeMediaIndex + 1}` : ''}
                  </a>
                ) : isVideoOrAudio && (videoMp4Url || useIframeFallback) ? (
                   <a href={videoMp4Url || `https://www.dvidshub.net/video/${record.videoIds[activeMediaIndex] || record.videoIds[0]}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#111827] text-white border border-[#4896a6] hover:bg-[#4896a6] px-6 py-3 font-bold uppercase text-xs tracking-wider transition-colors">
                    Watch / Download Media {hasMultipleMedia ? `#${activeMediaIndex + 1}` : ''}
                  </a>
                ) : record.imageUrls.length > 0 ? (
                  <a href={record.imageUrls[activeMediaIndex] || record.imageUrls[0]} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#111827] text-white border border-[#4896a6] hover:bg-[#4896a6] px-6 py-3 font-bold uppercase text-xs tracking-wider transition-colors">
                    Download Image {hasMultipleMedia ? `#${activeMediaIndex + 1}` : ''}
                  </a>
                ) : (
                  <button disabled className="inline-block border border-gray-700 text-gray-600 px-6 py-3 font-bold uppercase cursor-not-allowed text-xs">
                    File Links Missing In CSV
                  </button>
                )}
              </div>
            </div>

            <dl className="mt-8 space-y-2 border-t border-gray-800 pt-6 text-sm font-mono">
              <div className="flex gap-2"><dt className="text-gray-500 w-32 uppercase">Date Taken</dt><dd className="text-gray-300">[{record.incidentDate}]</dd></div>
              <div className="flex gap-2"><dt className="text-gray-500 w-32 uppercase">Release</dt><dd className="text-gray-300">[{record.release}]</dd></div>
              <div className="flex gap-2"><dt className="text-gray-500 w-32 uppercase">Category</dt><dd className="text-[#4896a6]">[{record.type.replace('.', '').toUpperCase()}]</dd></div>
              <div className="flex gap-2"><dt className="text-gray-500 w-32 uppercase">Location</dt><dd className="text-gray-300">[{record.location}]</dd></div>
            </dl>
          </div>

          {/* DIREITA - SEM HACK DE CSS NO IFRAME */}
          <div className="lg:w-1/2 flex flex-col bg-black relative">
            <div className="flex-grow flex items-center justify-center p-6 relative min-h-[300px] w-full">
              
              {record.type === '.pdf' ? (
                record.imageUrls.length > 0 ? (
                  <img src={record.imageUrls[activeMediaIndex] || record.imageUrls[0]} alt={record.title} className="absolute inset-0 w-full h-full object-contain" />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center w-full max-w-xs border border-gray-800 bg-[#111827] p-8">
                     <div className="text-[#4896a6] font-bold text-sm uppercase mb-4 tracking-widest">CLEARED<br/>For Open Publication<br/>{record.date}</div>
                     <div className="text-6xl font-serif text-gray-800 my-4 opacity-50">{record.agency.charAt(0) || "R"}</div>
                     <p className="text-gray-500 text-xs font-bold uppercase">{record.agency}</p>
                     <p className="text-gray-300 text-sm mt-2 font-sans font-bold">Document {activeMediaIndex + 1}</p>
                  </div>
                )
              ) : 
              
              isVideoOrAudio ? (
                videoLoading ? (
                  <div className="text-gray-500 font-mono animate-pulse uppercase text-xs tracking-widest">Establishing Uplink...</div>
                ) : useIframeFallback && (record.videoIds[activeMediaIndex] || record.videoIds[0]) ? (
                  
                  /* Iframe Seguro e Responsivo sem Hacks */
                  <iframe 
                    src={`https://www.dvidshub.net/video/embed/${record.videoIds[activeMediaIndex] || record.videoIds[0]}`} 
                    className="absolute inset-0 w-full h-full border-0" 
                    allowFullScreen 
                  />

                ) : videoMp4Url ? (
                  record.type === '.aud' ? (
                    <audio controls className="w-full max-w-md"><source src={videoMp4Url} type="audio/mp4" /></audio>
                  ) : (
                    <video controls playsInline className="absolute inset-0 w-full h-full object-contain bg-black">
                      <source src={videoMp4Url} type="video/mp4" />
                    </video>
                  )
                ) : (
                  <div className="text-gray-500 text-xs font-mono border border-gray-800 p-12 text-center uppercase tracking-widest">
                    <span className="block mb-2 text-red-500">Video stream unavailable</span>
                    [ OFFLINE IN CSV DATABASE ]
                  </div>
                )
              ) : 
              
              record.imageUrls.length > 0 ? (
                <img src={record.imageUrls[activeMediaIndex] || record.imageUrls[0]} alt={record.title} className="absolute inset-0 w-full h-full object-contain" />
              ) : (
                <div className="text-gray-500 text-xs font-mono border border-gray-800 p-12 text-center">NO PREVIEW AVAILABLE</div>
              )}
            </div>

            {hasMultipleMedia && (
              <div className="bg-[#0e151b] border-t border-gray-800 p-4 flex gap-2 overflow-x-auto">
                {record.type === '.pdf' && record.documentUrls.map((_, idx) => (
                  <button key={`doc-${idx}`} onClick={() => setActiveMediaIndex(idx)} className={`flex-shrink-0 w-16 h-12 flex items-center justify-center border font-mono text-xs ${activeMediaIndex === idx ? 'border-[#4896a6] text-[#4896a6] bg-[#111827]' : 'border-gray-700 text-gray-500 hover:border-gray-500'}`}>
                    DOC {idx + 1}
                  </button>
                ))}
                {(isVideoOrAudio) && record.videoIds.map((id, idx) => (
                  <button key={`vid-${idx}`} onClick={() => setActiveMediaIndex(idx)} className={`flex-shrink-0 w-20 h-14 bg-gray-900 border relative overflow-hidden ${activeMediaIndex === idx ? 'border-[#4896a6]' : 'border-gray-700 hover:border-gray-500'}`}>
                    <img src={`https://api.dvidshub.net/asset/thumb?id=video:${id}&api_key=${DVIDS_API_KEY}`} alt="thumb" className="w-full h-full object-cover opacity-70" onError={(e) => e.currentTarget.style.display = 'none'} />
                    <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold bg-black/40 font-mono tracking-widest">VID {idx + 1}</span>
                  </button>
                ))}
                {(record.type === '.img' || record.type === '.jpg' || record.type === '.png') && record.imageUrls.map((url, idx) => (
                  <button key={`img-${idx}`} onClick={() => setActiveMediaIndex(idx)} className={`flex-shrink-0 w-20 h-14 border overflow-hidden ${activeMediaIndex === idx ? 'border-[#4896a6]' : 'border-gray-700 hover:border-gray-500'}`}>
                    <img src={url} alt={`thumb ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}