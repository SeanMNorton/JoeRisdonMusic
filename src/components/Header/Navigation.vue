<template>
  <div>
    <router-link class="mobile-title" to="/">{{ bandName }}</router-link>
    <Slide class="mobile" :closeOnNavigation="true">
      <router-link to="/">Home</router-link>
      <a
        href="/JoeRisdonEPK.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Press Kit
      </a>
      <span>----------------</span>
        <BrandLink
          :key="url.siteName"
          v-for="url in urls"
          :url="url.url"
          :name="url.siteName"
          size="1x"
           withLinkText
          :linkText="url.linkText"
        />
      <!-- <router-link to="/gigs">Gigs</router-link> -->
      <!-- <router-link to="/music">Music</router-link> -->
      <!-- <router-link to="/insta">Feed</router-link> -->
      <!-- <a v-if="storeUrl" :href="storeUrl">Merch</a> -->
    </Slide>

    <div class="desktop">
      <a
        href="/JoeRisdonEPK.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Press Kit</h2>
      </a>
      <router-link class="larger" to="/">{{bandName}}</router-link>
      <div class="brandLinks--desktop">
        <BrandLink
          :key="url.siteName"
          v-for="url in urls"
          :url="url.url"
          :name="url.siteName"
          size="2x"
        />
      </div>
      <!-- <router-link to="/gigs">Gigs</router-link> -->
      <!-- <router-link to="/music">Music</router-link> -->
      <!-- <router-link to="/insta">Feed</router-link> -->
      <!-- <a v-if="storeUrl" :href="storeUrl">Merch</a> -->
    </div>
  </div>
</template>

<script>
import Slide from "@/components/UI/SlideMenu/SlideMenu.vue";
import band from "@/config/band";
import BrandLink from "../UI/BrandLink/BrandLink.vue";

export default {
  name: "NavigationComponent",
  components: {
    Slide,
    BrandLink,
  },
  data() {
    return {
      bandName: band.bandName,
      storeUrl: band.storeUrl,
      urls: band.brandLinks,
    };
  },
};
</script>

<style lang="scss">
@use "../../assets/variables.scss" as *;
.desktop {
  display: none;
  justify-content: space-between;
  max-width: 950px;
  margin: 0 auto;
  padding: 0 10px;
  margin-top: 20px;
  align-items: baseline;
  gap: 10px;
  @include fluid-type($min-width, $max-width, 26px, 50px);
}
.bm-burger-button {
  position: relative !important;
  top: unset !important;
  left: unset !important;
  height: 20px;
  width: 26px;
  &:hover {
    .bm-burger-bars {
      background-color: $color-secondary !important;
    }
  }
}
.bm-burger-bars {
  background-color: $color-primary !important;
  border-radius: 8px;
}
.bm-cross {
  background: $color-primary !important;
}
.bm-menu {
  background-color: $color-background-lighter !important;
}
.bm-item-list {
  color: $color-primary;
  font-size: 2em;
}
.desktop {
  font-size: 1em;
  .larger {
    font-size: 4em;
  }
}
.desktop .brandLinks--desktop {
  font-size: 0.66em;
  display: flex;
  gap: 15px;
  align-items: center;
}

.mobile-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.4em;
  white-space: nowrap;
}

@media (min-width: $break-point) {
  .mobile {
    display: none;
  }
  .mobile-title {
    display: none;
  }
  .desktop {
    display: flex;
  }
}
@media (min-width: $menu-break-point) {
  // .bm-burger-button {
  //   position: fixed;
  // }
}
.brandLinks--mobile {
  display: grid;
  grid-template-columns: repeat(1, auto);
  justify-content: flex-start;
  row-gap: 5px;
  column-gap: 20px;
  font-size: 1em;
  width: 100%;
}
</style>
