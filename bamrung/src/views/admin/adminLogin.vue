<template>
  <div>
    <div class="body">
      <div class="container">
        <form>
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
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-success mt-2">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
