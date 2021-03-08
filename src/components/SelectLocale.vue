<template>
<div class="center">
    <div id="app">
<div class="dropdown topcorner">
  <button class="dropbtn"><font-awesome-icon :icon="['fas', 'globe-americas']" /> {{ $t('language') }}</button>
  <div class="dropdown-content">
      <p @click="$i18n.locale = 'en'">{{ $t('english') }}</p>
      <p @click="$i18n.locale = 'ru'">{{ $t('russian') }}</p>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    methods: {
        setLocale(locale){
            this.$i18n.locale = locale
        }
    },

}

</script>

<style>
.dropbtn {
   background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(121,6,35,1) 40%);
  padding: 16px;
  font-size: 16px;
  border: none;
  border-right: 12px double;
  border-color:rgb(105, 7, 31);
  cursor: pointer;
  text-align: right;
  transition: 1.3s ease;
  width: 150px;
  border-radius: 0px 0px 0px 100px;
  color: #f7dae1;

}

.dropdown {
  position: absolute;
  display: inline-block;
  max-width: max-content;
    z-index: 200;
      transition: 1.3s ease;
}

.dropdown-content {
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.7);
  right: 0;
  border-radius: 15px 5px 20px 50px;
    width:0;
    height:0;
  opacity: 0;
  transition: 1.3s ease;
}

.dropdown-content p {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-radius: 0px 5px 20px 20px;
}

.dropdown-content p:hover {background-color: #e0dede;   transition: 0.4s ease; border-radius: 15px 5px 20px 25px;}

.dropdown:hover .dropdown-content {
  display: block;
      opacity: 1;
    transform:rotate(5deg) scale(1.1,1.1);
  transition: 0.8s ease;
  min-width: max-content;
  margin-left:unset;
    width:auto;
    height:auto;
}

.dropdown:hover .dropbtn {
  background-color: #ac6979;
  box-shadow: 0px 8px 16px 0px rgba(161, 161, 161, 0.5);
}
 .topcorner{
   position:fixed;
    top: 0px;
    right: 0px;
}
</style>