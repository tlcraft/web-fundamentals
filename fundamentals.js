document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    uiControlsExample();
    drawOnCanvas();
});

function uiControlsExample() {
    const parentDiv = document.getElementById('ui-controls-practice');
    byIdExample(parentDiv);
    byTagExample(parentDiv);
    byNameExample();
    byClassExample();
}

function byIdExample(parentDiv) {
    const byIdDiv = document.getElementById('grab-by-id');
    byIdDiv.innerHTML = 'Element By Id: Name: ' + parentDiv.nodeName + ' Type: ' + parentDiv.nodeType;
}

function byTagExample(parentDiv) {
    const byTagArray = parentDiv.getElementsByTagName('p');
    const byTagDiv = document.getElementById('grab-by-tag');
    byTagDiv.innerHTML = 'Element By Tag Name: <br />'
    for (let i = 0; i < byTagArray.length; i++) {
        byTagDiv.innerHTML += byTagArray[i].nodeName + ' ' + byTagArray[i].textContent + '<br/>';
    }    
}

function byNameExample() {
    const byName = document.getElementsByName('ui-controls-input');
    const byNameDiv = document.getElementById('grab-by-name');
    byNameDiv.innerHTML = 'Element By Name: ' + byName[0].nodeName + ' value: ' + byName[0].value;
}

function byClassExample() {
    const byClass = document.getElementsByClassName('topic');
    const byClassDiv = document.getElementById('grab-by-class');
    byClassDiv.innerHTML = 'Element By CSS Class, total \'topic\' class count: ' + byClass.length;
}

function setNewText() {
    const div = $('#ui-controls-mod-practice');
    const paragraph = div.children(':last');
    const textInput = $('#ui-controls-new-text');
    paragraph.text(textInput.val());
}

function addNewParagraph() {
    //DOM API
    const newNode = document.createElement('p');
    newNode.setAttribute('class', 'programmatic-paragraph');
    newNode.appendChild(document.createTextNode('This is a new paragraph added programmatically, hello world!'));

    //jQuery
    let div = $('#ui-controls-mod-practice');
    div.append(newNode);
}

function removeFirstParagraph() {
    $('#ui-controls-mod-practice').children('p:first').remove();
}

function replaceAllParagraphs() {
    $('<img src="https://www.google.com/images/srpr/logo3w.png"/>').replaceAll('#ui-controls-mod-practice p')
}

function drawOnCanvas() {
    const canvas = document.getElementById('example-canvas');
    if(is2DCanvasSupported(canvas)) {
        drawGreyWhiteBoxes(canvas);
        drawRedBox(canvas);
        drawBezierCurve(canvas);
        drawQuadraticCurve(canvas);
        drawText(canvas);
    } else {
        //  canvas 2D is unsupported
    }
}

function drawGreyWhiteBoxes(canvas) {
    const context = canvas.getContext('2d');
    context.fillStyle = 'grey';
    context.fillRect(10, 10, 100, 100);
    context.fillStyle = 'white';
    context.fillRect(25, 25, 70, 70);
}

function drawRedBox(canvas) {
    const context = canvas.getContext('2d');
    context.fillStyle = 'red';
    context.fillRect(130, 10, 100, 100);
    context.clearRect(140, 40, 40, 40);
    context.fillStyle = 'rgba(55, 25, 10, 0.5)';
    context.fillRect(170, 30, 20, 20);
}

function drawBezierCurve(canvas) {
    const context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(250, 50);
    context.bezierCurveTo(275, 125, 255, 75, 290, 10);
    context.stroke();
}

function drawQuadraticCurve(canvas) {
    const context = canvas.getContext('2d');
    context.strokeStyle = 'rgb(125, 10, 160)';
    context.moveTo(10, 120);
    context.quadraticCurveTo(75, 160, 250, 120);
    context.stroke();
}

function drawText(canvas) {
    const context = canvas.getContext('2d');
    context.font = "18px Helvetica";
    context.textAlign = "right";
    context.textBaseline = "Alphabetic";
    context.fillText("Hello world!", 350, 150);
    
    const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0.4, "red");
    gradient.addColorStop(0.6, "green");
    gradient.addColorStop(0.8, "rgb(255, 255, 255");
    gradient.addColorStop(1.0, "blue");

    context.fillStyle = gradient;
    context.fillText("Good-bye World!", 350, 180);
}

function is2DCanvasSupported(canvas) {
    return canvas.getContext && canvas.getContext('2d');
}