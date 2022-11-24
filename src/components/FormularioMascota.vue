/* eslint-disable */
<template>
    <section class="mascotasName">
        <div class="jumbotron">
            <h2>Registrar Mascota</h2>
            <vue-form :state="formState" @submit.prevent="enviar()">

               <!-- ---------------------------------- -->
                <!--            CAMPO NOMBRE            -->
                <!-- ---------------------------------- -->

                <validate tag="div">
                    <label for="nombre">Nombre</label>
                    <input
                            type="text"
                            id="nombre"
                            class="form-control"
                            autocomplete="off"
                            v-model.trim="formData.nombre"
                            name="nombre"
                            required
                            :minlength="nombreMinLength"
                    >
                    <field-messages name="nombre" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                        <div slot="minlength" class="alert alert-danger mt-1">
                            Este campo debe poseer al menos {{ nombreMinLength }} caracteres.
                        </div>
                    </field-messages>
                </validate>

                <!-- ---------------------------------- -->
                <!--          CAMPO RAZA                -->
                <!-- ---------------------------------- -->
                <validate tag="div">
                    <label for="raza">Raza</label>
                    <input
                            type="text"
                            id="raza"
                            class="form-control"
                            autocomplete="off"
                            v-model.trim="formData.raza"
                            name="raza"
                            :minlength="razaMinLength"
                            required
                    >
                    <field-messages name="raza" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                        <div slot="minlength" class="alert alert-danger mt-1">
                            Este campo debe poseer al menos {{ razaMinLength }} caracteres.
                        </div>
                    </field-messages>
                </validate>

                <!-- ---------------------------------- -->
                <!--        CAMPO FECHA NACIEMIENTO     -->
                <!-- ---------------------------------- -->

                <validate tag="div">
                    <label for="fechaNacimiento">Fecha nacimiento</label>
                    <input
                            type="date"
                            id="fechaNacimiento"
                            class="form-control"
                            autocomplete="off"
                            v-model.trim="formData.fechaNacimiento"
                            name="fechaNacimiento"
                            required
                    >
                    <field-messages name="fechaNacimiento" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                    </field-messages>
                </validate>

                <!-- ---------------------------------- -->
                <!--           CAMPO EDAD               -->
                <!-- ---------------------------------- -->
                <validate tag="div">
                    <label for="edad">Edad</label>
                    <input
                            type="number"
                            id="edad"
                            class="form-control"
                            autocomplete="off"
                            v-model.number="formData.edad"
                            name="edad"
                            :min="edadMin"
                            :max="edadMax"
                            required
                    >
                    <field-messages name="edad" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                        <div slot="min" class="alert alert-danger mt-1">
                            La edad mínima debe ser mayor a {{ edadMin }} años.
                        </div>
                        <div slot="max" class="alert alert-danger mt-1">
                            La edad máxima debe ser menor a {{ edadMax }} años.
                        </div>
                    </field-messages>
                </validate>
                <!-- ---------------------------------- -->
                <!--           CAMPO PESO               -->
                <!-- ---------------------------------- -->
                <validate tag="div">
                    <label for="peso">Peso</label>
                    <input
                            type="number"
                            id="peso"
                            class="form-control"
                            autocomplete="off"
                            v-model="formData.peso"
                            name="peso"
                            :min="pesoMin"
                            required
                    >
                    <field-messages name="peso" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>

                        <div slot="min" class="alert alert-danger mt-1">
                            El peso minimo debe ser mayor a {{ pesoMin }} kgs.
                        </div>
                    </field-messages>
                </validate>

                <button class="btn btn-success my-3" :disabled="formState.$invalid">Registrar mascota</button>

            </vue-form>
        </div>
    </section>
</template>

<script>
export default {
    name: "mascotasName",
    props: [],
    mounted() {
    },
    data() {
        return {
            formState: {},
            formData: this.getInitialData(),
            url: "http://localhost:8080/api/mascotas",
            nombreMinLength: 3,
            razaMinLength: 5,
            edadMin: 0,
            edadMax: 20,
            pesoMin: 0
        };
    },
    methods: {
        getInitialData() {
            return {
                id: null,
                nombre: null,
                raza: null,
                fechaNacimiento: null,
                edad: null,
                peso: null,
            }
        },
        async enviar() {
            const mascota = {
                id: `${ Date.now() }-${ this.formData.nombre }`,
                nombre: this.formData.nombre,
                raza: this.formData.raza,
                fechaNacimiento: this.formData.fechaNacimiento,
                edad: this.formData.edad,
                peso: this.formData.peso
            }
            try {
                await this.axios.post( this.url, mascota, { 'content-type': 'application/json' } )
                //console.log(usuario)
                //this.mascotas.push(this.formData)
            } catch ( error ) {
                console.error( 'Error en el guardado de la mascota:', error.message )
            }
            //this.$emit('form-data-hijo', this.formData)
            this.formData = this.getInitialData()
            this.formState._reset()
            window.location.reload();
        },
    },
    computed: {},
};
</script>

<style scoped lang="css">

label {
    margin-top: 5px;
    padding-top: 1rem;
}

.jumbotron {
    background: #F2CFB6;
}
</style>
