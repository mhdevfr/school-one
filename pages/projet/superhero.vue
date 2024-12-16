<template>
    <div class="min-h-screen w-full h-full bg-gray-950 text-gray-50 flex flex-col items-center">
        <!-- Navbar -->
    <navbar class="w-5/6 my-6" />

    <div
      class="w-2/4 my-32 font-400 bg-gray-950 border-opacity-60 tex border-[0.5px] rounded-xl flex flex-col items-center justify-center shadow-xl"
    >
    <div class="p-4 pt-8 flex items-start w-full flex-col">
      <h1 class="text-4xl font-bold font-400 text-left">Projet Site Web personnages</h1>
      <p class="text-sm opacity-80 mt-8 text-start">Site réalisée sur une période 2 mois avec Matthew Fernandes, Ryan Sirbu</p>
    </div>
    <img src="/assets/images/superhero.png" class="w-11/12 rounded-lg shadow-xl" alt="personnage">

      <div class=" p-4 w-full leading-relaxed">
        <p class="mb-4">
          Voici un projet réalisé en PHP avec Bootstrap et PhpMyAdmin durant ma
          première année de BTS, dans le cadre de mon AP. Ce projet avait pour
          objectif de nous initier au développement web dynamique et à la
          gestion de bases de données, en se concentrant sur l’univers des
          personnages, notamment ceux de l’univers des comics, Star Wars et
          Marvel. Le projet s’est déroulé en deux étapes principales.</p>
          </div>
          <img src="/assets/images/superhero2.png" class="w-11/12 rounded-lg shadow-xl" alt="personnage">

          <div>
          <p class="p-4 mb-4">
          La première étape consistait à concevoir la structure de la base de
          données dans PhpMyAdmin pour gérer les informations des personnages.
          Nous avons ainsi appris à définir les tables, les relations entre
          elles, et à manipuler les données de manière efficace. La seconde
          étape était le développement du site en PHP avec Bootstrap. Nous avons
          dû créer une interface utilisateur dynamique permettant de visualiser,
          ajouter, modifier et supprimer les personnages tout en respectant les
          contraintes imposées par nos enseignants. Ce projet nous a permis de
          renforcer nos compétences en développement back-end avec PHP, de
          découvrir l’utilisation de PhpMyAdmin pour la gestion de base de
          données, et d’améliorer notre maîtrise de Bootstrap pour créer des
          interfaces responsives.
        </p>
        <div class="p-4 mb-6 font-400">
          <div class="mb-6">
            <h3 class="text-xl  font-semibold text-black mb-2">
              Compétences Travaillées :
            </h3>
            <ul class="list-disc list-inside text-gray-50">
              <li>Développement web avec CMS</li>
              <li>Gestion de projet</li>
              <li>Travail en autonomie</li>
              <li>Résolution de problèmes</li>
            </ul>
          </div>
          <p class="text-gray-50 w-auto italic brico-800 text-xl text-center items-center justify-center flex flex-col">
            Technologies utilisées :
            <div class="flex text-center  justify-around"> 
              <span class="px-2 py-1  ml-4 text- rounded-full"
              >Bootstrap
              <Icon name="logos:bootstrap" class="size-6" />
              </span
            >
              <span class="px-2 py-1 ml-4 text- rounded-full">
                  PhpMyAdmin
                  <Icon name="simple-icons:phpmyadmin" class="size-6" />
              </span>
              <span class="px-2 py-1  ml-4 text- rounded-full">PHP
                <Icon name="logos:php" class="size-6" />
              </span>

              </div>
            
          </p>
        </div>
      </div>

      <div class="mt-8 flex justify-between w-full p-8 items-center">
        <a
            href="https://afterend.site/portefolio/personnage/index.php"

          class="text-gray-50 rounded-lg flex items-center opacity-50 py-1 px-2 bg-black disabled:opacity-50"
          >
          Voir le projet</a
        >
        <span
          class="bg-gray-950 text-white px-4 items-center flex py-2 rounded-lg"
        >
          <Icon name="mdi:calendar" class="size-6 mx-2 text-gray-50" />
          Mai - Juin 2024</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Styles supplémentaires au besoin */
</style>