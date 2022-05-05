<template>
  <div class="container">
    <h1>Accordion</h1>
    <div class="comment" v-for="(comment,index) in comments" :key="index">
      <div class="comment-username">{{ comment.name }}</div>
      <div class="comment-message">{{ comment.message }}
          <div class="reply-symbol" :class="{ show: comment.show }" @click="showReply(index)">&#94; <span>Replies</span></div>
      </div>
      
      <transition-group 
        name="accordion"
        @enter="start"
        @after-enter="end"
        @before-leave="start"
        @after-leave="end"
      >
        <div class="replies" v-for="(reply,indexOne) in comment.replies" :key="indexOne" v-show="comment.show">
          <div class="comment-username">{{ reply.name }}</div>
          <div class="comment-message">{{ reply.message }}</div>
          <hr/>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import comments from '@/reuseable/comment.json'
export default {
  name: 'accordion-custom',
  data() {
    return {
      comments: comments
    }
  },
  methods: {
    showReply(payload) {
      this.comments.map((comment,index) => {
        if (index == payload && comment.show == false) comment.show = true
        else comment.show = false
      })
    },
    start(el) {
      console.log(el.scrollHeight)
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1100px;
}
.comment {
  background-color: antiquewhite;
  text-align: left;
  padding: 20px;
  margin: 5px;
  position: relative;
}
.reply-span {
  padding-left: 20px;
  color: rgb(83, 79, 79);
  font-size: 12px;
}
.reply-symbol {
  color: red;
  cursor: pointer;
  padding-left: 40px;
  padding-right: 0px;
  font-size: 20px;
  position: absolute;
  left: 100px;
  top: 43px;
  transition: all 1s ease;
}
.reply-symbol.show {
  transform: rotate(180deg);
}
.replies {
  padding-left: 30px;
}
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.5s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>