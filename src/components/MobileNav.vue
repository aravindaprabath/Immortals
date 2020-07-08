<template>
  <div class="md:hidden" v-if="showMobileNav">
    <div class="fixed inset-0 flex z-40">
      <div class="fixed inset-0">
        <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>

      <div
        class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"
      >
        <div class="absolute top-0 right-0 -mr-14 p-1">
          <button
            class="flex items-center justify-center mt-1 h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
            aria-label="Close sidebar"
            @click="hideMobileMenu"
          >
            <svg
              class="h-6 w-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
              />
            </svg>
          </button>
        </div>

        <div class="flex-shrink-0 flex items-center px-4">
          <img
            class="h-6 w-auto"
            src="/img/opusxentax250.png"
            alt="Immortals"
          />
        </div>

        <div class="mt-5 flex-1 h-0 overflow-y-auto">
          <nav class="px-2">
            <router-link
              v-for="({ route, title }, index) in navItems"
              :key="index"
              :to="route.name"
              @click.native="hideMobileMenu"
              class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
            >
              {{ title }}
            </router-link>
          </nav>
        </div>
      </div>

      <div class="flex-shrink-0 w-14"></div>
    </div>
  </div>
</template>

<script>
import { navItems } from '@/data/navigation'

export default {
  name: 'MobileNav',

  props: {
    showMobileNav: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    navItems() {
      const mobileNavItems = navItems

      return mobileNavItems
    },
  },

  methods: {
    hideMobileMenu() {
      this.$emit('hideMobileNav')
    },
  },
}
</script>
