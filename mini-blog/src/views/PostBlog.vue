<template>
  <div class="post-container">
    <div class="post-container__header">
      <div class="page-logo"><span class="logo-text">moose</span></div>
      <h3 class="post-title">Post to blogs</h3>
    </div>
    <form @submit.prevent="postBlog" class="post-container__form">
      <div class="blog-title">
        <label for="">Title: </label>
        <input
          class="input-title"
          type="text"
          placeholder="Your blog title"
          @keydown="$event.keyCode === 13 ? $event.preventDefault() : false"
          v-model="title"
        />
      </div>
      <div class="post-option">
        <div class="post-option__content" @click="inTextInput = true"></div>
        <div class="post-option__image" @click="inTextInput = false"></div>
      </div>
      <div class="post-box">
        <div class="post-box__text" v-show="inTextInput">
          <textarea
            name=""
            id=""
            class="post-box__text--input"
            cols="30"
            rows="12"
            v-model="content"
          ></textarea>
        </div>

        <div class="post-box__image" v-show="!inTextInput">
          <label for="file-input">Choose image</label>
          <input
            class="post-box__image--choose"
            id="file-input"
            ref="imgInput"
            accept="image/*"
            type="file"
            @change="previewImage"
          />
          <img
            id="preview"
            ref="previewBox"
            src="#"
            alt="Your image"
            onerror="this.style.display='none'"
          />
        </div>
        <div class="post-box__send">
          <button type="submit" class="btn-send"></button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";
import { app } from "../main";
import store from "../store";

export default {
  data() {
    return {
      inTextInput: true,
      title: "",
      content: "",
      image: "",
    };
  },
  methods: {
    previewImage() {
      const [file] = this.$refs.imgInput.files;
      if (file) {
        this.$refs.previewBox.src = URL.createObjectURL(file);
        this.$refs.previewBox.style.display = "block";
      }

      this.image = file;
    },
    async postBlog() {
      try {
        const id = Date.now().toString();
        const date = new Date();

        const data = {
          id: id,
          title: this.title,
          content: this.content,
          image_id: id,
          comment_id: [],
          release_date: date,
          author_id: store.state.user.id,
        };

        // Upload info of new blog to Firestore Database
        let db = await firebase.firestore(app);
        // Add a new document in collection "blogs"
        await db
          .collection("blogs")
          .doc(id)
          .set(data)
          .then(() => {
            console.log("Document successfully written!");
          });

        // Upload image to Storage Firebase
        var storageRef = firebase.storage().ref();
        // Create a reference to 'images/blogs/*.jpg'
        var imgRef = storageRef.child("images/blogs/" + id + ".png");
        // [START storage_upload_blob]
        // 'file' comes from the Blob or File API
        await imgRef.put(this.image).then(() => {
          console.log("Uploaded a blob or file!");
        });

        alert("The blog was posted.");
        if (this.$router.name != '/personal/' + store.state.user.id) {
          this.$router.replace('/personal/' + store.state.user.id);
        }
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";

.post-container {
  display: flex;
  flex-direction: column;
}
.post-container__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  .post-title {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    padding-left: 10px;
    font-family: $font-1;
  }
  .page-logo {
    height: 40px;
    width: 40px;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo-text {
      font-size: 12px;
      font-weight: 600;
      font-family: $font-1;
    }
  }
}
.post-container__form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  .blog-title {
    label {
      font-family: $font-1;
      margin-right: 10px;
    }
    .input-title {
      background-color: rgb(224, 224, 224);
      border: none;
      outline: none;
      padding: 5px;
      width: 100%;
      color: rgb(107, 107, 107);
      border-bottom: solid 1px #fff;
      border-radius: 8px;
    }
    ::placeholder {
      color: rgb(155, 153, 153);
      opacity: 0.7;
    }
    .input-title:focus {
      border-bottom: solid 1px rgb(3, 211, 3);
      border-radius: 0;
      background-color: #fff;
    }
  }
  .post-option {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 16px;
  }
}
.post-option__content {
  cursor: pointer;
  padding: 5px;
  height: 35px;
  width: 35px;
  background-size: 100%;
  background-image: url(../assets/icon/pencil.svg);
}
.post-option__image {
  cursor: pointer;
  padding: 5px;
  height: 35px;
  width: 35px;
  margin-left: 20px;
  background-size: 100%;
  background-image: url(../assets/icon/picture.svg);
}
.post-box {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
}

.post-box__text {
  border-radius: 8px;
  padding-top: 10px;
  background-color: rgb(224, 224, 224);
}
.post-box__text--input {
  border: none;
  outline: none;
  padding: 10px;
  padding-top: 0;
  color: rgb(71, 71, 71);
  border-radius: 8px;
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.post-box__text::before {
  content: "";
  display: block;
  position: absolute;
  top: -15px;
  left: 20px;

  @include triangle(15px, rgb(224, 224, 224));
}
.post-box__image {
  display: flex;
  height: 315px;
  border-radius: 8px;
  padding: 10px;
  background-color: rgb(224, 224, 224);
  display: flex;
  flex-direction: column;

  label {
    cursor: pointer;
    font-family: $font-1;
    padding: 5px;
    width: 100px;
    text-align: center;
    border-radius: 8px;
    background-color: #fff2cc;
  }
  label:hover {
    background-color: #f3de9f;
  }
  #preview {
    text-align: center;
    max-height: 230px;
    margin-top: 20px;
    object-fit: contain;
  }
}
.post-box__image::before {
  content: "";
  display: block;
  position: absolute;
  top: -15px;
  left: 70px;

  @include triangle(15px, rgb(224, 224, 224));
}
.post-box__image--choose {
  display: none;
}

.post-box__send {
  display: flex;
  justify-content: flex-end;
  .btn-send {
    border: none;
    padding: 5px;

    height: 30px;
    width: 30px;
    margin: 5px 20px;
    background-size: 100%;
    background-image: url(../assets/icon/send.svg);
  }
}
</style>
