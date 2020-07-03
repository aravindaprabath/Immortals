<template>
  <div>
    <div class="mx-auto mb-5">
      <h1 class="text-2xl font-semibold text-gray-900">Navigation</h1>
    </div>

    <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div
        class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap"
      >
        <div class="ml-4 mt-4">
          <div class="flex items-center">
            Type 1
          </div>
        </div>
        <div class="ml-4 mt-4 flex-shrink-0 flex">
          <span class="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
            >
              <svg
                class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0H24V24H0z" />
                <path
                  fill="currentColor"
                  d="M20 3c.552 0 1 .448 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.415 1.413L9 11.93l-4 3.999V19h10.533l.708.001 1.329-1.33L18.9 19h.1v-2.758l2-2V20c0 .552-.448 1-1 1H4c-.55 0-1-.45-1-1V4c0-.552.448-1 1-1h16zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S14 9.328 14 8.5 14.672 7 15.5 7z"
                />
              </svg>
              <span>
                Design
              </span>
            </button>
          </span>

          <span class="ml-3 inline-flex rounded-md shadow-sm">
            <button
              type="button"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
            >
              <svg
                class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M16.95 8.464l1.414-1.414 4.95 4.95-4.95 4.95-1.414-1.414L20.485 12 16.95 8.464zm-9.9 0L3.515 12l3.535 3.536-1.414 1.414L.686 12l4.95-4.95L7.05 8.464z"
                />
              </svg>
              <span>
                Code
              </span>
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
