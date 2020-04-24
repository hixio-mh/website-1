<template>
  <transition
    v-if="active"
    name="fade"
  >
    <div
      class="bg"
      @click.self.prevent="close"
    >
      <div class="fg">
        <slot />
      </div>
    </div>
  </transition>
</template>

<style scoped>
  .fade-enter-active {
    transition: all 500ms ease;
  }

  .fade-leave-active {
    transition: all 400ms ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active .fg {
    transition: transform 400ms ease;
    transition-delay: 80ms;
  }

  .fade-leave-active .fg {
    transition: transform 320ms ease;
  }

  .fade-enter .fg,
  .fade-leave-to .fg {
    transform: scale(0.9);
  }

  .bg {
    align-content: center;
    align-items: center;
    backdrop-filter: grayscale(1);
    background-color: rgba(10, 10, 10, 0.8);
    bottom: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    left: 0;
    padding: 2rem 1rem;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9999;
  }

  .fg {
    border-radius: 3px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
    cursor: auto;
    max-height: 100%;
    max-width: 100%;
    overflow: auto;
  }

  @media only screen and (min-height: 600px) {
    .bg {
      padding-top: 5rem;
      z-index: 9989;
    }
  }
</style>

<script>
  export default {
    model: {
      prop: 'active'
    },

    props: {
      active: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      close () {
        this.$emit('input', false)
      }
    }
  }
</script>
