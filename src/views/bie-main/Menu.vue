<template>
<div class="col" id="birbtweet-show">
<div class="blackinkeye-shape blackinkeye-shape-bottom"><svg fill="#0a0a0a" height="73" preserveAspectRatio="none" viewBox="0 0 1000 100"><path d="M527 33c204-89 263 34 320 0 87-52 153 7 153 7v60H0V40c143-73 213 42 305 55 51 4 203-54 222-62z" opacity=".3" /><path d="M266 33c50-8 246 89 383 0 104-50 92 34 149 0 86-51 202 27 202 27v40H0V63c88 60 183-27 266-30z" opacity=".7" /><path d="M234 71c200 58 266-65 395-19 181 73 195 12 281-5 61-11 90 53 90 53H0c64-69 156-51 234-29z" /></svg></div>
<div class="blackinkeye-shape"><svg fill="#101010" viewBox="0 0 1000 100"><path d="M473 67c-204 89-263-34-320 0C66 119 0 60 0 60V0h1000v60C857 133 787 18 695 5c-51-4-203 54-222 62z" opacity=".3" /><path d="M734 67c-50 8-246-89-383 0-104 50-92-34-149 0C116 118 0 40 0 40V0h1000v37c-88-60-183 27-266 30z" opacity=".7" /><path d="M766 29C566-29 500 94 371 48 190-25 176 36 90 53 29 64 0 0 0 0h1000c-64 69-145 61-234 29z" /></svg></div>
<section class="Q" style="padding-bottom: 55px;">
<div class="col" id="birb">
<h1 id="bieh1">BlackInkEye</h1>
<div id="welcome"><a style="color: #FFF;">{{ $t("message.main.1.welcome") }}</a></div>
<div class="row" style="margin-top: -30px">
<div class="col fuckyou">
<a class="birbsbutt" id="but0" href="site/FAQ" target="_self"><svg height="30" viewBox="0 0 512 512"><path d="M256 504C-98 465-69 22 256 8c351 28 330 469 0 496zM146 154c-8 19 42 54 54 40 171-59 19 61 16 106 5 23 79 20 80 0 37-83 80-29 83-108-26-128-169-129-233-38zm110 184c-66 7-55 88 0 92 64-5 59-89 0-92z" /></svg>{{ $t("message.main.1.faq") }}</a>
</div>
<div class="col">
<div class="birbsbuttno" style="margin-left: 145px;"><a href="https://youtu.be/Dg75RpFEnXE" rel="nofollow noopener" target="_blank">❖</a></div>
<a class="birbsbutt" id="but1" href="site/about-me" target="_self"><svg width="37" height="30" viewBox="0 0 496 512"><path d="M248 104a96 96 0 000 192c137-14 113-184 0-192zm0 144c-60-1-63-94 0-96 64-1 66 93 0 96zm0-240c-341 1-318 494 0 496 341 2 320-497 0-496zM118 408c55-60 213-65 260 0-80 62-188 60-260 0zm293-36c-76-74-258-77-326 0-44-61-50-141-15-208a206 206 0 01355 0c35 67 29 147-15 208z" /></svg>{{ $t("message.main.1.about") }}</a>
<a class="birbsbutt" id="but2" href="https://blogger.blackinkeye.tk" target="_self"><svg width="37" height="30" viewBox="0 0 512 512"><path d="M93 180c1 73-134 239-78 295l150-150c-8-192 210 38 22 22L37 497c71 33 217-52 295-78 63-36 65-129 84-195L288 96c-55 25-172 21-195 84zM370 14l-57 57 128 128 57-57c50-61-80-173-128-128z" /></svg>{{ $t("message.main.1.blog") }}</a>
<a class="birbsbutt" id="but3" href="site/community/" target="_self"><svg height="30" viewBox="0 0 640 512"><path d="M96 224c91-9 67-126 0-128-91 9-67 126 0 128zm448 0c91-9 67-126 0-128-91 9-67 126 0 128zm-77 51c40 22 69 62 75 109 32 0 97 9 98-32 16-94-116-133-173-77zm-147-19c160-16 118-220 0-224-160 16-118 220 0 224zm69 32c-43 21-94 21-137 0-70 0-182 189-76 192h288c118-38-6-190-75-192zm-216-13C81 159-68 381 32 384h66c6-47 35-87 75-109z" /></svg>{{ $t("message.main.1.forum") }}</a>
<a class="birbsbutt" id="but4" href="https://lolzzz992.itch.io/" rel="nofollow noopener" target="_blank"><svg height="30" viewBox="0 0 640 512"><path d="M480 96H160a160 160 0 10114 272h92A160 160 0 10480 96zM248 268a12 12 0 01-12 12h-52v52a12 12 0 01-12 12h-24a12 12 0 01-12-12v-52H84a12 12 0 01-12-12v-24a12 12 0 0112-12h52v-52a12 12 0 0112-12h24a12 12 0 0112 12v52h52a12 12 0 0112 12zm216 76a40 40 0 1140-40 40 40 0 01-40 40zm64-96a40 40 0 1140-40 40 40 0 01-40 40z" /></svg>{{ $t("message.main.1.games") }}</a>
<a class="birbsbutt" id="but5" href="site/projects" target="_self"><svg height="30" viewBox="0 0 576 512"><path d="M480 224c4-41-6-95-48-96H272l-64-64H48C22 64 0 86 0 112v288c7 58 147 44 448 48 52 3 83-104 121-151 27-70-38-73-89-73zM188 112l64 64c85 9 185-25 180 48H152c-40 10-77 82-104 127C62 99 27 101 188 112zm260 288H72l77-128h379z" /></svg>{{ $t("message.main.1.projects") }}</a>
<a class="birbsbutt" id="but6" href="https://wiki.blackinkeye.tk" target="_self"><svg width="37" height="30" viewBox="0 0 448 512"><path d="M448 360V24c0-13-11-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13 0 24-11 24-24v-16c0-7-3-14-9-19-4-15-4-59 0-74 6-5 9-11 9-19zM128 134c0-3 3-6 6-6h212c3 0 6 3 6 6v20c0 3-3 6-6 6H134c-3 0-6-3-6-6v-20zm0 64c0-3 3-6 6-6h212c3 0 6 3 6 6v20c0 3-3 6-6 6H134c-3 0-6-3-6-6v-20zm253 250H96a32 32 0 110-64h285c-2 17-2 47 0 64z" /></svg>{{ $t("message.main.1.wiki") }}</a>
<a class="birbsbutt" id="but7" href="site/contact" target="_self"><svg width="37" height="30" viewBox="0 0 448 512"><path d="M448 148v-40c-3-16-19-12-32-12V48c0-26-21-48-48-48H48C22 0 0 22 0 48v416c0 27 22 48 48 48h320c27 0 48-21 48-48v-48c12 0 32 3 32-12v-40c-3-16-19-12-32-12v-64c12 0 32 3 32-12v-40c-3-16-19-12-32-12v-64c12 0 32 3 32-12zm-80 316H48V48h320zM208 256c92-3 80-128 0-128-89 0-81 130 0 128zm112 109c3-44-35-76-67-77-32 15-60 17-90 0-50 9-67 35-67 77 28 33 197 33 224 0z" /></svg>{{ $t("message.main.1.contact") }}</a>
<div class="birbsbuttno" id="birbsbuttno2"><a href="https://youtu.be/0XDhz5kanYk" rel="nofollow noopener" target="_blank">❖</a></div>
<div id="donatetext"><p>{{ $t("message.main.1.donate") }}</p></div>
<div id="headbutts">
<a class="roundbuttsbirb" id="donabutt" href="https://gf.me/u/yxnuya"><svg width="37" height="30" fill="#02a95c" viewBox="0 0 1040 791"><path d="M212 539c55-50 145-53 188 10 2 2 3 3 5 0 67-84 192-49 192 54v176l-102 1V640c-11-77-90-58-91 1v139H302V639c10-73-89-79-90-9v149l-102 1V506l102 1zm815-460c-20-23-63-20-94-15 0 0-192 122-214 171-5 14 13 39 13 39 28 29 78 29 102 14l196-143s19-39-3-66zM308 269c12-12 12-38 12-38-6-43-213-172-213-172-29-13-75-7-94 16-22 27-3 65-3 65l196 144c24 14 73 14 102-15zm213-32c36 0 67-17 76-47l2-127c0-43-34-63-77-63s-78 23-79 65l2 125c7 33 38 47 76 47zM174 404h676c-138-151-525-151-676 0zm690 257H763c-10 0-5 16-3 23 24 77 104 46 113 13h88c15 35-69 83-91 89a227 227 0 01-123-6c-49-19-80-54-90-106-7-40-2-78 20-113 17-26 41-45 71-54 40-13 81-14 122-3 51 15 81 50 94 99 5 18 6 54 6 54 0 4-5 4-5 4zm6-55c0-31-28-48-58-47 0 0-48 9-48 47z" /></svg></a>
<a class="roundbuttsbirb yadbutt" href="https://my.qiwi.com/ARTEM-GzzL_grxO_"><svg width="37" height="30" viewBox="0 0 400 400"><path d="M184 55C76 58 32 172 68 244c65 129 207 55 281 118 14 11 15 1 8-6-43-52-119-47-151-98-7-9-4 22-7 25-112-13-104-154-20-177 57-9 107 46 108 96-4-4-41 1-28 6 27 10 48 30 54 54 0 4 2 6 4 3 58-104-36-218-133-210m109 195c-11 18 22 32 13 8-2-5-8-11-13-8m-27 22c-13 13 0 34 16 24 9-8-3-26-16-24" fill="#fc8c04" /></svg></a>
<a class="roundbuttsbirb" id="paypalbutt" href="https://www.paypal.me/lolzzz992"><svg width="37" height="30" viewBox="0 0 384 512"><path d="M111 296L90 430c-14 2-92 14-90-12L59 48c31-38 183-21 224-6 126 85 17 234-96 231-44 0-70-7-76 24zm246-144c-10 94-112 159-216 139-9 32-38 179-38 179s87 23 91-2c10-34-1-111 44-111 107-2 190-134 119-205z" fill="#FFF" /></svg></a>
<a class="roundbuttsbirb yadbutt" href="https://www.patreon.com/lolzzz992"><svg width="30" height="30" viewBox="0 0 800 768"><path d="M513 0a288 288 0 000 576 288 288 0 000-576" fill="#ff424d" /><path d="M0 768h141V0H0v768" fill="#141518" /></svg></a>
<a class="roundbuttsbirb plusbutt" href="https://blackinkeye.tk/site/Donate"><svg width="37" height="30" viewBox="0 0 448 512"><path d="M416 208H272V64c-4-50-95-40-96 0v144H32c-50 4-40 95 0 96h144v144c4 50 95 40 96 0V304h144c50-4 40-95 0-96z" fill="#fff" /></svg></a>
</div>
</div>
</div>
</div>
</section>
</div>  
</template>

