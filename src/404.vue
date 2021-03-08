<template>
  <div class="hello text-align-center">
    <h1>(404) Page Not Found</h1> 
       <div id="nav">
    <router-link class="back-button" to="/">Home</router-link> |
    <p class="back-button" @click="$router.go(-1)">Random</p> |
    <p class="back-button" @click="$router.go(-1)">Go Back ←</p>
  </div>
    <p>Dear creature, the page you looking for might never ever existed</p>
  <p v-if="selectedImage"><img style="width:100%" :src="selectedImage" alt=""></p>
    <img src="https://via.placeholder.com/800">
    <p> move along citizen</p>
    <p class="text-easter-egg">Freeman you fool!</p>
    </div>
</template>

<script>
export default { 
}
</script>


<style>
.back-button {
    font-size: 20px;
    color: #fff;
    display: unset;
}
.back-button:hover {
    color: rgb(236, 22, 22);
    cursor: pointer;
}
.text-easter-egg {
    text-decoration: line-through;
    text-decoration-color: rgba(80, 80, 80, 0.541);
    color: rgba(99, 99, 99, 0.425);
}
</style>