<template>
    <div class="page-error flex items-center min-h-screen">
        <div class="container mx-auto px-container md:px-container-md">
            <h1 v-if="error.statusCode === 404" class="text-white">
                Page non trouvée
            </h1>
            <h1 v-else class="text-white">Une erreur s'est produite</h1>
            <nuxt-link class="" to="/"> Accueil </nuxt-link>
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
    name: "Error",
    props: {
        error: {
            type: Object,
            default: function () {
                return {};
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.page-error {
    //
}
</style>
