import type { DevToArticle } from '@/types/articleInterface';

export async function fetchDevToArticles(tag?: string, limit: number = 10): Promise<DevToArticle[]> {
  try {
    const url = new URL('https://dev.to/api/articles');
    if (tag) url.searchParams.append('tag', tag);
    url.searchParams.append('per_page', limit.toString());

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const articles: DevToArticle[] = await response.json();

    // Optionally validate the structure of the articles
    articles.forEach(article => {
      if (!article.id || !article.title || !article.description || !article.published_at || !article.url || !article.tags || !article.user) {
        throw new Error('Invalid article structure');
      }
    });

    return articles;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return [];
  }
}