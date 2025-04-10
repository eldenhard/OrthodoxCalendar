<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="calendar-view">
    <div class="calendar-view__header">
      <button class="calendar-view__button" @click="router.back()">
        <img src="/iconArrow.png" alt="Вернуться назад" />
      </button>
      <div class="calendar-view__scale-group">
        <button class="calendar-view__scale-group__button">A</button>
        <button class="calendar-view__scale-group__button">A</button>
      </div>
    </div>

    <p class="calendar-view__title">Календарь<sup>{{ new Date().getFullYear() }}</sup></p>

    <RouterView />
  </div>
</template>

<style lang="scss">
.calendar-view {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  height: 100vh;
  width: 90%;
  padding: 6% 2%;
  margin: 0 auto;

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__button {
    background-color: transparent;
    border: none;

    & img {
      width: 28px;
      height: 28px;
    }
  }

  &__title {
    font-size: 4vh;
    margin-top: 6%;

    &::first-letter {
      color: rgb(223, 0, 0);
    }

    sup{
      font-size: 1.5vh;
    }
  }

  &__scale-group {
    display: flex;
    &__button {
      width: 15vw;
      height: 3vh;
      background: white;
      border-radius: 4px;
      border: none;
      color: black;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      touch-action: manipulation;
      user-select: none;

      &:first-child {
        font-size: 1.5vh;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }

      &:last-child {
        font-size: 2vh;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-left: 1px solid lightgray;
      }
    }
  }

  & .vc-nav-item {
    font-weight: normal;
  }
}
</style>
