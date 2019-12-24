const initialState = [
  {
    title: "Первый",
    cards: ["Тестовый текст 1", "Тестовый текст 2", "Тестовый текст 3"]
  },
  {
    title: "Второй",
    cards: ["Тестовый текст 1", "Тестовый текст 2"]
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "CARDS:ADD":
      return [
        ...state,
        state.items.map((item, index) => {
          if (action.playload.index === index) {
            return {
              ...item,
              cards: [...item.cards, action.playload.text]
            };
          }
          return item;
        })
      ];
    case "PANELS:ADD":
      return [...state, action.playload];
    default:
      return state;
  }
};
