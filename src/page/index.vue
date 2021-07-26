<template>
  <div style="text-align: center">
    <p class="pro">Portfolio</p>
    <img
      class="rounded mx-auto d-block"
      style="text-align: center"
      src="https://media.discordapp.net/attachments/689723086748123221/869061379087269948/1123.png"
      width="200"
    />

    <h2 class="h" style="margin-top: 30px">ABOUT ME</h2>
    <div style="margin-left: 40px">
      <p class="aboutme">
        สวัสดีค่ะ ชื่อ จิรัฐติกาล บุญชุม นักศึกษาปี 4 คณะวิศวกรรมศาสตร์
        สาขาคอมพิวเตอร์และหุ่นยนต์ มหาวิทยาลัยกรุงเทพ <br />
        ผลงานและโปรเจคที่เคยทำมาจะมีการเขียนเว็บ Front-End/Back-End และทางด้าน
        Automation hardware/software
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col px-5">
      <p class="subheader fw-bold mt-5 H">SKILLS</p>
      <div class="row">
        <div class="col-2">
          <img
            src="https://img.icons8.com/color/240/000000/javascript--v1.png"
            width="50%"
          />
        </div>
        <div class="col-2">
          <img
            src="https://img.icons8.com/color/240/000000/adobe-xd--v1.png"
            width="50%"
          />
        </div>
        <div class="col-2">
          <img
            src="https://img.icons8.com/color/240/000000/adobe-photoshop--v1.png"
            width="50%"
          />
        </div>
        <div class="col-2">
          <img
            src="https://img.icons8.com/color/144/000000/adobe-illustrator--v1.png"
            width="50%"
          />
        </div>
        <div class="col-2">
          <img
            src="https://img.icons8.com/color/144/000000/adobe-premiere-pro--v1.png"
            width="50%"
          />
        </div>
        <div class="col-2">
          <img
            src="https://img.icons8.com/ultraviolet/240/000000/css.png"
            width="50%"
          />
        </div>
        <div class="col-2">
          <img
            src="https://img.icons8.com/office/480/000000/html-filetype.png"
            width="50%"
          />
        </div>
        <div class="col-2">
          <img
            src="https://img.icons8.com/color/144/000000/sql.png"
            width="50%"
          />
        </div>
        <div class="col-2">
          <img
            src="https://img.icons8.com/color/144/000000/c-plus-plus-logo.png"
            width="50%"
          />
        </div>
        <div class="col-2">
          <img
            src="https://img.icons8.com/color/144/000000/python--v1.png"
            width="50%"
          />
        </div>
        <div class="col-2">
          <img
            src="https://media.discordapp.net/attachments/689723086748123221/869160273771102208/1528141117782.png"
            width="40%"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="col px-5">
    <p class="subheader fw-bold mt-5 H">EDUCATION</p>
    <div class="mx-5 px-4">
      <b>2561-ปัจจุบัน</b>คณะวิศวกรรมศาสตร์สาขาคอมพิวเตอร์และหุ่นยนต์
      มหาวิทยาลัยกรุงเทพ<br />
      <b>2559-2561</b>โรงเรียนปงพัฒนาวิทยาคม <br />
    </div>
  </div>

  <div style="text-align: center; margin-bottom: 20px">
    <button type="button" class="btn btn-primary">
      <router-link to="contact">Contact</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style scoped>
#header {
  font-size: 10 em;
  color: white;
  background-color: #333d5e;
}
.profile {
  color: white;
  background-color: #333d5e;
}
.aboutme {
  font-size: 1em;
  width: 90%;
}

.btn-primary {
  background-color: #333d5e;
  color: white;
}
.pro {
  font-size: 3em;
}

.h {
  font-size: 1.5em;
  color: white;
  margin-top: 25px;
  margin-left: 50px;
  margin-right: 50px;

  background-color: #333d5e;
}
.H {
  font-size: 1.5em;
  color: #333d5e;
}
</style>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #110927;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
