<template>
  <div>
    <div class="body">
      <div class="container">
        <form @submit.prevent="Login">
          <div class="form-group">
              <div class="form-head mb-4">
                  <div class="row">
                      <div class="logo-head col-md-4">
                          <img src="../../../public/img/bam2.png" alt="" width="100">
                      </div>
                      <div class="text-head col-md-8">
                          <h2>Admin System</h2>
                      </div>
                  </div>
              </div> 
            <label for="exampleInputEmail1">Username</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="username"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              id="exampleInputPassword1"
              required
            />
          </div>
          <button type="submit" class="btn btn-success mt-2">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Api from '../../services/AdminServices'
import {mapState} from 'vuex'
export default {
  data(){
    return{
      username:null,
      password:null,
      result:null
    }
  },
  methods:{
   async Login(){
      let data={
        username:this.username,
        password:this.password,
      }
      let r = (await Api.Login(data)).data
      if(r.error=='Not found User'){
         Swal.fire({
          title: `ไม่มี ${this.username} ในระบบ`,
          icon: "error",
          confirmButtonText: "ตกลง",
        })
      }else if(r.error=='password wrong'){
        Swal.fire({
          title: `Password ผิด`,
          icon: "error",
          confirmButtonText: "ตกลง",
        })
      }else{
        this.$store.dispatch('setUser',r.user)
        this.$store.dispatch('setToken',r.token)
        Swal.fire({
          title: `เข้าสู่ระบบสำเร็จ`,
          icon: "success",
          confirmButtonText: "ตกลง",
        }).then(()=>this.$router.push('/admin/dashboard'))
      }
    }
  },
  computed:{
    ...mapState(['isUserLoggedIn'])
  },
  mounted() {
    if(this.isUserLoggedIn){
      this.$router.push('/admin/dashboard')
    }
  },
};
</script>
<style scoped>
.body{
  background-color: #08AEEA;
  background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
  background-size: cover;
  width: 100vw;
  height: 100vh;
  padding-top: 10%;
}
form{
    width: 500px;
    height: 500px;
    margin: 0 auto;
    padding: 50px;
    background-color: white;
    border-radius: 10px;
}
.text-head{
    padding-left: 0;
}
h2{
    padding-top: 28px;
    
}
button[type=submit]{
    width: 100%;
}
.logo-head img{
  transition: 0.3s;
}
.logo-head img:hover{
    filter: drop-shadow(0px 0px 10px rgba(166, 252, 79,0.8));
}
.form-head{
  border: 2px solid rgb(111, 223, 0);
  padding: 10px;
  border-radius: 5px;
}
</style>
