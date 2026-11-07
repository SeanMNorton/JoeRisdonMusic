<template>
  <div class="header" :class="{ 'header--scrolled': scrolled }">
    <NavigationComponent />
  </div>
</template>

<script>
import NavigationComponent from '@/components/Header/Navigation.vue';

export default {
  name: 'HeaderComponent',
  components: {
    NavigationComponent,
  },
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 100;
    },
  },
};
</script>

<style scoped lang="scss">
    @use '../../assets/variables.scss' as *;
    .header {
        display: flex;
        flex-direction: row;
        padding: 10px;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: transparent;
        transition: background 0.3s ease;

        &--scrolled {
            background: black;
        }
    }

    @media(min-width: $break-point) {
        .header {
            display: flex;
            flex-direction: column-reverse;
            max-height: unset;
        }

    }
</style>
