<template>
  <section :class="classes">
    <gradient-br class="top" />

    <sys-header-2>Compatible with most software tools</sys-header-2>

    <sys-paragraph-1>
      That app you desperately need in order to function? We probably have it.
      The vast software libraries of Ubuntu and Flatpak combine to make all of
      your tools available in a single location, called the Pop!_Shop. The
      Pop!_Shop is our version of Android’s Play Store or the App Store on iOS,
      and we’re constantly adding new applications to the mix—a productivity
      cocktail that goes down smooth.
    </sys-paragraph-1>

    <div
      v-lazy-container="{ selector: 'img' }"
      class="grid"
    >
      <a
        href="https://store.steampowered.com/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Steam"
          title="Steam"
          :data-src="require('~/assets/images/index/apps/steam.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/steam.png?lqip')"
        >
      </a>

      <a
        href="https://www.chromium.org/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Chromium"
          title="Chromium"
          :data-src="require('~/assets/images/index/apps/chromium.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/chromium.png?lqip')"
        >
      </a>

      <a
        href="https://www.mozilla.org/firefox/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Firefox"
          title="Firefox"
          :data-src="require('~/assets/images/index/apps/firefox.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/firefox.png?lqip')"
        >
      </a>

      <a
        href="https://code.visualstudio.com/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Visual Studio Code"
          title="Visual Studio Code"
          :data-src="require('~/assets/images/index/apps/vscode.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/vscode.png?lqip')"
        >
      </a>

      <a
        href="https://atom.io/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Atom"
          title="Atom"
          :data-src="require('~/assets/images/index/apps/atom.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/atom.png?lqip')"
        >
      </a>

      <a
        href="https://www.spotify.com/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Spotify"
          title="Spotify"
          :data-src="require('~/assets/images/index/apps/spotify.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/spotify.png?lqip')"
        >
      </a>

      <a
        href="https://www.videolan.org/vlc/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="VLC"
          title="VLC"
          :data-src="require('~/assets/images/index/apps/vlc.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/vlc.png?lqip')"
        >
      </a>

      <a
        href="https://www.plex.tv/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Plex"
          title="Plex"
          :data-src="require('~/assets/images/index/apps/plex.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/plex.png?lqip')"
        >
      </a>

      <a
        href="https://www.dropbox.com/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Dropbox"
          title="Dropbox"
          :data-src="require('~/assets/images/index/apps/dropbox.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/dropbox.png?lqip')"
        >
      </a>

      <a
        href="https://github.com/alacritty/alacritty"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Alacritty"
          title="Alacritty"
          :data-src="require('~/assets/images/index/apps/alacritty.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/alacritty.png?lqip')"
        >
      </a>

      <a
        href="https://www.blender.org/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Blender"
          title="Blender"
          :data-src="require('~/assets/images/index/apps/blender.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/blender.png?lqip')"
        >
      </a>

      <a
        href="https://inkscape.org/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Inkscape"
          title="Inkscape"
          :data-src="require('~/assets/images/index/apps/inkscape.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/inkscape.png?lqip')"
        >
      </a>

      <a
        href="https://www.gimp.org/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Gimp"
          title="Gimp"
          :data-src="require('~/assets/images/index/apps/gimp.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/gimp.png?lqip')"
        >
      </a>

      <a
        href="https://discordapp.com/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Discord"
          title="Discord"
          :data-src="require('~/assets/images/index/apps/discord.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/discord.png?lqip')"
        >
      </a>

      <a
        href="https://telegram.org/"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Telegram"
          title="Telegram"
          :data-src="require('~/assets/images/index/apps/telegram.png?size=60')"
          :data-loading="require('~/assets/images/index/apps/telegram.png?lqip')"
        >
      </a>
    </div>

    <gradient-br class="bottom" />
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

  h2,
  p {
    margin: 0;
  }

  .grid {
    align-content: space-between;
    align-items: space-between;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    margin: 1rem auto;
    max-width: 800px;
    padding: 0 1rem;
  }

  .grid img {
    height: 60px;
    width: auto;
  }

  @media (width >= 600px) {
    .grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media (width >= 1000px) {
    section {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto 1fr auto;
    }

    .top {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }

    h2 {
      grid-row: 1 / 3;
      grid-column: 1 / 2;
    }

    p {
      grid-row: 3 / 4;
      grid-column: 1 / 2;
    }

    .grid {
      grid-row: 2 / 4;
      grid-column: 2 / 3;
    }

    .bottom {
      grid-row: 4 / 5;
      grid-column: 1 / 3;
    }
  }
</style>

<script>
  import GradientBr from '~/components/gradient-br'
  import color from '~/mixins/color'

  export default {
    components: {
      GradientBr
    },

    mixins: [
      color
    ]
  }
</script>
