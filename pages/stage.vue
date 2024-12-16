<template>
    <div class="h-full w-full flex items-center bg-gray-950 text-400 justify-center">
        <div class="w-5/6 flex items-center justify-center">
            <Navbar class="mt-8"></Navbar>
                <div class="h-full bg-gray-950 mb-32 flex justify-center items-center">
                  <div class="w-3/4 h-3/4 mt-32">
                    <div class="flex h-full w-full items-center text-slate-950 justify-center">
                      <div
                        class="grid h-full w-full gap-4 p-2 grid-cols-4 text-slate-950 grid-rows-2 rounded-lg shadow-md"
                        v-motion-fade-visible
                      >
                        <div
                          class="col-span-2 row-span-1 bg-gray-100 rounded-lg shadow-md flex items-start justify-start"
                        >
                          <div class="p-6 flex flex-col justify-around h-full text-slate-950">
                            <h1 class="brico-800 text-2xl">Mon stage à Aurion</h1>
                            <p class="font-400">
                              J'ai effectué mon stage de fin d'étude chez Aurion, une
                              entreprise spécialisée dans les logiciels de gestion de
                              ressources humaines. J'ai pu travailler sur des projets de
                              développement web et mobile.
                            </p>
                            <div class="flex items-center justify-between">
                              <span
                              class="text-gray-50 py-2 px-4 rounded-lg bg-slate-950 brico-800"
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
                          v-motion-fade-visible
                        >
                          <div class="w-full h-full relative">
                            <h1
                              class="absolute z-50  w-full text-xl p-2 text-slate-950 brico-800"
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
                          v-motion-fade-visible
                        >
                          <div class="p-4 w-full text-slate-950">
                            <h1 class="brico-800 text-xl">Technologies & Outil :</h1>
                            <div class="flex flex-col text-lg text-200 mt-4 items-center">
                              <span class="flex items-center w-full justify-between">
                                <h1>Gitlab</h1>
                                <Icon name="logos:gitlab" class="size-6" />
                              </span>
                              <span class="flex items-center w-full justify-between">
                                <h1>Vue 3</h1>
                                <Icon name="logos:vue" class="size-6" />
                              </span>
                              <span class="flex items-center w-full justify-between">
                                <h1>Nuxt 3</h1>
                                <Icon name="logos:nuxt-icon" class="size-6" />
                              </span>
                              <span class="flex items-center w-full justify-between">
                                <h1>MariaDB</h1>
                                <Icon name="devicon:mariadb" class="size-6" />
                              </span>
                              <span class="flex items-center w-full justify-between">
                                <h1>Typescript</h1>
                                <Icon name="devicon:typescript" class="size-6" />
                              </span>
                              <span class="flex items-center w-full justify-between">
                                <h1>Git</h1>
                                <Icon name="devicon:git" class="size-6" />
                              </span>
                            </div>
                          </div>
                        </div>
              
                        <div
                          class="col-span-3 row-span-4 bg-gray-100 rounded-lg shadow-md flex items-start justify-start overflow-hidden"
                          v-motion-fade-visible
                        >
                          <div class="flex justify-between items-center w-full h-full">
                            <div class="p-4 h-full flex flex-col items-start justify-around">
                              <h1 class="brico-800 text-2xl">Compétences :</h1>
                              <ul class="font-200">
                                <li class="brico-200">- Développement web</li>
                                <li class="brico-200">- Développement mobile</li>
                                <li class="brico-200">- Gestion de projet</li>
                                <li class="brico-200">- Travail en équipe</li>
                              </ul>
                              <div class="flex items-center justify-around h-full">
                                <a
                                  href="https://www.canva.com/design/DAGFgw4bhJs/kSXR1s1MMP6PI0I8dU1vHQ/view?utm_content=DAGFgw4bhJs&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                                  class="text-gray-50 py-2 text-center text-sm px-4 rounded-lg bg-slate-950 brico-800"
                                  >Voir un récapitulatif</a
                                >
                                <span class="bg-red-400 text-sm rounded-md text-center ml-2 py-2 px-3">
                                  En équipe
                                </span>
                              </div>
                            </div>
                            <div class="w-full flex items-center justify-center">
                                <img src="../assets/images/aurion.png" class="w-2/3 rounded-md rotate-12" />
                            </div>
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
import aurion from "@/assets/images/aurion.png";
import topsellerie from "@/assets/images/topsellerie.png";

const items = [auberdog, agm, aurion, topsellerie];
</script>