const orders = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return [
        ...state,
        {
          id: action.id,
          image: action.image,
          shoeTypes: action.shoeTypes,
          timeFrame: action.timeFrame,
          note: action.note,
          price: action.price,
        },
      ];
    default:
      return state;
  }
};

export default orders;
