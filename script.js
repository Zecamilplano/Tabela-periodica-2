import { highlightNonMetals, highlightAlkaliMetals, highlightSemiMetals, highlightOtherMetals, highlightHalogens, highlightNoblesGas, highlightLanthanides, highlightTransitionMetal, highlightAlkalineEarthMetals, highlightActinidia } from "./scripts/apply-colors-grid.js"
import { entrarElemento, sairElemento } from "./scripts/periodic-information.js"
// console.log("teste" + entrarElemento)
entrarElemento()
sairElemento()

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
  // entrarElemento()
})

// console.log("et" + entrarElemento())

// const elementos = [
//   { numeroAtomico: 1, simbolo: "H", nome: "Hidrogênio", massaAtomica: 1.008, configuracaoEletronica: "1s¹", grupoQuimico: "nao metais" },
//   { numeroAtomico: 2, simbolo: "He", nome: "Hélio", massaAtomica: 4.002, configuracaoEletronica: "1s²", grupoQuimico: "gases nobres" },
//   { numeroAtomico: 3, simbolo: "Li", nome: "Lítio", massaAtomica: 6.94, configuracaoEletronica: "1s² 2s¹", grupoQuimico: "metais alcalinos" },
//   { numeroAtomico: 4, simbolo: "Be", nome: "Berílio", massaAtomica: 9.012, configuracaoEletronica: "1s² 2s²", grupoQuimico: "metais alcalino-terrosos" },
// ];
// ;
//
// const coresPorGrupo = {
//   "nao metais": { claro: "#89e531", escuro: "#32580a" },
//   "gases nobres": { claro: "#3c9fe4", escuro: "#133862" }, // Azul claro e escuro
//   "metais alcalinos": { claro: "#f1b432", escuro: "#3f3100" }, // Amarelo claro e ouro
//   "metais alcalino-terrosos": { claro: "#e2e900", escuro: "#FFA500" }, // Laranja claro e escuro
//   "semimetais": { claro: "#4cb8ae", escuro: "#0d3b36" },
//   "halogênios": { claro: "#91e4ea", escuro: "#00a0a8" },
//   "outros metais": { claro: "#9ec7d4", escuro: "#377385" },
//   "metais de transição": { claro: "#f4848b", escuro: "#b20011" },
//   "lantanídeos": { claro: "#81e7eb", escuro: "#00a0a8" },
//   "actinídeos": { claro: "#e5a0d7", escuro: "#a2008d" },
// };
//
// const celulas = document.querySelectorAll(".coluna")
// const information = document.querySelector("#information")
//
// celulas.forEach(celula => {
//   celula.addEventListener("mouseover", () => {
//
//     if (celula.classList.length >= 2) {
//       const segundaClasse = celula.classList[1];
//       const numeros = parseInt(segundaClasse.replace("num", ""), 10)
//       const elemento = elementos.find(el => el.numeroAtomico === numeros)
//
//       if (elemento) {
//         const cores = coresPorGrupo[elemento.grupoQuimico]  // Cores padrão se grupo não encontrado
//         const h2 = information.querySelector("h2")
//         const p = information.querySelector("p")
//
//         h2.textContent = elemento.nome
//         h2.style.backgroundColor = cores.escuro
//         h2.className = "h2name"
//         p.innerHTML = `
//
//           <div  style="display: flex; background: ${cores.claro};">
//               <div style="  padding: 6px; width: 100px;"> 
//               <h3 style="text-align: center; ">${elemento.simbolo}</h3>
//               <p >${elemento.nome}</p>
//               <p>${elemento.numeroAtomico}  &nbsp; &nbsp; ${elemento.massaAtomica}</p>
//             </div>
//
//             <table class="tableInformation">
//               <tr><td>Símbolo</td><td>${elemento.simbolo}</td></tr>
//               <tr><td>Número atômico</td><td>${elemento.numeroAtomico}</td></tr>
//               <tr><td>Configuração eletrônica</td><td>${elemento.configuracaoEletronica}</td></tr>
//             </table>
//           </div>
//         `
//         paragraph.style.display = "none";
//
//       }
//
//     } else {
//       console.log("A célula não possui uma segunda classe.");
//     }
//   })

// celula.addEventListener("mouseout", () => {
// celula.style.backgroundColor = ""; // Restaura o fundo padrão
// celula.style.border = ""; // Remove a borda personalizada
// });
// })
