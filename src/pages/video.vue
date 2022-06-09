<template>
  <video ref="video" />
  <button @click="playing = !playing">Play / Pause</button>
  <span>{{ currentTime }} / {{ duration }}</span>
  <button @click="fullscreen">Full Screen</button>
</template>

<script setup>
import { ref } from 'vue'
import { useMediaControls } from '@vueuse/core'
const video = ref()
const { playing, currentTime, duration } = useMediaControls(video, { 
  src: 'https://vjs.zencdn.net/v/oceans.mp4',
})
</script>

<style>

</style>