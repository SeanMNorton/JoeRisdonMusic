<template>
  <div>
    <h1 class="gigs-header">FUTURE GIGS</h1>
    <a
      v-if="songkickArtistId"
      :href="`https://www.songkick.com/artists/${songkickArtistId}`"
      class="songkick-widget"
      data-theme="dark"
      data-track-button="on"
      data-detect-style="on"
      data-background-color="#000000"
      data-font-color="#ffffff"
      data-locale="en"
      data-other-artists="on"
      data-share-button="on"
      data-country-filter="off"
    >{{ bandName }} on Songkick</a>
  </div>
</template>

<script>
import band from '@/config/band';

export default {
  name: 'SongKick',
  data() {
    return {
      bandName: band.bandName,
      songkickArtistId: band.songkickArtistId,
    };
  },
  mounted() {
    if (!band.songkickArtistId) return;

    let songKickScript = document.getElementById('song-kick-script');
    if (songKickScript) songKickScript.remove();

    songKickScript = document.createElement('script');
    songKickScript.setAttribute('src', '//widget-app.songkick.com/injector');
    songKickScript.setAttribute('id', 'song-kick-script');
    document.head.appendChild(songKickScript);
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;
  .gigs-header {
    margin-top: 40px;
    margin-bottom: 15px;
    @include fluid-type($min-width, $max-width, $min-header-font, $max-header-font );
    text-align: center;
  }
</style>
