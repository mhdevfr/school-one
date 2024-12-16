<template>
  <section
    class="min-h-screen mt-32 flex flex-col items-center h-full  justify-center bg-gray-950 p-4"
  >
  <Navbar class="mt-8  h-16 "></Navbar>

    <div class="max-w-4xl w-2/3 bg-gray-50 rounded-lg shadow-lg">
      <img src="@/assets/images/ap1.png" alt="Projet AP" class="w-full rounded-t-lg p-0" />
<div class="p-6">
      <h2 class="text-3xl font-semibold mb-4 text-black">
        Présentation du Projet AP
      </h2>

      <div class="mb-6 ">
        <h3 class="text-xl text-black font-semibold mb-2">Description</h3>
        <p class="text-gray-700">
          Ce projet, réalisé lors d'un atelier professionnel au cours de ma
          première année de BTS SIO, avait pour but de recréer un site web à
          l'aide du CMS de notre choix. Le site a été développé avec le CMS
          Framer.
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold text-black mb-2">
          Outils Travaillés :
        </h3>
        <ul class="list-disc list-inside text-gray-700">
          <li>Framer</li>
          <li>Figma</li>
        </ul>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold text-black mb-2">
          Compétences Travaillées :
        </h3>
        <ul class="list-disc list-inside text-gray-700">
          <li>Création de maquettes</li>
          <li>Développement web</li>
          <li>Collaboration en équipe</li>
          <li>Gestion du temps</li>
        </ul>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold text-black mb-2">Mode de Travail :</h3>
        <p class="text-gray-700">Méthode Agile</p>
        <a href="https://milancorp.framer.website/" class="text-blue-500 mb-2"
          >Lien vers le site</a
        >
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold text-black mb-2">
          Comparatif des CMS
        </h3>
        <table
          class="table-auto w-full border-collapse border border-gray-300 text-gray-700"
        >
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Critères</th>
              <th class="border border-gray-300 px-4 py-2">Framer</th>
              <th class="border border-gray-300 px-4 py-2">WordPress</th>
              <th class="border border-gray-300 px-4 py-2">Webflow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">
                Facilité d'utilisation
              </td>
              <td class="border border-gray-300 px-4 py-2">Très intuitif</td>
              <td class="border border-gray-300 px-4 py-2">
                Nécessite des plugins
              </td>
              <td class="border border-gray-300 px-4 py-2">
                Complexe pour les débutants
              </td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">Personnalisation</td>
              <td class="border border-gray-300 px-4 py-2">
                Haute flexibilité
              </td>
              <td class="border border-gray-300 px-4 py-2">
                Limité sans extensions
              </td>
              <td class="border border-gray-300 px-4 py-2">
                Bonne mais avec des contraintes
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Performances</td>
              <td class="border border-gray-300 px-4 py-2">
                Optimisées pour la vitesse
              </td>
              <td class="border border-gray-300 px-4 py-2">
                Dépend des plugins
              </td>
              <td class="border border-gray-300 px-4 py-2">Correctes</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">Apprentissage</td>
              <td class="border border-gray-300 px-4 py-2">Rapide</td>
              <td class="border border-gray-300 px-4 py-2">Intermédiaire</td>
              <td class="border border-gray-300 px-4 py-2">Long</td>
            </tr>
          </tbody>
        </table>
        <p class="text-gray-700 mt-4">
          Le choix de Framer s'est imposé grâce à son interface intuitive, ses
          performances optimales et sa capacité à rapidement produire des
          designs modernes.
        </p>
      </div>
    </div>
    </div>
  </section>
</template>
