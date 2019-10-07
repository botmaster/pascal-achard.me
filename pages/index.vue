<template>
    <main data-scroll-section class="page-index">
        <div
            class="section page-index__cover cover flex items-end relative overflow-hidden py-6 md:py-32"
        >
            <div
                data-scroll
                data-scroll-speed="0.5"
                class="cover__background absolute inset-0 w-full h-full"
            >
                <img
                    src="../assets/images/pascal-achard.jpg"
                    class="inset-0 w-full h-full"
                    alt="Pascal Achard Senior Frontend developer"
                />
            </div>

            <div class="cover__dimmer absolute inset-0"></div>
            <div
                class="container mx-auto px-container md:px-container-md relative"
            >
                <div>
                    <span
                        data-scroll
                        data-scroll-speed="2"
                        data-scroll-position="top"
                        class="text-blue-200 block"
                        >Hi, that's me
                    </span>
                    <h1
                        data-scroll
                        data-scroll-speed="1.5"
                        data-scroll-position="top"
                        class="text-gray-100"
                    >
                        Pascal Achard
                    </h1>
                    <h2
                        data-scroll
                        data-scroll-speed="1"
                        data-scroll-position="top"
                        class="text-blue-200 h3"
                    >
                        Senior Frontend developer
                    </h2>
                    <h2
                        data-scroll
                        data-scroll-speed="0.5"
                        data-scroll-position="top"
                        class="text-gray-200 text-sm mt-0 md:mt-2"
                    >
                        Full Stack (node.js/vue.js)
                    </h2>
                </div>
            </div>
        </div>
        <div class="page-index__about about bg-white py-16 md:py-24">
            <div class="container mx-auto px-container md:px-container-md">
                <div class="-mx-gutter md:-mx-gutter-md flex">
                    <div class="md:w-8/12 px-gutter md:px-gutter-md">
                        <h3 class="h4 text-gray-900">
                            À propos de moi
                        </h3>
                        <p class="text-lg mt-6 text-gray-800">
                            Je suis développeur front-end sénior depuis 3 ans
                            mais j'ai 20 ans d'expérience dans la création de
                            sites Web et d'applications Web. Je me suis
                            spécialisé dans le JavaScript et notamment avec le
                            framework Vuejs.
                        </p>
                        <p class="text-lg mt-3 text-gray-800">
                            Mes journées professionnelles s'articulent
                            principalement dans la conception et la réalisation
                            de sites internet conçus avec des framework
                            javascript (Vue.js) connectés avec des solutions
                            back-end (Craftcms, Symfony, Headless, ...).
                        </p>
                        <p class="text-lg mt-3 text-gray-800">
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
                                href="/CV-PascalAchard-2019.pdf"
                                target="_blank"
                                rel="noopener"
                                >CV
                            </a>
                        </p>
                    </div>
                </div>
                <div
                    data-scroll
                    data-scroll-call="tutu"
                    data-scroll-repeat="true"
                    data-scroll-offset="150, 0"
                    class="-mx-gutter md:-mx-gutter-md flex"
                >
                    <div class="md:w-8/12 px-gutter md:px-gutter-md">
                        <h3 class="h4 text-gray-900 mt-16">
                            En ce moment je suis fan de
                        </h3>
                        <p class="text-gray-800 mt-3">
                            <a href="https://vuejs.org/" target="_blank"
                                >Vue.js</a
                            >, <a href="#" target="_blank">Nuxt.js</a>,
                            <a href="https://nuxtjs.org/" target="_blank"
                                >Vuex</a
                            >,
                            <a href="https://craftcms.com/" target="_blank"
                                >Craftcms</a
                            >,
                            <a href="https://twig.symfony.com/" target="_blank"
                                >Twig</a
                            >,
                            <a href="https://tailwindcss.com/" target="_blank"
                                >tailwindcss</a
                            >,
                            <a href="https://www.docker.com/" target="_blank"
                                >Docker</a
                            >,
                            <a href="https://webpack.js.org/" target="_blank"
                                >Webpack</a
                            >,
                            <a href="https://prettier.io/" target="_blank"
                                >Prettier</a
                            >,
                            <a href="https://www.netlify.com/" target="_blank"
                                >Netlify</a
                            >,
                            <a href="https://www.heroku.com/" target="_blank"
                                >Heroku</a
                            >...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
//import locomotiveScroll from "locomotive-scroll";
/*import(/!* webpackChunkName: "locomotiveScroll *!/ 'locomotive-scroll');*/

export default {
    components: {},
    created() {},
    mounted() {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        // We listen to the resize event
        window.addEventListener("resize", () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        });

        console.log("process.client", process.client);

        if (process.client) {
            let locomotiveScroll = require("locomotive-scroll");
            const scroll = new locomotiveScroll.default({
                el: document.querySelector("#js-scroll"),
                smooth: true,
                getSpeed: true,
                getDirection: true,
                scrollbarClass: "scrollbar"
            });

            scroll.on("call", (value, way, obj) => {
                console.log(value, way, obj);
            });
        }
    }
};
</script>

<style lang="scss">
.page-index {
    &__cover {
        //
    }
}

.cover {
    min-height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
    min-height: calc(var(--vh, 1vh) * 100);

    transition: all 1s;

    &__background {
        /*background-image: url("~assets/images/pascal-achard.jpg");*/
        /*background-size: cover;*/
        /*background-position-x: center;*/
        /*background-position-y: center;*/

        display: block;

        > img {
            transform: scale(1.1);
            display: block;
            object-fit: cover;
        }
    }

    &__dimmer {
        background-color: rgba(0, 0, 0, 0.4);
    }
}

.about {
    //
}
</style>
