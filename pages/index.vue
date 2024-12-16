<template>
  <div class="h-full w-full items-center justify-center bg-gray-950">
    <div class="w-full flex items-center flex-col justify-center">
        <ParticlesBackground class="absolute top-0"/>
        <div class="w-full absolute top-0 flex items-center justify-between">
            <Navbar class="mt-12 "></Navbar>
            <GetInTouch class="absolute top-0 right-0 m-8 lg:block hidden"></GetInTouch>
        </div>
        <div class="w-5/6 lg:justify-between justify-center h-[800px] items-end lg:items-center flex lg:flex-row flex-col-reverse">
            <HeroTexte class="flex justify-around items-center"></HeroTexte>
            <Globe class="lg:z-[200]  ml-24 lg:relative "></Globe>
        </div>
        <div class="h-full w-screen my-16" id="projects">
            <Projects></Projects>
        </div>
        <div class="w-full items-center h-screen justify-center flex">
            <ParallaxParticles class="hidden absolute z-0 lg:block "></ParallaxParticles>
            <AboutMe class="z-50"></AboutMe>
        </div>

    </div>
    <Particles></Particles>

  </div>
</template>
<style>
*{
    overflow: hidden;
}
</style>

<script setup lang="ts"></script>
