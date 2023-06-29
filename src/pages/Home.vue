<template>
  <div class="flex justify-center items-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-4">Space Blog Articles</h1>
      <div v-if="articles.length > 0" class="overflow-x-auto">
        <table class="table-auto mx-auto bg-white">
          <thead>
            <tr class="bg-blue-100 shadow-lg border border-slate-400">
              <th class="border border-slate-400 px-4 py-2">ID</th>
              <th class="border border-slate-400 px-4 py-2">Title</th>
              <th class="border border-slate-400 px-4 py-2">Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="article in articles"
              :key="article.id"
              class="cursor-pointer bg-slate-100"
              @click="goToShowPage(article)"
            >
              <td class="border border-slate-400 px-4 py-2">
                {{ article.id }}
              </td>
              <td
                class="border border-slate-400 px-4 py-2 break-words max-w-xs"
              >
                {{ article.title }}
              </td>
              <td
                class="border border-slate-400 px-4 py-2 break-words max-w-xl"
              >
                {{ article.summary }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <h1>Loading...</h1>
      </div>
      <div v-if="articles.length > 0" class="">
        <p class="h-14 w-full flex items-center justify-center">
          Blog assessment for Contractuo. Ioannis Kantiloros 2023.
        </p>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
// imports for helpers in Vuex lib
import { mapState, mapActions } from "vuex";
import { RouterLink } from "vue-router";

export default {
  computed: {
    // maps the articles state from vuex store to the component
    ...mapState(["articles"]),
  },
  //like useEffect() React get's executed when the component is mounted in the DOM. Fetches the articles
  mounted() {
    this.getArticles();
  },
  methods: {
    goToShowPage(article) {
      // this.$router.push(`/article/${articleId}`);
      this.$router.push({
        path: `/article/${article.id}`,
        query: { article: JSON.stringify(article) },
      });
    },
    // helper function that allows to directly call getArticles from within the component
    ...mapActions(["getArticles"]),
  },
  components: { RouterLink },
};
</script>
