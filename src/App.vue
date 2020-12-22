<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex-grow: 1;
}
</style>

<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script>
import "./assets/scss/main.scss";

import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
