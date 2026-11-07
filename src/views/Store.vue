<template>
  <div class="container">
    <MetaData v-if="metaDatas" :data="metaDatas[0]" />
    <!-- <h1 class="header" style="text-align: center;">Merch</h1> -->
    <!-- <div id="my-store-17654854" style="max-width: 80vw; margin: auto;"></div> -->
    </div>
</template>

<script setup>
import MetaData from '@/components/UI/MetaData/MetaData.vue';
import useMetaDatas from '../composables/useMetaDatas';

const metaDatas = useMetaDatas('store');
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

#my-store-17654854 {
  padding: 5vh 5vw 1vh 5vw;
  margin: 3vw !important;
  border-radius: $border-radius !important;
  background-color: $color-white !important;
}
#store {
  width: 100%;
  height: 100vh;
}
.w-block-header {
  display: none!important;
}
</style>
