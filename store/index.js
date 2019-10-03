export const state = () => ({
    ssr: null
});

export const getters = {};

export const mutations = {
    SET_RENDERER: (state, value) => {
        state.ssr = value;
    }
};

export const actions = {};
