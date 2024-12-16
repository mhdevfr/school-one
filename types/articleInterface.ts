// src/utils/fetchArticles.ts
export interface DevToArticle {
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    url: string;
    cover_image?: string;
    tags: string[];
    author: {
    name: string;
    username: string;
    };
}