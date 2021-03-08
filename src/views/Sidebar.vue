<template>
<div class="sidebar">
<img id="sidelogo" loading="lazy" alt="logo" src="./../assets/sitelogo1-1.png">
<ul class="sideicoon">
<li class="sideico"><a class="sideicon tooltip" href="site/extra"><span class="tooltiptext tooltip-right">{{ $t("message.main.6.button1") }}</span><i class="fa fa-question-circle"></i></a></li>
<li class="sideico"><router-link  class="sideicon tooltip" to="/"><span class="tooltiptext tooltip-right">{{ $t("message.main.6.button2") }}</span><i class="fa fa-fw fa-home"></i></router-link></li>
<li class="sideico"><a class="sideicon tooltip" href="site/about-me/"><span class="tooltiptext tooltip-right">{{ $t("message.main.6.button3") }}</span><i class="fa fa-fw fa-envelope"></i></a></li>
<li class="sideico"><a class="sideicon tooltip" href="site/shop/"><span class="tooltiptext tooltip-right">{{ $t("message.main.6.button4") }}</span><i class="fa-fw fa fa-shopping-bag"></i></a></li>
<li class="sideico"><a class="sideicon tooltip" href="https://blogger.blackinkeye.tk/"><span class="tooltiptext tooltip-right">{{ $t("message.main.6.button5") }}</span><i class="fa-fw fa fa-book"></i></a></li>
<li class="sideico"><a class="sideicon tooltip" href="https://google.blackinkeye.tk/"><span class="tooltiptext tooltip-right">{{ $t("message.main.6.button6") }}</span><i class="fa-fw fa fa-users"></i></a></li>
<li class="sideico"><a class="sideicon tooltip" href="https://lolzzz992.itch.io/" rel="nofollow noopener"><span class="tooltiptext tooltip-right">{{ $t("message.main.6.button7") }}</span><i class="fa-fw fa fa-gamepad"></i></a></li>
<li class="sideico"><a class="sideicon tooltip" href="https://google.blackinkeye.tk/projects"><span class="tooltiptext tooltip-right">{{ $t("message.main.6.button8") }}</span><i class="fa-fw fa fa-folder-open"></i></a></li>
<li class="sideico"><a class="sideicon tooltip" href="https://wiki.blackinkeye.tk"><span class="tooltiptext tooltip-right">{{ $t("message.main.6.button9") }}</span><i class="fa-fw fa fa-book"></i></a></li>
<li class="sideico"><a class="sideicon tooltip" href="https://google.blackinkeye.tk/contact"><span class="tooltiptext tooltip-right">{{ $t("message.main.6.button10") }}</span><i class="fa-fw fa fa-address-book"></i></a></li>
<li class="sideico"><a class="sideicon tooltip" href="https://google.blackinkeye.tk/extra"><span class="tooltiptext tooltip-right">{{ $t("message.main.6.button11") }}</span><i class="fa-fw fa fa-link"></i></a></li>
</ul>
</div>
</template>

<style>
.tooltip {
    position: relative;
    display: inline-block;
    color: #006080;
}

.tooltip .tooltiptext {
  visibility: hidden;
  position: absolute;
  width: 10px;
  background: none;
  color: transparent;
  text-align: center;
  padding: 1px 0;
  border-radius: 6px;
  z-index: 20;
  left: 15px;
  opacity: 0;
  transition: 200ms ease, width 500ms ease;
  font-size: 14px;
  pointer-events: none;
  white-space: nowrap;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
  left: 55px;
  padding: 5px;
  background-color: #333333;
  color: #fff;
  width: auto;
  padding: 5px 15px;
}

.tooltip-right {
  left: 125%;  
}

.tooltip-right:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent #333333 transparent transparent;
}
#sidelogo{
	padding: 10px;
  margin-bottom: 15px;
}
.sideico{
  margin-top: 5px;
  display: list-item;
    text-align: -webkit-match-parent;
        box-sizing: border-box;

}
.sideicon{
	  padding: 10px;
    text-decoration: none;
    position: relative;
    font-weight: 700;
    display: block;
}
.sideicoon{
  padding: 0;
  margin: 0;
  text-align: center;
  list-style-type: none;
  box-sizing: border-box;
  list-style: disc;
}

/* Style the sidebar - fixed full height */
.sidebar {
  height: 100%;
  width: 48px;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  background-color: #222;
  box-shadow: 0 0 15px 1px #3C3B3B;
  padding-top: 80px;
}

/* Style sidebar links */
.sidebar a {
  text-decoration: none;
  font-size: 20px;
  z-index: 1;
  color: #fff;
}

/* Style links on mouse-over */
.sidebar a:hover {
  background: #1F1F1F;
  z-index: 1;
  transition: background-color 0.42s ease-in-out;
}

/* Add media queries for small screens (when the height of the screen is less than 450px, add a smaller padding and font-size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
@media screen and (max-width: 1260px), (max-height: 370px) {
	.sidebar {
	visibility: hidden;
}
}
@media (max-height: 740px) {
	.sideico {
	margin-top: -10px;
}
}
@media (max-height: 585px) {
	.sideico {
	margin-top: -20px;
}
 .sidelogo {
 	margin-bottom: 5px;
 }
 .sidebar {
 	padding-top: 15px;
 }
}
</style>