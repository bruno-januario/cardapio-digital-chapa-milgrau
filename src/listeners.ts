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

  const closeDialog = () => {
    if (!dialog.open || dialog.classList.contains("is-closing")) {
      return
    }

    dialog.classList.add("is-closing")
  }

  dialog.addEventListener("animationend", (event) => {
    if (
      event.target === dialog &&
      event.animationName === "product-dialog-exit"
    ) {
      dialog.classList.remove("is-closing")
      dialog.close()
    }
  })

  const cards = document.querySelectorAll<HTMLButtonElement>(".menu-card")

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const { name, description: productDescription } = card.dataset

      if (!name || !productDescription) {
        throw new Error("O card não contém os dados do produto.")
      }

      title.textContent = name
      description.textContent = productDescription
      dialog.classList.remove("is-closing")
      dialog.showModal()
    })
  })

  closeButton.addEventListener("click", () => {
    closeDialog()
  })

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeDialog()
    }
  })

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault()
    closeDialog()
  })
}
