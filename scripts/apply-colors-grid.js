import { coresPorGrupo, colorsExternal } from "./colors.js"
import { elementosNaoMetal, elementosMetaisTransicao, elementosHalogenios, elementosMetaisAlcalinoTerrosos, elementosLantanideos, elementosGasesNobres, elementosOutrosMetais, elementoSemiMetais, elementosMetaisAlcalinos, elementosActinidios } from "./elements.js"

export const highlightNonMetals = () => {
  elementosNaoMetal.map(elemento => {

    const elementNode = document.querySelector(`.num${elemento}`)
    if (elementNode) {
      elementNode.style.backgroundColor = colorsExternal.naoMetais
    } else {
      console.warn(`Elemento com ID num${elemento} não encontrado.`);
    }
  })
}

export const highlightAlkaliMetals = () => {
  elementosMetaisAlcalinos.map(elemento => {

    const elementNode = document.querySelector(`.num${elemento}`)
    if (elementNode) {
      elementNode.style.backgroundColor = colorsExternal.metaisAlcalinos
    } else {
      console.warn(`Elemento com ID num${elemento} não encontrado.`);
    }
  })
}

export const highlightSemiMetals = () => {
  elementoSemiMetais.map(elemento => {

    const elementNode = document.querySelector(`.num${elemento}`)
    if (elementNode) {
      elementNode.style.backgroundColor = colorsExternal.semiMetais
    } else {
      console.warn(`Elemento com ID num${elemento} não encontrado.`);
    }
  })
}

export const highlightOtherMetals = () => {
  elementosOutrosMetais.map(elemento => {

    const elementNode = document.querySelector(`.num${elemento}`)
    if (elementNode) {
      elementNode.style.backgroundColor = colorsExternal.outrosMetais
    } else {
      console.warn(`Elemento com ID num${elemento} não encontrado.`);
    }
  })
}

export const highlightLanthanides = () => {
  elementosLantanideos.map(elemento => {

    const elementNode = document.querySelector(`.num${elemento}`)
    if (elementNode) {
      elementNode.style.backgroundColor = colorsExternal.lantanideos
    } else {
      console.warn(`Elemento com ID num${elemento} não encontrado.`);
    }
  })
}

export const highlightNoblesGas = () => {
  elementosGasesNobres.map(elemento => {

    const elementNode = document.querySelector(`.num${elemento}`)
    if (elementNode) {
      elementNode.style.backgroundColor = colorsExternal.gasesNobres
    } else {
      console.warn(`Elemento com ID num${elemento} não encontrado.`);
    }
  })
}

export const highlightAlkalineEarthMetals = () => {
  elementosMetaisAlcalinoTerrosos.map(elemento => {

    const elementNode = document.querySelector(`.num${elemento}`)
    if (elementNode) {
      elementNode.style.backgroundColor = colorsExternal.metaisAlcalinoTerrosos
    } else {
      console.warn(`Elemento com ID num${elemento} não encontrado.`);
    }
  })
}

export const highlightHalogens = () => {
  elementosHalogenios.map(elemento => {

    const elementNode = document.querySelector(`.num${elemento}`)
    if (elementNode) {
      elementNode.style.backgroundColor = colorsExternal.halogenios
    } else {
      console.warn(`Elemento com ID num${elemento} não encontrado.`);
    }
  })
}

export const highlightTransitionMetal = () => {
  elementosMetaisTransicao.map(elemento => {

    const elementNode = document.querySelector(`.num${elemento}`)
    if (elementNode) {
      elementNode.style.backgroundColor = colorsExternal.metaisTransicao
    } else {
      console.warn(`Elemento com ID num${elemento} não encontrado.`);
    }
  })
}

export const highlightActinidia = () => {
  elementosActinidios.map(elemento => {

    const elementNode = document.querySelector(`.num${elemento}`)
    if (elementNode) {
      elementNode.style.backgroundColor = colorsExternal.actinidios
    } else {
      console.warn(`Elemento com ID num${elemento} não encontrado.`);
    }
  })
}
