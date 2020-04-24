function checkMediaQueryColor () {
  try {
    return (window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : 'light'
  } catch (e) {
    return 'light'
  }
}

export const state = () => ({
  color: checkMediaQueryColor()
})

export const getters = {
  isDark ({ color }) {
    return (color === 'dark')
  },

  isLight ({ color }) {
    return (color === 'light')
  }
}

export const mutations = {
  toggleColor ({ color }) {
    if (color === 'dark') {
      color = 'light'
    } else {
      color = 'dark'
    }
  }
}
