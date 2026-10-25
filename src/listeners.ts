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

export function attachBackToTopInteraction(): void {
  const header = document.querySelector<HTMLElement>("#header")
  const footer = document.querySelector<HTMLElement>("#footer")
  const button = document.querySelector<HTMLButtonElement>("#back-to-top")

  if (!header || !footer || !button) {
    throw new Error("Não foi possível inicializar o botão de voltar ao início.")
  }

  const isInViewport = (element: HTMLElement): boolean => {
    const bounds = element.getBoundingClientRect()
    return bounds.top < window.innerHeight && bounds.bottom > 0
  }

  let headerIsVisible = isInViewport(header)
  let footerIsVisible = isInViewport(footer)
  let isFooterPosition = footerIsVisible
  let isPositioning = false

  if (isFooterPosition) {
    button.classList.add("is-footer-position")
  }

  const updateButton = (): void => {
    const shouldShow = !headerIsVisible
    button.classList.toggle("is-visible", shouldShow)
    button.tabIndex = shouldShow ? 0 : -1

    const shouldUseFooterPosition = footerIsVisible

    if (shouldUseFooterPosition === isFooterPosition) {
      return
    }

    if (!shouldShow) {
      isFooterPosition = shouldUseFooterPosition
      button.classList.toggle("is-footer-position", isFooterPosition)
      return
    }

    if (isPositioning) {
      return
    }

    isPositioning = true
    button.classList.add("is-positioning")

    let fallbackTimeout = 0
    const finishPositionChange = (): void => {
      if (!isPositioning) {
        return
      }

      isPositioning = false
      window.clearTimeout(fallbackTimeout)
      button.removeEventListener("transitionend", onTransitionEnd)
      isFooterPosition = footerIsVisible
      button.classList.toggle("is-footer-position", isFooterPosition)
      button.classList.remove("is-positioning")
      updateButton()
    }

    const onTransitionEnd = (event: TransitionEvent): void => {
      if (event.target === button && event.propertyName === "opacity") {
        finishPositionChange()
      }
    }

    button.addEventListener("transitionend", onTransitionEnd)
    fallbackTimeout = window.setTimeout(finishPositionChange, 250)
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === header) {
        headerIsVisible = entry.isIntersecting
      } else if (entry.target === footer) {
        footerIsVisible = entry.isIntersecting
      }
    }

    updateButton()
  })

  observer.observe(header)
  observer.observe(footer)

  button.addEventListener("click", () => {
    header.scrollIntoView({ behavior: "smooth", block: "start" })
  })

  updateButton()
}
