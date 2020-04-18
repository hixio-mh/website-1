<template>
  <section :class="classes">
    <div class="content">
      <div>
        <sys-subheader-1>
          Welcome to Pop!_OS
        </sys-subheader-1>

        <sys-paragraph-1>
          Pop!_OS is an operating system for STEM and creative professionals who
          use their computer as a tool to discover and create. Unleash your
          potential on secure, reliable open source software. Based on your
          exceptional curiosity, we sense you have a lot of it.
        </sys-paragraph-1>

        <div>
          <sys-form-button color="secondary">
            Download
          </sys-form-button>

          <sys-form-button color="primary">
            Support Pop
          </sys-form-button>
        </div>
      </div>

      <div
        class="logo"
        v-html="require('~/assets/images/index/logo.svg?include')"
      />
    </div>
  </section>
</template>

<style scoped>
  section {
    clip-path: ellipse(140% calc(100vw + 6rem) at 50% calc(100% - 6rem - 100vw));
    width: 100%;
  }

  section.light-mode {
    background: linear-gradient(#00163d 0%, #001e54 25%, #9acfe1 120%);
    color: #fff;
  }

  section.dark-mode {
    background: linear-gradient(#fff 0%, #fcfbf7 100%);
    color: #574F4A;
  }

  .content {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    margin: 0 auto 4rem;
    max-width: 1280px;
    padding: 2rem 1rem 6rem;
  }

  h1 {
    margin-top: 0;
  }

  .logo {
    display: none;
    filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.35));
    max-width: 100%;
  }

  @media (width >= 70rem) {
    .content {
      grid-template-columns: 1fr 1fr;
    }

    .logo {
      display: block;
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
