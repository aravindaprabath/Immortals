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
`
};

export { accordion };
