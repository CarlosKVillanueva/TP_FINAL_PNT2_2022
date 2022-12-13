import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        urlFamiliares: "http://localhost:8080/api/familiares",
        urlMascotas: "http://localhost:8080/api/mascotas",
        urlTurnos: "http://localhost:8080/api/turnos",
        familiares: [],
        mascotas: [],
        turnos: []
    },
    actions : {
        cargarFamiliares({commit}, familiares) {
            commit("cargarFamiliares", familiares)
        },
        cargarMascotas({commit}, mascotas) {
            commit("cargarMascotas", mascotas)
        },
        cargarTurnos({commit}, turnos) {
            commit("cargarTurnos", turnos)
        },

    },
    mutations : {
        cargarFamiliares(state, familiares) {
            state.familiares = familiares
        },
        cargarMascotas(state, mascotas) {
            state.mascotas = mascotas
        },
        cargarTurnos(state, turnos) {
            state.turnos = turnos
        },

    }
})