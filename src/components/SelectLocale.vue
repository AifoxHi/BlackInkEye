<template>
<div class="center">
    <div id="app">
<div class="dropdown topcorner">
  <button class="dropbtn">{{ $t('language') }}</button>
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
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
  max-width: max-content;
}

.dropdown-content {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content p {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content p:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
 .topcorner{
   position:absolute;
   top:0;
   right:0;
  }
</style>