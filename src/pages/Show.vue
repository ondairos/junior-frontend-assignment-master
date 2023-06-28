<template>
  <div class="flex flex-col justify-center items-center text-center">
    <div
      v-if="article"
      class="flex flex-col items-center justify-center text-center h-screen"
    >
      <img :src="article.image_url" alt="" class="h-1/2 w-1/2" />
      <div class="pt-10 w-1/2 bg-slate-300 shadow-lg">
        <h1 class="mb-5 font-bold text-2xl">{{ article.title }}</h1>
        <a
          class="text-white border border-spacing-2 border-blue-500 rounded p-2 bg-blue-500 hover:bg-blue-700"
          :href="article.url"
          target="_blank"
          >Open Article</a
        >
        <p class="mt-5">
          <a :href="article.url" target="_blank" class="">{{
            article.summary
          }}</a>
        </p>
        <button
          class="mt-5 mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-500 rounded"
          @click="goToHomePage"
        >
          Home
        </button>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <div v-if="article" class="">
      <p class="w-full flex items-center justify-center">
        Blog assessment for Contractuo. Ioannis Kantiloros 2023.
      </p>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      article: null,
    };
  },
  created() {
    // this.getArticle();
    const articleId = this.$route.params.id;
    // console.log(`id in created : ${articleId}`);
    if (articleId) {
      this.getArticle(articleId);
    }
    const articleData = this.$route.query.article;
    if (articleData) {
      this.article = JSON.parse(articleData);
    } else {
      this.getArticle();
    }
  },
  methods: {
    goToHomePage() {
      this.$router.push(`/`);
    },
    // in vue2 use regular functions to bind this. avoid arrows
    async getArticle() {
      const articleId = this.$route.params.id;
      // console.log(articleId);
      if (articleId) {
        const response = await axios.get(
          `https://api.spaceflightnewsapi.net/v4/articles/${articleId}`
        );
        this.article = response.data;
      } else {
        this.goToHomePage();
      }
    },
  },
};
</script>
