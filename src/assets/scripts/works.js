window.onload=function(){
    const closed = document.getElementById('ClosedMenu');
    const opened = document.getElementById('OpenMenu');
        closed.addEventListener('click', function ()  {
            opened.classList.toggle('navigation-open--opened');
        });
        closed.addEventListener('click', function(){
            closed.classList.toggle('is-active');
        });
    
    const textList = document.getElementById('textItems');
        closed.addEventListener('click', function() {
            textList.classList.toggle('text-opacity');
        })

    const parallaxContainer = document.querySelector('.parallax');
    const layers = Array.from(parallaxContainer.children);
    const moveLayers = e => {
    const initialX = (window.innerWidth / 2) - e.pageX;
    const initialY = (window.innerHeight / 2) - e.pageY;
    
    layers.forEach((layer, i) => {
        const divider = i / 100;
        const positionX = initialX * divider;
        const positionY = initialY * divider;

        layer.style.transform = 'translate(${positionX}px, ${positionY}px)';
    });
}

window.addEventListener('mousemove', moveLayers);
  }

