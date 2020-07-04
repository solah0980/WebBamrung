<template>
  <div>
    <Navbar />
    <Banner v-bind:titleTh="title1" :titleEng="title2"></Banner>
    <div class="s-body mt-4">
      <div class="container">
        <div class="s-content">
          <h4>ข่าวประชาสัมพันธ์</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from '../components/banner'
import Navbar from "../components/navbar";
export default {
  data(){
    return{
      title1:'ประมวลภาพกิจกรรม',
      title2:'Photo Activity'
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

.s-content{
  padding: 8px;
  background-color: #ebebeb;
  height: 500px;
}
.s-content h4{
  border-left: 6px solid #5cba01;
  padding-left: 6px;
  font-family: 'Prompt', sans-serif;
}
</style>
