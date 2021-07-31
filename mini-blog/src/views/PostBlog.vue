<template>
  <!-- <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div> -->

  <div class="post-container modal-content">
    <div class="post-container__header modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h3 class="post-title">Post to blogs</h3>
      <div class="page-logo"><span>moose</span></div>
    </div>
    <form class="post-container__form modal-body">
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