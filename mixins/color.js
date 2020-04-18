export default {
  computed: {
    classes () {
      if (this.isDark) {
        return 'dark-mode'
      } else {
        return 'light-mode'
      }
    },

    color: {
      get () {
        return this.$colorMode.preference
      },

      set (value) {
        this.$colorMode.preference = value
      }
    },

    isDark () {
      return (this.color === 'dark')
    },

    isLight () {
      return (!this.isDark)
    }
  },

  methods: {
    setDark () {
      this.color = 'dark'
    },

    setLight () {
      this.color = 'light'
    },

    toggleColor () {
      if (this.isDark) {
        this.setLight()
      } else {
        this.setDark()
      }
    }
  }
}
