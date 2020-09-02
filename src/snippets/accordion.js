const accordion = {
  accordion: `
<div class="border border-t-0 border-gray-200">
  <div class="tab w-full overflow-hidden border-t border-gray-200">
    <input
      class="absolute opacity-0 "
      id="tab-multi-one"
      type="checkbox"
      name="tabs"
      checked
    />
    <label
      class="block bg-white px-5 py-4 text-sm leading-normal cursor-pointer"
      for="tab-multi-one"
      >Label One</label
    >
    <div class="tab-content overflow-hidden leading-normal">
      <div class="text-sm p-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo. Excepteur sint occaecat cupidatat non proident, sunt.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        consequat. Duis aute irure dolor in.
      </div>
    </div>
  </div>
  <div class="tab w-full overflow-hidden border-t border-gray-200">
    <input
      class="absolute opacity-0"
      id="tab-multi-two"
      type="checkbox"
      name="tabs"
    />
    <label
      class="block bg-white px-5 py-4 text-sm leading-normal cursor-pointer"
      for="tab-multi-two"
      >Label Two</label
    >
    <div class="tab-content overflow-hidden leading-normal">
      <div class="text-sm p-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo. Excepteur sint occaecat cupidatat non proident, sunt.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        consequat. Duis aute irure dolor in.
      </div>
    </div>
  </div>
  <div class="tab w-full overflow-hidden border-t border-gray-200">
    <input
      class="absolute opacity-0"
      id="tab-multi-three"
      type="checkbox"
      name="tabs"
    />
    <label
      class="block bg-white px-5 py-4 text-sm leading-normal cursor-pointer"
      for="tab-multi-three"
      >Label Three</label
    >
    <div class="tab-content overflow-hidden leading-normal">
      <div class="text-sm p-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo. Excepteur sint occaecat cupidatat non proident, sunt.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        consequat. Duis aute irure dolor in.
      </div>
    </div>
  </div>
</div>
`,
  accordionStyles: `
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
  width: 1.5em;
  height: 1.5em;
  transition: all 0.35s;
}

/* Icon - Closed state */
.tab input[type='checkbox'] + label::after {
  content: '';
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23A0AEC0'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
}

.tab input[type='radio'] + label::after {
  content: '';
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23A0AEC0'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
}

/* Icon - Open state */
.tab input[type='checkbox']:checked + label::after {
  transform: rotate(180deg);
}

.tab input[type='radio']:checked + label::after {
  transform: rotateX(180deg);
}
`,
}

export { accordion }
