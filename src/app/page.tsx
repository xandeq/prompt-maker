
'use client';

import { useState } from 'react';

export default function Home() {
  const [personalidade, setPersonalidade] = useState('');
  const [tom, setTom] = useState('');
  const [linguagem, setLinguagem] = useState('');
  const [estilo, setEstilo] = useState('');
  const [proposito, setProposito] = useState('');
  const [formato, setFormato] = useState('');
  const [detalhe, setDetalhe] = useState('');
  const [publico, setPublico] = useState('');
  const [numeroCaracteres, setNumeroCaracteres] = useState('100');
  const [prompt, setPrompt] = useState('');
  const [modalAberto, setModalAberto] = useState<null | 'personalidade' | 'tom' | 'linguagem' | 'estilo' | 'proposito'>(null);
  const [promptManual, setPromptManual] = useState('');

  const gerarPrompt = () => {
    const partes = [];
    if (personalidade) partes.push(`Personalidade: ${personalidade}`);
    if (tom) partes.push(`Tom: ${tom}`);
    if (linguagem) partes.push(`Linguagem: ${linguagem}`);
    if (estilo) partes.push(`Estilo: ${estilo}`);
    if (proposito) partes.push(`Propósito: ${proposito}`);
    if (formato) partes.push(`Formato de resposta: ${formato}`);
    if (detalhe) partes.push(`Nível de detalhe: ${detalhe}`);
    if (publico) partes.push(`Público-alvo: ${publico}`);
    if (numeroCaracteres) partes.push(`Número máximo de caracteres: ${numeroCaracteres}`);

    const inicio = promptManual.trim()
      ? promptManual.trim()
      : 'Escreva um conteúdo com as seguintes características:';

    setPrompt(`${inicio}\n${partes.join('\n')}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c57db] via-[#1b88d8] to-[#16bbc1]">
      {/* Header with animated background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1b88d8] via-[#0cafe1] to-[#3ecfa6] py-16 px-4">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            ✨ Prompt Maker
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">
            Crie prompts perfeitos para IA de forma fácil e intuitiva
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#3ecfa6]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#16bbc1]/20 rounded-full blur-xl"></div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          
          {/* Custom Prompt Section */}
          <div className="mb-8">
            <label className="text-2xl font-bold text-gray-800 block mb-4 flex items-center">
              <span className="bg-gradient-to-r from-[#1b88d8] to-[#0cafe1] bg-clip-text text-transparent">
                💭 Prompt Personalizado
              </span>
              <span className="text-sm font-normal text-gray-500 ml-3">(opcional)</span>
            </label>
            <textarea
              className="w-full p-6 border-2 border-[#3ecfa6]/30 rounded-2xl focus:border-[#16bbc1] focus:ring-4 focus:ring-[#3ecfa6]/20 transition-all duration-200 text-lg resize-none"
              rows={4}
              placeholder="Digite aqui um texto inicial para o prompt, se desejar..."
              value={promptManual}
              onChange={e => setPromptManual(e.target.value)}
            />
          </div>

          {/* Form Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            
            {/* Personalidade */}
            <div className="space-y-3">
              <label className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#1b88d8] to-[#0cafe1] bg-clip-text text-transparent">
                  🎭 Personalidade
                </span>
                <button
                  onClick={() => setModalAberto('personalidade')}
                  className="w-8 h-8 bg-gradient-to-r from-[#1b88d8] to-[#0cafe1] text-white rounded-full flex items-center justify-center font-bold hover:scale-110 transition-transform duration-200"
                  title="O que é isso?"
                >
                  ?
                </button>
              </label>
              <select
                className="w-full p-4 border-2 border-[#1b88d8]/30 rounded-xl focus:border-[#1b88d8] focus:ring-4 focus:ring-[#1b88d8]/20 transition-all duration-200 text-lg bg-white"
                value={personalidade}
                onChange={(e) => setPersonalidade(e.target.value)}
              >
                <option value="">Selecione uma personalidade...</option>
                <option value="Casual">Casual</option>
                <option value="Formal">Formal</option>
                <option value="Humorístico">Humorístico</option>
                <option value="Sério">Sério</option>
                <option value="Impessoal">Impessoal</option>
                <option value="Empático">Empático</option>
                <option value="Didático">Didático</option>
                <option value="Cínico">Cínico</option>
                <option value="Otimista">Otimista</option>
                <option value="Pessimista">Pessimista</option>
                <option value="Animado">Animado</option>
                <option value="Reservado">Reservado</option>
                <option value="Enérgico">Enérgico</option>
                <option value="Agressivo">Agressivo</option>
                <option value="Passivo">Passivo</option>
                <option value="Encorajador">Encorajador</option>
                <option value="Crítico">Crítico</option>
                <option value="Curioso">Curioso</option>
                <option value="Afetuoso">Afetuoso</option>
                <option value="Apático">Apático</option>
              </select>
            </div>

            {/* Tom */}
            <div className="space-y-3">
              <label className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#0cafe1] to-[#3ecfa6] bg-clip-text text-transparent">
                  🎵 Tom
                </span>
                <button
                  onClick={() => setModalAberto('tom')}
                  className="w-8 h-8 bg-gradient-to-r from-[#0cafe1] to-[#3ecfa6] text-white rounded-full flex items-center justify-center font-bold hover:scale-110 transition-transform duration-200"
                  title="O que é isso?"
                >
                  ?
                </button>
              </label>
              <select
                className="w-full p-4 border-2 border-[#0cafe1]/30 rounded-xl focus:border-[#0cafe1] focus:ring-4 focus:ring-[#0cafe1]/20 transition-all duration-200 text-lg bg-white"
                value={tom}
                onChange={(e) => setTom(e.target.value)}
              >
                <option value="">Selecione um tom...</option>
                <option value="Alegre">Alegre</option>
                <option value="Melancólico">Melancólico</option>
                <option value="Irônico">Irônico</option>
                <option value="Sarcástico">Sarcástico</option>
                <option value="Respeitoso">Respeitoso</option>
                <option value="Desrespeitoso">Desrespeitoso</option>
                <option value="Ousado">Ousado</option>
                <option value="Humilde">Humilde</option>
                <option value="Ansioso">Ansioso</option>
                <option value="Calmo">Calmo</option>
                <option value="Enfático">Enfático</option>
                <option value="Indiferente">Indiferente</option>
                <option value="Desafiador">Desafiador</option>
                <option value="Inspirador">Inspirador</option>
                <option value="Medroso">Medroso</option>
                <option value="Zangado">Zangado</option>
                <option value="Amigável">Amigável</option>
                <option value="Hostil">Hostil</option>
                <option value="Condescendente">Condescendente</option>
                <option value="Fascinado">Fascinado</option>
              </select>
            </div>

            {/* Linguagem */}
            <div className="space-y-3">
              <label className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#3ecfa6] to-[#16bbc1] bg-clip-text text-transparent">
                  💬 Linguagem
                </span>
                <button
                  onClick={() => setModalAberto('linguagem')}
                  className="w-8 h-8 bg-gradient-to-r from-[#3ecfa6] to-[#16bbc1] text-white rounded-full flex items-center justify-center font-bold hover:scale-110 transition-transform duration-200"
                  title="O que é isso?"
                >
                  ?
                </button>
              </label>
              <select
                className="w-full p-4 border-2 border-[#3ecfa6]/30 rounded-xl focus:border-[#3ecfa6] focus:ring-4 focus:ring-[#3ecfa6]/20 transition-all duration-200 text-lg bg-white"
                value={linguagem}
                onChange={(e) => setLinguagem(e.target.value)}
              >
                <option value="">Selecione uma linguagem...</option>
                <option value="Técnico">Técnico</option>
                <option value="Acadêmico">Acadêmico</option>
                <option value="Coloquial">Coloquial</option>
                <option value="Arcaico">Arcaico</option>
                <option value="Moderno">Moderno</option>
                <option value="Poético">Poético</option>
                <option value="Jornalístico">Jornalístico</option>
                <option value="Diplomático">Diplomático</option>
                <option value="Burocrático">Burocrático</option>
                <option value="Profissional">Profissional</option>
                <option value="Vulgar">Vulgar</option>
                <option value="Legal">Legal</option>
                <option value="Médico">Médico</option>
                <option value="Político">Político</option>
                <option value="Esportivo">Esportivo</option>
                <option value="Publicitário">Publicitário</option>
                <option value="Literário">Literário</option>
                <option value="Informal">Informal</option>
                <option value="Militar">Militar</option>
                <option value="Cinematográfico">Cinematográfico</option>
              </select>
            </div>

            {/* Estilo */}
            <div className="space-y-3">
              <label className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#16bbc1] to-[#1c57db] bg-clip-text text-transparent">
                  🎨 Estilo
                </span>
                <button
                  onClick={() => setModalAberto('estilo')}
                  className="w-8 h-8 bg-gradient-to-r from-[#16bbc1] to-[#1c57db] text-white rounded-full flex items-center justify-center font-bold hover:scale-110 transition-transform duration-200"
                  title="O que é isso?"
                >
                  ?
                </button>
              </label>
              <select
                className="w-full p-4 border-2 border-[#16bbc1]/30 rounded-xl focus:border-[#16bbc1] focus:ring-4 focus:ring-[#16bbc1]/20 transition-all duration-200 text-lg bg-white"
                value={estilo}
                onChange={(e) => setEstilo(e.target.value)}
              >
                <option value="">Selecione um estilo...</option>
                <option value="Descritivo">Descritivo</option>
                <option value="Persuasivo">Persuasivo</option>
                <option value="Narrativo">Narrativo</option>
                <option value="Expositivo">Expositivo</option>
                <option value="Epistolar">Epistolar</option>
                <option value="Dramático">Dramático</option>
                <option value="Lírico">Lírico</option>
                <option value="Fluxo de consciência">Fluxo de consciência</option>
                <option value="Diálogo">Diálogo</option>
                <option value="Monólogo">Monólogo</option>
                <option value="Rimas">Rimas</option>
                <option value="Haiku">Haiku</option>
                <option value="Paródia">Paródia</option>
                <option value="Minimalista">Minimalista</option>
                <option value="Barroco">Barroco</option>
                <option value="Abstrato">Abstrato</option>
                <option value="Realista">Realista</option>
                <option value="Alegórico">Alegórico</option>
                <option value="Sátira">Sátira</option>
                <option value="Simbólico">Simbólico</option>
              </select>
            </div>

            {/* Propósito */}
            <div className="space-y-3">
              <label className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#1c57db] to-[#1b88d8] bg-clip-text text-transparent">
                  🎯 Propósito
                </span>
                <button
                  onClick={() => setModalAberto('proposito')}
                  className="w-8 h-8 bg-gradient-to-r from-[#1c57db] to-[#1b88d8] text-white rounded-full flex items-center justify-center font-bold hover:scale-110 transition-transform duration-200"
                  title="O que é isso?"
                >
                  ?
                </button>
              </label>
              <select
                className="w-full p-4 border-2 border-[#1c57db]/30 rounded-xl focus:border-[#1c57db] focus:ring-4 focus:ring-[#1c57db]/20 transition-all duration-200 text-lg bg-white"
                value={proposito}
                onChange={(e) => setProposito(e.target.value)}
              >
                <option value="">Selecione um propósito...</option>
                <option value="Informar">Informar</option>
                <option value="Persuadir">Persuadir</option>
                <option value="Entreter">Entreter</option>
                <option value="Expressar opinião">Expressar opinião</option>
                <option value="Provocar reflexão">Provocar reflexão</option>
                <option value="Ensinar">Ensinar</option>
                <option value="Criticar">Criticar</option>
                <option value="Explorar">Explorar</option>
                <option value="Descobrir">Descobrir</option>
                <option value="Denunciar">Denunciar</option>
                <option value="Exaltar">Exaltar</option>
                <option value="Questionar">Questionar</option>
                <option value="Motivar">Motivar</option>
                <option value="Instruir">Instruir</option>
                <option value="Descrever">Descrever</option>
                <option value="Anunciar">Anunciar</option>
                <option value="Evocar emoções">Evocar emoções</option>
              </select>
            </div>

            {/* Formato */}
            <div className="space-y-3">
              <label className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#0cafe1] to-[#3ecfa6] bg-clip-text text-transparent">
                  📋 Formato
                </span>
              </label>
              <select
                className="w-full p-4 border-2 border-[#0cafe1]/30 rounded-xl focus:border-[#0cafe1] focus:ring-4 focus:ring-[#0cafe1]/20 transition-all duration-200 text-lg bg-white"
                value={formato}
                onChange={(e) => setFormato(e.target.value)}
              >
                <option value="">Selecione um formato...</option>
                <option value="Parágrafo">Parágrafo</option>
                <option value="Lista">Lista</option>
                <option value="Tópicos">Tópicos</option>
                <option value="Passos numerados">Passos numerados</option>
                <option value="Tabela">Tabela</option>
                <option value="Resumo executivo">Resumo executivo</option>
                <option value="Com exemplos">Com exemplos</option>
                <option value="Comparação">Comparação</option>
                <option value="Tutorial">Tutorial</option>
                <option value="Relatório">Relatório</option>
              </select>
            </div>

            {/* Detalhe */}
            <div className="space-y-3">
              <label className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#3ecfa6] to-[#16bbc1] bg-clip-text text-transparent">
                  🔍 Nível de Detalhe
                </span>
              </label>
              <select
                className="w-full p-4 border-2 border-[#3ecfa6]/30 rounded-xl focus:border-[#3ecfa6] focus:ring-4 focus:ring-[#3ecfa6]/20 transition-all duration-200 text-lg bg-white"
                value={detalhe}
                onChange={(e) => setDetalhe(e.target.value)}
              >
                <option value="">Selecione o nível...</option>
                <option value="Básico">Básico</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
                <option value="Especialista">Especialista</option>
                <option value="Superficial">Superficial</option>
                <option value="Profundo">Profundo</option>
                <option value="Completo">Completo</option>
                <option value="Resumido">Resumido</option>
              </select>
            </div>

            {/* Público */}
            <div className="space-y-3">
              <label className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#16bbc1] to-[#1c57db] bg-clip-text text-transparent">
                  👥 Público-Alvo
                </span>
              </label>
              <select
                className="w-full p-4 border-2 border-[#16bbc1]/30 rounded-xl focus:border-[#16bbc1] focus:ring-4 focus:ring-[#16bbc1]/20 transition-all duration-200 text-lg bg-white"
                value={publico}
                onChange={(e) => setPublico(e.target.value)}
              >
                <option value="">Selecione o público...</option>
                <option value="Público geral">Público geral</option>
                <option value="Iniciantes">Iniciantes</option>
                <option value="Experientes">Experientes</option>
                <option value="Estudantes">Estudantes</option>
                <option value="Profissionais">Profissionais</option>
                <option value="Crianças">Crianças</option>
                <option value="Adolescentes">Adolescentes</option>
                <option value="Adultos">Adultos</option>
                <option value="Idosos">Idosos</option>
                <option value="Especialistas">Especialistas</option>
              </select>
            </div>

            {/* Número de Caracteres */}
            <div className="space-y-3">
              <label className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#1c57db] to-[#1b88d8] bg-clip-text text-transparent">
                  🔢 Número de Caracteres
                </span>
              </label>
              <input
                type="number"
                className="w-full p-4 border-2 border-[#1c57db]/30 rounded-xl focus:border-[#1c57db] focus:ring-4 focus:ring-[#1c57db]/20 transition-all duration-200 text-lg bg-white"
                value={numeroCaracteres}
                onChange={(e) => setNumeroCaracteres(e.target.value)}
                placeholder="100"
                min="1"
              />
            </div>
          </div>

          {/* Generate Button */}
          <div className="text-center mb-8">
            <button
              className="bg-gradient-to-r from-[#1b88d8] via-[#0cafe1] to-[#3ecfa6] text-white text-2xl font-black px-12 py-6 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 transform"
              onClick={gerarPrompt}
            >
              ✨ Gerar Prompt Mágico ✨
            </button>
          </div>

          {/* Generated Prompt Display */}
          {prompt && (
            <div className="bg-gradient-to-r from-[#3ecfa6]/10 to-[#16bbc1]/10 border-2 border-[#3ecfa6]/30 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-black text-[#1c57db] mb-6 flex items-center gap-3">
                🚀 Seu Prompt Está Pronto!
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-inner border border-[#3ecfa6]/20">
                <pre className="text-gray-800 text-lg leading-relaxed whitespace-pre-wrap font-mono">{prompt}</pre>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => navigator.clipboard.writeText(prompt)}
                  className="bg-gradient-to-r from-[#3ecfa6] to-[#16bbc1] text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-200"
                >
                  📋 Copiar Prompt
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl transform animate-pulse">
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-[#1b88d8] to-[#0cafe1] bg-clip-text text-transparent">
              {modalAberto === 'personalidade' && '🎭 O que é "Personalidade"?'}
              {modalAberto === 'tom' && '🎵 O que é "Tom"?'}
              {modalAberto === 'linguagem' && '💬 O que é "Linguagem"?'}
              {modalAberto === 'estilo' && '🎨 O que é "Estilo"?'}
              {modalAberto === 'proposito' && '🎯 O que é "Propósito"?'}
            </h2>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              {modalAberto === 'personalidade' &&
                'A personalidade se refere a elementos do caráter ou comportamento do escritor que podem surgir na escrita. Ela pode ser deduzida pelo uso da linguagem, pelas opiniões expressas, pela maneira como os tópicos são abordados e por vários outros fatores.'}
              {modalAberto === 'tom' &&
                'O tom de um texto representa a atitude ou emoção que o autor quer transmitir. O tom pode ser determinado pelo tipo de linguagem usada, o ritmo e o fluxo do texto, entre muitos outros fatores.'}
              {modalAberto === 'linguagem' &&
                'A linguagem se refere ao conjunto específico de palavras e frases usadas em um texto. Isso pode incluir gírias, jargões profissionais e linguagem coloquial entre outros. Em algumas características a linguagem se assemelha a personalidade.'}
              {modalAberto === 'estilo' &&
                'O estilo de escrita é a maneira única como um autor escolhe usar palavras e estruturar frases para expressar suas ideias.'}
              {modalAberto === 'proposito' &&
                'O propósito é o objetivo ou intenção que o autor tem em mente ao produzir um conteúdo.'}
            </p>
            <button
              onClick={() => setModalAberto(null)}
              className="bg-gradient-to-r from-[#1b88d8] to-[#0cafe1] text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-200 w-full text-lg"
            >
              Entendi! 👍
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
