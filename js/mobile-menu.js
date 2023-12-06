(() => {
	const refs = {
		openMenuBtn: document.querySelector("[data-menu-open]"),
		closeMenuBtn: document.querySelector("[data-menu-close]"),
		menu: document.querySelector("[data-menu]"),
		body: document.querySelector("body"),
		menuCounter: 0, // Лічильник для data-menu
		menuWrap: document.querySelector(".menu__wrap"),
	};

	refs.openMenuBtn.addEventListener("click", () => toggleMenu(true));
	refs.closeMenuBtn.addEventListener("click", () => toggleMenu(false));
	refs.menuWrap.addEventListener("click", removeMenu);

	function toggleMenu(isOpen) {
		refs.menuCounter += isOpen ? 1 : -1;

		if (refs.menuCounter > 0) {
			refs.body.classList.add("no-scroll");
		} else {
			refs.body.classList.remove("no-scroll");
		}

		refs.menu.classList.toggle("is-hidden", !isOpen);
	}

	function removeMenu() {
		refs.menu.classList.add("is-hidden");
		refs.body.classList.remove("no-scroll");
	}
})();
