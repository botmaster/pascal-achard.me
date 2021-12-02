<template>
  <div class="flex space-x-3">
    <button
      v-for="theme in themes"
      :key="theme.name"
      :title="theme.label"
      class="text-2xl p-1"
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
        { name: 'system', label: 'Système', icon: 'mi-computer' },
        { name: 'dark', label: 'Sombre', icon: 'mi-moon' },
        { name: 'light', label: 'Claire', icon: 'mi-sun' },
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
