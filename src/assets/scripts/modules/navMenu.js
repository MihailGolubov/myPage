window.onload=function(){
    const closed = document.getElementById('ClosedMenu');
    const opened = document.getElementById('OpenMenu');
        closed.addEventListener('click', function ()  {
            opened.classList.toggle('navigation-open--opened');
        });
        closed.addEventListener('click', function(){
            closed.classList.toggle('is-active');
        });
  }