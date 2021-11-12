<template>
  <div class="relative">
    <header-component />
    <nuxt />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'

export default {
  components: { HeaderComponent, FooterComponent },
}
</script>

<style></style>
