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
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
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
              class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
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
      const mobileNavItems = [
        { title: 'Navigation', route: { name: 'navigation' } },
        { title: 'Headers', route: { name: 'header' } },
        { title: 'Tables', route: { name: 'table' } },
        { title: 'Accordion', route: { name: 'accordion' } },
      ]

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
