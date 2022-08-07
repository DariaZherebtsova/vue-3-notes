export function localStorageSetNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export function localStorageGetNotes() {
  return localStorage.getItem("notes");
};