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
              @click="goToHomePage"
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
  data() {
    return {
      articles: [
        {
          id: 11414,
          title: "Space X Now",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam sed, illo reiciendis asperiores quasi voluptatibus sunt! Odit, vitae dolorum. Laudantium ipsam, cupiditate voluptate eum vitae recusandae reprehenderit id pariatur?",
          readmore: "https://example.com/article1",
        },
        {
          id: 112414,
          title:
            "NASA to Provide Coverage as Dragon Departs Station with Science",
          summary:
            "NASA is set to receive scientific research samples and hardware as a SpaceX Dragon cargo resupply spacecraft departs the International Space Station on Thursday, June 29.",
          readmore: "https://example.com/article1",
        },
        {
          id: 11114,
          title:
            "NASA Invites Media to Cover Asteroid Sample Return, Logistics Call",
          summary:
            "NASA’s OSIRIS-REx (Origins, Spectral Interpretation, Resource Identification and Security – Regolith Explorer) mission will deliver the agency’s first asteroid sample collected in space to Earth on Sept. 24, 2023. Media interested in covering the landing, as well as mission activities leading up to and following the return, are invited to register",
          readmore: "https://example.com/article1",
        },
        {
          id: 11414,
          title: "Space X Now",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam sed, illo reiciendis asperiores quasi voluptatibus sunt! Odit, vitae dolorum. Laudantium ipsam, cupiditate voluptate eum vitae recusandae reprehenderit id pariatur?",
          readmore: "https://example.com/article1",
        },
        {
          id: 11414,
          title: "Space X Now",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam sed, illo reiciendis asperiores quasi voluptatibus sunt! Odit, vitae dolorum. Laudantium ipsam, cupiditate voluptate eum vitae recusandae reprehenderit id pariatur?",
          readmore: "https://example.com/article1",
        },
        {
          id: 11414,
          title: "Space X Now",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam sed, illo reiciendis asperiores quasi voluptatibus sunt! Odit, vitae dolorum. Laudantium ipsam, cupiditate voluptate eum vitae recusandae reprehenderit id pariatur?",
          readmore: "https://example.com/article1",
        },
        {
          id: 11414,
          title: "Space X Now",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam sed, illo reiciendis asperiores quasi voluptatibus sunt! Odit, vitae dolorum. Laudantium ipsam, cupiditate voluptate eum vitae recusandae reprehenderit id pariatur?",
          readmore: "https://example.com/article1",
        },
        {
          id: 11414,
          title: "Space X Now",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam sed, illo reiciendis asperiores quasi voluptatibus sunt! Odit, vitae dolorum. Laudantium ipsam, cupiditate voluptate eum vitae recusandae reprehenderit id pariatur?",
          readmore: "https://example.com/article1",
        },
        {
          id: 11414,
          title: "Space X Now",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam sed, illo reiciendis asperiores quasi voluptatibus sunt! Odit, vitae dolorum. Laudantium ipsam, cupiditate voluptate eum vitae recusandae reprehenderit id pariatur?",
          readmore: "https://example.com/article1",
        },
        {
          id: 11414,
          title: "Space X Now",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam sed, illo reiciendis asperiores quasi voluptatibus sunt! Odit, vitae dolorum. Laudantium ipsam, cupiditate voluptate eum vitae recusandae reprehenderit id pariatur?",
          readmore: "https://example.com/article1",
        },
      ],
    };
  },
  methods: {
    goToHomePage() {
      console.log("testing link");
    },
  },
};
</script>
