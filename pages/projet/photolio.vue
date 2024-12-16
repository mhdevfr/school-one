<template>
    <div class="h-full bg-gray-50 text-gray-950 flex flex-col justify-center items-center">
        <Navbar class="mt-12"></Navbar>
        <div
      class="w-5/6 md:w-3/4 h-full lg:w-2/3 mt-32 bg-gray-50 rounded-lg shadow-xl"
    >
      <div class="w-full h-64 md:h-80 overflow-hidden rounded-lg mb-6">
        <img
          class="w-full h-screen object-cover"
          src="../../assets/images/ap1.png"
        />
      </div>

      <div class="text-lg leading-relaxed">
        <p class="mb-4">
          Voici un projet réalisé sur Framer durant ma première année de BTS,
          dans le cadre de mon AP. Ce projet avait
          pour objectif de nous initier à l’utilisation d’un CMS, en
          l’occurrence Framer. Il se déroulait en deux étapes principales. La
          première consistait à concevoir une maquette pour le site. Pour cela,
          nous avons utilisé divers outils de conception, ce qui nous a permis
          d’acquérir des compétences en matière de design de maquettes. Par
          ailleurs, nous avons étudié les options d’hébergement, bien que
          Framer intègre déjà une solution d’hébergement. La seconde étape
          était la création du site en lui-même sur Framer. Sous plusieurs
          contraintes imposées par nos enseignants, nous avons dû construire le
          site en respectant des spécifications précises. Cette expérience nous
          a permis de consolider nos compétences dans l’utilisation des CMS et
          de mieux comprendre leur fonctionnement.
        </p>
        <p class="text-gray-400 italic brico-800 text-2xl">Technologies utilisées : 
            <span class="px-2 py-1 bg-black ml-4 text-white rounded-full">Framer</span>
        </p>
        <p class="text-slate-950 brico-200 text-lg">
          <span>Travail en équipe</span>
      </p>
      </div>

      <div class="mt-8 flex justify-between items-center">
        <a
          href="https://milancorp.framer.website"
          class="text-blue-500 hover:underline"
          >Voir le projet</a
        >
        <span
          class="bg-blue-500 text-white px-4 items-center flex py-2 rounded-lg"
        >
          <Icon name="mdi:calendar" class="size-9 mx-1 text-gray-50" />
          Novembre - Decembre 2023</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
</style>