<template>
  <nav class="flex-1 px-2 bg-white">
    <router-link
      v-for="({ route, title }, index) in navItems"
      :key="index"
      :to="route.name"
      class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
    >
      {{ title }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",

  computed: {
    navItems() {
      const sidebarMenu = [
        { title: "Navigation", route: { name: "navigation" } },
        { title: "Headers", route: { name: "header" } },
        { title: "Tables", route: { name: "table" } },
        { title: "Accordion", route: { name: "accordion" } }
      ];

      return sidebarMenu;
    }
  }
};
</script>

<style lang="scss">
.router-link-active {
  @apply .bg-gray-100;
}
</style>
