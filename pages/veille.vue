<template>
  <div
    class="w-full h-screen flex bg-gray-950 text-gray-50 font-400 flex-col justify-center items-center"
  >
    <Navbar class="mt-8  h-16"></Navbar>
    <div class="w-3/5  flex h-full flex-col justify-center">
      <div class="flex h-3/4 mt-32 w-full items-center justify-center">
        <div
          class="grid h-full w-full gap-4  shadow-gray-50 p-4 grid-cols-4 grid-rows-4 rounded-lg"
        >
          <div
            class="col-span-4 border-[0.25px] border-opacity-45 border-gray-50 row-span-2 bg-gray-950 rounded-lg shadow-md flex items-center justify-center"
          >
            <div class="flex w-full justify-center h-full flex-col items-start p-8">
            <h1 class="text-4xl font-bold my-4 flex">Veille Technologique : </h1>
            <p class="text-400">
              Swift est un langage de programmation puissant et intuitif
              développé par Apple en 2014 pour le développement d’applications
              iOS, macOS, watchOS et tvOS. Il est conçu pour être moderne,
              sécurisé et performant. Swift remplace progressivement
              Objective-C, le langage historique d’Apple, en offrant une
              meilleure syntaxe, plus simple et plus lisible.
            </p>
            <h2 class="text-sm italic">J'utilise  <span class="underline-offset-2 decoration-orange-400 underline"><a href="https://dev.to/">Dev.to</a></span> principalement pour me renseigner sur cette technologie</h2>
            </div>
          </div>

          <div
            class="col-span-3 border-[0.25px] border-opacity-45 border-gray-50 row-span-4 bg-transparent rounded-lg overflow-hidden shadow-md flex items-center justify-center"
          >
            <ArticlesDev class=""></ArticlesDev>
          </div>

          <div
            class="col-span-1 row-span-4 border-[0.25px] border-opacity-45 border-gray-50 bg-gray-950 rounded-lg shadow-md flex flex-col items-center justify-center"
          >
          <h1 class="text-400 mb-12 text-4xl">Swift</h1>

          <Icon name="logos:swift" class="lg:size-12 size-8" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
