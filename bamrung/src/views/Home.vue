<template>
  <div>
    <Navbar />
    <Banner v-bind:titleTh="title1" :titleEng="title2"></Banner>
    <div class="s-body">
      <div class="container">
        <div class="s-content">
          <h4 class="mt-3">ประชาสัมพันธ์</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/navbar";
import Banner from '../components/banner'
export default {
  data(){
    return{
      title1:'โรงเรียนบำรุงอิสลาม',
      title2:'BAMRUNG ISLAM SCHOOL Phatthalung'
    }
  },
  components: {
    Navbar,Banner
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');
.s-body{
  background-image: url('../../public/img/backg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-color: white;
}
.s-content{
  padding: 8px;
  width:900px;
  margin: 0 auto;
  background-color: #ebebeb;
  height: 300px;
  box-shadow: 0 0px 0px 0px white, 0 23px 0px 0px white, 12px 0 15px -4px rgba(0, 0, 0, 0.2), -12px 0 15px -4px rgba(0, 0, 0, 0.2);
}
.s-content h4{
  border-left: 6px solid #5cba01;
  padding-left: 6px;
  font-family: 'Prompt', sans-serif;
}
</style>
