<template>
  <div :class="[classes, 'container']">
    <template v-if="$fetchState.pending">
      <font-awesome-icon
        :icon="faSpinner"
        size="3x"
        spin
      />
    </template>

    <template v-else-if="$fetchState.error">
      Error: {{ $fetchState.error }}
    </template>

    <template v-else>
      <sys-header-2>
        <template v-if="isLts">
          Download {{ version }} LTS
        </template>
        <template v-else>
          Download Latest {{ version }}
        </template>
      </sys-header-2>

      <div class="buttons">
        <sys-form-button
          rel="noopener"
          target="_blank"
          color="secondary"
          title="Download for Intel and AMD systems"
          :ghost="!preferIntel"
          :href="intelUrl"
        >
          Download (Intel/AMD)
        </sys-form-button>

        <sys-form-button
          rel="noopener"
          color="secondary"
          target="_blank"
          title="Download for systems with NVIDIA GPUs"
          :ghost="!preferNvidia"
          :href="nvidiaUrl"
        >
          Download (nVidia)
        </sys-form-button>
      </div>

      <sys-paragraph-1 class="disclaimer">
        If you have NVIDIA graphics, you can download the ISO with the
        proprietary NVIDIA driver preinstalled.
      </sys-paragraph-1>

      <sys-paragraph-1 tag="dl">
        <dt>Requirements:</dt>
        <dd>2 GB RAM, 16 GB storage, 64-bit processor</dd>

        <dt>Recommended:</dt>
        <dd>4 GB RAM, 16 GB storage, 64-bit processor</dd>

        <dt>Filesize:</dt>
        <dd>{{ intelSize }} GB (Intel, AMD), {{ nvidiaSize }} GB (NVIDIA)</dd>

        <dt>SHA256 Sum:</dt>
        <dd class="sha">
          <code><span>{{ intelSha }}</span></code>
          <div>(Intel/AMD)</div>

          <code><span>{{ nvidiaSha }}</span></code>
          <div>(NVIDIA)</div>
        </dd>
      </sys-paragraph-1>

      <div class="foot">
        <sys-form-button
          ghost
          href="https://support.system76.com/articles/install-pop/"
          rel="noopener"
          target="_blank"
        >
          How to create a USB stick using this image?
        </sys-form-button>

        <sys-form-button
          v-if="canSwitchRelease"
          color="primary"
          ghost
          rel="noopener"
          target="_blank"
          @click.prevent="toggle"
        >
          <template v-if="isLts">
            Download latest {{ alternativeVersion }}
          </template>
          <template v-else>
            Download {{ alternativeVersion }} LTS
          </template>
        </sys-form-button>
      </div>
    </template>
  </div>
</template>

<style scoped>
  .container {
    border-radius: 3px;
    border: 1px solid transparent;
    padding: 1rem;
  }

  .light-mode {
    background-color: #fff;
    border-color: #C8C8C8;
    color: #272727;
  }

  .dark-mode {
    background-color: #272727;
    border-color: #171717;
    color: #ccc;
  }

  h2 {
    text-align: center;
  }

  .buttons {
    align-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -0.5rem;
  }

  .buttons > * {
    flex: 1 1 40%;
    margin: 0.5rem;
    max-width: 40ch;
    min-width: 28ch;
  }

  .disclaimer {
    margin: 2rem auto 4rem;
    max-width: 60ch;
    text-align: center;
  }

  .foot {
    display: flex;
    flex-direction: column;
    margin: -0.5rem 0;
  }

  dt {
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  dd {
    margin: 0 0 2rem;
    padding: 0;
  }

  .sha {
    text-align: center;
  }

  .sha > * {
    display: block;
  }

  .sha code {
    background-color: var(--color-black);
    border-radius: 3px;
    color: var(--color-white);
    margin: 0.2rem 0;
    padding: 0.4rem;
    width: 100%;
  }

  .sha span {
    display: block;
    max-width: 100%;
    overflow: auto;
    width: 100%;
  }

  .sha div {
    margin: 0.2rem auto 1rem;
  }

  .foot {
    margin: calc(-0.5rem - 0.4em) -0.6em;
  }

  .foot > * {
    margin: 0.5rem auto 0.5rem 0;
  }
</style>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import { faSpinner } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import color from '~/mixins/color'

  export default {
    components: {
      FontAwesomeIcon
    },

    mixins: [
      color
    ],

    computed: {
      ...mapGetters('download', [
        'loaded',
        'canSwitchRelease',
        'release',
        'isLts',
        'version',
        'alternativeVersion',
        'channel',

        'intelSha',
        'nvidiaSha',
        'intelSize',
        'nvidiaSize',
        'intelUrl',
        'nvidiaUrl',

        'hasPreference',
        'preferIntel',
        'preferNvidia'
      ]),

      faSpinner: () => faSpinner
    },

    async fetch () {
      if (!this.loaded) {
        await this.fetch(this.release)
      }
    },

    methods: {
      ...mapMutations('download', [
        'switchRelease'
      ]),

      ...mapActions('download', [
        'fetch'
      ]),

      toggle () {
        this.switchRelease()
        this.$fetch()
      }
    }
  }

</script>
