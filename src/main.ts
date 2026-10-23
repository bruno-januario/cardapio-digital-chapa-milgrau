import "./styles/global.css"
import "./styles/header.css"
import "./styles/menu.css"
import "./styles/footer.css"

import { beverages, fastFood, soapFood, type Product, type Soup } from "./data"
import { attachProductInteractions } from "./listeners"

const sectionConfigurations = [
  { key: "fast-food", items: fastFood },
  { key: "soup", items: soapFood },
  { key: "beverages", items: beverages }
] as const

function buildPriceDisplay(product: Product): HTMLElement {
  const detail = document.createElement("div")

  if (typeof product.price === "number") {
    const singlePrice = document.createElement("span")
    singlePrice.className = "product-price single-price"
    singlePrice.textContent = `R$ ${product.price.toFixed(2).replace(".", ",")}`
    detail.appendChild(singlePrice)
    return detail
  }

  return detail
}

function getSoupPriceOptions(): Array<{ label: string; value: number }> {
  const firstSoup = soapFood[0] as Soup

  return [
    { label: "P", value: firstSoup.priceP },
    { label: "M", value: firstSoup.priceM },
    { label: "G", value: firstSoup.priceG },
    { label: "GG", value: firstSoup.priceGG }
  ]
}

function renderSoupPriceLegend(): HTMLElement {
  const legend = document.createElement("div")
  legend.className = "soup-price-legend"

  const title = document.createElement("p")
  title.className = "soup-price-title"
  title.textContent = "Preços válidos para todas as sopas"

  const grid = document.createElement("div")
  grid.className = "soup-price-grid"

  getSoupPriceOptions().forEach(({ label, value }) => {
    const chip = document.createElement("div")
    chip.className = "soup-price-chip"

    const labelNode = document.createElement("span")
    labelNode.className = "soup-price-label"
    labelNode.textContent = label

    const valueNode = document.createElement("span")
    valueNode.className = "soup-price-value"
    valueNode.textContent = `R$ ${value.toFixed(2).replace(".", ",")}`

    chip.append(labelNode, valueNode)
    grid.appendChild(chip)
  })

  legend.append(title, grid)
  return legend
}

function renderMenuCard(product: Product, includePrice = true): HTMLButtonElement {
  const card = document.createElement("button")
  card.type = "button"
  card.className = "menu-card"
  card.setAttribute("aria-label", `Ver descrição de ${product.name}`)
  card.setAttribute("aria-haspopup", "dialog")
  card.setAttribute("aria-controls", "product-dialog")

  const title = document.createElement("span")
  title.className = "product-name"
  title.textContent = product.name

  const detail = includePrice ? buildPriceDisplay(product) : null

  const hint = document.createElement("span")
  hint.className = "product-hint"
  hint.textContent = "Clique para ver a descrição"

  const image = document.createElement("img")
  image.className = "product-picture"
  image.src = product.picture
  image.alt = product.name

  const content = document.createElement("div")
  content.className = "product-card-content"

  if (detail) {
    content.append(title, detail, hint)
  } else {
    content.append(title, hint)
  }

  card.append(image, content)

  card.dataset.name = product.name
  card.dataset.description = product.description

  return card
}

function renderSection(sectionId: string, items: Product[]): void {
  const sectionElement = document.querySelector(`[data-menu-section="${sectionId}"]`)

  if (!sectionElement) {
    return
  }

  if (sectionId === "soup") {
    sectionElement.classList.add("has-price-summary")
    const cards = items.map((item) => renderMenuCard(item, false))
    sectionElement.replaceChildren(renderSoupPriceLegend(), ...cards)
    return
  }

  const cards = items.map((item) => renderMenuCard(item))
  sectionElement.replaceChildren(...cards)
}

for (const { key, items } of sectionConfigurations) {
  renderSection(key, items)
}

attachProductInteractions()
