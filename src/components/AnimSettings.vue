<template>
  <div>
    <div class="column">
      <div class="row">
        <q-field
          class="num-slider"
          filled
          :hint="`длительность анимации ${ myStore.getOptions.duration } секунд`"
          v-model="myStore.getOptions.duration"
          @update:model-value="val => (val === null && (myStore.getOptions.duration = 10))"
        >
          <template v-slot:control>
            <q-slider
              v-model="myStore.getOptions.duration"
              @change="val => { myStore.getOptions.duration = val }"
              :min="0"
              :max="60"
              label
              label-always
              class="q-mt-lg"
            />
          </template>
        </q-field>
      </div>
      <hr>
      <q-field
        class="num-slider"

        filled
        :hint="`Скругление углов ${ myStore.getOptions.borderRadius }px`"
        :model-value="myStore.getOptions.borderRadius"
        @update:model-value="val => (val === null && (myStore.getOptions.borderRadius = 50))"
      >
        <template v-slot:control>
          <q-slider
            v-model="myStore.getOptions.borderRadius"
            @change="val => { myStore.getOptions.borderRadius = val }"
            :min="0"
            :max="50"
            label
            label-always
            class="q-mt-lg"
          />
        </template>
      </q-field>
      <hr>
      <q-field
        class="num-slider"

        filled
        :hint="`Движение по оси ${ myStore.getOptions.rotation } градусов`"
        :model-value="myStore.getOptions.rotation"
        @update:model-value="val => (val === null && (myStore.getOptions.rotation = 360))"
      >
        <template v-slot:control>
          <q-slider
            v-model="myStore.getOptions.rotation"
            @change="val => { myStore.getOptions.rotation = val }"
            :min="0"
            :max="360"
            label
            label-always
            class="q-mt-lg"
          />
        </template>
      </q-field>
      <hr>
      <q-input
        filled
        v-model="myStore.getOptions.background"
        :rules="['anyColor']"
        hint="Фон кубика"
        class="my-input"
      >
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-color v-model="myStore.getOptions.background"/>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <hr>
      <q-input
        filled
        v-model="myStore.getOptions.color"
        :rules="['anyColor']"
        hint="Цвет текста"
        class="my-input"
      >
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-color v-model="myStore.getOptions.color"/>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <hr>
      <q-field
        class="num-slider"

        filled
        :hint="`Увеличение в ${ myStore.getOptions.scale } раз`"
        :model-value="myStore.getOptions.scale"
        @update:model-value="val => (val === null && (myStore.scale.rotation = 5))"
      >
        <template v-slot:control>
          <q-slider
            v-model="myStore.getOptions.scale"
            @change="val => { myStore.getOptions.scale = val }"
            :min="0"
            :max="5"
            label
            label-always
            class="q-mt-lg"
          />
        </template>
      </q-field>
    </div>
  </div>
</template>

<script>
import {useStore} from 'stores/example-store.js'
import {gsap} from 'gsap'

export default {
  name: "AnimSettings",
  setup() {
    const myStore = useStore();
    return {myStore}
  },
  updated() {
    gsap.killTweensOf("#example");
    gsap.to("#example", this.myStore.getDefaultOptions);
    gsap.to("#example", this.myStore.getOptions);
  }
}
</script>

<style scoped>
.num-slider {
  width: 100%;
}

hr {
  width: 100%;
}

.my-input {
  width: 100%;
}
</style>
