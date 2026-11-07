"use client";



import { toPng } from "html-to-image";



import { memo, useCallback, useEffect, useRef, useState } from "react";

const TAMANHOS = [32, 64, 128];
const BRANCO = "#ffffff";

const CORES_RODA = [
  "#8b0016",
  "#ed1c24",
  "#ff7f27",
  "#fff200",
  "#b5e61d",
  "#22b14c",
  "#00a2e8",
  "#99d9ea",
  "#7092be",
  "#c8bfe7",
  "#a349a4",
  "#ff2fba",
];

function criarTela(tamanho) {
  async function exportarGrade() {
  if (!gradeRef.current) return;

  try {
    const imagem = await toPng(gradeRef.current, {
      backgroundColor: "#ffffff",
      pixelRatio: 3,
      cacheBust: true,
    });

    const link = document.createElement("a");

    link.download = `pixel-art-${tamanho}x${tamanho}.png`;
    link.href = imagem;
    link.click();
  } catch (erro) {
    console.error("Erro ao exportar a grade:", erro);
    alert("Não foi possível exportar o desenho.");
  }
}
  return new Array(tamanho * tamanho).fill(BRANCO);
  const gradeRef = useRef(null);
}

function gerarPontos() {
  const centro = 100;
  const raio = 95;
  const vertices = [];
  for (let i = 0; i <= 6; i++) {
    const ang = ((-120 + 60 * i) * Math.PI) / 180;
    vertices.push([
      +(centro + raio * Math.cos(ang)).toFixed(2),
      +(centro + raio * Math.sin(ang)).toFixed(2),
    ]);
  }
  const pontos = [];
  for (let i = 0; i < 6; i++) {
    const [x1, y1] = vertices[i];
    const [x2, y2] = vertices[i + 1];
    pontos.push([x1, y1]);
    pontos.push([+((x1 + x2) / 2).toFixed(2), +((y1 + y2) / 2).toFixed(2)]);
  }
  pontos.push(vertices[6]);
  return pontos;
}

const PONTOS = gerarPontos();

function RodaCores({ corAtual, onSelecionar }) {
  return (
    <svg viewBox="0 0 200 200" className="w-48 h-48">
      {CORES_RODA.map((cor, i) => {
        const [x1, y1] = PONTOS[i];
        const [x2, y2] = PONTOS[i + 1];
        return (
          <polygon
            key={cor}
            points={`100,100 ${x1},${y1} ${x2},${y2}`}
            fill={cor}
            stroke={corAtual === cor ? "#ffffff" : "#000000"}
            strokeWidth={corAtual === cor ? 4 : 2}
            strokeLinejoin="round"
            onClick={() => onSelecionar(cor)}
            className="cursor-pointer"
          />
        );
      })}
    </svg>
  );
}

// memo: o quadrado só é redesenhado se a cor (ou a grade) dele mudar
const Pixel = memo(function Pixel({ cor, index, grade, onDown, onEnter }) {
  return (
    <div
      onMouseDown={() => onDown(index)}
      onMouseEnter={() => onEnter(index)}
      style={{ backgroundColor: cor }}
      className={`aspect-square cursor-pointer ${
        grade ? "border border-gray-300" : ""
      }`}
    />
  );
});

