<style lang="scss">
@import "../assets/scss/_functions.scss";
@import "../assets/scss/_mixins.scss";

.nav {
  &__list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
      margin-right: vw(48);
    }
  }
  &__link {
    font-size: vw(14);
    line-height: vw(21);
    color: #555555;
  }
  @include breakpoint(1600) {
    &__item {
      &:not(:last-child) {
        margin-right: vw(40);
      }
    }
    &__link {
      font-size: vw(18);
      line-height: vw(25);
    }
  }
}
</style>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="#" class="nav__link">Каталог</router-link>
      </li>
      <li class="nav__item">
        <router-link to="#" class="nav__link">Доставка</router-link>
      </li>
      <li class="nav__item">
        <router-link to="#" class="nav__link">Оплата</router-link>
      </li>
      <li class="nav__item">
        <router-link to="#" class="nav__link">Контакты</router-link>
      </li>
      <li class="nav__item">
        <router-link to="#" class="nav__link">О галерее</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>