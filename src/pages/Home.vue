<template>
  <div class="flex justify-center items-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-4">Blog Articles</h1>
      <div class="overflow-x-auto">
        <table class="table-auto mx-auto border-separate">
          <thead>
            <tr class="bg-amber-400">
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Title</th>
              <th class="px-4 py-2">Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="article in articles"
              :key="article.id"
              class="bg-amber-100 cursor-pointer"
              @click="goToHomePage"
            >
              <td class="px-4 py-2">{{ article.id }}</td>
              <td class="px-4 py-2">{{ article.title }}</td>
              <td class="px-4 py-2 break-words max-w-xl">
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
