(() => {
	const refs = {
		openModalBtns: document.querySelectorAll("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
		body: document.querySelector("body"),
		modalCounter: 0, // Лічильник для data-modal
	};

	refs.openModalBtns.forEach(btn => btn.addEventListener("click", () => toggleModal(true)));
	refs.closeModalBtn.addEventListener("click", () => toggleModal(false));

	function toggleModal(isOpen) {
		refs.modalCounter += isOpen ? 1 : -1;

		if (refs.modalCounter > 0) {
			refs.body.classList.add("no-scroll");
		} else {
			refs.body.classList.remove("no-scroll");
		}

		refs.modal.classList.toggle("is-hidden", !isOpen);
	}
})();
