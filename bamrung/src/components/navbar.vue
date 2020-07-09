<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-nav">
      <div class="container">
        <img class="logo" src="../../public/img/bam2.png" alt="" width="40" />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <router-link :to="{name:'Home'}" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                หน้าแรก
              </router-link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item">แบบสำรวจความคิดเห็น</a>
                <a class="dropdown-item" >ลิงค์น่าสนใจ</a>
                <a class="dropdown-item">สถิติผู้เข้าชม</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                เกี่ยวกับโรงเรียน
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item">ประวัติโรงเรียน</a>
                <a class="dropdown-item" >สัญลักษณ์โรงเรียน</a>
                <a class="dropdown-item">วิสัยทัศน์/ปรัชญา</a>
                <a class="dropdown-item" >พันธกิจ/เป้าหมาย</a>
                <a class="dropdown-item">หลักสูตรที่เปิดสอน</a>
                <a class="dropdown-item" >ปฏิทินกิจกรรม</a>
                <a class="dropdown-item">ข้อมูลอาคารสถานที่</a>
                <a class="dropdown-item" >ทำเนียบครู</a>
                <a class="dropdown-item" >ข้อมูลนักเรียน</a>
                <a class="dropdown-item" >ดูเกรด (ศาสนา/สามัญ)</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ฝ่ายบริหารและบุคลากร
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" @click="navigateTo({name:'SubjectView',query:{name:'ภาษาไทย'}})">กลุ่มสาระภาษาไทย</a>
                <a class="dropdown-item" @click="navigateTo({name:'SubjectView',query:{name:'คณิตศาสตร์'}})">กลุ่มสาระคณิตศาสตร์</a>
                <a class="dropdown-item" @click="navigateTo({name:'SubjectView',query:{name:'วิทยาศาสตร์และเทคโนโลยี'}})">กลุ่มสาระวิทยาศาสตร์และเทคโนโลยี</a>
                <a class="dropdown-item" @click="navigateTo({name:'SubjectView',query:{name:'สังคม'}})">กลุ่มสาระสังคม</a>
                <a class="dropdown-item" @click="navigateTo({name:'SubjectView',query:{name:'สุขศึกษา'}})">กลุ่มสาระสุขศึกษา</a>
                <a class="dropdown-item" @click="navigateTo({name:'SubjectView',query:{name:'ศิลปะ'}})">กลุ่มสาระศิลปะ</a>
                <a class="dropdown-item" @click="navigateTo({name:'SubjectView',query:{name:'การงาน'}})">กลุ่มสาระการงาน</a>
                <a class="dropdown-item" @click="navigateTo({name:'SubjectView',query:{name:'ภาษาต่างประเทศ'}})">กลุ่มสาระภาษาต่างประเทศ</a>
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Activity' }"
                >ประมวลภาพกิจกรรม</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },

  methods:{
   navigateTo(name){
     /* console.log(name) */
      this.$router.push(name)
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap");
.logo {
  display: none;
}
.navbar {
  height: 47px !important;
  z-index: 100;
}
.navbar-nav {
  display: flex;
  width: 80%;
  justify-content: space-between !important;
  font-family: "Kanit", sans-serif;
  font-size: 1.1rem;
  margin: 0 auto;
}
.nav-link {
  padding-left: 0 !important;
  padding-right: 0 !important;
  color: white !important;
  border-bottom: 3px solid rgba(255, 0, 0, 0);
  transition: 0.3s;
}
.nav-link:hover {
  padding-bottom: 3px;
  border-bottom: 2px solid rgba(255, 255, 255, 1);
}
.bg-nav {
  background-color: #5cba01;
}
.navbar-collapse {
  background-color: #5cba01;
}
.dropdown-menu{
  cursor: pointer;
  color: white;
}

.dropdown-item{
  color: gray;
}
.dropdown-menu{
  margin-top: 0;
}
.dropdown:hover>.dropdown-menu{
  display: block;
}
.dropdown-item:hover{
 background-color: white;
}
.dropdown-item:hover{
  color: #5cba01;
}

@media only screen and (max-width: 990px) {
  .logo {
    display: inline-block;
  }
}
</style>
