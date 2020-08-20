const state = {
  counter: 0,
}

const getters = {
  doubleCounter: (state) => {
    return state.counter * 2
  },
  stringCounter: (state) => {
    return state.counter + " Clicks"
  },
}

const mutations = {
  increment: (state, payload) => {
    state.counter += payload
  },
  decrement: (state, payload) => {
    state.counter -= payload
  },
}

const actions = {
  // could destructure off 'commit' from context here
  increment: (context, payload) => {
    console.log(payload)
    context.commit("increment", payload)
  },
  decrement: (context, payload) => {
    context.commit("decrement", payload)
  },
  asyncIncrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit("increment", payload.by)
    }, payload.duration)
  },
  asyncDecrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit("decrement", payload.by)
    }, payload.duration)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
