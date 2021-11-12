<template>
  <div
    class="section cover flex items-end relative overflow-hidden py-6 md:py-32"
  >
    <div class="cover__background absolute inset-0 w-full h-full">
      <img
        width="1920"
        height="1280"
        src="../assets/images/pascal-achard.jpg"
        class="inset-0 w-full h-full"
        alt="Pascal Achard Senior Frontend developer"
        :style="imageStyle"
      />
    </div>

    <div
      :style="{
        backgroundColor: `rgba(0, 0, 0, ${0.5 + scrollPercent * 0.5})`,
      }"
      class="cover__dimmer absolute inset-0"
    ></div>
    <div class="container mx-auto px-container md:px-container-md relative">
      <div>
        <p
          :style="{
            transform: `translateY(-${0.36 * scrollPosition}px)`,
            opacity: 1 - scrollPercent * 2.1,
          }"
          class="text-white block"
        >
          Hi, that's me
        </p>
        <h1
          :style="{
            transform: `translateY(-${0.26 * scrollPosition}px)`,
            opacity: 1 - scrollPercent * 1.9,
          }"
          class="text-white"
        >
          Pascal Achard
        </h1>
        <h2
          :style="{
            transform: `translateY(-${0.18 * scrollPosition}px)`,
            opacity: 1 - scrollPercent * 1.7,
          }"
          class="text-white h3"
        >
          Senior Frontend developer
        </h2>
        <p
          :style="{
            transform: `translateY(-${0.12 * scrollPosition}px)`,
            opacity: 1 - scrollPercent * 1.5,
          }"
          class="text-white mt-0"
        >
          Full Stack (node.js/vue.js)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverComponent',
  data() {
    return {
      isScrolling: false,
      scrollPosition: 0,
    }
  },
  computed: {
    scrollPercent() {
      if (process.client) {
        return parseFloat((this.scrollPosition / window.innerHeight).toFixed(2))
      }
      return 1
    },
    imageStyle() {
      return {
        transform: `translateY(${Math.round(
          this.scrollPosition * 0.4
        )}px) perspective(50px) translateZ(${this.scrollPercent / 0.08}px)`,
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (!this.isScrolling) {
        window.requestAnimationFrame(() => {
          this.scrollPosition = parseInt(window.scrollY)
          this.isScrolling = false
        })
        this.isScrolling = true
      }
    },
  },
}
</script>

<style scoped lang="scss">
.cover {
  &__background {
    display: block;

    > img {
      transform: scale(1);
      display: block;
      object-fit: cover;
    }
  }

  &__dimmer {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
