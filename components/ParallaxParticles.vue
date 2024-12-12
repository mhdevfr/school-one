<template>
    <div class="absolute w-full h-3/4">
      <div class="flex lg:justify-around  justify-center flex-row w-full lg:items-center mb-8 lg:mt-2">
        <firstElement class="parallax relative lg:left-24 z-[-1]" v-motion-slide-top />
        <secondElement class="parallax absolute lg:lg:right-24 z-[-1]" v-motion-slide-top />
        <thirdElement class="parallax absolute lg:top-10 lg:left-1/3 z-[-1]" v-motion-slide-top />
        <fourthElement class="parallax absolute lg:bottom-0 m-8 lg:left-52 z-[-1]" v-motion-slide-top />
        <fifthElement class="parallax absolute lg:bottom-0 m-8  lg:right-72 z-[-1]" v-motion-slide-top />
        <sixElement class="parallax absolute lg:bottom-16 m-8 lg:left-1/2 z-[-1]" v-motion-slide-top />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, onUnmounted, ref } from "vue";
  
  const getRandomInRange = (min, max) => Math.random() * (max - min) + min;
  const elements = ref([]);
  
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX: x, clientY: y } = event;
  
    elements.value.forEach((el) => {
      const { offsetWidth: width, offsetHeight: height } = el;
      const rect = el.getBoundingClientRect();
      const elementCenterX = rect.left + width / 2;
      const elementCenterY = rect.top + height / 2;
  
      const deltaX = (x - elementCenterX) / window.innerWidth;
      const deltaY = (y - elementCenterY) / window.innerHeight;
  
      const moveX = deltaX * Number(el.dataset.factorX);
      const moveY = deltaY * Number(el.dataset.factorY);
  
      el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };
  
  const animateElements = () => {
    elements.value.forEach((el) => {
      const moveX = getRandomInRange(-2, 2); 
      const moveY = getRandomInRange(-2, 2);
      el.style.transform += ` translate(${moveX}px, ${moveY}px)`;
    });
    requestAnimationFrame(animateElements);
  };
  
  onMounted(() => {
    window.addEventListener("mousemove", handleMouseMove);
  
    document.querySelectorAll<HTMLElement>(".parallax").forEach((el) => {
      el.dataset.factorX = getRandomInRange(10, 70).toString();
      el.dataset.factorY = getRandomInRange(10, 70).toString();
      elements.value.push(el);
    });
  
    animateElements();
  });
  
  onUnmounted(() => {
    window.removeEventListener("mousemove", handleMouseMove);
  });
  </script>
  
  <style lang="css">
  .parallax {
    transition: transform 1s ease-out;
  }
  </style>