const accordion = {
  accordion: `
<div class="container mx-auto">
  <div class="w-full md:w-3/5 mx-auto p-8">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Tenetur, architecto, explicabo perferendis nostrum, maxime
            impedit atque odit sunt pariatur illo obcaecati soluta
            molestias iure facere dolorum adipisci eum? Saepe, itaque.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Tenetur, architecto, explicabo perferendis nostrum, maxime
            impedit atque odit sunt pariatur illo obcaecati soluta
            molestias iure facere dolorum adipisci eum? Saepe, itaque.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Tenetur, architecto, explicabo perferendis nostrum, maxime
            impedit atque odit sunt pariatur illo obcaecati soluta
            molestias iure facere dolorum adipisci eum? Saepe, itaque.
          </div>
        </div>
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
  content: "\\25BE";
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
`
};

export { accordion };
