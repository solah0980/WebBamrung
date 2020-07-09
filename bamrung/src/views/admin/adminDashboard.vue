<template>
  <div>
    <Navbar />
    <div class="section mt-4 p-5">
      <div class="container-fuild">
        <div class="content d-flex flex-row justify-content-between flex-wrap">
          <div class="card bg-primary text-white text-center p-3 mb-3">
            <blockquote class="blockquote mb-0" v-on:click="navigateTo('News')">
              <h3>
                ระบบจัดการข่าวสาร
              </h3>
            </blockquote>
          </div>
          <div class="card bg-primary text-white text-center p-3 mb-3" v-on:click="navigateTo('Subject')">
            <blockquote class="blockquote mb-0">
              <h3>
                ระบบจัดการกลุ่มสาระวิชา
              </h3>
            </blockquote>
          </div>
          <div class="card bg-primary text-white text-center p-3 mb-3" v-on:click="navigateTo('ActivityViews')">
            <blockquote class="blockquote mb-0">
              <h3>
                ระบบจัดการกิจกรรม
              </h3>
            </blockquote>
          </div>
          <div class="card bg-primary text-white text-center p-3 mb-3" v-on:click="navigateTo('Teacher')">
            <blockquote class="blockquote mb-0">
              <h3>
                ระบบจัดการคุณครู
              </h3>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/navbarAdmin";
import {mapState} from 'vuex'
export default {
  components: {
    Navbar,
  },
  methods:{
    navigateTo(name){
      this.$router.push({name:name})
    }
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
.card{
    width: 330px;
    height: 150px;
    cursor: pointer;
}
.card:hover{
  background-color: greenyellow !important;
}
.blockquote h3{
    margin-top: 35px;
}
</style>
