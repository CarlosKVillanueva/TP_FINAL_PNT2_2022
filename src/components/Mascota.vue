<template>
    <div class="container">
        <div class="col-12 mt-5">
          <h2
              :style="{
             backgroundColor: showButton ? '#FCF1E7' : 'green',
             color: showButton ? 'black' : 'white',
             padding: '10px',
             borderRadius: '10px'
          }"
              class="text-center"
          >
            {{ 'Lista de Mascotas' | pasarAMayuscula  | wrap('##--## ',' ##--##')}}
          </h2>
            <div v-if="mascotas.length" class="table-responsive">
                <table class="table mt-5">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Raza</th>
                        <th scope="col">Fecha de nacimiento</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Peso</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="mascota in this.$store.state.mascotas" :key="mascota.id">
                        <td>{{ mascota.id }}</td>
                        <td>{{ mascota.nombre }}</td>
                        <td>{{ mascota.raza }}</td>
                        <td>{{ mascota.fechaNacimiento }}</td>
                        <td>{{ mascota.edad }}</td>
                        <td>{{ mascota.peso }}</td>
                        <td>
                            <button class="btn btn-danger" @click="deleteMascotasMDB(mascota.id)"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-center">
                    <button v-if="showButton" class="btn btn-success my-3 mr-3" @click="renderForm(), renderButton()">
                        Registrar Mascota
                    </button>
                </div>
            </div>

            <div>
                <FormularioMascota
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
import FormularioMascota from "./FormularioMascota.vue"

export default {
    name: "MascotaComponent",
    components: {
        FormularioMascota,
    },
    props: [],
    mounted() {
        this.getMascotasMDB()
    },
    data() {
        return {
            url: this.$store.state.urlMascotas,
            showComponent: false,
            showButton: true,
            mascotas: [],
        };
    },
    methods: {
        async getMascotasMDB() {
            try {
                let respuesta = await this.axios( this.url );
                this.mascotas = respuesta.data;
                this.$store.dispatch('cargarMascotas', this.mascotas)
            } catch ( error ) {
                console.error( error );
            }
        },
        async deleteMascotasMDB( id ) {
            try {
                await this.axios.delete( `${ this.url }?id=${ id }` );
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
    background: #E5561C !important;
    color: #f1f1f1;
}
</style>
