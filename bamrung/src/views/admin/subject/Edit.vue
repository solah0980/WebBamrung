<template>
  <div>
    <Navbar />
    <form class="mt-5" v-on:submit.prevent="EditBlog">
      <div class="form-group">
        <label for="exampleInputEmail1">กลุ่มสาระ</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="data.title"
          disabled
        />
      </div>
      <div class="form-group form-2">
        <ckeditor
          :editor="editor"
          v-model.lazy="data.content"
          :config="editorConfig"
          id="editor"
        ></ckeditor>
      </div>
      <div class="form-group">
        <label for="files" class="btn">อัพโหลดรูป</label>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
          @change="previewFiles($event.target.files)"
          multiple
          name="userPhoto"
        />
      </div>
      <div class="form-group d-flex flex-wrap flex-row" v-if="photo !== []">
        <div v-for="n in photo" :key="n" class="ml-3">
          <img :src="baseURL + n" alt="" width="150" /><br />
          <button type="button" class="btn btn-danger" @click="DeletePhoto(n)">
            ลบรูป
          </button>
        </div>
      </div>
       <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
import VueCkeditor from "vue-ckeditor2";
import Navbar from "../../../components/navbarAdmin";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Api from "../../../services/AdminServices";
export default {
  data() {
    return {
      baseURL: "/api/assets/uploads/",
      data: {},
      photo: [],
      editorData: "",
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
      toolbar: {
    },
      },
    };
  },
  components: {
    Navbar,
    VueCkeditor,
  },
  methods: {
    async previewFiles(file) {
      let dataPhoto = {};
      let formData = new FormData();
      let name = [];
      Array.from(Array(file.length).keys()).map((x) => {
        formData.append("userPhoto", file[x], file[x].name);
        name.push(file[x].name);
      });
      let data = await Api.upload(formData);
      console.log(data)
      /* await Api.AddPhoto({gsubjectID:this.data.gsubjectID,pictures:JSON.stringify(name)}) */
      this.updatePhoto(name);
    },
    updatePhoto(file) {
      file.map((x) => {
        this.photo.push(x);
      });
    },

    async EditBlog() {
      let idDB = this.$route.params.id;
      let photo = JSON.stringify(this.photo);
      let data = {
        id: idDB,
        title: this.data.title,
        content: this.data.content,
        pictures: photo,
        teacher: "",
      };
      let r = await Api.EditSubject(idDB, data);
      Swal.fire({
          title: r.data,
          icon: "success",
          confirmButtonText: "ตกลง",
        }).then(()=>this.$router.push({name:'Subject'}))
      
    },

    async DeletePhoto(name) {
      let x = confirm("ยืนยันลบรูป");
      if (x) {
        console.log("delete photo");
        this.DeletePhotoUpdate(this.photo, name);
        let r = await Api.delete({ name: name });
        Swal.fire({
          title: "ลบรูปสำเร็จ",
          icon: "success",
          confirmButtonText: "ตกลง",
        });
        console.log(r);
      }
    },

    DeletePhotoUpdate(arr, name) {
      this.photo = arr.filter((e) => {
        return e != name;
      });
      console.log(this.photo);
    },
  },

  async created() {
    let id = this.$route.params.id;
    this.data = await Api.ShowSubject(id);
    this.data = this.data.data;
    if (this.data.pictures !== null && this.data.pictures !== "") {
      this.photo = JSON.parse(this.data.pictures);
    }
  },
};
</script>
<style scoped>
form {
  margin: 0 auto;
  width: 1200px;
}
</style>
