const initialState = [
  {
    title: "Первый",
    cards: [
      "Тестовый текст 1",
      "Тестовый текст 2",
      "Тестовый текст 3",
      "Тестовый текст 1"
    ]
  },
  {
    title: "Второй",
    cards: ["Тестовый текст 1", "Тестовый текст 2"]
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "CARDS:ADD":
      return state.map((item, index) => {
        if (action.payload.panelIndex === index) {
          return {
            ...item,
            cards: [...item.cards, action.payload.text]
          };
        }
        return item;
      });
    case "PANELS:ADD":
      return [...state, action.playload];
    default:
      return state;
  }
};
