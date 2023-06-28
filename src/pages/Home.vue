<template>
  <div class="flex justify-center items-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-4">Blog Articles</h1>
      <div class="overflow-x-auto">
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
              @click="goToShowPage"
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
      <p class="pt-10">
        Blog assessment for Contractuo. Ioannis Kantiloros 2023.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.getters.articles;
    },
  },
  methods: {
    goToShowPage() {
      console.log("testing link");
    },
  },
};
</script>
