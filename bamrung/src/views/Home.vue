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
    <div class="section">
      <div class="container">
        <h5 class="section-h">Activity กิจกรรมภายในโรงเรียน</h5>
        <div class="row">
          <div class="card-body col-md-9 ">
            <div class="row">
              <div class="col-md-12 d-flex flex-row flex-wrap">
                <div class="card mb-3" v-for="d in data" :key="d.activityID" @click="navigateTO('/activity/view/'+d.activityID)">
                  <img
                    :src="baseURL + d.thumbnail"
                    class="card-img-top"
                    alt="..."
                    v-if="d.thumbnail !== 'null'"
                  />
                  <p
                    v-else
                    style="height:150px;margin:0;text-align:center;padding-top:50px"
                  >
                    ไม่มีรูปภาพ
                  </p>
                  <div class="card-body">
                    <h5>{{ d.title }}</h5>
                    <p
                      class="card-text"
                      v-html="d.content.slice(0, 30) + '...'"
                    ></p>
                  </div>
                </div>
              </div>
              <div class="col-md-12 d-flex flex-row justify-content-end">
                <button
                  class="btn btn-info"
                  @click="navigateTO('Activity')"
                >
                  ดูกิกรรมทั้งหมด
                </button>
              </div>
            </div>
          </div>
          <div class="link-body col-md-3">
            <contractSide />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Api from "../services/AdminServices";
import contractSide from "../components/contractSide";
export default {
  data() {
    return {
      baseURL: "http://localhost:8081/assets/uploads/",
      data: null,
      title1: "โรงเรียนบำรุงอิสลาม",
      title2: "BAMRUNG ISLAM SCHOOL Phatthalung",
    };
  },
  components: {
    Navbar,
    Banner,
    contractSide,
  },
  async created() {
    this.data = (await Api.ShowActivityAll({ nam: "home" })).data;
    console.log(this.data);
  },
  methods: {
    navigateTO(name) {
      this.$router.push(name);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");
.s-body {
  background-image: url("../../public/img/backg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-color: white;
}
.s-content {
  padding: 8px;
  width: 900px;
  margin: 0 auto;
  background-color: #ebebeb;
  height: 300px;
  box-shadow: 0 0px 0px 0px white, 0 23px 0px 0px white,
    12px 0 15px -4px rgba(0, 0, 0, 0.2), -12px 0 15px -4px rgba(0, 0, 0, 0.2);
}
.s-content h4 {
  border-left: 6px solid #5cba01;
  padding-left: 6px;
  font-family: "Prompt", sans-serif;
}
.card {
  cursor: pointer;
  width: 260px;
  overflow: hidden;
  height: 363px !important;
  margin-right: 15px;
}
.card:hover img {
  opacity: 0.8;
}
.card-body {
  padding: 15px;
  padding-bottom: 0;
}
.card-body h5 {
  color: rgb(0, 162, 255);
  margin-bottom: 0;
}
.card-img-top {
  height: 150px !important;
}
.section-h {
  width: 74%;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}
</style>
