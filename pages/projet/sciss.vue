<template>
  <div class="bg-gray-950">
    <Navbar class="mt-8" />
  <section
    class="min-h-screen flex flex-col items-center justify-center  mt-32 p-4"
  >
    <div class="max-w-4xl w-full bg-gray-50 rounded-lg shadow-lg p-6">
      <h2 class="text-3xl font-semibold mb-4 text-black">
        Présentation du Projet AP
      </h2>
      <div class="mb-6">
        <h3 class="text-xl text-black font-semibold mb-2">Description</h3>
        <p class="text-gray-700">
          Lors de ce premier projet de BTS SIO, j'ai appris à utiliser l'outil
          WordPress. L'objectif de ce projet était de créer un site web
          WordPress avec une base de données et de le personnaliser selon
          certains critères d'évaluation.
        </p>
      </div>
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-black mb-2">
          Outils Travaillés :
        </h3>
        <ul class="list-disc list-inside text-gray-700">
          <li class="flex items-center">Wordpress 
            <Icon name="simple-icons:wordpress" class="size-6 ml-4" />
          </li>
          <li class="flex items-center">PhpMyAdmin 
            <Icon name="simple-icons:phpmyadmin" class="size-6 ml-4" />
          </li>
          <li class="flex items-center">MySql
            <Icon name="logos:mysql" class="size-6 ml-4" />
          </li>
        </ul>
      </div>
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-black mb-2">
          Compétences Travaillées :
        </h3>
        <ul class="list-disc list-inside text-gray-700">
          <li>Développement web avec CMS</li>
          <li>Gestion de projet</li>
          <li>Travail en autonomie</li>
          <li>Résolution de problèmes</li>
        </ul>
      </div>
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-black mb-2">Mode de Travail :</h3>
        <p class="text-gray-700">Méthode Agile</p>
      </div>

      <a
        href="@/assets/images/tutoriel.pdf"
        class="text-blue-500 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Télécharger le protocole d'utilisation du site (PDF)
      </a>

      <div class="mb-4">
        <h3 class="text-xl font-semibold mb-2">Images</h3>
        <div class="">
          <img
            src="@/assets/images/sciss.png"
            alt="Image 1"
            class="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  </section>
</div>

</template>
<script>
export default {
  name: "ProjectAP",
};
</script>
