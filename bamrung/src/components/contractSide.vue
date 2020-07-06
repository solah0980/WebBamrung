<template>
  <div>
    <ul class="list-group mt-3">
      <li class="list-group-item" style="border-left: 3px solid blue;">
        <i class="fab fa-facebook" style="color:blue;"></i>
        Facebook
      </li>
      <li class="list-group-item" style="border-left: 3px solid red;">
        <i class="fas fa-envelope-square" style="color:red;"></i>
        Email
      </li>
      <li class="list-group-item" style="border-left: 3px solid green;">
        <i class="fas fa-phone-square-alt" style="color:green;"></i>
        เบอร์โทร
      </li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
    <div id="fb-root">
      <div
        class="fb-page"
        data-href="https://www.facebook.com/it.psupattani/"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/it.psupattani/"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/it.psupattani/"
            >ชมรมไอที ม.อ.ปัตตานี</a
          >
        </blockquote>
      </div>
    </div>
  </div>
</template>
<style scoped>
.list-group-item {
  padding: 10px;
  border: none;
  border-radius: 0;
  margin-bottom: 10px;
}
.list-group-item:hover {
  cursor: pointer;
  background-color: rgba(201, 200, 195, 0.5);
}
</style>
