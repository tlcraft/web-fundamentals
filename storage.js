function load() {
    if (typeof(Storage) !== "undefined") {
        const textElem = document.getElementById('storage-text');
        const savedText = localStorage.getItem('saved-text');
        textElem.value = savedText;
    }
}

function save() {
    if (typeof(Storage) !== "undefined") {
        const textElem = document.getElementById('storage-text');
        const textToSave = textElem.value;
        localStorage.setItem('saved-text', textToSave);
    }
}