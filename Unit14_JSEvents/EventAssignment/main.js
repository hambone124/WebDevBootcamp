var button = document.getElementsByTagName('button')[0];
var colorToBe = 'purple';

function changeBackgroundColor() {
    console.log('function called');
    currentColor = document.body.style.backgroundColor;
    if (currentColor == '') {currentColor = 'white'};
    console.log('Current color: ' + currentColor);
    document.body.style.backgroundColor = colorToBe;
    colorToBe = currentColor;
}

button.addEventListener('click',changeBackgroundColor);