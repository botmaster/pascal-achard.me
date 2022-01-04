<template>
  <footer v-observe-visibility="visibilityChanged" class="py-8">
    <div
      class="container mx-auto px-container md:px-container-md md:flex md:justify-between"
    >
      <div class="md:flex md:justify-between md:items-center">
        <div class="flex space-x-3 mb-6 md:mb-0">
          <a
            v-for="(item, index) in links"
            :key="index"
            :href="item.href"
            target="_blank"
            rel="noopener"
            class="social-item"
            :class="{ 'is-inview': isVisible }"
            :aria-label="item['aria-label']"
          >
            <div class="social-item__icon">
              <icon-component :icon="item.icon.svg"></icon-component>
            </div>
          </a>
        </div>
      </div>
      <div class="theme-switcher" :class="{ 'is-inview': isVisible }">
        <theme-switcher-component
          :theme-list="themeList"
          :current="$colorMode.preference"
          @update:current="$colorMode.preference = $event"
        ></theme-switcher-component>
      </div>
    </div>
  </footer>
</template>

<script>
import ThemeSwitcherComponent from './ThemeSwitcherComponent.vue'
/**
 * Created by PhpStorm.
 * User: pascal
 * Date: 2019-07-17
 * Time: 16:56
 */

export default {
  name: 'FooterComponent',
  components: { ThemeSwitcherComponent },
  data() {
    return {
      isVisible: false,
      links: [
        {
          href: 'https://github.com/botmaster',
          'aria-label': 'GitHub',
          icon: {
            title: 'GitHub icon',
            svg: 'cib-github',
          },
        },
        {
          href: 'http://www.linkedin.com/in/pascal-achard',
          'aria-label': 'LinkedIn',
          icon: {
            title: 'LinkedIn icon',
            svg: 'cib-linkedin',
          },
        },
        {
          href: 'https://codepen.io/botmaster/',
          'aria-label': 'CodePen',
          icon: {
            title: 'CodePen icon',
            svg: 'cib-codepen',
          },
        },
        {
          href: 'https://www.instagram.com/botmaster/',
          'aria-label': 'Instagram',
          icon: {
            title: 'Instagram icon',
            svg: 'cib-instagram',
          },
        },
        {
          href: 'https://twitter.com/botmaster',
          'aria-label': 'Twitter',
          icon: {
            title: 'Twitter icon',
            svg: 'cib-twitter',
          },
        },
        {
          href: 'https://www.last.fm/user/botmaster',
          'aria-label': 'Last.fm',
          icon: {
            title: 'Last.fm icon',
            svg: 'cib-last-fm',
          },
        },
      ],
    }
  },
  computed: {
    themeList() {
      return [
        { name: 'system', label: 'Système', icon: 'mi-computer' },
        { name: 'dark', label: 'Sombre', icon: 'mi-moon' },
        { name: 'light', label: 'Claire', icon: 'mi-sun' },
      ]
    },
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible
    },
  },
}
</script>

<style lang="scss" scoped>
.social-item {
  $self: &;

  @apply p-1;

  &.is-inview {
    #{$self}__icon {
      transform: none;
      opacity: 1;
    }

    @for $i from 1 through 6 {
      &:nth-child(#{$i}) {
        #{$self}__icon {
          transition-delay: $i * 0.1s;
        }
      }
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    font-size: 24px;

    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1),
      transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);

    svg {
      fill: currentColor;
    }
  }
}

.theme-switcher {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1),
    transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  &.is-inview {
    transition-delay: 0.7s;
    transform: none;
    opacity: 1;
  }
}
</style>
