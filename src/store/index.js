import { createStore } from 'vuex';
import { localStorageGetNotes, localStorageSetNotes } from '@/utils/notesLocalStorage';

export const store = createStore({
  state: {
    notes: [],
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes;
    },
    addNote(state, note) {
      state.notes.push(note);
    },
    removeNote(state, index) {
      state.notes.splice(index, 1);
    }
  },

  actions: {
    getLocalNotes(context) {
      const localNotes = localStorageGetNotes();
      if (localNotes) {
        context.commit('setNotes', JSON.parse(localNotes));
      }
    },
    addNote(context, note) {
      context.commit('addNote', note);
      localStorageSetNotes(context.state.notes);
    },
    removeNote(context, index) {
      context.commit('removeNote', index);
      localStorageSetNotes(context.state.notes);
    }
  },
});