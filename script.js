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
})
