<template>
  <component :is="require(`@/assets/icons/${icon}.svg?inline`)"> </component>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
