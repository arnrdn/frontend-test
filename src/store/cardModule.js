export const cardModule = {
  state: () => ({
    items: [
      {
        id: 1,
        title: 'Наименование товара',
        body: 'Это описание товара, всем хорошего дня. В среднем пингвины живут 33 года.',
        imgLink:
          'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 10000,
      },
      {
        id: 2,
        title: 'Наименование товара',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        imgLink:
          'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 10000,
      },
      {
        id: 3,
        title: 'Наименование товара',
        body: 'Это описание товара, всем хорошего дня. В среднем пингвины живут 33 года.',
        imgLink:
          'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 10000,
      },
      {
        id: 4,
        title: 'Наименование товара',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        imgLink:
          'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 10000,
      },
      {
        id: 5,
        title: 'Наименование товара',
        body: 'Это описание товара, всем хорошего дня. В среднем пингвины живут 33 года.',
        imgLink:
          'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 10000,
      },
      {
        id: 6,
        title: 'Наименование товара',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        imgLink:
          'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 10000,
      },
    ],
  }),
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },
    removeItem(state, item) {
      state.items.filter((i) => i.id !== item.id);
    },
  },
};
