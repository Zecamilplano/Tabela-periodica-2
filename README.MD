# Tabela Periódica - Versão 2.0

Este projeto apresenta uma Tabela Periódica interativa desenvolvida com HTML, CSS e JavaScript. A tabela é organizada com a tag `<table>` e os elementos são colorizados dinamicamente com base em grupos químicos, utilizando um array para armazenar os dados de classificação.


## 📋 Descrição

- A tabela é estruturada em HTML utilizando `<table>`, `<tr>` e `<td>`.
- A colorização dos elementos é feita dinamicamente com JavaScript.
- Os grupos químicos são definidos em um array, e as cores correspondentes são aplicadas com base nessa classificação.
- Inclui melhorias na versão 2.0, como um design refinado e melhor organização do código.
- Ao passar o mouse em um período, uma descrição detalhada sobre seus elementos é exibida.

## 🛠️ Modo de Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/tabela-periodica.git
2. **Navegue até o diretório do projeto:**  
   ```bash 
   cd tabela-periodica  
3. **Abra o arquivo index.html em seu navegador:**

  - Use uma ferramenta como o Live Server no VSCode para uma melhor experiência.
## 🚀 Estrutura do Código

### **HTML**
- A tabela é construída manualmente com `<table>`, representando os períodos e grupos.
- Cada célula (`<td>`) representa um elemento químico.
### **JavaScript**

#### Colorização das células
- Um array armazena os grupos químicos (como metais, não-metais, gases nobres, etc.).
- As cores são aplicadas às células da tabela de acordo com o grupo do elemento.
- Exemplo de uso:

  ```javascript
   const colorsExternal = {
     naoMetais: "#96cd30",
     metaisAlcalinos: "#D89F2B",
     semiMetais: "#44A69C",
   }

    // Função para colorir os elementos da tabela
    // No caso eu estou colorindo grupos químicos
    const highlightNonMetals = () => {
  elementosNaoMetal.map(elemento => {

    const elementNode = document.querySelector(`.num${elemento}`)
        if (elementNode) {
        elementNode.style.backgroundColor = colorsExternal.naoMetais
        } else {
        console.warn(`Elemento com ID num${elemento} não encontrado.`);
        }
    }) }

### Exibição de Informações por Período

- A funcionalidade de exibir informações sobre os períodos da Tabela Periódica foi implementada utilizando eventos JavaScript. Cada período está associado a uma descrição específica, que é exibida ao passar o mouse sobre o elemento correspondente na tabela. Abaixo está o trecho de código responsável por essa funcionalidade:
```javascript
 const coresPorGrupo = {
  "nao metais": { claro: "#89e531", escuro: "#32580a" },
  "gases nobres": { claro: "#3c9fe4", escuro: "#133862" }, 
  "metais alcalinos": { claro: "#f1b432", escuro: "#3f3100}
 }...
 ```
- função de mostrar as informações ao passar o mouse
 ```javascript
 const entrarElemento = () => {
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
  })
}

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
```

- Função para quando o mouse sair do elemento
```javascript
 const sairElemento = () => {
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

    })
```