<template>
  <main>
    <div class="projection">
      <p>① Offset projection</p>
      <div></div>
    </div>
    <div class="projection">
      <p>② One-sided projection</p>
      <div></div>
    </div>
    <div class="projection">
      <p>③ Adjacent edge projection</p>
      <div></div>
    </div>
    <div class="projection">
      <p>④ Projection on both sides</p>
      <div></div>
    </div>
    <div class="projection">
      <p>⑤ 1px projection</p>
      <div></div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 20px 0 0 0;
}
.projection {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.projection > div {
  width: 180px;
  height: 120px;
  background: rgba(180, 160, 120, 0.2);
}

.projection:not(:first-child:last-child) > div {
  border: 2px solid transparent;
  background-clip: content-box;
}
</style>
