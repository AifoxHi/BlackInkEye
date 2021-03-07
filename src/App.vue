<template>
<div id="app">
  <div class="content">
    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/sofia">Sofia</router-link> |
    <router-link to="/aifos">Aifos</router-link>
  </div>
  <router-view />
  </div>
  <webapp-sidebar />
  <webapp-footer />
  <webapp-selectlanguage />
</div>
</template>

<script>
import sidebar from './views/Sidebar.vue'
import footer from './views/Footer.vue'
import selectlanguage from './components/SelectLocale.vue'

export default {
  name: 'App',

  components: {
    'webapp-footer':footer,
    'webapp-sidebar':sidebar,
    'webapp-selectlanguage':selectlanguage,
  },

  data() {
    return {
      
    }
  },
};

</script>

<style lang="scss">
@import 'https://fonts.googleapis.com/css2?family=Caveat&display=swap'; 
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
#app {
 	font-family: BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", Avenir, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style>
html, body {
  height: 100%;
}

.json-line {
    white-space:pre-wrap;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex: 1 0 auto;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. 
  padding: 20px; */
}

.footer {
  flex-shrink: 0;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 20px;
}

body {
  margin: 0;
}

footer {
	z-index: 1;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
	overflow-x: hidden;
	margin-right: calc(-1 * (100vw - 100%));
}
body {
	background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAAAMUlEQVR4AWOAABkZgjSIBSTw0kQrQhhLmCZdKQGadJWEFY6GI3Z6NBxHw3E0HEfDEQATEyONt6fsSAAAAABJRU5ErkJggg==');
	background-color: #980429;
	margin: 0px;
	font-style: normal;
	font-weight: 400;
	text-align: left;
    font-size: 1rem;
	line-height: 1.5;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-sm-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-sm-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}

@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
}
.twitterbutt {
  background: #1da1f2;
}
.discordbutt {
  background: #6D5AC9;
}
.vkbutt {
  background: #45668e;
}
.yadbutt {
  background: #FFF;
}
#donabutt {
  background: #FFF;
}
.youtubebutt {
  background: #cd201f;
}
.plusbutt {
  background: #61CE70;
}
#paypalbutt {
  background-color: #4054B2;
}
Img{ max-width: 100%; height: auto }
h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
	  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1, .h1 {
    font-family: serif;
	font-weight: bold;
	text-align: center;
	color: #FFF;
	letter-spacing: 2px;
	line-height: 100px;
	text-shadow: 0px 0px 25px #FFF;
	font-size: 60px;
	margin-right: 35px;
}

h3, .h3 {
  font-size: 1.75rem;
}
p {
   color: #FFF;
}
a{
color: #a3a3a3;
text-decoration:none;
}
a:hover{
color: #6F5EED;
}
.blackinkeye-shape {
 box-sizing: border-box;	
 overflow:hidden;
 position:absolute;
 left:0;
 width:100%;
 line-height:0;
}
.blackinkeye-shape-top {
 top:-1px
}
.blackinkeye-shape-bottom {
 bottom:-1px
}
.blackinkeye-shape[data-negative=false].blackinkeye-shape-bottom {
 transform:rotate(180deg)
}
.blackinkeye-shape svg {
 width:calc(100% + 1.3px);
}
.blackinkeye-shape-special{
  position:relative;
  bottom: -1px;
}

</style>
