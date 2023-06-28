import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articles: []
    },

    getters: {
        articles: state => {
            return state.articles
        },
        article: state => id => {
            return state.articles.find(element => element.id === id)
        }
    },

    mutations: {
        setArticles(state, articles) {
            state.articles = articles
        },
    },
    actions: {
        async getArticles({ commit }) {
            const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles/?has_event=true&has_launch=true&limit=20');
            const articles = response.data.results
            commit('setArticles', articles)
        }
    },
})
