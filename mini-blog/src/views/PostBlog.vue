<template>
  <div class="post-container">
    <div class="post-container__header">
      <h3 class="post-title">Post to blogs</h3>
      <div class="page-logo"><span>moose</span></div>
    </div>
    <form class="post-container__form">
      <div class="post-option">
        <div class="post-option__content"></div>
        <div class="post-option__image"></div>
      </div>
      <div class="post-box">
        <textarea
          name=""
          id=""
          class="post-box__text"
          cols="30"
          rows="10"
        ></textarea>
        <button class="post-box__send">
          <span class="send-icon"></span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>