export default function Tela() {

  const gradeRef = useRef(null);

  async function exportarGrade() {
  if (!gradeRef.current) return;

  try {
    const imagem = await toPng(gradeRef.current, {
      backgroundColor: "#ffffff",
      pixelRatio: 3,
      cacheBust: true,
    });

    const link = document.createElement("a");

    link.download = `pixel-art-${tamanho}x${tamanho}.png`;
    link.href = imagem;
    link.click();
  } catch (erro) {
    console.error("Erro ao exportar a grade:", erro);
    alert("Não foi possível exportar o desenho.");
  }
}
  const [tamanho, setTamanho] = useState(32);
  const [pixels, setPixels] = useState(() => criarTela(32));
  const [corAtual, setCorAtual] = useState("#000000");
  const [ferramenta, setFerramenta] = useState("lapis"); // "lapis" ou "balde"

  // refs: guardam valores que as funções de clique precisam ler
  // sem que elas sejam recriadas a cada mudança
  const corRef = useRef(corAtual);
  const ferramentaRef = useRef(ferramenta);
  const desenhandoRef = useRef(false);

  useEffect(() => {
    corRef.current = corAtual;
  }, [corAtual]);

  useEffect(() => {
    ferramentaRef.current = ferramenta;
  }, [ferramenta]);

  const pintar = useCallback((index) => {
    const cor = corRef.current;
    setPixels((anteriores) => {
      if (anteriores[index] === cor) return anteriores; // nada mudou
      const novos = [...anteriores];
      novos[index] = cor;
      return novos;
    });
  }, []);

  const preencher = useCallback(
    (index) => {
      const cor = corRef.current;
      setPixels((anteriores) => {
        const corAlvo = anteriores[index];
        if (corAlvo === cor) return anteriores;

        const novos = [...anteriores];
        const pilha = [index];

        while (pilha.length > 0) {
          const i = pilha.pop();
          if (novos[i] !== corAlvo) continue;

          novos[i] = cor;

          const x = i % tamanho;
          const y = Math.floor(i / tamanho);

          if (x > 0) pilha.push(i - 1);
          if (x < tamanho - 1) pilha.push(i + 1);
          if (y > 0) pilha.push(i - tamanho);
          if (y < tamanho - 1) pilha.push(i + tamanho);
        }

        return novos;
      });
    },
    [tamanho]
  );

  const comecarDesenho = useCallback(
    (index) => {
      if (ferramentaRef.current === "balde") {
        preencher(index);
        return;
      }
      desenhandoRef.current = true;
      pintar(index);
    },
    [pintar, preencher]
  );

  const continuarDesenho = useCallback(
    (index) => {
      if (desenhandoRef.current) pintar(index);
    },
    [pintar]
  );

  function pararDesenho() {
    desenhandoRef.current = false;
  }

  function mudarTamanho(novoTamanho) {
    if (novoTamanho === tamanho) return;

    const temDesenho = pixels.some((cor) => cor !== BRANCO);
    if (
      temDesenho &&
      !window.confirm("Mudar o tamanho apaga o desenho atual. Continuar?")
    ) {
      return;
    }

    setTamanho(novoTamanho);
    setPixels(criarTela(novoTamanho));
  }

  // Em 128x128 os quadrados têm só 4px, então a grade fica desligada
  const grade = tamanho <= 64;

  return (
    <div
      className="flex flex-col items-center gap-4 mt-10 pb-10"
      onMouseUp={pararDesenho}
    >
      {/* Tamanho da tela */}
      <div className="flex items-center gap-2">
        <span className="font-semibold">Tamanho:</span>
        {TAMANHOS.map((t) => (
          <button
            key={t}
            onClick={() => mudarTamanho(t)}
            className={`px-3 py-1 rounded border-2 ${
              tamanho === t
                ? "border-blue-500 bg-blue-100"
                : "border-gray-400 bg-white"
            }`}
          >
            {t}x{t}
          </button>
        ))}
      </div>

      {/* Ferramentas */}
      <div className="flex gap-2">
        {[
          { id: "lapis", nome: "Lápis" },
          { id: "balde", nome: "Balde" },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFerramenta(f.id)}
            className={`px-4 py-2 rounded border-2 ${
              ferramenta === f.id
                ? "border-blue-500 bg-blue-100"
                : "border-gray-400 bg-white"
            }`}
          >
            {f.nome}
          </button>
        ))}
      </div>

      {/* Roda de cores + preto e branco */}
      <div className="flex flex-col items-center gap-2">
        <RodaCores corAtual={corAtual} onSelecionar={setCorAtual} />
        <div className="flex gap-2">
          {["#000000", BRANCO].map((cor) => (
            <button
              key={cor}
              onClick={() => setCorAtual(cor)}
              style={{ backgroundColor: cor }}
              className={`w-8 h-8 rounded border-2 ${
                corAtual === cor ? "border-blue-500" : "border-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <button
  onClick={exportarGrade}
  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
>
  Exportar PNG
</button>

      {/* Grid */}
 <div
  ref={gradeRef}
  className="grid w-[512px] h-[512px] border border-gray-800 select-none"
  style={{ gridTemplateColumns: `repeat(${tamanho}, 1fr)` }}
  onMouseLeave={pararDesenho}
>
  {pixels.map((cor, index) => (
    <Pixel
      key={index}
      cor={cor}
      index={index}
      grade={grade}
      onDown={comecarDesenho}
      onEnter={continuarDesenho}
    />
  ))}
</div>
    </div>
  );
}