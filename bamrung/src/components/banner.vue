<template>
  <div>
    <div class="c-head">
      <div class="c-content">
        <div class="row">
          <div class="c-content-1 col-md-3 ">
            <img class="logo" src="../../public/img/bam2.png" alt=""/>
            <div class="border-logo">
            </div>
          </div>
          <div class="c-content-2 col-md-9 d-flex flex-column ">
            <h1 v-scrollanimation>{{ titleTh }}</h1>
            <h3 v-scrollanimation>{{ titleEng }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["titleTh", "titleEng"],
  methods:{
    toLink(){
      this.$router.push('/about')
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");
.c-head {
  width: 100%;
  height: 450px;
  background-image: url("../../public/img/ab.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
}
.logo {
  width: 150px;
  margin: 142px 0 0 170px;
}
.c-content {
  height: 100%;
}
.border-logo{
  transition: .15s;
  width: 148px;
  height: 148px;
  display: inline-block;
  margin: 142px 0 0 170px;
  border-radius: 50%;
  border: 2px dashed #5cba01;
 -webkit-animation-name: Rotate;
 -webkit-animation-duration: 8s;
 -webkit-animation-iteration-count: infinite;
 -webkit-animation-timing-function: linear;
 -moz-animation-name: Rotate;
 -moz-animation-duration: 2s;
 -moz-animation-iteration-count: infinite;
 -moz-animation-timing-function: linear;
 -ms-animation-name: Rotate;
 -ms-animation-duration: 2s;
 -ms-animation-iteration-count: infinite;
 -ms-animation-timing-function: linear;
}
.logo{
  position: absolute;
}
.c-content-2 {
  padding: 150px 0 0 0;
  color: white;
  font-family: "Kanit", sans-serif;
}
.c-content-2 h1 {
  font-size: 4rem;
  margin-bottom: 0;
  transition-delay: 0.2s;
}
.c-content-2 h3 {
  font-size: 2.5rem;
}
@-webkit-keyframes Rotate
{
 from{-webkit-transform:rotate(0deg);}
 to{-webkit-transform:rotate(360deg);}
}
@-moz-keyframes Rotate
{
 from{-moz-transform:rotate(0deg);}
 to{-moz-transform:rotate(360deg);}
}
@-ms-keyframes Rotate
{
 from{-ms-transform:rotate(0deg);}
 to{-ms-transform:rotate(360deg);}
}

@media only screen and (max-width: 990px) {
.logo{
  display: none;
}
.border-logo{
  display: none;
}
.c-content-2{
  padding-top:px;
  padding: 0;
  color: white;
}
.c-content-2 h1{
  padding-top: 25px;
  margin: 0 auto;
  font-size: 2.2rem;
}
.c-content-2 h3{
  margin: 0 auto;
  font-size: 1.4rem;
}
.c-head{
  height: 160px;
}

}
</style>
