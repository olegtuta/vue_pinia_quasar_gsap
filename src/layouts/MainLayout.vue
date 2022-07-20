<template>
  <q-layout view="lHh lpR lFf">
    <q-drawer class="left-menu" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <AnimSettings></AnimSettings>
    </q-drawer>
    <q-page-container class="absolute-center">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {ref} from 'vue'
import AnimSettings from "components/AnimSettings.vue";

export default {
  components: {
    AnimSettings
  },
  setup() {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  }
}
</script>

<style>
.left-menu {
  overflow-x: hidden;
}
</style>
