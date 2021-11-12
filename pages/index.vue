<template>
    <main class="page-index">
        <div class="page-index__cover">
            <cover-component></cover-component>
        </div>
        <div class="page-index__content py-16 md:py-24">
            <div class="container mx-auto mt-8 px-container md:px-container-md">
                <!-- <h1>coucou {{ page.title }}</h1> -->
                <div class="-mx-gutter md:-mx-gutter-md flex">
                    <div class="md:w-8/12 px-gutter md:px-gutter-md">
                        <nuxt-content :document="page" />
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
    async asyncData ({$content}) {
        const page = await $content('home').fetch()

        return {
            page
        }
    },
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
