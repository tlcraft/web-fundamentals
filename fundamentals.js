document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    uiControlsExample();
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