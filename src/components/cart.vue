<style lang="scss">
@import "../assets/scss/_functions.scss";
@import "../assets/scss/_mixins.scss";
.cart {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #e1e1e1;
  &__img {
    width: 100%;
    height: auto;
  }
  &__line {
    margin-bottom: vw(20);
    width: 100%;
    height: vw(1);
    background-color: #e7e7e7;
  }
  &__body {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0 vw(24);
    margin-bottom: vw(22);
  }
  &__footer {
    width: 100%;
    padding: 0 vw(24);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: vw(48);
    margin-bottom: vw(24);
  }
  &__prices {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__priceOld {
    font-weight: 300;
    font-size: vw(14);
    line-height: vw(21);
    text-decoration-line: line-through;
    color: #a0a0a0;
  }
  &__priceNew {
    font-weight: bold;
    font-size: vw(16);
    line-height: vw(24);
    color: #343030;
  }
  &__priceText {
    font-size: vw(16);
    line-height: vw(24);
  }
  &__btn {
    .btn__text {
      display: flex;
      align-items: center;
      svg {
        width: vw(16);
        height: vw(13);
        margin-right: vw(5);
      }
    }
  }
  &.sold {
    opacity: 0.5;
    cursor: default;
    .cart__btn {
      display: none;
    }
  }

  @include breakpoint(1600) {
    border: vw(2) solid #e1e1e1;
    &__img {
      width: 100%;
    }
    &__line {
      margin-bottom: vw(30);
      height: vw(2);
    }
    &__body {
      padding: 0 vw(28);
      margin-bottom: vw(22);
    }
    &__footer {
      padding: 0 vw(28);
      height: vw(48);
      margin-bottom: vw(24);
    }
    &__priceOld {
      font-size: vw(18);
      line-height: vw(25);
    }
    &__priceNew {
      font-weight: bold;
      font-size: vw(20);
      line-height: vw(28);
      color: #343030;
    }
    &__priceText {
      font-size: vw(20);
      line-height: vw(28);
    }
    &__btn {
      .btn__text {
        svg {
          width: vw(20);
          height: vw(17);
          margin-right: vw(7);
        }
      }
    }
  }
}
</style>

<template>
  <div class="cart carts__cart" :class="{ sold: cartData.sold }">
    <img :src="cartData.img" :alt="cartData.title" class="cart__img" />
    <span class="cart__line"></span>
    <div class="cart__body">
      <h2 class="cart__title">{{ cartData.title }}</h2>
    </div>
    <div class="cart__footer">
      <div class="cart__prices">
        <div class="cart__priceOld" v-if="cartData.priceOld">
          {{ cartData.priceOld }} $
        </div>
        <div class="cart__priceNew" v-if="cartData.priceNew">
          {{ cartData.priceNew }} $
        </div>
        <div class="cart__priceText" v-if="cartData.priceText">
          {{ cartData.priceText }}
        </div>
      </div>
      <button
        @click="addBasket"
        class="cart__btn"
        :class="{ active: btnActive }"
      >
        <div class="btn__text" v-if="!loadingBtn && !btnActive">Купить</div>
        <div class="btn__text" v-else-if="btnActive && loadingBtn === false">
          <svg
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5315 1.80937L5.63341 11.237L1.34814 7.19237"
              stroke="#F4F6F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          В корзине
        </div>
        <Spiner v-else />
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Spiner from "../components/spiner";

export default {
  props: ["cartData"],
  data: () => ({
    loadingBtn: false,
    btnActive: false,
  }),
  components: {
    Spiner,
  },
  methods: {
    async addBasket() {
      this.loadingBtn = true;
      await axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => {
          console.log(res);
          setTimeout(() => {
            this.btnActive = true;
            this.loadingBtn = false;
          }, 500);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>