<style>
/* Made by lolzzz992 (Sofia The Birb) | Don't watch code! IT'S NAKED!!!!  */
blockquote {
  text-indent: -0.5em;
  border-left: 20px solid rgb(248,41,255);
  font: 30px Georgia, serif;
  color: white;
  margin: 2em;
}
blockquote::before {
  position: absolute;
  content: open-quote;
  font-size: 120px;
  margin-left: -0.8em;
  margin-top: -0.4em;
  color: #fff;
}
blockquote::after {
	position: absolute;
  content: close-quote;
  font-size: 120px;
  bottom: 0;
  right: 0;
  margin-right: -0.4em;
  margin-bottom: -0.8em;
  color: #fff;
}
blockquote {
  quotes: "“" "”" "‘" "’";
  position: relative;
}

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
  z-index: 412;
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
.boxed{
	max-width: 1140px;
	margin:0 auto;
}
#birbtweet-show{
opacity:0;
transition: 1s;
animation: show 2s 1;
animation-fill-mode: forwards;
}
@keyframes show{
0%{opacity:0;}
100% {opacity:1;}
}
#birb {
 z-index: 3;
 background: url('../../assets/biebackflat.png');
 background-position: center;
 background-repeat: no-repeat;
 background-size: contain;
}
#sofiaavatar{
	margin: 30px;
	border: 15px solid #FFFFFF;
  box-shadow: 10px 10px 24px 0 rgba(0,0,0,.15);
	transform: translate(200px,100px);
	width: 300px;
	transition: ease all .5s;
}
#birbold {
 background: url('../../assets/lolzzz992backq.svg');
 background-repeat: no-repeat;
 background-size: cover;
}
#sofiahello{
background-image:linear-gradient(180deg,rgba(35,35,35,.8313725490196079) 0%,rgba(16,16,16,.8313725490196079) 100%)
}
#itsnotending{
background-color: rgba(16, 16, 16, 0.83);
}
#timelineback{
 background-image:linear-gradient(180deg,rgba(16,16,16,.8313725490196079) 48%,rgba(16,16,16,0) 100%)
}
#welcome{
	text-align: center;
	height:0;
	overflow:visible;
	transform: translateY(630px);
	font-weight: 300;
	font-size: 30px;
}
#morelisttext{
	color: #DADADA;
	font-family: sans-serif;
    font-size: 18px;
}

