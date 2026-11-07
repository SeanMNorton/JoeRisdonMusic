<template>
  <a
    v-if="hasUrl && name !== 'merch'"
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`Vist our ${name}!`"
  >
    <font-awesome-icon :icon="['fab', name]" :size="size" />
    <span class="linkText" v-if="withLinkText">{{ linkText }}</span>
  </a>
</template>

<script>
/** @typedef {'1x' | '2x' | '3x'} IconSize */

export default {
  name: 'BrandLink',
  props: {
    url: String,
    name: String,
    /** @type {import('vue').PropType<IconSize>} */
    size: {
      type: String,
      default: '2x',
      validator: (val) => ['1x', '2x', '3x'].includes(val),
    },
    withLinkText: Boolean,
    linkText: String,
  },
  computed: {
    hasUrl() {
      return this.url !== null;
    },
  },
};
</script>

<style scoped lang="scss">
  @use '@/assets/variables.scss' as *;
  svg:hover {
    color: $color-secondary;
  }
  .linkText {
    margin-left: 20px;
  }
</style>
