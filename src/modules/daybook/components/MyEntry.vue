<template>
  <div 
  @click="$router.push({name:'entry', params:{id:10}})"
  class="entry-container mb-3 pointer p-2">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque asperiores excepturi eius molestias corrupti perferendis harum adipisci error, nulla perspiciatis quo vitae quibusdam impedit explicabo alias consequatur, enim modi maxime, eum placeat. Iusto excepturi unde non cupiditate ex error sit explicabo eum laborum similique adipisci numquam, alias sequi doloribus perspiciatis?
    </div>
  </div>
</template>
<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description{
    font-size: 14px;
  }
}
</style>