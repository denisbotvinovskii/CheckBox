<template>
  <div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;

  margin-top: 30px;
}
.form {
  text-align: left;
  padding-left: 25px;
  padding-bottom: 25px;
  padding-top: 15px;
  width: 60%;
  height: 100%;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  display: inline-block;
}
span {
  color: orange;
}
button {
  background-color: orange;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.problemBox {
  height: 100%;
  width: 10vh;
}
div {
  margin-top: 10px;
}
</style>
