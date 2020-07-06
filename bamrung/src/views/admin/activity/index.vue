<template>
  <div>
    <Navbar />
    <button
      type="button"
      class="btn btn-success"
      style="width:100%;margin-top:20px;"
      @click="$router.push('/admin/activity/create')"
    >
      เพิ่มกิจกรรม
    </button>
    <table class="table mt-2">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">ชื่อกิจกรรม</th>
          <th scope="col">แก้ไขเนื้อหา</th>
          <th scope="col">สถานะเปิดเผยกิจกรรม</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in data" :key="d.gsubjectID">
          <th scope="row">#</th>
          <td>{{ d.title }}</td>
          <td>
            <router-link
              type="button"
              class="btn btn-info"
              :to="pathEdit + d.activityID"
              >แก้ไข</router-link
            >
          </td>
          <td style="width:400px">
            <label class="switch">
              <input v-if="d.status=='true'" type="checkbox" @click="StatusActivity(d)" checked/>
              <input v-if="d.status=='false'" type="checkbox" @click="StatusActivity(d)"/>
              <span class="slider round"></span>
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Navbar from "../../../components/navbarAdmin";
import Api from "../../../services/AdminServices";
export default {
  data() {
    return {
      gsubjectID: null,
      selectTeacher: null,
      modalName: "",
      data: null,
      pathEdit: "/admin/activity/edit/",
      pathTeacher: "",
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async EditTeacher(id, name) {
      this.gsubjectID = id;
      this.modalName = name;
      this.teacherHave = (await Api.ShowTeacherSubject(id)).data;
    },
    async StatusActivity(data){
        if(data.status=='true'){
            data.status='false'
            data.set='true'
            let result = await Api.EditActivity(data)
        }else{
            data.status='true'
            data.set='true'
            let result = await Api.EditActivity(data)
        }
        
    },
    Clear() {
      this.teacherHave = [];
    },
  },
  async created() {
    this.data = (await Api.ShowActivityAll()).data;
  },
};
</script>
<style scoped>
.table {
  width: 100% !important;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
