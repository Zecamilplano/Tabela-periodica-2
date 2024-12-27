import { highlightNonMetals, highlightAlkaliMetals, highlightSemiMetals, highlightOtherMetals, highlightHalogens, highlightNoblesGas, highlightLanthanides, highlightTransitionMetal, highlightAlkalineEarthMetals, highlightActinidia } from "./scripts/apply-colors-grid.js"

document.addEventListener("DOMContentLoaded", () => {
  highlightNonMetals()
  highlightAlkaliMetals()
  highlightSemiMetals()
  highlightOtherMetals()
  highlightLanthanides()
  highlightNoblesGas()
  highlightHalogens()
  highlightTransitionMetal()
  highlightAlkalineEarthMetals()
  highlightActinidia()
  // firstPeriod()
  // sairElemento()
})

const elementos = [
  { numeroAtomico: 1, simbolo: "H", nome: "Hidrogênio", massaAtomica: 1.008, configuracaoEletronica: "1s¹" },
  { numeroAtomico: 2, simbolo: "He", nome: "Hélio", massaAtomica: 4.0026, configuracaoEletronica: "1s²" },
  { numeroAtomico: 3, simbolo: "Li", nome: "Lítio", massaAtomica: 6.94, configuracaoEletronica: "1s² 2s¹" },
  { numeroAtomico: 4, simbolo: "Be", nome: "Berílio", massaAtomica: 9.0122, configuracaoEletronica: "1s² 2s²" },
];

const coresPorGrupo = {
  "não metais": { claro: "#a2d442", escuro: "#32580a" }, // Verde claro e escuro
  "gases nobres": { claro: "#3c9fe4", escuro: "#133862" }, // Azul claro e escuro
  "metais alcalinos": { claro: "#f1b432", escuro: "#3f3100" }, // Amarelo claro e ouro
  "metais alcalino-terrosos": { claro: "#e2e900", escuro: "#FFA500" }, // Laranja claro e escuro
};

const tabela = document.querySelector("#table-periodic")

const celulas = document.querySelectorAll(".coluna")

celulas.forEach(celula => {
  celula.addEventListener("mouseover", (event) => {

    if (celula.classList.length >= 2) {
      const segundaClasse = celula.classList[1];
      const numeros = parseInt(segundaClasse.replace("num", ""), 10)
      const elemento = elementos.find(el => el.numeroAtomico === numeros)

      if (elemento) {
        const cores = coresPorGrupo[elemento.grupoQuimico] || { claro: "#d9d9d9", escuro: "#a9a9a9" }; // Cores padrão se grupo não encontrado
        celula.style.backgroundColor = cores.claro; // Aplica a cor clara ao fundo
        celula.style.border = `2px solid ${cores.escuro}`; // Aplica a borda com a cor escura
        console.log(`Elemento: ${elemento.nome}, Grupo: ${elemento.grupoQuimico}`);
      }

      console.log(`Segunda classe: ${segundaClasse}`);
    } else {
      console.log("A célula não possui uma segunda classe.");
    }
  })

  celula.addEventListener("mouseout", () => {
    celula.style.backgroundColor = ""; // Restaura o fundo padrão
    celula.style.border = ""; // Remove a borda personalizada
  });
})
