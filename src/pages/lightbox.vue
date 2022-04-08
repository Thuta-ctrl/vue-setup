<template>
  <div>
    I installed vue-easy-lightbox. <br/>
    <code>npm install vue-easy-lightbox</code> <br/>

    <h5>Packageသွင်းပြီးသွားလျှင် main.jsတွင် ထိုPackageကို သုံးမည်ဟု အောက်ပါအတိုင်းကြေငြာပေးရမည်။</h5>

    <code>
      import VueEasyLightbox from 'vue-easy-lightbox' <br/>
    </code>
    <code>app.use(VueEasyLightbox)</code>

    <hr/>

    <div style="margin-top: 20px">
      <button @click="showSingle">Show single picture.</button>
      <button @click="showMultiple">Show a group of pictures.</button>

      <!-- all props & events -->
      <vue-easy-lightbox
        scrollDisabled
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
  </div>
</template>

<script>
// If VueApp is already registered with VueEasyLightbox, there is no need to register it here.
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  name: 'light-box',
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      imgs: '', // Img Url , string or Array of string
      visible: false,
      index: 0 // default: 0
    }
  },
  methods: {
    showSingle() {
      this.imgs = 'http://via.placeholder.com/350x150'
      // or
      this.imgs = {
        title: 'this is a placeholder',
        src: 'http://via.placeholder.com/350x150'
      }
      this.show()
    },
    showMultiple() {
      this.imgs = [
        'http://via.placeholder.com/350x150',
        'http://via.placeholder.com/350x150'
      ]
      // or
      this.imgs = [
        { title: 'test img', src: 'http://via.placeholder.com/350x150' },
        'http://via.placeholder.com/350x150'
      ]
      // allow mixing

      this.index = 1 // index of imgList
      this.show()
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>