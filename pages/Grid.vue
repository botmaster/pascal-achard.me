<template>
    <div class="page-grid">
        <div class="container mx-auto px-container md:px-container-md">
            <h1>Je suis une grille</h1>
        </div>
        <div class="container mx-auto px-container md:px-container-md">
            <div
                class="page-grid__grid flex bg-gray-300 -mx-gutter md:-mx-gutter-md"
            >
                <div
                    class="w-1/12 bg-gray-500 h-12 px-gutter md:px-gutter-md page-grid__col"
                />
                <div
                    class="w-1/12 bg-gray-500 h-12 px-gutter md:px-gutter-md page-grid__col"
                />
                <div
                    class="w-1/12 bg-gray-500 h-12 px-gutter md:px-gutter-md page-grid__col"
                />
                <div
                    class="w-1/12 bg-gray-500 h-12 px-gutter md:px-gutter-md page-grid__col"
                />
                <div
                    class="w-1/12 bg-gray-500 h-12 px-gutter md:px-gutter-md page-grid__col"
                />
                <div
                    class="w-1/12 bg-gray-500 h-12 px-gutter md:px-gutter-md page-grid__col"
                />
                <div
                    class="w-1/12 bg-gray-500 h-12 px-gutter md:px-gutter-md page-grid__col"
                />
                <div
                    class="w-1/12 bg-gray-500 h-12 px-gutter md:px-gutter-md page-grid__col"
                />
                <div
                    class="w-1/12 bg-gray-500 h-12 px-gutter md:px-gutter-md page-grid__col"
                />
                <div
                    class="w-1/12 bg-gray-500 h-12 px-gutter md:px-gutter-md page-grid__col"
                />
                <div
                    class="w-1/12 bg-gray-500 h-12 px-gutter md:px-gutter-md page-grid__col"
                />
                <div
                    class="w-1/12 bg-gray-500 h-12 px-gutter md:px-gutter-md page-grid__col"
                />
            </div>
        </div>
        <div class="container mx-auto px-container md:px-container-md">
            <div
                class="page-grid__grid flex bg-gray-300 -mx-gutter md:-mx-gutter-md justify-center"
            >
                <div
                    class="w-8/12 bg-gray-500 h-12 px-gutter md:px-gutter-md page-grid__col"
                />
            </div>
        </div>
        <div class="container mx-auto px-container md:px-container-md mt-8">
            <h1>Je suis une VRAI grille</h1>
        </div>
        <div class="container mx-auto px-container md:px-container-md">
            <div class="page-grid__grid-real bg-gray-300-light">
                <div class="bg-gray-500 h-12 page-grid__col" />
                <div class="bg-gray-500 h-12 page-grid__col" />
                <div class="bg-gray-500 h-12 page-grid__col" />
                <div class="bg-gray-500 h-12 page-grid__col" />
                <div class="bg-gray-500 h-12 page-grid__col" />
                <div class="bg-gray-500 h-12 page-grid__col" />
                <div class="bg-gray-500 h-12 page-grid__col" />
                <div class="bg-gray-500 h-12 page-grid__col" />
                <div class="bg-gray-500 h-12 page-grid__col" />
                <div class="bg-gray-500 h-12 page-grid__col" />
                <div class="bg-gray-500 h-12 page-grid__col" />
                <div class="bg-gray-500 h-12 page-grid__col" />
            </div>
        </div>
    </div>
</template>

<script>
/**
 * Created by PhpStorm.
 * User: pascal
 * Date: 2019-07-17
 * Time: 13:13
 */
export default {
    name: 'Grid'
}
</script>

<style lang="scss" scoped>
.page-grid {
    &__grid {
        overflow: hidden;
    }

    &__col {
        background-clip: content-box;
        font-size: 0;
        line-height: 0;
    }

    &__grid-real {
        display: grid;
        height: 100%;
        grid-column-gap: 30px;
        grid-template-columns: repeat(12, 1fr);
    }
}
</style>