#text-elem{
  display:grid;
  text-align:center;
  font-size:100px;
  text-transform:uppercase;
  margin-top:70px;
}
#text-line-1,#text-line-2,#text-line-3{
  display:flex;
  justify-content:space-evenly;
}
#headbutts{
	margin: -20px 0px 40px 100px;
}
.birbsbutt
{
  display: block;
	margin-top: 3px;
	padding: 0px 15px 0px 15px;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 25px;
  text-decoration: underline;
  font-family: 'Caveat', cursive;
  font-size: 30px;
	height: 52px;
	text-align: center;
	text-shadow: 0 0 10px #000;
  transition: 0.3s ease;
}
.birbsbutt:hover
{
  color: #C52100;
  border: 3px solid #C52100;
  transform:rotate(5deg) scale(1.1,1.1);
  transition: 0.3s ease;
}
.birbsbutt:hover svg {
 fill: #C52100;
 transition: 0.3s ease;
}
.birbsbutt svg
{
  fill: #FFFFFF;
  margin-bottom: -4px;
  transition: 0.3s ease;
} 
.birbsbuttno a
{
  display: inline-block;
  color: #FFFFFF;
  font-size: 30px;
  width: 146px;
  text-shadow: 0 0 10px #000;
  transition: 0.2s ease-in-out;
}
.birbsbuttno a:hover
{
  color: #C52100;
  background-color: transparent;
  background-image: none;	
}
.readmore a
{
  display: block;
  color: #a3a3a3;
  line-height: 1;
  font-size: 15px;
  transition: 0.2s ease-in-out;
}
.readmore a:hover
{
  color: #6F5EED;
  text-decoration: none;
}
.roundbuttsbirb {
  display: inline-block;
  line-height: 50px;
  width: 50px;
  text-align: center;
  border-radius: 50%;
  text-shadow: 0 0 40px #000d;
  transition: 0.3s ease;
  margin: 0px 4px 0px 0px;
}
.roundbuttsbirb svg {
	margin-bottom: -11px;
}
.roundbuttsbirb:hover {
  opacity: 0.85;
  color:#FFFFFF;
  transform:rotate(10deg) scale(1.15,1.15) translateY(-10px);
  transition: 0.3s ease;	
}
.roundbutts {
  display: inline-block;
	line-height: 50px;
  width: 50px;
  text-align: center;
  border-radius: 50%;
  transition: 0.3s ease;
  margin: 0px 4px 0px 0px;
}
.roundbutts svg {
	margin-bottom: -11px;
}
.roundbutts:hover {
  opacity: 0.3;
	color:#FFFFFF;
  transform:rotate(30deg) scale(1.15,1.15);
  transition: 0.2s ease;	
}
#donatetext {
	font-family: 'Caveat', cursive;
    font-size: 30px;
    text-decoration: overline;
	text-decoration-color: #FFF;
	color:#FFF;
	margin-left: 195px;
	margin-top: -20px;
}
#itslookslikeending-heading-title {
	margin-top: 20px;
	color: #7a7a7a;
	font-size: 19px;
	text-transform: uppercase;
	letter-spacing: 6px;
}
#youwantsomethingmore-heading-title {
	margin-top: 20px;
	color: #CC2C64;
	font-weight: 900;
}
#hello-heading-title {
	margin-top: 20px;
	color: #C93267;
	font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
	font-size: 130px;
	line-height: .8em;
}
#helloe-heading-title {
	margin-bottom: 20px;
	color: #C93267;
	font-family: 'Montserrat', sans-serif;
	font-size: 130px;
	text-align: center;
}
#aboutme-heading-title {
	margin-top: 20px;
	text-transform: uppercase;
	color: #C93267;
	font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
	font-size: 34px;
	line-height: .7em;
}
#mynameis-heading-title {
	color: #FFF;
	text-transform: uppercase;
	margin-top: 20px;
	font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
	font-size: 22px;
	line-height: .7em;
}
#birbsbuttno2 {
	margin-left: 225px;
	margin-top: 20px;
}
#style-4::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

