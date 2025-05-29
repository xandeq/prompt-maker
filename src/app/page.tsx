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
  const [prompt, setPrompt] = useState('');
  const [modalAberto, setModalAberto] = useState(null);
  const [promptManual, setPromptManual] = useState(''); // NOVO

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

    const inicio = promptManual.trim()
      ? promptManual.trim()
      : 'Escreva um conteúdo com as seguintes características:';

    setPrompt(`${inicio}\n${partes.join('\n')}`);
  };


  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Prompt Maker</h1>

      {/* PERSONALIDADE */}
      <div className="mb-4">
        <label className="font-semibold block mb-1">
          Prompt personalizado (opcional)
        </label>
        <textarea
          className="w-full p-2 border rounded mb-2"
          rows={3}
          placeholder='Digite aqui um texto inicial para o prompt, se desejar...'
          value={promptManual}
          onChange={e => setPromptManual(e.target.value)}
        />
        <label className="font-semibold block mb-1">
          1) Personalidade
          <button
            onClick={() => setModalAberto('personalidade')}
            className="ml-2 text-blue-600 hover:text-blue-800 font-bold"
            title="O que é isso?"
          >
            ?
          </button>
        </label>
        <select
          className="w-full p-2 border rounded"
          value={personalidade}
          onChange={(e) => setPersonalidade(e.target.value)}
        >
          <option value="">Selecione...</option>
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

      {/* TOM */}
      <div className="mb-4">
        <label className="font-semibold block mb-1">
          2) Tom
          <button
            onClick={() => setModalAberto('tom')}
            className="ml-2 text-blue-600 hover:text-blue-800 font-bold"
            title="O que é isso?"
          >
            ?
          </button>
        </label>
        <select
          className="w-full p-2 border rounded"
          value={tom}
          onChange={(e) => setTom(e.target.value)}
        >
          <option value="">Selecione...</option>
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

      {/* LINGUAGEM */}
      <div className="mb-4">
        <label className="font-semibold block mb-1">
          3) Linguagem ou Vocabulário
          <button
            onClick={() => setModalAberto('linguagem')}
            className="ml-2 text-blue-600 hover:text-blue-800 font-bold"
            title="O que é isso?"
          >
            ?
          </button>
        </label>
        <select
          className="w-full p-2 border rounded"
          value={linguagem}
          onChange={(e) => setLinguagem(e.target.value)}
        >
          <option value="">Selecione...</option>
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

      {/* ESTILO */}
      <div className="mb-4">
        <label className="font-semibold block mb-1">
          4) Estilo
          <button
            onClick={() => setModalAberto('estilo')}
            className="ml-2 text-blue-600 hover:text-blue-800 font-bold"
            title="O que é isso?"
          >
            ?
          </button>
        </label>
        <select
          className="w-full p-2 border rounded"
          value={estilo}
          onChange={(e) => setEstilo(e.target.value)}
        >
          <option value="">Selecione...</option>
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

      {/* PROPÓSITO */}
      <div className="mb-4">
        <label className="font-semibold block mb-1">
          5) Propósito
          <button
            onClick={() => setModalAberto('proposito')}
            className="ml-2 text-blue-600 hover:text-blue-800 font-bold"
            title="O que é isso?"
          >
            ?
          </button>
        </label>
        <select
          className="w-full p-2 border rounded"
          value={proposito}
          onChange={(e) => setProposito(e.target.value)}
        >
          <option value="">Selecione...</option>
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

      {/* MODAL */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {modalAberto === 'personalidade' && 'O que é "Personalidade"?'}
              {modalAberto === 'tom' && 'O que é "Tom"?'}
              {modalAberto === 'linguagem' && 'O que é "Linguagem ou Vocabulário"?'}
            </h2>
            <p className="mb-4 text-sm text-gray-700">
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
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* OUTROS CAMPOS */}
      <div className="mb-4">
        <label className="font-semibold block mb-1">Formato de Resposta</label>
        <select
          className="w-full p-2 border rounded"
          value={formato}
          onChange={(e) => setFormato(e.target.value)}
        >
          <option value="">Selecione...</option>
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

      <div className="mb-4">
        <label className="font-semibold block mb-1">Nível de Detalhe</label>
        <select
          className="w-full p-2 border rounded"
          value={detalhe}
          onChange={(e) => setDetalhe(e.target.value)}
        >
          <option value="">Selecione...</option>
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

      <div className="mb-4">
        <label className="font-semibold block mb-1">Público-Alvo</label>
        <select
          className="w-full p-2 border rounded"
          value={publico}
          onChange={(e) => setPublico(e.target.value)}
        >
          <option value="">Selecione...</option>
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

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={gerarPrompt}
      >
        Gerar Prompt
      </button>

      {prompt && (
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2">Prompt Gerado:</h2>
          <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{prompt}</pre>
        </div>
      )}
    </main>
  );
}
