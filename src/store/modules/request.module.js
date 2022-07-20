import axios from '@/axios/request';
import store from '@/store';

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    setRequests(state, requests) {
      state.requests = requests;
    },
    addRequest(state, request) {
      state.requests.push(request);
    },
  },
  actions: {
    async create({ commit, dispatch }, payload) {
      try {
        const token = store.getters['auth/token'];
        const { data } = await axios.post(
          `/requests.json?auth=${token}`,
          payload
        );
        commit('addRequest', { id: data.name, ...payload });
        dispatch(
          'setMessage',
          {
            value: 'Application successfuly created',
            type: 'primary',
          },
          { root: true }
        );
      } catch (error) {
        dispatch(
          'setMessage',
          {
            value: error.message,
            type: 'danger',
          },
          { root: true }
        );
      }
    },
    async load({ commit, dispatch }) {
      try {
        const token = store.getters['auth/token'];
        const { data } = await axios.get(`/requests.json?auth=${token}`);
        const requests = Object.keys(data).map((id) => ({
          id,
          ...data[id],
        }));
        commit('setRequests', requests);
      } catch (error) {
        dispatch(
          'setMessage',
          {
            value: error.message,
            type: 'danger',
          },
          { root: true }
        );
      }
    },
    async loadById({ dispatch }, id) {
      try {
        const token = store.getters['auth/token'];
        const { data } = await axios.get(`/requests/${id}.json?auth=${token}`);
        return data;
      } catch (error) {
        dispatch(
          'setMessage',
          {
            value: error.message,
            type: 'danger',
          },
          { root: true }
        );
      }
    },
    async remove({ dispatch }, id) {
      try {
        const token = store.getters['auth/token'];
        const { data } = await axios.delete(
          `/requests/${id}.json?auth=${token}`
        );
        dispatch(
          'setMessage',
          {
            value: 'Application deleted',
            type: 'primary',
          },
          { root: true }
        );
      } catch (error) {
        dispatch(
          'setMessage',
          {
            value: error.message,
            type: 'danger',
          },
          { root: true }
        );
      }
    },
    async update({ dispatch }, request) {
      try {
        const token = store.getters['auth/token'];
        await axios.put(`/requests/${request.id}.json?auth=${token}`, request);
        dispatch(
          'setMessage',
          {
            value: 'Application updated',
            type: 'primary',
          },
          { root: true }
        );
      } catch (error) {
        dispatch(
          'setMessage',
          {
            value: error.message,
            type: 'danger',
          },
          { root: true }
        );
      }
    },
  },
  getters: {
    requests(state) {
      return state.requests;
    },
  },
};
