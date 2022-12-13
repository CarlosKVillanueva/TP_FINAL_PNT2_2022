import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        urlFamiliares: "http://localhost:8080/api/familiares",
        urlMascotas: "http://localhost:8080/api/mascotas",
        urlTurnos: "http://localhost:8080/api/turnos",
        familiares: [],
        mascotas: [],
        turnos: []
    },
    actions: {
        cargarFamiliares({commit}, familiares) {
            commit("cargarFamiliaresMDB", familiares)
        },
        cargarMascotas({commit}, mascotas) {
            commit("cargarMascotasMDB", mascotas)
        },
        cargarTurnos({commit}, turnos) {
            commit("cargarTurnosMDB", turnos)
        },

    },
    mutations: {
        cargarFamiliaresMDB(state, familiares) {
            state.familiares = familiares;
        },
        cargarMascotasMDB(state, mascotas) {
            state.mascotas = mascotas
        },
        cargarTurnosMDB(state, turnos) {
            state.turnos = turnos
        },

    }
})