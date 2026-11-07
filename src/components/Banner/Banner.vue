<template>
  <div class="banner">
    <img class="banner__image" :src="bannerImage" :alt="bandName" />
    <div class="banner__overlay">
      <!-- <h1 class="banner__title">{{ bandName }}</h1> -->
    </div>
  </div>
</template>

<script setup>
import bannerImage from '@/assets/JoeRisdonPromo3.jpeg';
import bandConfig from '@/config/band.js';

const bandName = bandConfig.bandName;
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.banner {
  position: relative;
  width: 100%;
  max-height: 600px;
  overflow: hidden;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.35);
  }

  &__title {
    color: $color-primary;
    text-align: center;
    font-family: $primary-font;
    // text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    @include fluid-type($min-width, $max-width, $min-header-font, $max-header-font);
  }
}
</style>
