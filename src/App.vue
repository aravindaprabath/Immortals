<template>
  <div id="app" class="h-screen flex overflow-hidden bg-gray-100">
    <MobileNav />

    <div class="hidden md:flex md:flex-shrink-0">
      <div
        class="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-white"
      >
        <div class="flex items-center flex-shrink-0 px-4">
          <img
            class="h-8 w-auto"
            src="/img/opusxentax250.png"
            alt="Immortals"
          />
        </div>

        <div class="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
          <Nav />
        </div>
      </div>
    </div>

    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
          aria-label="Open sidebar"
        >
          <svg
            class="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>

        <Header />
      </div>

      <main
        class="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none"
        tabindex="0"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 class="text-2xl font-semibold text-gray-900">OPXT Components</h1>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div class="py-4">
            <router-view />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import MobileNav from "@/components/MobileNav.vue";

export default {
  name: "App",
  components: {
    Nav,
    Header,
    MobileNav
  }
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
