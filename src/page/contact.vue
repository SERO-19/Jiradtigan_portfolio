<template>
  <p class="subheader fw-bold mt-6 H">CONTACT</p>
  <div class="row">
    <div class="col-4"></div>
    <div class="col-50">
      <div class="card text-center mx-6">
        <div class="card-body">
          <p class="card-text">
            38/27 หมู่บ้านพฤกษา119 ต.คลองสอง อ.คลองหลวง จ.ปทุมธานี 12120
            <br />
            โทร : 0949697337 <br />E-mail : Jiradtigan.boon@bumail.net
            <br />Github : SERO-19 <br /><a
              href="https://github.com/SERO-19"
              class="btn btn-primary1"
              >Github</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="col-6"></div>
  </div>
  <br />
  <router-link
    :to="{
      name: 'index',
    }"
  >
    <a href="" class="btn btn-primary2">Back</a>
  </router-link>
</template>
<script>
export default {};
</script>
<style scoped>
#header {
  font-size: 4em;
  color: white;
  background-color: #404040;
}
.btn-primary1 {
  background-color: #357a50;
  color: white;
}

.btn-primary2 {
  background-color: #333d5e;
  color: white;
}
.H {
  font-size: 1.5em;
  color: #333d5e;
}
</style>