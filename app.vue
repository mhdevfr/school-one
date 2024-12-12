<template>
  <div>
    <NuxtLayout>
      <NuxtPage class="overflow-hidden" />
    </NuxtLayout>
  </div>
</template>

<script setup></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fredericka+the+Great&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Pragati+Narrow:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fredericka+the+Great&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Pragati+Narrow:wght@400;700&display=swap");
 
*{
  scroll-behavior: smooth;
  scrollbar-color: rgb(78, 33, 164);
  user-select: none; /* Standard syntax */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none;
}


.hover14 figure {
  position: relative;
}
.hover14 figure::before {
  position: absolute;
  top: 0;
  left: -75%;
  z-index: 2;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  -webkit-transform: skewX(-25deg);
  transform: skewX(-25deg);
}
.hover14 figure:hover::before {
  -webkit-animation: shine 0.75s;
  animation: shine 0.75s;
}
@-webkit-keyframes shine {
  100% {
    left: 125%;
  }
}
@keyframes shine {
  100% {
    left: 125%;
  }
}

.font-400 {
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-style: normal;
}

.font-200 {
  font-family: "Playfair Display", serif;
  font-weight: 200;
  font-style: normal;
}

.texte-400 {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.texte-200 {
  font-family: "Nunito", sans-serif;
  font-weight: 200;
  font-style: normal;

}


.SMN_effect-24 a {
	padding: 10px 20px;
	position: relative;
	overflow: hidden;
	display: inline-block;
	-webkit-transition: 0.3s ease-out;
	-moz-transition: 0.3s ease-out;
	transition: 0.3s ease-out;
}

.SMN_effect-24 a span:before {
	width: 5px;
	height: 5px;
	background: transparent;
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	border-top: 2px solid #218c74;
	border-left: 2px solid #218c74;
	-webkit-transition: 0.3s;
	-moz-transition: 0.3s;
	transition: 0.3s;
	opacity: 0;
}

.SMN_effect-24 a span:after {
	width: 6px;
	height: 6px;
	background: transparent;
	content: "";
	position: absolute;
	right: 0;
	bottom: 0;
	border-right: 2px solid #218c74;
	border-bottom: 2px solid #218c74;
	-webkit-transition: 0.3s;
	-moz-transition: 0.3s;
	transition: 0.3s;
	opacity: 0;
}

.SMN_effect-24 a:before {
	width: 6px;
	height: 6px;
	background: transparent;
	content: "";
	position: absolute;
	right: 0;
	top: 0;
	border-right: 2px solid #218c74;
	border-top: 2px solid #218c74;
	-webkit-transition: 0.3s;
	-moz-transition: 0.3s;
	transition: 0.3s;
	opacity: 0;
}

.SMN_effect-24 a:after {
	width: 6px;
	height: 6px;
	background: transparent;
	content: "";
	position: absolute;
	left: 0;
	bottom: 0;
	border-left: 2px solid #218c74;
	border-bottom: 2px solid #218c74;
	-webkit-transition: 0.3s;
	-moz-transition: 0.3s;
	transition: 0.3s;
	opacity: 0;
}

.SMN_effect-24 a:hover {
	color: #218c74;
}

.SMN_effect-24 a:hover:before {
	opacity: 1;
	right: 5px; 
	top: 5px;
}

.SMN_effect-24 a:hover:after {
	opacity: 1;
	left: 5px;
	bottom: 5px;
}

.SMN_effect-24 a:hover span:before {
	opacity: 1;
	left: 5px;
	top: 5px;
}

.SMN_effect-24 a:hover span:after {
	opacity: 1;
	right: 5px;
	bottom: 5px;
}

</style>
