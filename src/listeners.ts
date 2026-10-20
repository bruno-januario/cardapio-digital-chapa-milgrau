export function attachProductInteractions(): void {
  const dialog = document.querySelector<HTMLDialogElement>("#product-dialog")
  const title = dialog?.querySelector<HTMLElement>("#product-dialog-title")
  const description = dialog?.querySelector<HTMLElement>(
    "#product-dialog-description"
  )
  const closeButton = dialog?.querySelector<HTMLButtonElement>(
    "[data-dialog-close]"
  )

  if (!dialog || !title || !description || !closeButton) {
    throw new Error("Não foi possível inicializar o modal de descrição.")
  }

  const cards = document.querySelectorAll<HTMLButtonElement>(".menu-card")

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const { name, description: productDescription } = card.dataset

      if (!name || !productDescription) {
        throw new Error("O card não contém os dados do produto.")
      }

      title.textContent = name
      description.textContent = productDescription
      dialog.showModal()
    })
  })

  closeButton.addEventListener("click", () => {
    dialog.close()
  })

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close()
    }
  })
}
