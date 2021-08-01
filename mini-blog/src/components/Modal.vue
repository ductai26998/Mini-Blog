<template>
  <div>
    <div id="post-modal">
      <button class="button" @click="showModal = true">
        <div class="icon-add">
          <i class="fas fa-plus"></i>
        </div>
      </button>
    </div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <button class="btn-close" @click="showModal = false"></button>
        <post-blog></post-blog>
      </div>
    </transition>
  </div>
</template>

<script>
import PostBlog from "../views/PostBlog.vue";
export default {
  components: { PostBlog },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
}

#post-modal {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

.button {
  appearance: none;
  border: none;
  cursor: pointer;
  margin: 5px;

  display: inline-block;
  border-radius: 50%;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;

  .icon-add {
    padding: 10px 15px;
    border-radius: 50%;
    background: #02c591;
    color: #fff;
    cursor: pointer;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal {
  position: fixed;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  height: 90%;

  width: 100%;
  max-width: 700px;
  background-color: #fff;
  border-radius: 16px;

  padding: 25px;

  .btn-close {
      position: absolute;
      top: 20px;
      right: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>