<style lang="scss">
@import "../assets/scss/_functions.scss";
@import "../assets/scss/_mixins.scss";
.carts {
  width: 100%;
  height: auto;
  margin: vw(45) 0;
  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  &__title {
    margin-bottom: vw(40);
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: vw(32);
    grid-row-gap: vw(32);
  }
  @include breakpoint(1600) {
    margin: vw(50) 0;
    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(1, 1fr);
      grid-column-gap: vw(40);
      grid-row-gap: vw(40);
    }
    &__title {
      margin-bottom: vw(45);
    }
  }
}
</style>

<template>
  <section class="carts">
    <div class="container">
      <div class="carts__content">
        <h1 class="carts__title">Картины эпохи Возрождения</h1>
        <div class="carts__items">
          <Cart v-for="cart of CARTS" :key="cart.id" :cartData="cart" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import Cart from "../components/cart";

export default {
  name: "Home",
  data: () => ({}),
  components: {
    Cart,
  },
  computed: {
    ...mapGetters(["CARTS"]),
  },
};
</script>
