<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <router-link class="navbar-brand" to="/admin/dashboard">Dashboard</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <h4 class="m-auto">ระบบจัดการเว็บไซต์ โรงเรียนบำรุงอิสลาม</h4>
        <button type="button" class="btn btn-danger ml-auto">ออกจากระบบ</button>
      </div>

    </nav>
  </div>
</template>
