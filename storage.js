const itemKey = 'saved-text';
const localElementId = 'local-storage-text';
const sessionElementId = 'session-storage-text';

function load() {
    if (isStorageAvailable()) {
        const textElem = document.getElementById(localElementId);
        const savedText = localStorage.getItem(itemKey);
        textElem.value = savedText;
    }
}

function save() {
    if (isStorageAvailable()) {
        const textElem = document.getElementById(localElementId);
        const valueToSave = textElem.value;
        localStorage.setItem(itemKey, valueToSave);
    }
}

function loadSession() {
    if (isStorageAvailable()) {
        const textElem = document.getElementById(sessionElementId);
        const savedText = sessionStorage.getItem(itemKey);
        textElem.value = savedText;
    }
}

function saveSession() {
    if (isStorageAvailable()) {
        const textElem = document.getElementById(sessionElementId);
        const valueToSave = textElem.value;
        sessionStorage.setItem(itemKey, valueToSave);
    }
}

function isStorageAvailable() {
    return typeof(Storage) !== 'undefined';
}