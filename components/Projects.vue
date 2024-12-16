<template>
  <div class="w-full h-full flex items-center justify-center text-gray-50">
    <div
      class="lg:w-5/6 w-11/12 h-full lg:grid lg:grid-cols-2 bg-transparent border-gray-50 rounded-xl flex flex-col justify-around"
    >
      <div class="w-full h-full flex flex-col lg:p-4">
        <a href="https://projet-kaizen.vercel.app/">
          <div class="relative w-full lg:h-full overflow-hidden rounded-md">
            <img
              src="../assets/images/kaizenSite.png"
              class="w-full h-[300px] object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
            >
              <span class="font-400 text-2xl"> View Project </span>
            </div>
          </div>
        </a>

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
        <a href="https://photolio-dev-beta.vercel.app/">
          <div class="relative w-full lg:h-full overflow-hidden rounded-md">
            <img
              src="../assets/images/photolioSite.png"
              class="w-full h-[300px] object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
            >
              <span class="font-400 text-2xl">View Project</span>
            </div>
          </div>
        </a>

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
          <NuxtLink
            v-motion-slide-left
            to="/projet/photolio"
            class="text-gray-50 hover:text-green-700 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>Read More</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"
              class="text-gray-50 ml-2 rotate-45"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="w-full h-full flex flex-col p-4">
        <div class="relative w-full lg:h-full overflow-hidden rounded-md">
          <a href="/">
          <img
            src="../assets/images/portfolioSite.png"
            class="w-full h-[300px] object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
          >
            <span class="font-400 text-2xl"> View Project </span>
          </div>
        </a>
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
          <NuxtLink
            v-motion-slide-left
            to="/projet/portfolio"
            class="text-gray-50 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>Read More</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"
              class="text-gray-50 ml-2 rotate-45"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="w-full h-full flex flex-col lg:p-4">
        <div class="relative w-full lg:h-full overflow-hidden rounded-md">
          <img
            src="../assets/images/ecommerce.png"
            class="w-full h-[300px] object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
          >
            <span class="font-400 text-2xl"> View Project </span>
          </div>
        </div>
        <div class="p-4 SMN_effect-24">
          <h1 class="font-400 mb-4 text-2xl flex justify-between items-center">
            <span>Dashboard Admin</span>
            <div class="flex justify-around items-center">
              <Icon name="logos:nuxt-icon" />
              <Icon name="logos:vue" />
              <Icon name="logos:tailwindcss-icon" />
              <Icon name="simple-icons:shadcnui" class="mr-1" />
              <Icon name="devicon:supabase" />
            </div>
          </h1>
          <p class="texte-400 text-sm mb-4">
            Ce projet est un projet que j'ai fais pour faire une gestion de boutique ecommerce 
            il permet de répondre a toutes les demandes d'un dashboard classic en ajoutant des fonctionnalités
            de gestion de produit, de gestion de client, de gestion de commande et de gestion de stock.
          </p>
          <NuxtLink
            to="/projet/ecommerce"
            v-motion-slide-left
            class="text-gray-50 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>Read More</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"
              class="text-gray-50 ml-2 rotate-45"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="w-full h-full flex flex-col lg:p-4">
        <a href="https://milancorp.framer.website/">
          <div class="relative w-full lg:h-full overflow-hidden rounded-md">
            <img
              src="../assets/images/ap1.png"
              class="w-full h-[300px] object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
            >
              <span class="font-400 text-2xl"> View Project </span>
            </div>
          </div>
        </a>
        <div class="p-4 SMN_effect-24">
          <h1 class="font-400 mb-4 text-2xl flex justify-between items-center">
            <span>Espal Quinconces</span>
            <div>
              <Icon name="teenyicons:framer-solid" />
              <Icon name="logos:figma" />
            </div>
          </h1>
          <p class="texte-400 text-sm mb-4">
            Cet AP a été réaliser avec l'aide de Paul Courtin, Enzo Eliazord et
            moi même nous avons créer un site web fictif pour les Quinconces.
          </p>
          <NuxtLink
            to="/projet/quinconces"
            v-motion-slide-left
            class="text-gray-50 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>Read More</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"
              class="text-gray-50 ml-2 rotate-45"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="w-full h-full flex flex-col lg:p-4">
        <div class="relative w-full lg:h-full overflow-hidden rounded-md">
          <a href="https://afterend.site/portefolio/personnage/index.php">

          <img
            src="../assets/images/superhero.png"
            class="w-full  h-[300px] object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
          >
            <span class="font-400 text-2xl"> View Project </span>
          </div>
        </a>

        </div>
        
        <div class="p-4 SMN_effect-24">
          <h1 class="font-400 mb-4 text-2xl flex justify-between items-center">
            <span>Superhero</span>
            <div>
              <Icon name="logos:php" />
              <Icon name="simple-icons:bootstrap" class="mx-1" />
              <Icon name="simple-icons:phpmyadmin" />
            </div>
          </h1>
          <p class="texte-400 text-sm mb-4">
            Cet AP a été réaliser avec l'aide de Ryan S, Matthew F et moi même
            nous avons créer un site web qui presente des superheros.
          </p>
          <NuxtLink
            to="/projet/superhero"
            v-motion-slide-left
            class="text-gray-50 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>Read More</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"
              class="text-gray-50 ml-2 rotate-45"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="w-full h-full flex flex-col lg:p-4">
        <div class="relative w-full lg:h-full overflow-hidden rounded-md">
          <img
            src="../assets/images/sciss.png"
            class="w-full h-[300px] object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
          >
            <span class="font-400 text-2xl"> View Project </span>
          </div>
        </div>
        <div class="p-4 SMN_effect-24">
          <h1 class="font-400 mb-4 text-2xl flex justify-between items-center">
            <span>Sciss</span>
            <div>
              <Icon name="skill-icons:wordpress" />
            </div>
          </h1>
          <p class="texte-400 text-sm mb-4">
            Cet AP a été réaliser par moi même j'ai pu créer un site web à
            l'identique d'un site web existant. Nous devions respecter le site
            web existant et le recréer à l'identique.
          </p>
          <NuxtLink
            to="/projet/sciss"
            v-motion-slide-left
            class="text-gray-50 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>Read More</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"
              class="text-gray-50 ml-2 rotate-45"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="w-full h-full flex flex-col lg:p-4">
        <div class="relative w-full h-full overflow-hidden rounded-md">
          <img
            src="../assets/images/hijobs.png"
            class="w-full h-[300px] object-cover transition-shadow duration-300 cursor-pointer hover:shadow-sm hover:shadow-gray-400"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100"
          >
            <span class="font-400 text-2xl"> View Project </span>
          </div>
        </div>
        <div class="p-4 SMN_effect-24">
          <h1 class="font-400 mb-4 text-2xl flex justify-between items-center">
            <span>Hijobs</span>
            <div>
              <Icon name="logos:php" />
              <Icon name="logos:tailwindcss-icon" class="mx-1" />
              <Icon name="simple-icons:phpmyadmin" />
            </div>
          </h1>
          <p class="texte-400 text-sm mb-4">
            Cet AP a été réaliser par moi, Léo et Elouann j'ai pu créer une plateforme permettant à des étudiants de trouver un travail en mettant en lien des entreprises / particuliers et des étudiants.
          </p>
          <NuxtLink
            to="/projet/hijobs"
            v-motion-slide-left
            class="text-gray-50 flex items-center text-start mt-4 texte-400 text-xl"
          >
            <span>En cours...</span>
            <Icon
              name="iconamoon:arrow-up-1-thin"
              class="text-gray-50 ml-2 rotate-45"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped></style>
<script setup lang="ts"></script>
