<template>
    <div class="h-screen bg-black flex justify-center items-center">
      <navbar class="fixed z-50 top-0 rounded-xl text-gray-50 mt-12" />
      <div class="w-3/4 h-3/4 mt-32">
        <div class="flex h-full w-full items-center justify-center">
          <div
            class="grid h-full w-full gap-4 p-2 grid-cols-4 grid-rows-2 rounded-lg shadow-md"
          >
            <div
              class="col-span-2 row-span-1 bg-gray-100 rounded-lg shadow-md flex items-start justify-start"
            >
              <div class="p-6 flex flex-col justify-around h-full text-slate-950">
                <h1 class="brico-800 text-2xl">Mon stage à Aurion</h1>
                <p class="brico-200">
                  J'ai effectué mon stage de fin d'étude chez Aurion, une
                  entreprise spécialisée dans les logiciels de gestion de
                  ressources humaines. J'ai pu travailler sur des projets de
                  développement web et mobile.
                </p>
                <div class="flex items-start justify-between">
                  <span
                    class="px-5 py-2 bg-blue-400 rounded-lg w-1/2 brico-800 text-center"
                    >Du 06/05 au 15/06/2024
                  </span>
                  <a
                    href="https://www.agence-aurion.fr/"
                    class="text-gray-50 py-2 px-4 rounded-lg bg-slate-950 brico-800"
                    >Voir le site</a
                  >
                </div>
              </div>
            </div>
  
            <div
              class="col-span-2 row-span-1 bg-gray-100 rounded-lg shadow-md flex items-center justify-center overflow-hidden"
            >
              <div class="w-full h-full relative">
                <h1
                  class="absolute z-50 bg-white w-full text-xl p-2 text-slate-950 brico-800"
                >
                </h1>
                <UCarousel
                  v-slot="{ item }"
                  :items="items"
                  :ui="{ item: 'basis-full' }"
                  class="rounded-lg overflow-hidden w-full h-full"
                  arrows
                >
                  <img
                    :src="item"
                    class="w-full h-full object-cover"
                    draggable="false"
                  />
                </UCarousel>
              </div>
            </div>
  
            <div
              class="col-span-1 row-span-4 bg-gray-100 rounded-lg shadow-md flex items-start justify-start"
            >
              <div class="p-4 w-full text-slate-950">
                <h1 class="brico-800 text-xl">Technologies & Outil</h1>
                <div class="flex flex-col text-2xl brico-200 mt-4 items-center">
                  <span class="flex items-center w-full justify-between">
                    <h1>Gitlab</h1>
                    <Icon name="logos:gitlab" class="size-10" />
                  </span>
                  <span class="flex items-center w-full justify-between">
                    <h1>Vue 3</h1>
                    <Icon name="logos:vue" class="size-10" />
                  </span>
                  <span class="flex items-center w-full justify-between">
                    <h1>Nuxt 3</h1>
                    <Icon name="logos:nuxt-icon" class="size-10" />
                  </span>
                  <span class="flex items-center w-full justify-between">
                    <h1>MariaDB</h1>
                    <Icon name="devicon:mariadb" class="size-10" />
                  </span>
                  <span class="flex items-center w-full justify-between">
                    <h1>Typescript</h1>
                    <Icon name="devicon:typescript" class="size-10" />
                  </span>
                  <span class="flex items-center w-full justify-between">
                    <h1>Git</h1>
                    <Icon name="devicon:git" class="size-10" />
                  </span>
                </div>
              </div>
            </div>
  
            <div
              class="col-span-3 row-span-4 bg-gray-100 rounded-lg shadow-md flex items-start justify-start overflow-hidden"
            >
              <div class="flex">
                <div class="p-4 h-full flex flex-col justify-around">
                  <h1 class="brico-800 text-2xl">Compétences :</h1>
                  <ul>
                    <li class="brico-200">- Développement web</li>
                    <li class="brico-200">- Développement mobile</li>
                    <li class="brico-200">- Gestion de projet</li>
                    <li class="brico-200">- Travail en équipe</li>
                  </ul>
                  <div class="flex items-center justify-around h-full">
                    <a
                      href="https://www.canva.com/design/DAGFgw4bhJs/kSXR1s1MMP6PI0I8dU1vHQ/view?utm_content=DAGFgw4bhJs&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                      class="text-gray-50 py-2 text-center px-4 rounded-lg bg-slate-950 brico-800"
                      >Voir un récapitulatif</a
                    >
                    <span class="bg-red-400 rounded-md text-center ml-2 py-2 px-3">
                      En équipe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import auberdog from "@/assets/images/auberdog.png";
  import agm from "@/assets/images/agm.png";
  import marceau from "@/assets/images/marceau.png";
  import topsellerie from "@/assets/images/topsellerie.png";
  
  const items = [auberdog, agm, marceau, topsellerie];
  </script>