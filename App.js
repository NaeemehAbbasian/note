
document.addEventListener ( 'DOMContentLoaded' , () => { 
    const btnEl = document.getElementById('btn');
    const noteInput = document.getElementById('note-input');
    const noteContainer = document.getElementById('container');

    btnEl.addEventListener('click',()=> {
        const noteText = noteInput.value.trim ();
        if (noteText !== '') {
            createNoteElement (noteText);
            noteInput.value = '';
        }
    });

    function createNoteElement(text) {
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';

        const noteContent = document.createElement('p');
        noteContent.className = 'note-content';
        noteContent.textContent = text;
           noteItem.appendChild(noteContent);
        noteContainer.appendChild(noteItem);
    }




