<template>
  <div>
    <h1>Home</h1>
    <table class="auto">
      <thead>
        <tr class="">
          <th>ID</th>
          <th>Title</th>
          <th>Summary</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody class="">
        <tr class="" v-for="article in articles" :key="article.id">
          <td>{{ article.id }}</td>
          <td>{{ article.title }}</td>
          <td>{{ article.summary }}</td>
          <td><a :href="article.readmore">Read more</a></td>
        </tr>
      </tbody>
    </table>
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
};
</script>
