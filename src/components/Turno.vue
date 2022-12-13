<template>
    <div class="container">
        <div class="col-12 mt-5">
            <h2>Lista de Turnos</h2>
            <div v-if="turnos.length" class="table-responsive">
                <table class="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Codigo familiar</th>
                            <th scope="col">Codigo mascota</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="turno in this.turnos" :key="turno.id">
                            <td>{{ turno.fecha }}</td>
                            <td>{{ turno.hora }}</td>
                            <td>{{ turno.familiar.dni }}</td>
                            <td>{{ turno.mascota.id }}</td>
                            <td>
                                <button class="btn btn-danger" @click="deleteTurnoMDB(turno.fecha, turno.hora)"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-center">
                    <button v-if="showButton" class="btn btn-success my-3 mr-3" @click="renderForm(), renderButton()">
                        Registrar Turno
                    </button>
                </div>
            </div>
			<div>
				<FormularioTurno
                        v-if="showComponent"
                />
			</div>

            <div v-if="showComponent" class="d-flex justify-content-center">
                <button class="btn btn-danger my-3 mr-3" @click="renderForm(), renderButton()">
                    Cancelar
                </button>
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
            url: this.$store.state.urlTurnos,
            turnos: [],
            showComponent: false,
            showButton: true,
            formData: {
                fecha: null,
                hora: null,
                familiar: null,
                mascota: null
            }
        };
    },
    methods: {
        async getTurnosMDB() {
            try {
                let respuesta = await this.axios(this.url);
                this.turnos = respuesta.data;
            } catch (error) {
                console.error(error);
            }
        },
        async deleteTurnoMDB( fecha, hora ) {
            try {
                await this.axios.delete( `${ this.url }?fecha=${ fecha }&hora=${hora}` );
            } catch ( error ) {
                console.error( error );
            }
            window.location.reload();
        },
        renderForm() {
            this.showComponent = !this.showComponent
        },
        renderButton() {
            this.showButton = !this.showButton
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
