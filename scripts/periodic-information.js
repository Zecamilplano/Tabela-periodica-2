const information = document.querySelector("#information")
const h2 = information.querySelector("h2")
const p = information.querySelector("p")

const boxInformation = document.createElement("div")
information.appendChild(boxInformation)

import { coresPorGrupo } from "./colors.js"
import { elementos } from "./elements.js"

const celulas = document.querySelectorAll(".coluna")

export const entrarElemento = () => {
  celulas.forEach(celula => {
    celula.addEventListener("mouseover", () => {
      const segundaClasse = celula.classList[1];
      if (celula.classList.length >= 2) {
        const numeros = parseInt(segundaClasse.replace("num", ""), 10)
        const elemento = elementos.find(el => el.numeroAtomico === numeros)

        if (elemento) {
          const cores = coresPorGrupo[elemento.grupoQuimico] || { claro: "#cccccc", escuro: "#333333" };


          console.log(elemento.nome)
          h2.textContent = elemento.nome
          h2.style.backgroundColor = cores.escuro
          h2.className = "h2name"
          boxInformation.id = "boxInformation"

          p.style.display = "none"

          boxInformation.style.visibility = "visible"
          boxInformation.innerHTML = `
              <div  style="display: flex; flex-direction: column; background: ${cores.claro}; justify-content: space-around; width: 116px; ">
                <h3 style="text-align: center; font-size: 23px;">${elemento.simbolo}</h3>
                <p style="text-align: center; font-size: 18px;">${elemento.nome}</p>
                <p style="text-align: center;">${elemento.numeroAtomico}  &nbsp; &nbsp; ${elemento.massaAtomica}</p>
              </div>
              <table class="tableInformation">
                <tr><td>Símbolo</td><td>${elemento.simbolo}</td></tr>
                <tr><td>Número atômico</td><td>${elemento.numeroAtomico}</td></tr>
                <tr><td>Configuração eletrônica</td><td>${elemento.configuracaoEletronica}</td></tr>
              </table>
          `
        }

      } else {
        console.log("A célula não possui uma segunda classe.");
      }
    })

  })
}

export const sairElemento = () => {
  console.log("sair elementos")
  celulas.forEach(celula => {
    celula.addEventListener("mouseout", () => {

      p.style.display = "none"
      if (h2) {
        h2.textContent = "Tabela Periódica";
        h2.style.backgroundColor = "#d9d9d9";
        h2.className = "";
      }

      if (p) {
        p.style.display = "block"
        p.innerHTML = `A Tabela Periódica é um modelo que agrupa todos os elementos químicos conhecidos e suas propriedades. <br> 
                       Eles estão organizados em ordem crescente correspondente aos números atômicos (número de prótons).`;
        boxInformation.style.visibility = "hidden"
      }
      // console.log("sair"  boxInformation)

    })
  })
}
// export {
//   entrarElemento
// }
// const exibirInformacao = (elemento) => {
//   information.innerHTML = `
//      <h1 style="background-color: #32580a; padding: 4px; color: white;">${elemento.nome}</h1>
//     <div class="moreInformation">
//       <div style="background-color: #a2d442; padding: 6px;">
//         <h1 style="text-align: center; font-size: 26px;">${elemento.simbolo}</h1>
//         <p>${elemento.nome}</p>
//         <p><span>${elemento.numeroAtomico}</span> &nbsp; &nbsp; ${elemento.massaAtomica}</p>
//       </div>
//       <div>
//         <table class="tableInformation">
//           <tr><td>Símbolo</td><td>${elemento.simbolo}</td></tr>
//           <tr><td>Número atômico</td><td>${elemento.numeroAtomico}</td></tr>
//           <tr><td>Configuração eletrônica</td><td>${elemento.configuracaoEletronica}</td></tr>
//         </table>
//       </div>
//     </div>
// `
//   paragraph.style.display = "none";
//
// }
//
//
// const ocultarInformacoes = () => {
//   information.innerHTML = `      
//       <h2>Tabela periódica</h2>
//       <p>A Tabela Periódica é um modelo que agrupa todos os elementos químicos conhecidos e suas propriedades. <br>
//         Eles estão organizados em ordem crescente correspondente aos números atômicos (número de prótons). </p>
// `;
// }
