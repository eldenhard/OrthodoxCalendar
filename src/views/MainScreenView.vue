<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="main-screen-view">
    <img class="main-screen-view__image" src="/image.png" alt="Церковь" />
    <div class="main-screen-view__content">
      <p class="main-screen-view__title">Православный календарь</p>
      <button class="main-screen-view__button" @click="router.push({ name: 'calendar' })">
        Открыть календарь
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.main-screen-view {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &__image {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(40%, 10%);
    width: 100vw;
    height: auto;
    max-width: none;
    pointer-events: none;
    z-index: 0;
  }

  &__content {
    width: auto;
    max-width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 1;
  }

  &__title {
    font-size: 7vh;
    text-align: center;

    &::first-letter {
      color: rgb(223, 0, 0);
    }
  }

  &__button {
    background: rgba(255, 255, 255, 0.2);
    color: #000;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 12px;
    border: 1px solid #000;
    padding: 1em;
    font-size: 2vh;
    cursor: pointer;
    width: 100%;

    &:hover {
      background: #000;
      color: #fff;
    }
  }
}

@media (min-width: 1024px) {
  .main-screen-view__image {
    width: 50vw;
    height: auto;
    height: auto;
    transform: translate(40%, 10%);
  }
}
</style>
