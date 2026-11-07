<template>
  <div>
    <div id="app">
      <HeaderComponent />
      <router-view />
      <div class="push" />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header/Header.vue';
import FooterComponent from '@/components/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
  @use './assets/fonts.scss';
  @use './assets/variables.scss' as *;
  #app {
    letter-spacing: 1.5px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    margin: 0 auto -50px;
  }
  html {
    font-family: $primary-font;
    text-transform: uppercase;
    background-color: $color-background;
    color: $color-primary;
    &::before {
      content: '';
      position: fixed;
      inset: -200%;
      width: 400%;
      height: 400%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
      background-size: 256px 256px;
      opacity: 0.23;
      pointer-events: none;
      z-index: 9999;
      animation: grain 0.5s steps(1) infinite;
    }
    a {
      color: $color-primary;
      text-decoration: none;
      &:hover{
        color: $color-secondary
      }
    }
  }
  .push {
    height: 60px;
  }
  p {
    margin: 0;
    padding: 0;
  }
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  .no-scroll {
    overflow: hidden;
  }
  @keyframes grain {
    0%  { transform: translate(0, 0); }
    10% { transform: translate(-5%, -5%); }
    20% { transform: translate(-10%, 5%); }
    30% { transform: translate(5%, -10%); }
    40% { transform: translate(-5%, 15%); }
    50% { transform: translate(-10%, 5%); }
    60% { transform: translate(15%, 0); }
    70% { transform: translate(0, 10%); }
    80% { transform: translate(-15%, 0); }
    90% { transform: translate(10%, 5%); }
    100% { transform: translate(5%, 0); }
  }
</style>
