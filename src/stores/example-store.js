import {defineStore} from 'pinia';

export const useStore = defineStore('animating', {
  state: () => {
    return {
      animOptions: {
        duration: 0,
        borderRadius: 0,
        rotation: 0,
        background: "#027be3",
        scale: 0,
        color: "#000000"
      },
      defaultOptions: {
        duration: 0,
        borderRadius: 0,
        rotation: 0,
        background: "gray",
        scale: 1,
        color: "#000000"
      },
    }
  },
  actions: {},
  getters: {
    getOptions: (state) => state.animOptions,
    getDefaultOptions: (state) => state.defaultOptions
  }
})
