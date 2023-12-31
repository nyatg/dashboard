const noteArea = document.getElementById("input-area");

function saveNoteToLocalStorage() {
    localStorage.setItem("userNote", noteArea.value);
}

noteArea.addEventListener('input', function () {
    saveNoteToLocalStorage();
});

window.addEventListener('load', function () {
    const savedNote = localStorage.getItem('userNote');
    if (savedNote) {
        noteArea.value = savedNote;
    }
});