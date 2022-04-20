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


// Testimonials
const testimonialsContainer = document.querySelector('.testimonialsContainer');
let interval = null;
let step = 1.5;
let maxLeft = testimonialsContainer.scrollWidth - testimonialsContainer.clientWidth;
const start = () =>	 {
 interval = setInterval (function () {
	 testimonialsContainer.scrollLeft = testimonialsContainer.scrollLeft  + step;
	 if (testimonialsContainer.scrollLeft === maxLeft) {
		 step = step * -1;
	 }else if (testimonialsContainer.scrollLeft === 0) {
		 step = step * -1; 
	 }
 }, 10);
};
const stop = () =>	 {
	clearInterval(interval);
};
testimonialsContainer.addEventListener('mouseover', ()=>{
	stop();
})
testimonialsContainer.addEventListener('mouseout', ()=>{
	start();
})
start();


//modal testimonials
const links = document.querySelectorAll('.a');
const lighbox = document.querySelector('.lighbox');
const grande = document.querySelector('.grande');
const close = document.querySelector('.close');
links.forEach ((eachLink,i)=> {
	links[i].addEventListener('click',(e)=> {
		e.preventDefault();
		let ruta = eachLink.querySelector('.img').src;
		console.log(ruta);
		lighbox.classList.add('active');
		grande.setAttribute('src', ruta);
	})
});
close.addEventListener('click',()=> {
	lighbox.classList.remove('active');
	grande.setAttribute('src','');
	
});