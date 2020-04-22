<template>
  <section :class="classes">
    <div class="content">
      <div class="copy">
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
    align-content: center;
    align-items: center;
    clip-path: ellipse(140% calc(100vw + 6rem) at 50% calc(100% - 6rem - 100vw));
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  section.light-mode {
    background: linear-gradient(#00163d 0%, #001e54 25%, #9acfe1 120%);
    color: #fff;
  }

  section.light-mode::before {
    background-image: url("~assets/images/index/head-texture-light.png?size=800");
    background-size: cover;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    mix-blend-mode: luminosity;
    opacity: 0.4;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  section.dark-mode {
    background: linear-gradient(#fff 0%, #fcfbf7 100%);
    color: #574F4A;
  }

  section.dark-mode::before {
    background-image: url("~assets/images/index/moon-dark.svg");
    background-position: bottom center;
    background-size: cover;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  section.dark-mode::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgb(255, 255, 255), rgba(255, 255, 255, 0));
    z-index: 2;
  }

  .content {
    align-content: center;
    align-items: flex-start;
    display: flex;
    justify-content: center;
    max-width: 1280px;
    padding: 4rem 1rem 6rem;
    width: 100%;
    z-index: 10;
  }

  .copy {
    max-width: 80ch;
  }

  h1 {
    margin-top: 0;
  }

  .logo {
    display: none;
    filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.35));
    flex: 1 1 auto;
    margin-left: 1rem;
    max-width: 80ch;
  }

  @media (width >= 800px) {
    section.light-mode::before {
      background-image: url("~assets/images/index/head-texture-light.png?size=2000");
    }

    section.light-mode::after {
      background-image: url("~assets/images/index/head-planet-light.png?size=1600");
      content: "";
      height: 477.6px;
      left: calc(50% - 900px);
      opacity: 0.2;
      position: absolute;
      top: 1rem;
      width: 1600px;
      z-index: 2;
    }
  }

  @media (width >= 1280px) {
    section {
      clip-path: ellipse(calc(56vw + 345px) 140% at 41vw -40%);
    }

    .content {
      max-width: 1280px;
      padding: 6rem 1rem 8rem;
      justify-content: space-between;
    }

    .copy {
      max-width: 68ch;
    }

    .logo {
      display: block;
      max-width: 56ch;
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
