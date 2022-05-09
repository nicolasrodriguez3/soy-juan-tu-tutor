;((d) => {
	const $btn = d.querySelector(".btn-header"),
		$nav = d.querySelector("nav")

	$btn.addEventListener("click", () => {
		$btn.firstElementChild.classList.toggle("none")
		$btn.lastElementChild.classList.toggle("none")
		$nav.classList.toggle("is-active")
	})

	$btn.addEventListener("blur", () => {
		setTimeout(() => {
			$btn.firstElementChild.classList.remove("none")
			$btn.lastElementChild.classList.add("none")
			$nav.classList.remove("is-active")
		}, 100)
	})

	// Btn whatsapp
const $btnWhatsapp = d.getElementById("btn-whatsapp")
window.addEventListener("scroll", () => {
	if (window.scrollY > 300) {
		$btnWhatsapp.classList.add("is-active")
	}
	else {
		$btnWhatsapp.classList.remove("is-active")
	}
})
})(document)

const $slider = document.querySelector(".slider"),
	$btnLeft = document.querySelector(".slider-btn-left"),
	$btnRight = document.querySelector(".slider-btn-right"),
	$lastSliderSection = $slider.lastElementChild

$slider.insertAdjacentElement("afterbegin", $lastSliderSection)

const nextSlide = () => {
	const $firstSliderSection = $slider.firstElementChild
	$slider.style.transition = "all 0.4s ease-in-out"
	$slider.style.marginLeft = "-200%"
	setTimeout(() => {
		$slider.insertAdjacentElement("beforeend", $firstSliderSection)
		$slider.style.transition = ""
		$slider.style.marginLeft = "-100%"
	}, 400)
}

const prevSlide = () => {
	const $lastSliderSection = $slider.lastElementChild
	$slider.style.transition = "all 0.4s ease-in-out"
	$slider.style.marginLeft = "0%"
	setTimeout(() => {
		$slider.insertAdjacentElement("afterbegin", $lastSliderSection)
		$slider.style.transition = ""
		$slider.style.marginLeft = "-100%"
	}, 400)
}

$btnLeft.addEventListener("click", prevSlide)
$btnRight.addEventListener("click", nextSlide)

let interval = setInterval(nextSlide, 5000)

$slider.addEventListener("mouseover", () => {
	clearInterval(interval)
})
$slider.addEventListener("mouseout", () => {
	interval = setInterval(nextSlide, 5000)
})