#style-4::-webkit-scrollbar
{
	width: 6px;
	background-color: #F5F5F5;
}

#style-4::-webkit-scrollbar-thumb
{
	background-color: #555555;
	border-radius: 20px;
}
#but0 {

	margin-top: 580px;
	margin-right: 280px;
	float: right;
	max-width: 110px;
}
#but1 {
	margin-left: 90px;
	max-width: 134px;
}
#but2 {
	margin-left: 140px;
	max-width: 117px;
}
#but3 {
	margin-left: 190px;
	max-width: 139px;
}
#but4 {
	margin-left: 240px;
	max-width: 140px;
}
#but5 {
	margin-left: 260px;
	max-width: 154px;
}
#but6 {
	margin-left: 210px;
	max-width: 143px;
}
#but7 {
	margin-left: 140px;
	max-width: 156px;
}
#timeline *, 
#timeline *:before, 
#timeline *:after {
	box-sizing: border-box;
}	
#timeline .timeline-item:after, 
#timeline .timeline-item:before {
	content: '';
	display: block;
	width: 100%;
	clear: both;
}
#timeline {
	max-width: 1100px;
	width: 100%;
	margin: 0px auto;
	position: relative;
	padding: 0 10px;
	transition: all 0.4s ease;
	translate: 0 110px;
	z-index: 2;
}
#timeline:before {
	content: "";
	overflow:hidden;
	width: 3px;
	height: 100%;
	background: rgb(204, 44, 100);
	left: 50%;
	top: 0;
	position: absolute;
}
#timeline:after {
	content: "";
	clear: both;
	display: table;
	width: 100%;
}
#timeline .timeline-item {
	position: relative;
}
#timeline .timeline-item .timeline-icon {
	background: #9A214B;
	color: #FFF;
	text-align: center;
	width: 50px;
	height: 50px;
	position: absolute;
	top: 0;
	left: 50%;
	overflow: hidden;
	margin-left: -23px;
	border-radius: 50%;
}
#timeline .timeline-item .timeline-icon svg {
	line-height: 50px;
	margin-bottom: -19px;
}
#timeline .timeline-item .timeline-content {
	width: 45%;
	background: rgba(0,0,0,.36);
	padding: 10px 20px;
	box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.2);
	border-radius: 5px;
	transition: all 0.3s ease;
}
#timeline .timeline-item .timeline-content h3 {
	padding: 15px;
	background: rgba(0,0,0,.36);
	color: #fff;
	margin: -20px -20px 10px -20px;
	font-weight: 300;
	border-radius: 3px 3px 0 0;
}
#timeline .timeline-item .timeline-content:before {
	content: '';
	position: absolute;
	left: 45%;
	top: 20px;
	width: 0;
	height: 0;
	border-top: 7px solid transparent;
	border-bottom: 7px solid transparent;
	border-left: 7px solid rgba(0,0,0,.36);
}
#timeline .timeline-item:nth-child(even) .timeline-content {
	float: right;
}
#timeline .timeline-item:nth-child(even) .timeline-content:before {
	content: '';
	right: 45%;
	left: inherit;
	border-left: 0;
	border-right: 7px solid rgba(0,0,0,.36);
}
@media screen and (max-width: 768px) {
	#timeline {
		padding: 0px;
		width: 90%;
	}
	#timeline:before {
		left: 0;
	}
	#timeline .timeline-item .timeline-content {
		width: 90%;
		float: right;
	}
	#timeline .timeline-item .timeline-content:before, 
	#timeline .timeline-item:nth-child(even) .timeline-content:before {
		left: 10%;
		margin-left: -6px;
		border-left: 0;
		border-right: 7px solid rgba(0,0,0,.36);
	}
	#timeline .timeline-item .timeline-icon {
		left: 0;
	}
}
/* Idk how @media thing works, is it actual mobile support? pls help */
@media (max-width: 1199px) {
	.birbsbutt a{
		display: block;
	}
	#timeline {
		translate: 0;
	}
}
/* smartphone */

