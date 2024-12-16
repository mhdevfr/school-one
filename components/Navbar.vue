<template>
  <div class="w-full absolute top-0 flex items-center  justify-center" v-motion-slide-bottom>
    <div
      class="navbar absolute top-0 lg:w-1/3 w-5/6 lg:py-2 bg-gray-950  flex   items-center lg:text-base text-[12px] rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 justify-around"
    >
      <ul class="flex justify-around items-center w-full py-3 px-4" v-auto-animate>
        <li v-for="(item, index) in navItems" :key="index">
          <a
            :href="item.href"
            :class="{ active: activeSection === item.href }"
            @click="setActive(item.href)"
            class="hover-effect"
          >
            {{ item.label }}
          </a>
        </li>
        <NuxtLink to="/cv" class="hover-effect-">CV</NuxtLink>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Veille", href: "/veille" },
  { label: "Stages", href: "/stage" },

];

const activeSection = ref("#home");

function setActive(section: string) {
  activeSection.value = section;
}
</script>

<style scoped lang="css">
a {
  color: #ffffff;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

a.active {
  background-color: #1f1f1f;
  width: 100%;
  border-radius: 0.5rem;
  color: #f3f4f6;
}

.hover-effect:hover {
  color: #f3f4f6;
  background-color: #3a3a3a;
  border-radius: 0.25rem;
}
</style>
