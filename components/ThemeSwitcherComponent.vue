<template>
  <div>
    <button
      v-for="theme in themes"
      :key="theme.name"
      class="p-2"
      :title="theme.label"
      @click="$colorMode.preference = theme.name"
    >
      <span class="sr-only">Thème {{ theme.label }}</span>
      <component
        :is="require(`@/assets/icons/${theme.icon}.svg?inline`)"
        class="btn-theme"
        :class="$colorMode.preference === theme.name ? 'is-current' : ''"
      ></component>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        { name: 'system', label: 'Système', icon: 'icon-system' },
        { name: 'dark', label: 'Sombre', icon: 'icon-dark' },
        { name: 'light', label: 'Claire', icon: 'icon-light' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.btn-theme {
  &.is-current {
    @apply text-polarnight-nord-2 dark:text-snowstorm-nord-6;
  }
}
</style>
