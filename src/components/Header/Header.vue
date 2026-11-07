<template>
  <div class="header">
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
};
</script>

<style scoped lang="scss">
    @use '../../assets/variables.scss' as *;
    .header {
        min-height: 10vh;
        max-height: 150px;
        display: flex;
        flex-direction: row-reverse;
        padding: 10px;
        box-sizing: border-box;
    }

    @media(min-width: $break-point) {
        .header {
            // display: inline;
            display: flex;
            flex-direction: column-reverse;
            position: relative;
            max-height: unset;
        }

    }
</style>
