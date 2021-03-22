<template>
  <div>
    <h3>progress bar</h3>
    <main>
      <div class="progress-outer">
        <div class="progress-enter">
          <div class="progress-bg"></div>
        </div>
      </div>
    </main>
    <h3>Irregular card</h3>
    <main>
      <div class="coupon-card"></div>
    </main>
  </div>
</template>

<style scoped>
main {
  padding: 80px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.progress-outer {
  width: 60%;
  height: 12px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}
.progress-enter {
  height: inherit;
  background: rgba(180, 160, 120, 0.2);
}
.progress-bg {
  width: 60%;
  height: inherit;
  border-radius: 6px;
  background: repeating-linear-gradient(-45deg, #d9cfbb 25%, #c3b393 0, #c3b393 50%, #d9cfbb 0, #d9cfbb 75%, #c3b393 0);
  background-size: 16px 16px;
  /* animation: panoramic 20s linear infinite; */
}
@keyframes panoramic {
  to {
    background-position: 200% 0;
  }
}
.coupon-card{
  width: 200px;
  height: 120px;
  background-image: radial-gradient(circle at 100px -8px, transparent 20px, #b4a078 21px);;
}
</style>
