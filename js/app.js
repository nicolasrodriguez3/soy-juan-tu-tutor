;((d) => {
	const $btn = d.querySelector("header > button"),
		$nav = d.querySelector("nav")

	$btn.addEventListener("click", () => {
		$btn.firstElementChild.classList.toggle("none")
		$btn.lastElementChild.classList.toggle("none")
		$nav.classList.toggle("is-active")
	})

	// no es necesario ya que fue solucionado con el evento "blur"
/*	d.addEventListener("click",(e)=>{
		if(!e.target.matches(".header-links a")) return false
		$btn.firstElementChild.classList.remove("none")
		$btn.lastElementChild.classList.add("none")
		$nav.classList.remove("is-active")
	})
*/

	$btn.addEventListener("blur", (e) => {
		setTimeout(() => {
			$btn.firstElementChild.classList.remove("none")
			$btn.lastElementChild.classList.add("none")
			$nav.classList.remove("is-active")
		}, 100)
	})
})(document)
