import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    getters: {//类似于计算属性
        doubleCity (state) {
            return state.city + ' ' + state.city;
        }
    }
});