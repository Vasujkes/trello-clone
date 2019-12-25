export default {
    addCard: (ColumnIndex, text) => ({
      type: "CARDS:ADD",
      payload: {
        ColumnIndex,
        text
      }
    })
  };
  