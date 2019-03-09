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
    if(isCanvasSupported(canvas)) {
        const context = canvas.getContext('2d');
        context.fillStyle = 'grey';
        context.fillRect(10, 10, 100, 100);
        context.fillStyle = 'white';
        context.fillRect(25, 25, 70, 70);

        context.fillStyle = 'red';
        context.fillRect(130, 10, 100, 100);
        context.clearRect(140, 40, 40, 40);
        context.fillStyle = 'rgba(55, 25, 10, 0.5)';
        context.fillRect(170, 30, 20, 20);

        context.beginPath();
        context.moveTo(50, 50);
        context.bezierCurveTo(25, 25, 175, 175, 40, 10);
        context.stroke();
    } else {
        //  canvas is unsupported
    }
}

function isCanvasSupported(canvas) {
    return canvas.getContext && canvas.getContext('2d');
}