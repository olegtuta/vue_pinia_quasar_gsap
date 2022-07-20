<template>
  <q-page>
    <div class="row absolute-center" id="example">
      <span class="absolute-center">ТЕКСТ</span>
    </div>
  </q-page>

</template>

<script>
import {defineComponent} from 'vue'
import {useStore} from 'stores/example-store.js'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const myStore = useStore();
    return {myStore}
  }
})
</script>

<style>
#example {
  width: 70px;
  height: 70px;
  background: gray;
}
</style>
