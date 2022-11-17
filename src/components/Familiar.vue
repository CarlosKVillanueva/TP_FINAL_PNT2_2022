<template>
    <div class="container">
        <div class="col-12 mt-5">
            <h2>Lista de Familiares</h2>
            <hr />
            <hr />
            <button
                class="btn btn-success my-3 mr-3"
                @click="getFamiliaresMDB()"
            >
                GET Familiares
            </button>
            <button
                class="btn btn-success my-3 mr-3"
                @click="postFamiliarMDB()"
            >
                POST Familiar
            </button>
            <div v-if="familiares.length" class="table-responsive">
                <table class="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">DNI</th>
                            <th scope="col">Nombre completo</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">direccion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="familiar in familiares" :key="familiar.id">
                            <td>{{ familiar.dni }}</td>
                            <td>
                                {{ familiar.nombre + " " + familiar.apellido }}
                            </td>
                            <td>{{ familiar.email }}</td>
                            <td>{{ familiar.telefono }}</td>
                            <td>{{ familiar.direccion }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <FormularioFamiliar />
            </div>
        </div>
    </div>
</template>

<script>
import FormularioFamiliar from "./FormularioFamiliar.vue";
export default {
    name: "FamiliarComponent",
    components: {
        FormularioFamiliar,
    },
    props: [],
    mounted() {},
    data() {
        return {
            url: "http://localhost:8080/api/familiares",
            familiares: [],
            formData: {
                dni: null,
                nombre: null,
                apellido: null,
                email: null,
                telefono: null,
                direccion: null,
            },
        };
    },
    methods: {
        async getFamiliaresMDB() {
            try {
                let respuesta = await this.axios(this.url);
                this.familiares = respuesta.data;
            } catch (error) {
                console.error(error);
            }
        },
        async postFamiliarMDB() {
            try {
                let respuesta = await this.axios.post(this.url, /*formdata,*/ { 'content-type' : 'application/json' });
                this.familiares = respuesta.data;
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
