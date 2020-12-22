import { createStore } from "vuex";

export default createStore({
  state: {
    basket: [],
    carts: [
      {
        id: 0,
        img: "image/carts/cart1.png",
        title: "«Рождение Венеры» Сандро Боттичелли",
        priceOld: "2 000 000",
        priceNew: "1 000 000",
      },
      {
        id: 1,
        img: "image/carts/cart2.png",
        title: "«Тайная вечеря» Леонардо да Винчи",
        priceNew: "3 000 000",
      },
      {
        id: 2,
        img: "image/carts/cart3.png",
        title: "«Сотворение Адама» Микеланджело",
        priceOld: "6 000 000",
        priceNew: "5 000 000",
      },
      {
        id: 3,
        img: "image/carts/cart4.png",
        title: "«Урок анатомии» Рембрандт",
        priceText: "Продана на аукционе",
        sold: true,
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    CARTS(state) {
      return state.carts;
    },
  },
  modules: {},
});
