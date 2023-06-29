import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articles: [],
        currentArticle: null
    },

    getters: {
        articles: state => {
            return state.articles
        },
        article: state => {
            return state.currentArticle
        }
    },

    mutations: {
        setArticles(state, articles) {
            state.articles = articles
        },
        setCurrentArticle(state, article) {
            state.currentArticle = article
        }
    },
    actions: {
        async getArticles({ commit }) {
            const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles/?has_event=true&has_launch=true&limit=20');
            const articles = response.data.results
            commit('setArticles', articles)
        },
        async getArticle({ commit }, articleId) {
            const response = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles/${articleId}`);
            const article = response.data;
            commit('setCurrentArticle', article);
        }
    },
})
