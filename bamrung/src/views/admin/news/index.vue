<template>
  <div>
    <Navbar />
    <button
      type="button"
      class="btn btn-success"
      style="width:100%;margin-top:20px;"
      @click="$router.push('/admin/news/create')"
    >
      เพิ่มกิจกรรม
    </button>
    <table class="table mt-2">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">หัวข้อข่าวสาร</th>
          <th scope="col">แก้ไขเนื้อหา</th>
          <th scope="col">สถานะเปิดเผยข่าวสาร</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in data" :key="d.newsID">
          <th scope="row">#</th>
          <td>{{ d.title }}</td>
          <td>
            <router-link
              type="button"
              class="btn btn-info"
              :to="pathEdit + d.newsID"
              >แก้ไข</router-link
            >
          </td>
          <td style="width:400px">
            <label class="switch">
              <input v-if="d.status=='true'" type="checkbox" @click="StatusNews(d)" checked/>
              <input v-if="d.status=='false'" type="checkbox" @click="StatusNews(d)"/>
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
import {mapState} from 'vuex'
export default {
  data() {
    return {
      gsubjectID: null,
      selectTeacher: null,
      data: null,
      pathEdit: "/admin/news/edit/",
      pathTeacher: "",
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async StatusNews(data){
        if(data.status=='true'){
            data.status='false'
            data.set='true'
            let result = await Api.EditNews(data)
        }else{
            data.status='true'
            data.set='true'
            let result = await Api.EditNews(data)
        }
        
    },
  },
  async created() {
    this.data = (await Api.ShowAllNews({name:'admin'})).data;
    
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
