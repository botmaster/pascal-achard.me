<template>
    <div class="page-index relative">
        <div class="section page-index__cover min-h-screen flex items-center">
            <div class="page-index__cover-background absolute inset-0"></div>
            <div class="page-index__cover-dimmer absolute inset-0"></div>
            <div class="container mx-auto px-container md:px-container-md relative">
                <div>
                    <span class="text-blue-200">Hi, that's me</span>
                    <h1 class="text-gray-100">
                        Pascal Achard
                    </h1>
                    <h3 class="text-blue-200">
                        Senior Frontend developer
                    </h3>
                    <div class="-mx-gutter md:-mx-gutter-md">
                        <div class=" md:w-8/12 px-gutter md:px-gutter-md">
                            <p class="text-lg mt-6 text-gray-100">
                                Je suis un développeur front-end sénior depuis 3 ans mais j'ai 20 ans d'expérience dans
                                la création de sites Web et d'applications Web. Je me suis spécialisé dans le JavaScript et
                                notamment avec le framework Vuejs.
                            </p>
                            <p class="text-lg mt-3 text-gray-100">
                                Mes journées professionnelles s'articulent principalement dans la conception et la
                                réalisation de sites internet conçus avec des framework javascript (Vue.js) connectés
                                avec des solutions back-end (Craftcms, Symfony, Headless, ...).
                            </p>
                            <p class="text-lg mt-3 text-gray-100">
                                J'adore apprendre des nouvelles technologies, techniques, méthodes et mettre à profit
                                mon expérience avec mes collègues de travail.
                            </p>
                        </div>
                    </div>
                    <div class="-mx-gutter md:-mx-gutter-md flex">
                        <div class=" px-gutter md:px-gutter-md">
                            <h4 class="text-blue-200 mt-12">En ce moment je suis fan de</h4>
                            <p class="text-gray-100 mt-3">
                                Vue.js, Vuex, Craftcms, Twig, tailwindcss, GraphQL, Docker, Webpack, Prettier, Nuxt.js.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {}
    }
</script>

<style lang="scss">

    .page-index {
        &__cover {

        }

        &__cover-background {
            background-image: url("~assets/images/pascal-achard.jpg");
            background-size: cover;
            background-position-x: center;
            background-position-y: center;
        }

        &__cover-dimmer {
            background-color: rgba(0, 0, 0, 0.7);
        }

    }


</style>
