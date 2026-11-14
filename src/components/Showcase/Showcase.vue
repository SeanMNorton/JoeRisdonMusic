<template>
  <div class="container showcase">
    <div class="header">
      <h1 v-if="selectedVideo.url">{{ showcase.title }}</h1>
      <h1>{{ selectedVideo.description }}</h1>
    </div>
    <!-- Video Frame START -->

    <div class="iframe-container" v-if="selectedVideo.url">
      <LoadingSpinner />
        <iframe
          defer
          width="840"
          height="515"
          :src="selectedVideo.url"
          :title="selectedVideo.description"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <div class="controls">
          <span role="button" class="text-btn" v-on:click="previousVideo()">&lt; previous</span>
          <span role=button class="text-btn" v-on:click="nextVideo()">next &gt;</span>
      </div>
    </div>

    <!-- Video Frame END -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import band from "@/config/band";
import LoadingSpinner from "../UI/Spinner/Spinner.vue";

const showcase = band.showcase;
const selectedPriority = ref(1);
const selectedVideo = computed(() =>
  showcase.videos.find((v) => v.priority === selectedPriority.value),
);

const previousVideo = () => {
  if (selectedPriority.value > 1) selectedPriority.value--;
};

const nextVideo = () => {
  if (selectedPriority.value < showcase.videos.length) selectedPriority.value++;
};
</script>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as *;
.header h1 {
  margin: 5px 0px;
  @include fluid-type($min-width, $max-width, $min-header-font, 50px);
}
.showcase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  iframe {
    margin-top: 5px;
    max-width: 100vw;
    max-height: 56.25vw;
    box-sizing: border-box;
    border: 5px solid $color-primary;
  }
  .iframe-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .fulfilling-bouncing-circle-spinner {
      position: absolute;
      z-index: -1;
    }
  }
  .controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    width: 80%;
    .text-btn {
      font-size: large;
      cursor: pointer;
      font-family: $primary-font;
      color: $color-primary;
    }
  }
}

@media (min-width: $break-point) {
  .showcase {
    margin-top: 5vh;
  }
}
</style>
