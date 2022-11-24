<template>
    <div class="container">
        <div class="col-12 mt-5">
            <h2>Listado de Familiares</h2>
            <div v-if="familiares.length" class="table-responsive">
                <table class="table mt-5">
                    <thead>
                    <tr>
                        <th scope="col">Dni</th>
                        <th scope="col">Nombre completo</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Direccion</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="familiar in familiares" :key="familiar.id">
                        <td>{{ familiar.dni }}</td>
                        <td>{{ `${ familiar.nombre } ${ familiar.apellido }` }}</td>
                        <td>{{ familiar.email }}</td>
                        <td>{{ familiar.telefono }}</td>
                        <td>{{ familiar.direccion }}</td>
                        <td>
                            <button class="btn btn-danger" @click="deleteFamiliarMDB(familiar.dni)"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-center">
                    <button v-if="showButton" class="btn btn-success my-3 mr-3" @click="renderForm(), renderButton()">
                        Registrar Familiar
                    </button>
                </div>
            </div>
            <div>
                <FormularioFamiliar
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
import FormularioFamiliar from "./FormularioFamiliar.vue";

export default {
    name: "FamiliarComponent",
    components: {
        FormularioFamiliar,
    },
    props: [],
    mounted() {
        this.getFamiliaresMDB()
    },
    data() {
        return {
            url: "http://localhost:8080/api/familiares",
            familiares: [],
            showComponent: false,
            showButton: true,
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
                let respuesta = await this.axios( this.url );
                this.familiares = respuesta.data;
            } catch ( error ) {
                console.error( error );
            }
        },
        async deleteFamiliarMDB( dni ) {
            try {
                await this.axios.delete( `${ this.url }?dni=${ dni }` );
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
