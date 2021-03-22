<template>
  <main>
    <input type="checkbox" name="pd" id="pd" checked />
    <label for="pd">padding-box(default)</label>
    <div>A paragraph of filler text. La la la de dah de dah de dah de la.</div>
  </main>
</template>

<style scoped>
main {
  padding: 60px 80px 80px;
  background: #b4a078;
}
div{
  padding: 12px;
  margin: 20px auto;
  background: white;
  border:10px solid hsla(0, 0%, 100%, 0.5);
}
label{
  color:#f4f0ea;
}
input[id="pd"]:checked ~ div {
  background-clip: padding-box;
}
</style>
