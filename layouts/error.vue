<template>
    <div class="page-error flex items-center min-h-screen">
        <div class="container mx-auto px-container md:px-container-md">
            <h1 class="text-white" v-if="error.statusCode === 404">Page non trouvée</h1>
            <h1 class="text-white" v-else>Une erreur s'est produite</h1>
            <nuxt-link class="" to="/">Accueil</nuxt-link>
        </div>
    </div>
</template>

<script>
    /**
     * Created by PhpStorm.
     * User: pascal
     * Date: 2019-07-18
     * Time: 15:52
     */
    export default {
        name: 'error',
        props: ['error']
    }
</script>

<style lang="scss" scoped>
    .page-error {
        //
    }
</style>
