document.addEventListener("DOMContentLoaded", () => {
  const btnEl = document.getElementById("btn");
  const noteInput = document.getElementById("note-input");
  const noteContainer = document.getElementById("note-container");

  loadNotes();
  function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach((note) => {
      createNoteElement(note);
    });
  }

  btnEl.addEventListener("click", () => {
    const noteText = noteInput.value.trim();
    if (noteText !== "") {
      createNoteElement(noteText);
      saveNote(noteText);
      noteInput.value = "";
    }
  });

  function createNoteElement(text) {
    const noteItem = document.createElement("div");
    noteItem.className = "note";

    const noteContent = document.createElement("p");
    noteContent.className = "note-content";
    noteContent.textContent = text;
    noteItem.appendChild(noteContent);
    noteContainer.appendChild(noteItem);
  }
  function saveNote(text) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(text);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
});
