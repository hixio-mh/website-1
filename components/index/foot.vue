<template>
  <section :class="classes">
    <div class="content">
      <div class="actions">
        <sys-paragraph-1>
          Pop!_OS is free to download. If you want to try it out before you
          commit, you can download the .iso file to a USB and boot the OS from
          there. Here’s how.  Like what we’re doing? Subscribe to fund more
          awesome features down the road. We’ve always got something exciting in
          the works for you to experience.
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

      <sys-subheader-1
        class="links"
        tag="p"
      >
        <a
          href="https://support.system76.com/#pop-ubuntu"
          rel="noopener"
          target="_blank"
        >
          <font-awesome-icon :icon="faBookOpen" />
          Pop!_Docs
        </a>

        <a
          href="https://chat.pop-os.org"
          rel="noopener"
          target="_blank"
        >
          <font-awesome-icon :icon="faMattermost" />
          Pop!_community
        </a>

        <a
          href="https://github.com/pop-os"
          rel="noopener"
          target="_blank"
        >
          <font-awesome-icon :icon="faGithub" />
          Github
        </a>

        <a>
          <font-awesome-icon :icon="faCog" />
          Tech details
        </a>
      </sys-subheader-1>
    </div>
  </section>
</template>

<style scoped>
  section {
    background-origin: center;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
  }

  section.light-mode {
    background-image: url("~assets/images/index/foot-light.png?webp");
    color: #000;
  }

  section.light-mode {
    background-image: url("~assets/images/index/foot-light.png");
  }

  section.dark-mode {
    background-image: url("~assets/images/index/foot-dark.png?webp");
    color: #574F4A;
  }

  section.dark-mode {
    background-image: url("~assets/images/index/foot-dark.png");
  }

  .content {
    margin: 0 auto;
    max-width: 1280px;
    padding: calc(2rem + 4vw) 1rem calc(3rem + 6vw);
  }

  .actions {
    padding-bottom: calc(4rem + 8vw);
    max-width: 84ch;
    text-align: center;
    margin: 0 auto;
  }

  .links {
    align-content: stretch;
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    text-align: center;
    margin: -0.5rem;
  }

  .links a {
    color: inherit;
    flex: 1 1 auto;
    padding: 0.5rem;
    text-decoration: none;
  }

  .links svg {
    display: block;
    margin: 0 auto 1rem;
  }
</style>

<script>
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  import { faCog, faBookOpen } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import faMattermost from '~/icons/faMattermost'
  import color from '~/mixins/color'

  export default {
    components: {
      FontAwesomeIcon
    },

    mixins: [
      color
    ],

    computed: {
      faGithub: () => faGithub,
      faMattermost: () => faMattermost,
      faCog: () => faCog,
      faBookOpen: () => faBookOpen
    }
  }
</script>
