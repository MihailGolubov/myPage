var elem = document.querySelector('.column-right');
var texts = document.querySelectorAll('.right-elements');
var links = document.querySelectorAll('.left-elem');
var textsOffset = [];

texts.forEach(function(text){
	textsOffset.push(text.offsetTop);	
})
console.log(textsOffset);

window.addEventListener('scroll', function(){
	textsOffset.forEach(function(offset, i){
  		if (window.pageYOffset >= offset) {
				links.forEach(function(el, i) {
					el.classList.remove('left-elem--active');
				})
      	links[i].classList.add('left-elem--active');
      } 
  })
})
	
	// 	Тестовый вывод для дебага
//   console.log({
//     	'from Top': elem.scrollTop,
//     	'from Bottom': elem.scrollHeight - elem.scrollTop - elem.clientHeight 
//     })
// })