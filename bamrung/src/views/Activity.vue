<template>
  <div>
    <Navbar />
    <Banner v-bind:titleTh="title1" :titleEng="title2"></Banner>
    <div class="container mt-3">
      <nav aria-label="breadcrumb" style="padding:0;">
        <ol class="breadcrumb">
          <router-link :to="{ name: 'Home' }" class="breadcrumb-item"
            >หน้าแรก</router-link
          >
          <li class="breadcrumb-item active" aria-current="page">
            ประมวลภาพกิจกรรม
          </li>
        </ol>
      </nav>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div
            class="card-body col-md-9 d-flex flex-row justify-content-between flex-wrap"
          >
            <div class="card mb-3" v-for="d in data" :key="d.activityID">
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
          <div class="link-body col-md-3">
            <contractSide/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../components/banner";
import Navbar from "../components/navbar";
import Api from "../services/AdminServices";
import contractSide from '../components/contractSide'
export default {
  data() {
    return {
      baseURL: "http://localhost:8081/assets/uploads/",
      data: null,
      title1: "ประมวลภาพกิจกรรม",
      title2: "Photo Activity",
    };
  },
  components: {
    Navbar,
    Banner,
    contractSide
  },
  async created() {
    this.data = (await Api.ShowActivityAll()).data;
    console.log(this.data);
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");
.card {
  cursor: pointer;
  width: 260px;
  overflow: hidden;
}
.card:hover img {
  opacity: 0.8;
}
.card-body {
  padding: 15px;
}
.card-body h5 {
  color: rgb(0, 162, 255);
  margin-bottom: 0;
}
.card-img-top {
  height: 150px !important;
}

</style>
