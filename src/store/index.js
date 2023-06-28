import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
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
                id: 153565,
                title: "ULA Completes Vulcan FRF Test",
                summary:
                    "The United Launch Alliance successfully test fired the BE-4 engines for its new Vulcan rocket on the launch pad yesterday. The company is still investigating what happened in an earlier ",
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
        ]
    },

    getters: {
        articles: state => {
            return state.articles
        },
        article: state => id => {
            return state.articles.find(element => element.id === id)
        }
    },

    mutations: {},

    actions: {},
})
