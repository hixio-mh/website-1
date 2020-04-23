<template>
  <section :class="classes">
    <div class="copy">
      <sys-header-2>Keep your computer secure</sys-header-2>
    </div>

    <div class="image">
      <picture>
        <source
          type="image/webp"
          :srcset="require('~/assets/images/index/security.png?webp&size=700')"
        >
        <source
          type="image/png"
          :srcset="require('~/assets/images/index/security.png?size=700')"
        >
        <img
          alt="Security robot"
          src="~/assets/images/index/security.png?size=700"
        >
      </picture>
    </div>

    <div class="block">
      <sys-header-3>Encryption out of the box</sys-header-3>

      <sys-paragraph-1>
        Pop!_OS encrypts your installation by default, and is the only Linux
        distribution that enables full-disk encryption out of the box. A unique
        private encryption key is generated during setup after you receive your
        computer.
      </sys-paragraph-1>
    </div>

    <div class="block">
      <sys-header-3>Update on Your Terms</sys-header-3>

      <sys-paragraph-1>
        Pop!_OS provides the latest features and security patches through
        rolling updates and periodic OS version upgrades, to be performed at
        your discretion. And if you want a clean slate, the Refresh Install
        feature resets your OS while preserving the files in your Home folder.
      </sys-paragraph-1>
    </div>

    <div class="block">
      <sys-header-3>Privacy</sys-header-3>

      <sys-paragraph-1>
        Pop!_OS does not collect or store any info from user installations.
        Minimal OS and hardware data is used—not stored—to provide updates and
        connectivity verification. Apps packaged through Flatpak require
        permission to access more than what’s needed to function.
      </sys-paragraph-1>
    </div>

    <div class="block">
      <sys-header-3>Firmware Management</sys-header-3>

      <sys-paragraph-1>
        Automatic firmware updates can be accessed from your software settings
        on System76 hardware. These updates help to promptly quash any threat of
        security risk to your computer.
      </sys-paragraph-1>
    </div>
  </section>
</template>

<style scoped>
  section {
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(4, auto);
    margin: 4rem auto;
    max-width: 1280px;
    padding: 0 1rem;
    width: 100%;
  }

  .copy {
    grid-column: 1 / 2;
    margin: 0 auto 1rem;
    max-width: 80ch;
  }

  .copy > h2 {
    margin: 0;
  }

  .image {
    align-self: center;
    margin: 0 auto;
    user-select: none;
  }

  .image img {
    max-width: 400px;
    width: 100%;
  }

  .block {
    border-radius: 12px;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    max-width: 70ch;
    margin: 0 auto;
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

  .block h3 {
    margin: 0 0 1rem;
  }

  .block p {
    margin: 0;
  }

  @media (width >= 800px) {
    section {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, auto);
    }

    .copy {
      grid-column: 1 / 3;
    }

    .image {
      grid-column: 1 / 3;
    }
  }

  @media (width >= 1000px) {
    section {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto 1fr 1fr auto;
    }

    .copy {
      grid-column: 1 / 3;
    }

    .image {
      grid-row: 2 / 4;
      grid-column: 1 / 2;
    }

    .image img {
      max-width: 100%;
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
