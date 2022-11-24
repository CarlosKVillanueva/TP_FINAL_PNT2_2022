<template>
    <div class="container">
        <div class="col-12 mt-5">
<!--			<div class="d-flex justify-content-center">
				<button class="btn btn-success my-3 mr-3" @click="getMascotasMDB()">
					Obtener Listado Mascotas
				</button>
			</div>-->
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
				<div class="d-flex justify-content-center">
					<button v-if="showButton" class="btn btn-success my-3 mr-3" @click="renderForm(), renderButton()">
						Registrar Mascota
					</button>
				</div>
			</div>

			<div>
				<FormularioMascota v-if="showComponent"/>
			</div>

			<div v-if="showComponent" class="d-flex justify-content-center">
				<button class="btn btn-danger my-3 mr-3" @click="renderForm(), renderButton()">
					Atras
				</button>
				<button class="btn btn-success my-3 mr-3" @click="postMascotaMDB">
					Enviar
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
            url: "http://localhost:8080/api/mascotas",
			showComponent: false,
            showButton: true,
            mascotas: [],
        };
    },
    methods: {
        async getMascotasMDB() {
            try {
                let respuesta = await this.axios(this.url);
                this.mascotas = respuesta.data;
            } catch (error) {
                console.error(error);
            }
        },
		async postMascotaMDB(){
            /*let mascotaNew = {
                nombre:"", //formData,
            }*/
            try {
                let { data : mascotaNew } = await this.axios.post(this.url, mascotaNew, { 'content-type' : 'application/json' })
                //console.log(usuario)
                this.mascotas.push(mascotaNew)
            }catch(error) {
                console.error('Error en el guardado de la mascota:', error.message)
            }
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
