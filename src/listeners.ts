export function attachProductInteractions(): void {
  const cards = document.querySelectorAll<HTMLElement>(".menu-card")

  cards.forEach((card) => {
    const toggleSelection = () => {
      cards.forEach((item) => {
        item.classList.toggle("is-selected", item === card)
      })
    }

    card.addEventListener("click", toggleSelection)
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        toggleSelection()
      }
    })
  })
}
