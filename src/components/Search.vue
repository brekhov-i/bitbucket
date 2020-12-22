<style lang="scss">
@import "../assets/scss/_functions.scss";
@import "../assets/scss/_mixins.scss";
.search {
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &__input {
    width: vw(294);
    height: vw(48);
    background-color: transparent;
    border: vw(1) solid #e1e1e1;
    padding-left: vw(16);
    &::placeholder {
      font-size: vw(14);
      line-height: vw(21);
      color: #9f9f9f;
    }
  }
  &__btn {
    width: vw(112);
    height: vw(48);
  }
  @include breakpoint(1600) {
    &__input {
      width: vw(320);
      height: vw(58);
      border: vw(2) solid #e1e1e1;
      padding-left: vw(20);
      &::placeholder {
        font-size: vw(16);
        line-height: vw(23);
      }
    }
    &__btn {
      width: vw(130);
      height: vw(58);
    }
  }
}
</style>

<template>
  <form action="#" class="search" @submit.prevent="search">
    <input
      type="search"
      class="search__input"
      placeholder="Поиск по названию картины"
      v-model="searchText"
    />
    <button type="submit" class="search__btn">Найти</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    searchText: "",
  }),
  methods: {
    search(e) {
      const formData = this.searchText;
    },
  },
};
</script>