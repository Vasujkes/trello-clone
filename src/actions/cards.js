export default {
  addCard: (columnIndex, text) => ({
    type: "CARDS:ADD",
    payload: {
      columnIndex,
      text
    }
  }),
  editText: (columnIndex, cardIndex, text) => ({
    type: "TEXT:EDIT",
    payload: {
      columnIndex,
      cardIndex,
      text
    }
  }),
  reorderCards: ({ source, destination }) => ({
    type: "CARDS:REORDER",
    payload: {
      source,
      destination
    }
  })
};
