<template>
  <section :class="classes">
    <sys-header-2>Other Features</sys-header-2>

    <div class="block">
      <div class="text">
        <sys-header-3>Hybrid Graphics</sys-header-3>

        <sys-paragraph-1>
          Toggle between battery-saving and high-powered graphics, or designate
          specific applications to use the GPU by default. Power you shall have,
          young Padawan.
        </sys-paragraph-1>
      </div>

      <div class="image">
        <img
          v-if="isLight"
          v-lazy="require('~/assets/images/index/other-features-hybrid-light.jpg')"
          :data-loading="require('~/assets/images/index/other-features-hybrid-light.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-hybrid-light.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
        <img
          v-if="isDark"
          v-lazy="require('~/assets/images/index/other-features-hybrid-dark.jpg')"
          :data-loading="require('~/assets/images/index/other-features-hybrid-dark.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-hybrid-dark.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
      </div>
    </div>

    <div class="block">
      <div class="text">
        <sys-header-3>Gaming</sys-header-3>

        <sys-paragraph-1>
          Steam, Lutris, and GameHub combine to create an incredible gaming
          experience in both selection and performance. Do you want to ditch
          Windows? Because this is how you ditch Windows.
        </sys-paragraph-1>
      </div>

      <div class="image" />
    </div>

    <div class="block">
      <div class="text">
        <sys-header-3>Do Not Disturb</sys-header-3>

        <sys-paragraph-1>
          Get rid of any and all notifications for however long you like. Cast out
          ye heathens, for there is many a work to be done!
        </sys-paragraph-1>
      </div>

      <div class="image">
        <img
          v-if="isLight"
          v-lazy="require('~/assets/images/index/other-features-dnd-light.jpg')"
          :data-loading="require('~/assets/images/index/other-features-dnd-light.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-dnd-light.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
        <img
          v-if="isDark"
          v-lazy="require('~/assets/images/index/other-features-dnd-dark.jpg')"
          :data-loading="require('~/assets/images/index/other-features-dnd-dark.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-dnd-dark.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
      </div>
    </div>

    <div class="block">
      <div class="text">
        <sys-header-3>Dark mode</sys-header-3>

        <sys-paragraph-1>
          It’s dark, like your afternoon coffee—but with high-contrast accent
          colors to please the eye. Flip the toggle below to see Dark Mode in
          action.
        </sys-paragraph-1>

        <label class="switch">
          <input
            :checked="isDark"
            aria-label="Dark Mode"
            type="checkbox"
            @change="toggleColor"
          >
        </label>
      </div>

      <div class="image">
        <img
          v-if="isLight"
          v-lazy="require('~/assets/images/index/other-features-mode-light.jpg')"
          :data-loading="require('~/assets/images/index/other-features-mode-light.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-mode-light.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
        <img
          v-if="isDark"
          v-lazy="require('~/assets/images/index/other-features-mode-dark.jpg')"
          :data-loading="require('~/assets/images/index/other-features-mode-dark.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-mode-dark.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
  section {
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(5, auto);
    margin: 4rem auto;
    max-width: 1280px;
    padding: 0 1rem;
  }

  h2 {
    grid-column: 1 / 2;
    margin-top: 0;
    text-align: center;
  }

  .block {
    border-radius: 12px;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .light-mode .block {
    background-color: #fff;
    border-color: #C8C8C8;
    color: #272727;
  }

  .dark-mode .block {
    background-color: #272727;
    border-color: #171717;
    color: #ccc;
  }

  .text {
    flex: 1 1 auto;
  }

  h3 {
    margin-top: 0;
    text-align: center;
  }

  .switch {
    border-radius: 22px;
    display: inline-block;
    height: 44px;
    position: relative;
    transition: all 200ms linear;
    width: 86px;
  }

  .light-mode .switch {
    background-color: #C8C8C8;
    border-color: #fff;
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.15);
  }

  .dark-mode .switch {
    background-color: #FBB86C;
    border-color: #000;
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.25);
  }

  .switch input {
    appearance: none;
    border-radius: 24px;
    display: block;
    height: 36px;
    outline: none;
    position: absolute;
    top: 4px;
    transition: all 200ms linear;
    width: 36px;
  }

  .light-mode .switch input {
    background-color: #fff;
    left: 4px;
  }

  .dark-mode .switch input {
    background-color: #303030;
    left: 46px;
  }

  .switch input:focus {
    background-color: #6ac9d7;
  }

  .block .image {
    flex: 0 0 auto;
    margin-top: 1rem;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    width: 100%;
  }

  .block img {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }

  @media (width >= 120ch) {
    section {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto repeat(2, 1fr)
    }

    h2 {
      grid-column: 1 / 3;
    }
  }

  @media (width >= 1280px) {
    section {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto 1fr auto;
    }

    h2 {
      grid-column: 1 / 4;
    }

    .block:last-of-type {
      flex-direction: row;
      grid-column: 1 / 4;
    }

    .block:last-of-type .text {
      display: flex;
      flex-direction: column;
    }

    .block:last-of-type h3 {
      text-align: left;
    }

    .block:last-of-type p {
      flex: 1 1 auto;
      margin: 0;
    }

    .block:last-of-type .image {
      width: 0;
      height: 0;
      padding-bottom: 337.5px;
      padding-right: 600px;
      margin-top: 0;
      margin-left: 1rem;
    }
  }
</style>

<script>
  import color from '~/mixins/color'

  export default {
    mixins: [
      color
    ]
  }
</script>