@media (max-width: 917px) {
	div .birbsbutt a{
		display: block;
		border: none;
	}
	.fuckyou{
		display: none;
	}
	.birbsbutt li:hover a, .birbsbutt a:hover
{
   color: #C52100;
   border: none;
   transform:rotate(5deg) scale(1.1,1.1);
   transition: 0.3s ease;
}
#but1, #but2, #but3, #but4, #but5, #but6, #but7 {
 margin-left: 0px;
		border: none;
}
}
@media (max-width: 1100px) {
	#sofiaavatar {
	transform: translate(120px,100px);
}
}
@media (max-width: 1000px) {
	#sofiaavatar {
	transform: translate(-10px,100px);
}
}
@media (max-width: 917px) {
   .birbsbuttno a{
	margin-left: -130px;
	}
	#birbsbuttno2 {
	margin-left: 150px; 
	margin-top: 0px;
	}
	#donatetext {
	margin-left: 20px;
}
	#welcome{
	transform: translateY(600px);
}
	#headbutts{
	margin: -20px 0px 40px 20px;
}
}
@media (max-width: 600px) {
	#helloe-heading-title {
	font-size: 60px;
}
}
@media (max-width: 560px) {
	#sofiaavatar {
	transform: translate(140px,100px);
}
}
@media (max-width: 504px) {
	#hello-heading-title {
	font-size: 30px;
}
	#welcome{
	font-size: 19px;
	transform: translateY(620px);
}
	#sofiaavatar {
	transform: translate(90px,100px);
	width: 200px;
	border: 5px solid #FFF;
	}
}
@media (max-width: 390px) {
	#bieh1 {
	font-size: 45px;
	}
}
@media (max-width: 350px) {
	#sofiaavatar {
	transform: translate(-50px,40px);
}
	#welcome{
	font-size: 15px;
	transform: translateY(630px);	
}
}	
@media (max-width: 315px) {
	#helloe-heading-title {
	font-size: 30px;
	}
	#bieh1 {
	font-size: 40px;
	}
}
@media (max-width: 280px) {
	#bieh1 {
	font-size: 32px;
	}
}
@media (min-width: 918px) {
	.birbsbutt a {
		display: block;
	}
			#but0, #but1, #but2, #but3, #but4, #but5, #but6, #but7 {
		max-width: max-content;
	}
}
.fa-spin {
 animation:fa-spin 2s linear infinite
}
@keyframes fa-spin {
 0% {
  transform:rotate(0deg)
 }
 to {
  transform:rotate(1turn)
 }
}



/* Japanese Version
*{ cursor: url(../static/cur/cursor1.cur), default; }
a{ cursor: url(../static/cur/cursor2.cur), pointer; }
svg{ cursor: url(../static/cur/cursor2.cur), pointer; }
i{ cursor: url(../static/cur/cursor2.cur), pointer; }
p{ cursor: url(../static/cur/cursor3.cur), text; }
a img{ cursor: url(../static/cur/cursor2.cur), pointer; }
a div{ cursor: url(../static/cur/cursor2.cur), pointer; }
img.linkimg{ cursor: url(../static/cur/cursor2.cur), pointer; }
area{ cursor: url("../static/cur/cursor2.cur")pointer; }
*/
</style>