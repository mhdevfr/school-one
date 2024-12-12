<template>
  <div class="flex lg:flex-col flex-col-reverse absolute lg:relative z-[100] bottom-16 lg:bottom-0 left-4 lg:left-0 items-center">
    <Badge></Badge>
    <h1
      class="text-gray-100 font-400 w-full dark:text-gray-100 font-raleway text-start lg:text-7xl text-4xl font-bold lg:mt-11 lg:mb-6"
    >
      <HeroTexteAnimate class="text-start" text="Milan Herbé "  :duration="1000"/>
    </h1>
    <p
      class="text-gray-100 texte-400 dark:text-gray-100 opacity-60 text-start font-raleway lg:text-2xl text-xl font-normal w-full"
    >
    <HeroNameAnimate word="Front-end web developer" class="text-gray-100"/>
    </p>
  </div>
</template>
<script setup lang="ts"></script>
