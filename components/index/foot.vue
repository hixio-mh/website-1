<template>
  <section :class="classes">
    <div class="content">
      <sys-paragraph-1>
        Pop!_OS is free to download. If you want to try it out before you
        commit, you can download the .iso file to a USB and boot the OS from
        there. Here’s how.  Like what we’re doing? Subscribe to fund more
        awesome features down the road. We’ve always got something exciting in
        the works for you to experience.
      </sys-paragraph-1>

      <div>
        <sys-form-button
          color="secondary"
          @click.prevent="toggleDownload"
        >
          Download
        </sys-form-button>

        <sys-form-button color="primary">
          Support Pop
        </sys-form-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
  section {
    align-content: center;
    align-items: center;
    clip-path: ellipse(120% 100% at 50% 100%);
    display: flex;
    justify-content: center;
    padding: 0 0 10vw;
    position: relative;
    width: 100%;
  }

  section.light-mode {
    background: linear-gradient(#e1d5dc 0%, #f2d8db 10%, #d0d9d1 30%, #a8ebe0 100%);
    color: #000;
  }

  section.light-mode::before {
    background-image: url("~assets/images/index/foot-texture-light.png?size=800");
    background-size: cover;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    mix-blend-mode: luminosity;
    opacity: 0.3;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  section.dark-mode {
    background: linear-gradient(#fcfbf7 0%, #fff 100%);
    color: #574F4A;
  }

  section.dark-mode::before {
    background-image: url("~assets/images/index/moon-dark.svg");
    background-position: top center;
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
    background: linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0));
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 2;
  }

  .content {
    text-align: center;
    max-width: 84ch;
    padding: 4rem 1rem;
    position: relative;
    z-index: 10;
  }

  @media (width >= 800px) {
    section.light-mode::before {
      background-image: url("~assets/images/index/foot-texture-light.png?size=2000");
    }
  }

  @media (width >= 110ch) {
    section {
      padding-bottom: 7vw;
    }
  }

  @media (width >= 140ch) {
    section {
      clip-path: ellipse(60% 100% at 50% 100%);
    }
  }
</style>

<script>
  import color from '~/mixins/color'

  export default {
    mixins: [
      color
    ],

    methods: {
      toggleDownload () {
        // TODO: analytics
        this.$store.dispatch('download/detectChannel')
        this.$store.commit('download/toggleShowing')
      }
    }
  }
</script>
