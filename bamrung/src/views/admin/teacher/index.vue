<template>
  <div>
    <Navbar />
    <button
      type="button"
      class="btn btn-success"
      style="width:100%;margin-top:20px;"
      @click="$router.push('/admin/teacher/create')"
    >
      เพิ่มคุณครู
    </button>
    <table class="table my-2">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">ชื่อ-สกุล</th>
          <th scope="col">profile</th>
          <th scope="col">แก้ไขข้อมูล</th>
          <th scope="col">ลบข้อมูล</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in data" :key="d.teacherID">
          <th scope="row">#</th>
          <td>{{ d.sex }}{{ d.name }} {{ d.lastname }}</td>
          <td><img :src="baseURL + d.profile" alt="" width="120" /></td>
          <td>
            <button
              type="button"
              class="btn btn-warning"
              @click="$router.push('/admin/teacher/edit/' + d.teacherID)"
            >
              แก้ไข
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteData(d.teacherID,d.profile)"
            >
              ลบข้อมูล
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>
<script>
import Navbar from "../../../components/navbarAdmin";
import Api from "../../../services/AdminServices";
import {mapState} from 'vuex'
export default {
  data() {
    return {
      baseURL: "/api/assets/uploads/",
      data: null,
      pathEdit: "/admin/subject/edit/",
      pathTeacher: "",
    };
  },
  components: {
    Navbar,
  },
  methods: {
    getPhoto() {
      this.data.forEach((d, i) => {
        if (d.profile !== null) {
          let x = JSON.parse(d.profile);
          this.data[i].profile = x.pop();
        }
      });
    },
    async deleteData(id,profile){
      this.deleteProfile(profile)
      console.log(id)
      Swal.fire({
          title: "ลบข้อมูล",
          icon: "success",
          confirmButtonText: "ตกลง",
        }).then(async ()=>await Api.DeleteTeacher(id))
    },
    async deleteProfile(profile){
      await Api.delete({name:profile})
    }
  },
  async created() {
    this.data = (await Api.ShowAllTeacher()).data;
    this.getPhoto();
  },
  mounted(){
    if(this.isUserLoggedIn==false){
      this.$router.push('/admin/login')
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn'])
  },
};
</script>
<style scoped>
.table {
  width: 100% !important;
}
</style>
