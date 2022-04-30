export const state = () => ({
  items: [
    {
      id: 1,
      title: 'Наименование товара',
      body: 'Это описание товара, всем хорошего дня. В среднем пингвины живут 33 года.',
      imgLink:
        'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '10000',
    },
    {
      id: 2,
      title: 'Имя товара',
      body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      imgLink:
        'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '20000',
    },
    {
      id: 3,
      title: 'Это товар',
      body: 'Это описание товара, всем хорошего дня. В среднем пингвины живут 33 года.',
      imgLink:
        'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '10000',
    },
    {
      id: 4,
      title: 'Ещё один товар',
      body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      imgLink:
        'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '10000',
    },
    {
      id: 5,
      title: 'Милый и красивый товар',
      body: 'Это описание товара, всем хорошего дня. В среднем пингвины живут 33 года.',
      imgLink:
        'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '10000',
    },
    {
      id: 6,
      title: 'Ромашковое поле',
      body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      imgLink:
        'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '10000',
    },
  ],
  sortOptions: [
    {
      value: 'minprice',
      name: 'По возрастанию цены',
    },
    {
      value: 'maxprice',
      name: 'По убыванию цены',
    },
    {
      value: 'title',
      name: 'По наименованию',
    },
  ],
  selectedOption: '',
})

export const mutations = {
  addItem(state, item) {
    state.items.push(item)
  },
  removeItem(state, item) {
    state.items.splice(state.items.indexOf(item), 1)
  },
  setSelectedOption(state, selectedOption) {
    state.selectedOption = selectedOption
  },
}

export const getters = {
  sortedItems(state) {
    if (state.selectedOption === 'minprice') {
      return [...state.items].sort((a, b) =>
        parseInt(a.price - b.price).toString()
      )
    } else if (state.selectedOption === 'maxprice') {
      return [...state.items].sort((a, b) =>
        parseInt(b.price - a.price).toString()
      )
    } else {
      const collatore = new Intl.Collator('ru-RU')
      return [...state.items].sort((a, b) => {
        return collatore.compare(a.title, b.title)
      })
    }
  },
}

export const actions = {
  commitDeleteItem({ commit }, item) {
    commit('removeItem', item)
  },
}
