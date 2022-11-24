<template>
    <div class="container">
        <div class="col-12 mt-5">
            <h2>Lista de Turnos</h2>
            <hr />
            <hr />
            <!-- <button class="btn btn-success my-3 mr-3" @click="getTurnosMDB()">
                GET Turnos
            </button> -->
            <!-- <button class="btn btn-success my-3 mr-3" @click="getMascotasMDB()">POST Mascota</button> -->
            <div v-if="turnos.length" class="table-responsive">
                <table class="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Codigo familiar</th>
                            <th scope="col">Codigo mascota</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="turno in turnos" :key="turno.id">
                            <td>{{ turno.fecha }}</td>
                            <td>{{ turno.hora }}</td>
                            <td>{{ turno.familiar.dni }}</td>
                            <td>{{ turno.mascota.id }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
			<div>
				<FormularioTurno />
			</div>
        </div>
    </div>
</template>

<script>
import FormularioTurno from "./FormularioTurno.vue";
export default {
    name: "TurnoComponent",
	components: {
		FormularioTurno,
	},
    props: [],
    mounted() {
        this.getTurnosMDB()
    },
    data() {
        return {
            url: "http://localhost:8080/api/turnos",
            turnos: [],
        };
    },
    methods: {
        async getTurnosMDB() {
            //https://www.npmjs.com/package/axios
            //https://github.com/axios/axios
            //https://axios-http.com/

            // ----- Promise con Sintaxis then/catch -----
            /* this.axios(this.url)
          .then( respuesta => { this.posts = respuesta.data })
          .catch( error => console.error(error) ) */

            // ----- Promise con Sintaxis async/await -----
            try {
                let respuesta = await this.axios(this.url);
                this.turnos = respuesta.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
    computed: {},
};
</script>

<style scoped>
thead {
    background: #e5561c !important;
    color: #f1f1f1;
}
</style>
