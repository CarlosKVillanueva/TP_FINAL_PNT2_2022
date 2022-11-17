<template>
    <div class="container">
        <div class="col-12 mt-5">
            <h2>Lista de Mascotas</h2>
			<hr />
            <hr />
            <button class="btn btn-success my-3 mr-3" @click="getMascotasMDB()">
                GET Mascotas
            </button>
			<button
                class="btn btn-success my-3 mr-3"
                @click="postMascotaMDB()"
            >
                POST Mascota
            </button>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="mascota in mascotas" :key="mascota.id">
                            <td>{{ mascota.id }}</td>
                            <td>{{ mascota.nombre }}</td>
                            <td>{{ mascota.raza }}</td>
                            <td>{{ mascota.fechaNacimiento }}</td>
                            <td>{{ mascota.edad }}</td>
                            <td>{{ mascota.peso }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
			<div>
				<FormularioMascota />
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
    mounted() {},
    data() {
        return {
            url: "http://localhost:8080/api/mascotas",
            mascotas: [],
        };
    },
    methods: {
        async getMascotasMDB() {
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
                this.mascotas = respuesta.data;
            } catch (error) {
                console.error(error);
            }
        },
		postMascotaMDB(){}
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
