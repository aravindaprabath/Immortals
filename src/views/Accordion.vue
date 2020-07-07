<template>
  <div>
    <div class="mx-auto mb-5">
      <h1 class="text-xl font-semibold text-gray-900">Accordion</h1>
    </div>

    <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div
        class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap"
      >
        <div class="ml-4 mt-4">
          <div class="flex items-center">
            Collapsible Accordion
          </div>
        </div>
        <div class="ml-4 mt-4 flex-shrink-0 flex">
          <span class="ml-3 inline-flex rounded-md shadow-sm">
            <button
              type="button"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-500 focus:outline-none active:bg-gray-50 active:text-gray-800"
              :class="[codeView ? 'bg-gray-100' : 'bg-white']"
              @click="codeView = !codeView"
            >
              <svg
                class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                />
              </svg>
              <span v-if="!codeView">
                Show Code
              </span>
              <span v-if="codeView">
                Hide Code
              </span>
            </button>
          </span>

          <span class="ml-3 inline-flex rounded-md shadow-sm">
            <button
              type="button"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-500 focus:outline-none active:bg-gray-50 active:text-gray-800"
              v-clipboard:copy="codeSnippet.accordion"
            >
              <svg
                class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7zm0 2H5v14h14V6h-2v2H7V6zm2-2v2h6V4H9z"
                />
              </svg>
              <span>
                Copy Code
              </span>
            </button>
          </span>
        </div>
      </div>
    </div>

    <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div v-html="codeSnippet.accordion" />
    </div>

    <transition name="fade" mode="out-in">
      <div
        class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6"
        v-if="codeView"
      >
        <prism language="html" class="rounded-md">
          {{ codeSnippet.accordion }}
        </prism>
      </div>
    </transition>
  </div>
</template>

<script>
import Prism from "vue-prism-component";
import { accordion } from "@/snippets/accordion";

export default {
  name: "Accordion",

  components: {
    Prism
  },

  data() {
    return {
      codeView: false,
      codeSnippet: accordion
    };
  }
};
</script>

<style lang="scss">
/* Tab content - Closed */
.tab-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}

/* :checked - Resize to full height */
.tab input:checked ~ .tab-content {
  @apply .max-h-screen;
}

/* Label formatting when open */
.tab input:checked + label {
  @apply .bg-gray-100;
  @apply .text-blue-500;
}

/* Icon */
.tab label::after {
  @apply .float-right;
  @apply .top-0;
  @apply .right-0;
  @apply .block;
  @apply .text-center;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.2;
  font-size: 15px;
  transition: all 0.35s;
}

/* Icon - Closed state */
.tab input[type="checkbox"] + label::after {
  content: "+";
  @apply .font-bold;
  @apply .border;
  @apply .rounded-full;
  @apply .border-gray-100;
}

.tab input[type="radio"] + label::after {
  content: "\25BE";
  @apply .font-bold;
  @apply .border;
  @apply .rounded-full;
  @apply .border-gray-100;
}

/* Icon - Open state */
.tab input[type="checkbox"]:checked + label::after {
  @apply .bg-blue-500;
  @apply .text-gray-100;
  transform: rotate(315deg);
}

.tab input[type="radio"]:checked + label::after {
  transform: rotateX(180deg);
  @apply .bg-blue-500;
  @apply .text-gray-100;
}
</style>
