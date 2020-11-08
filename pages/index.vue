<template>
    <main class="page-index">
        <div class="page-index__cover">
            <cover-component></cover-component>
        </div>
        <div class="page-index__content py-16 md:py-24">
            <div class="container mx-auto px-container md:px-container-md">
                <div class="-mx-gutter md:-mx-gutter-md flex">
                    <div class="md:w-8/12 px-gutter md:px-gutter-md">
                        <h3 class="h4">À propos de moi</h3>
                        <p class="text-lg mt-6">
                            Je suis développeur front-end sénior depuis 3 ans
                            mais j'ai 20 ans d'expérience dans la création de
                            sites Web et d'applications Web. Je me suis
                            spécialisé dans le JavaScript et notamment avec le
                            framework Vuejs.
                        </p>
                        <p class="text-lg mt-3">
                            Mes journées professionnelles s'articulent
                            principalement dans la conception et la réalisation
                            de sites internet conçus avec des framework
                            javascript (Vue.js) connectés avec des solutions
                            back-end (Craftcms, Symfony, Headless, ...).
                        </p>
                        <p class="text-lg mt-3">
                            J'adore apprendre des nouvelles technologies,
                            techniques, méthodes et mettre à profit mon mon
                            expérience avec mes collègues de travail.
                        </p>
                        <p class="mt-6 flex">
                            <a
                                class="btn btn--black"
                                href="mailto:pascal.achard@gmail.com"
                                >Contactez-moi
                            </a>
                            <a
                                class="btn btn--black ml-6"
                                href="/CV-PascalAchard-2020.pdf"
                                target="_blank"
                                rel="noopener"
                                >CV
                            </a>
                        </p>
                        <h3 class="h4 mt-16">En ce moment je suis fan de</h3>
                        <p class="mt-3">
                            <a
                                href="https://vuejs.org/"
                                target="_blank"
                                rel="noopener"
                                >Vue.js</a
                            >,
                            <a href="#" target="_blank" rel="noopener"
                                >Nuxt.js</a
                            >,
                            <a
                                href="https://nuxtjs.org/"
                                target="_blank"
                                rel="noopener"
                                >Vuex</a
                            >,
                            <a
                                href="https://craftcms.com/"
                                target="_blank"
                                rel="noopener"
                                >Craftcms</a
                            >,
                            <a
                                href="https://twig.symfony.com/"
                                target="_blank"
                                rel="noopener"
                                >Twig</a
                            >,
                            <a
                                href="https://tailwindcss.com/"
                                target="_blank"
                                rel="noopener"
                                >tailwindcss</a
                            >,
                            <a
                                href="https://www.docker.com/"
                                target="_blank"
                                rel="noopener"
                                >Docker</a
                            >,
                            <a
                                href="https://webpack.js.org/"
                                target="_blank"
                                rel="noopener"
                                >Webpack</a
                            >,
                            <a
                                href="https://prettier.io/"
                                target="_blank"
                                rel="noopener"
                                >Prettier</a
                            >,
                            <a
                                href="https://www.netlify.com/"
                                target="_blank"
                                rel="noopener"
                                >Netlify</a
                            >,
                            <a
                                href="https://www.heroku.com/"
                                target="_blank"
                                rel="noopener"
                                >Heroku</a
                            >...
                        </p>
                        <h3 class="h4 mt-16">Dernière epxérimentation</h3>
                        <p class="mt-3">
                            <a
                                href="https://pascal-is-listening.herokuapp.com/"
                                rel="noopener"
                                target="_blank"
                                >https://pascal-is-listening.herokuapp.com/</a
                            >
                        </p>
                        <p class="mt-3">
                            Application web musicale du type "x is listening"
                            qui affiche ce qu'une personne est en train
                            d'écouter sur Spotify.
                        </p>
                        <p class="mt-3">
                            Projet construit à l'aide des écosystèmes Node.js et
                            npm, Github pour stocker le code, Heroku en tant
                            qu'hôte, Heroku's Redis pour mettre en cache les
                            reponses de l'API Spotify. L'application et l'API
                            interne sont entièrement construits à l'aide du
                            système Nuxt. Nuxt est un framework js basé sur
                            Vue.js qui permet de faire du rendu côté serveur.
                        </p>
                        <p class="mt-3">
                            Ce projet m'a permis de mettre en pratique Redis
                            dont je ne connaissais que la théorie. L'api de
                            Spotifiy est très bien faite et particulièrement
                            bien documentée. Nuxt.js m'a permis de capitaliser
                            mon savoir faire en Vue.js et de construire
                            rapidement une application rendue côté serveur. La
                            plateforme Heroku est très utile et simple à
                            utiliser. Elle ressemble beaucoup à Netlify en plus
                            riche.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import CoverComponent from "@/components/CoverComponent";
export default {
    components: { CoverComponent },
    created() {},
    mounted() {
        this.resizeHandler();
        // We listen to the resize event
        window.addEventListener("resize", this.resizeHandler);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.resizeHandler);
    },
    methods: {
        resizeHandler() {
            // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
            const vh = window.innerHeight * 0.01;
            // Then we set the value in the --vh custom property to the root of the document
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        }
    }
};
</script>

<style lang="scss">
.page-index {
    &__cover {
        transition: all 1s;

        // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
        min-height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
        min-height: calc(var(--vh, 1vh) * 100);

        @apply flex flex-col;

        > * {
            flex-grow: 1;
        }
    }

    &__content {
        //
    }
}
</style>
