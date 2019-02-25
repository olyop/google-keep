export const addKey = notes => notes.map(
  note => ({
    ...note,
    key: note._id
  })
)

export const updateNotes = (notes, newNote) => notes.reduce(
  (newNotes, note) => {
    if (note._id === newNote._id) {
      newNotes.push(newNote)
    } else {
      newNotes.push(note)
    }
    return newNotes
  },
  []
)
