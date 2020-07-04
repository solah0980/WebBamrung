<template>
  <div>
    <Navbar />
    <Banner v-bind:titleTh="title1" :titleEng="title2"></Banner>

    <div class="container mt-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <router-link :to="{ name: 'Home' }" class="breadcrumb-item"
            >หน้าแรก</router-link
          >
          <li class="breadcrumb-item active" aria-current="page">
            กลุ่มสาระ{{ name }}
          </li>
        </ol>
      </nav>
    </div>

    <div class="s-body">
      <div class="container">
        <div class="s-content">
          <h4 class="mt-3">กลุ่มสาระ{{ name }}</h4>
          <hr />
          <div
            class="content-body"
            v-if="data.content"
            v-html="data.content"
            style="word-break: break-all;"
          ></div>
          <div v-else>ไม่มีเนื้อหา</div>
        </div>
      </div>
    </div>

    <div class="teachers">
      <div class="container">
        <h2 style="text-align:center;">คุณครูประจำกลุ่มวิชา</h2>
        <div class="row">
            <div
              class="card mb-3 col-md-6"
              style="max-width: 540px;height: 200px;"
              v-for="d in teachers"
              :key="d.teacherID"
            >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="baseURL + d.profile" class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">
                      {{ d.sex }}{{ d.name }} {{ d.lastname }}
                    </h5>
                    <h5 class="card-title">เบอร์โทรศัพท์ {{ d.tell }}</h5>
                    <h5 class="card-title">อีเมล์ {{ d.email }}</h5>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Api from "../services/ClientServices";
export default {
  data() {
    return {
      baseURL: "http://localhost:8081/assets/uploads/",
      teachers: null,
      data: "",
      name: null,
      title1: "โรงเรียนบำรุงอิสลาม",
      title2: "BAMRUNG ISLAM SCHOOL Phatthalung",
    };
  },
  components: {
    Navbar,
    Banner,
  },
  watch: {
    immediate: true,
    "$route.query.name": async function() {
      this.getData();
    },
  },
  async mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.name = this.$route.query.name;
      let r = await Api.showSubject(this.name);
      this.data = r.data;
      let t = (await Api.showTeacherClient(this.data.gsubjectID)).data;
      this.teachers = t;
      this.getPhoto();
      console.log(this.teachers)
    },
    getPhoto() {
      this.teachers.forEach((d, i) => {
        if (d.profile !== null) {
          let x = JSON.parse(d.profile);
          this.teachers[i].profile = x.pop();
        }
      });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");
*{
   font-family: "Prompt", sans-serif;
}
.s-body {
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-color: white;
}
.s-content {
  padding: 8px;
  margin: 0 auto;
  background-color: #ebebeb;
  height: auto;
  box-shadow: 0 0px 0px 0px white, 0 23px 0px 0px white,
    12px 0 15px -4px rgba(0, 0, 0, 0.2), -12px 0 15px -4px rgba(0, 0, 0, 0.2);
}
.s-content h4 {
  border-left: 6px solid #5cba01;
  padding-left: 6px;
  font-family: "Prompt", sans-serif;
  overflow: auto;
}
.content-body >>> figure {
  text-align: center;
}
.teachers .container {
  
  margin-top: 30px;
  padding: 30px 34px 0 34px;

  background-color: #ebebeb;
  box-shadow: 0 0px 0px 0px white, 0 23px 0px 0px white,
    12px 0 15px -4px rgba(0, 0, 0, 0.2), -12px 0 15px -4px rgba(0, 0, 0, 0.2);
}
</style>
