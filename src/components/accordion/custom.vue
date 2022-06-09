<template>
  <div class="container">
    <h1>Accordion</h1>
    <div class="comment" v-for="(comment,index) in comments" :key="index">
      <div class="comment-username">{{ comment.name }}</div>
      <div class="comment-message">{{ comment.message }}
        <div class="reply-symbol" :class="{ show: comment.show }" @click="showReply(index)"> <span>Replies</span></div>
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
  font-size: 20px;
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
  color: #27C9AA;
  cursor: pointer;
  font-size: 18px;
  transition: all 1s ease;
  margin: 15px 0 0 28px;
  position: relative;
}
.reply-symbol:after {
  content: "";
  position: absolute;
  left: -28px;
  top: 0;
  width: 12px;
  height: 12px;
  border-top: 2px solid #34E0C0;
  border-left: 2px solid #34E0C0;
  transform: rotate(225deg);
}
.reply-symbol.show{
   margin-bottom: 15px;
}
.reply-symbol.show:after{
   top: 6px;
   transform: rotate(45deg);
}
.replies {
  padding-left: 30px;
}
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.4s ease, opacity 0.5s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>