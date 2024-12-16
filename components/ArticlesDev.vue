<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchDevToArticles } from "@/utils/fetchArticles";
import type { DevToArticle } from "@/types/articleInterface.ts";

const articles = ref<DevToArticle[]>([]);

onMounted(async () => {
  try {
    const data = await fetchDevToArticles("Swift", 9);
    articles.value = data;
    console.log("Articles fetched:", articles.value);
  } catch (error) {
    console.log(error + "mgl");
  }
});
</script>

<template>
  <div class="container">
    <div class="h-auto w-full flex justify-center items-center">
      <Marquee horizontal class="[--duration:20s]">

      <div
        v-for="article in articles"
        :key="article.id"
        class="bg-white w-96 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      >
        <img
          v-if="article.cover_image"
          :src="article.cover_image"
          :alt="article.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            {{ article.title }}
          </h3>
          <p class="text-gray-600 mb-4 line-clamp-3">
            {{ article.description }}
          </p>
          <div
            class="flex items-center justify-between text-sm text-gray-500 mb-4"
          >
            <div class="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>{{ article.user.name }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>{{ article.readable_publish_date }}</span>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in article.tags.slice(0, 3)"
              :key="tag"
              class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              #{{ tag }}
            </span>
          </div>
          <a
            :href="article.url"
            target="_blank"
            rel="noopener noreferrer"
            class="block text-center w-full bg-gray-950 text-white py-2 rounded-md hover:bg-gray-50 hover:text-gray-950  transition-colors"
          >
            Lire l'article
          </a>
        </div>
      </div>
      </Marquee>
    </div>
  </div>
</template>