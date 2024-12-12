<template>
  <div class="w-full h-full flex items-center justify-center text-gray-50">
    <div
      class="lg:w-5/6 w-11/12 h-full lg:grid lg:grid-cols-2 bg-transparent border-gray-50 rounded-xl flex flex-col justify-around"
    >
      <div class="w-full h-full flex flex-col lg:p-4">
        <div class="relative w-full lg:h-[320px] overflow-hidden rounded-md">
          <img
            src="../assets/images/kaizenSite.png"
            class="w-full h-full object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
          >
            <span class="font-400 text-2xl"> 
                View Project
            </span>
          </div>
        </div>
        <div class="p-4 SMN_effect-24">
          <h1 class="font-400 mb-4 text-2xl flex justify-between items-center">
            <span>Kaizen Tasks</span>
            <div>
              <Icon name="logos:nuxt-icon" />
              <Icon name="logos:vue" />
              <Icon name="logos:tailwindcss-icon" />
              <Icon name="devicon:supabase" />
            </div>
          </h1>
          <p class="texte-400 text-sm mb-4">
            This project used to be my first project with my current stack as a
            front-end developer. I used Vue.js, Nuxt, TailwindCSS, and Supabase
            to build this project.
          </p>
          <a
            href="#"
            v-motion-slide-left
            class="text-gray-50 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>Read More</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"    
              class="text-gray-50 ml-2 rotate-45"
            />
        </a>
        </div>
      </div>

      <div class="w-full h-full flex flex-col p-4">
        <div class="relative w-full lg:h-[320px] overflow-hidden rounded-md">
          <img
            src="../assets/images/photolioSite.png"
            class="w-full h-full object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
          >
            <span class="font-400 text-2xl">View Project</span>
          </div>
        </div>

        <div class="p-4 SMN_effect-24">
          <h1 class="font-400 mb-4 text-2xl flex justify-between items-center">
            <span>Photolio</span>
            <div>
              <Icon name="logos:nuxt-icon" />
              <Icon name="logos:vue" />
              <Icon name="logos:tailwindcss-icon" />
              <Icon name="devicon:supabase" />
            </div>
          </h1>
          <p class="texte-400 text-sm mb-4">
            Photolio is a project that I made to create my portfolio for
            photographers. I used Vue.js, Nuxt, TailwindCSS, and Supabase to
            build this project.
          </p>
          <a
            v-motion-slide-left
            href="#"
            class="text-gray-50 hover:text-green-700 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>Read More</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"
              class="text-gray-50 ml-2 rotate-45"
            />
          </a>
        </div>
      </div>
      <div class="w-full h-full flex flex-col p-4">
        <div class="relative w-full lg:h-[320px] overflow-hidden rounded-md">
          <img
            src="../assets/images/portfolioSite.png"
            class="w-full h-full object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
          >
            <span class="font-400 text-2xl"> 
                View Project
            </span>
          </div>
        </div>
        <div class="p-4 SMN_effect-24">
          <h1 class="font-400 mb-4 text-2xl flex justify-between items-center">
            <span>My Portfolio</span>
            <div>
              <Icon name="logos:nuxt-icon" />
              <Icon name="logos:vue" />
              <Icon name="logos:tailwindcss-icon" />
            </div>
          </h1>
          <p class="texte-400 text-sm mb-4">
            This project is my portfolio that I made using Vue.js, Nuxt, and
            TailwindCSS. I used this project to showcase my skills and projects
            that I have made.
          </p>
          <a
            v-motion-slide-left
            href="#"
            class="text-gray-50 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>Read More</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"
              class="text-gray-50 ml-2 rotate-45"
            />
        </a>
        </div>
      </div>
      <div class="w-full h-full flex flex-col lg:p-4">
        <div class="relative w-full lg:h-[320px] overflow-hidden rounded-md">
          <img
          src="../assets/images/ecommerce.png"
          class="w-full h-full object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
          >
            <span class="font-400 text-2xl"> 
                View Project
            </span>
          </div>
        </div>
        <div class="p-4 SMN_effect-24">
          <h1 class="font-400 mb-4 text-2xl flex justify-between items-center">
            <span>Kaizen Tasks</span>
            <div>
              <Icon name="logos:nuxt-icon" />
              <Icon name="logos:vue" />
              <Icon name="logos:tailwindcss-icon" />
              <Icon name="devicon:supabase" />
            </div>
          </h1>
          <p class="texte-400 text-sm mb-4">
            This project used to be my first project with my current stack as a
            front-end developer. I used Vue.js, Nuxt, TailwindCSS, and Supabase
            to build this project.
          </p>
          <a
            href="#"
            v-motion-slide-left
            class="text-gray-50 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>Read More</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"    
              class="text-gray-50 ml-2 rotate-45"
            />
        </a>
        </div>
      </div>
      <div class="w-full h-full flex flex-col lg:p-4">
        <div class="relative w-full lg:h-[320px] overflow-hidden rounded-md">
          <img
            src="../assets/images/ap1.png"
            class="w-full h-full object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
          >
            <span class="font-400 text-2xl"> 
                View Project
            </span>
          </div>
        </div>
        <div class="p-4 SMN_effect-24">
          <h1 class="font-400 mb-4 text-2xl flex justify-between items-center">
            <span>Kaizen Tasks</span>
            <div>
              <Icon name="logos:nuxt-icon" />
              <Icon name="logos:vue" />
              <Icon name="logos:tailwindcss-icon" />
              <Icon name="devicon:supabase" />
            </div>
          </h1>
          <p class="texte-400 text-sm mb-4">
            This project used to be my first project with my current stack as a
            front-end developer. I used Vue.js, Nuxt, TailwindCSS, and Supabase
            to build this project.
          </p>
          <a
            href="#"
            v-motion-slide-left
            class="text-gray-50 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>Read More</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"    
              class="text-gray-50 ml-2 rotate-45"
            />
        </a>
        </div>
      </div>
      <div class="w-full h-full flex flex-col lg:p-4">
        <div class="relative w-full lg:h-[320px] overflow-hidden rounded-md">
          <img
            src="../assets/images/superhero.png"
            class="w-full h-full object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
          >
            <span class="font-400 text-2xl"> 
                View Project
            </span>
          </div>
        </div>
        <div class="p-4 SMN_effect-24">
          <h1 class="font-400 mb-4 text-2xl flex justify-between items-center">
            <span>Kaizen Tasks</span>
            <div>
              <Icon name="logos:nuxt-icon" />
              <Icon name="logos:vue" />
              <Icon name="logos:tailwindcss-icon" />
              <Icon name="devicon:supabase" />
            </div>
          </h1>
          <p class="texte-400 text-sm mb-4">
            This project used to be my first project with my current stack as a
            front-end developer. I used Vue.js, Nuxt, TailwindCSS, and Supabase
            to build this project.
          </p>
          <a
            href="#"
            v-motion-slide-left
            class="text-gray-50 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>Read More</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"    
              class="text-gray-50 ml-2 rotate-45"
            />
        </a>
        </div>
      </div>
      <div class="w-full h-full flex flex-col lg:p-4">
        <div class="relative w-full lg:h-[320px] overflow-hidden rounded-md">
          <img
            src="../assets/images/sciss.png"
            class="w-full h-full object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
          >
            <span class="font-400 text-2xl"> 
                View Project
            </span>
          </div>
        </div>
        <div class="p-4 SMN_effect-24">
          <h1 class="font-400 mb-4 text-2xl flex justify-between items-center">
            <span>Kaizen Tasks</span>
            <div>
              <Icon name="logos:nuxt-icon" />
              <Icon name="logos:vue" />
              <Icon name="logos:tailwindcss-icon" />
              <Icon name="devicon:supabase" />
            </div>
          </h1>
          <p class="texte-400 text-sm mb-4">
            This project used to be my first project with my current stack as a
            front-end developer. I used Vue.js, Nuxt, TailwindCSS, and Supabase
            to build this project.
          </p>
          <a
            href="#"
            v-motion-slide-left
            class="text-gray-50 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>Read More</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"    
              class="text-gray-50 ml-2 rotate-45"
            />
        </a>
        </div>
      </div>

    </div>
  </div>
</template>
<style lang="css" scoped></style>
<script setup lang="ts"></script>
