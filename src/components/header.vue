<style lang="scss">
@import "../assets/scss/_functions.scss";
.header {
  background-color: #eceaea;
  width: 100%;
  height: vw(97);
  &__content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  }
  &__logo {
    margin-right: vw(48);
  }
  &__nav {
    margin-right: auto;
  }
}
</style>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <router-link to="#" class="header__logo">
          <Logo weight="48" height="48" />
        </router-link>
        <Navbar class="header__nav" />
        <Search class="header__search" />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";

export default {
  components: {
    Logo,
    Navbar,
    Search,
  },
};
</script>