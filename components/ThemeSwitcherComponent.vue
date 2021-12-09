<template>
  <div class="flex space-x-3">
    <button
      v-for="theme in themeList"
      :key="theme.name"
      :title="theme.label"
      class="btn-theme text-2xl p-1"
      :class="current === theme.name ? 'is-current' : ''"
      @click="clickHandler(theme)"
    >
      <span class="sr-only">Thème {{ theme.label }}</span>
      <icon-component :icon="theme.icon"></icon-component>
    </button>
  </div>
</template>

<script>
import IconComponent from './IconComponent.vue'
export default {
  components: { IconComponent },
  props: {
    current: {
      type: String,
      required: true,
    },
    themeList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    clickHandler(theme) {
      this.$emit('update:current', theme.name)
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-theme {
  &.is-current {
    @apply text-frost-nord-10 dark:text-snowstorm-nord-6;
  }
}
</style>
