const openedAccLeft = document.getElementById('leftElem');
const openAcc = document.getElementById('blogButton')
const openedAccRight = document.getElementById('rightElem');
openAcc.addEventListener('click', function ()  {
        openedAccLeft.classList.toggle('active');
        });
 openAcc.addEventListener('click', function ()  {
    openedAccRight.classList.toggle('active');
        });