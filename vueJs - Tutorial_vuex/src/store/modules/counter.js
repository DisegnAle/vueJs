import * as types from '../types';

const state = {
    counter: 0
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter*2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' clicks';
    }
};

const mutations = {
    increment: (state,payload) => {
        state.counter += payload;
    },
    decrement: state => {
        state.counter--;
    }
};

const actions = {
    increment: (context, payload) =>{
        context.commit('increment', payload);
    },
    // ES6
    decrement: ({commit}) =>{
        commit('decrement');
    },
    asyncIncrement: ({commit}, payload) =>{
        setTimeout(()=>{
            commit('increment', payload.by)
        },payload.duration);
    },
    asyncDecrement: ({commit}, payload) =>{
        setTimeout(()=>{
            commit('decrement')
        },payload.duration);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}