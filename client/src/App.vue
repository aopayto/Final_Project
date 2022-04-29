<template>
  <div id="app">
    <img  src="./assets/logo.png" style="width:380px; height:250px; float:left; padding-left:200px; margin-top:30px">
    <img  src="./assets/amazon.png" style="width:380px; height:300px; float:right; padding-right:200px; margin-top:30px">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button {
  background-color: blue;
  border: none;
  color: blue;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.button1 {
  background-color:gray;
  color: white;
  border: 2px solid black;
  border-radius: 12px;
}

.button1:hover {
  background-color: #f44336;
  color: black;
  border: 2px solid black;
  border-radius: 12px;
}
.button2 {
  background-color:gray;
  color: white;
  border: 2px solid black;
  border-radius: 12px;
}

.button2:hover {
  background-color: #19a5d8;
  color: black;
  border: 2px solid black;
  border-radius: 12px;
}
header {
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  padding: 3px;
  margin-bottom: 20px;
  background-color: rgb(62, 151, 199);
  color: white;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 3px;
  background-color: rgb(62, 151, 199);
  color: white;
}
</style>
