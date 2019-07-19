<template>
    <div class="relative">
        <header-component></header-component>
        <nuxt/>
        <footer-component></footer-component>
    </div>
</template>

<style>

</style>
<script>
    import FooterComponent from '../components/FooterComponent'
    import HeaderComponent from '../components/HeaderComponent'

    export default {
        components: { HeaderComponent, FooterComponent }
    }
</script>
