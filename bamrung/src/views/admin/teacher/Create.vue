<template>
  <div>
    <Navbar />
    <h3>เพิ่มคุณครู</h3>
    <form class="mt-5" v-on:submit.prevent="CreateData">
      <div class="form-group">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">ชื่อ {{data.sex}}</div>
          </div>
          <input
            type="text"
            class="form-control"
            id="inlineFormInputGroup"
            placeholder="ชื่อจริง"
            v-model="data.name"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <div class="form-group">
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">สกุล</div>
            </div>
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroup"
              placeholder="นามสกุล"
              v-model="data.lastname"
              required
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">เบอร์โทรศัพท์</div>
          </div>
          <input
            maxlength="10"
            type="number"
            class="form-control"
            id="inlineFormInputGroup"
            placeholder="เบอร์โทรศัพท์"
            v-model="data.tell"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">อีเมล์</div>
          </div>
          <input
            type="email"
            class="form-control"
            id="inlineFormInputGroup"
            placeholder="Email"
            v-model="data.email"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref"
          >เพศ</label
        >
        <select
          class="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          v-model="data.sex"
          required
        >
          <option value="นาย">ชาย</option>
          <option value="นาง">หญิง(นาง)</option>
          <option value="นางสาว">หญิง(นางสาว)</option>
        </select>
      </div>
      <div class="form-group" v-if="photo.length==0">
        <label for="files" class="btn">อัพโหลดรูปโปรไฟล์</label>
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
      <button type="submit" class="btn btn-primary" style="width:100%;">ลงข้อมูล</button>
    </form>
  </div>
</template>
<script>
import Navbar from "../../../components/navbarAdmin";
import Api from "../../../services/AdminServices";
export default {
  data() {
    return {
      baseURL: "/api/assets/uploads/",
      data: {
          name:'',
          lastname:'',
          tell:'',
          email:'',
          sex:'',
          profile:''
      },
      photo: [],
    };
  },
  components: {
    Navbar,
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
      /* await Api.AddPhoto({gsubjectID:this.data.gsubjectID,pictures:JSON.stringify(name)}) */
      this.updatePhoto(name);
    },
    updatePhoto(file) {
      file.map((x) => {
        this.photo.push(x);
      });
    },

    async CreateData() {
      let photo = JSON.stringify(this.photo);
      this.data.profile=photo
      console.log(this.data)
      let r = await Api.CreateTeacher(this.data);
      Swal.fire({
        title: r.data,
        icon: "success",
        confirmButtonText: "ตกลง",
      }).then(() => this.$router.push({ name: "Teacher" }));
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
      }
    },

    DeletePhotoUpdate(arr, name) {
      this.photo = arr.filter((e) => {
        return e != name;
      });
      console.log(this.photo);
    },
  },

}
</script>
<style scoped>
form {
  margin: 0 auto;
  width: 1200px;
}
</style>
