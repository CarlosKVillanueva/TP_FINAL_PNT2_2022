<template>

    <section class="familiaresName">
        <div class="jumbotron">
            <h2>Registrar familiar</h2>
            <vue-form :state="formState" @submit.prevent="enviar()">

                <!-- ---------------------------------- -->
                <!--            CAMPO DNI               -->
                <!-- ---------------------------------- -->
                <validate tag="div">
                    <label for="dni">DNI</label>
                    <input
                            type="text"
                            id="dni"
                            class="form-control"
                            autocomplete="off"
                            v-model.trim="formData.dni"
                            name="dni"
                            required
                            :minlength="minLength"
                            :maxlength="maxLength"
                    >
                    <field-messages name="dni" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                        <div slot="minlength" class="alert alert-danger mt-1">
                            Este campo debe poseer al menos {{ minLength }} caracteres.
                        </div>
                        <div slot="maxLength" class="alert alert-danger mt-1">
                            Este campo debe poseer maximo {{ maxLength }} caracteres.
                        </div>
                    </field-messages>
                </validate>


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
                            :maxlength="nombreMaxLength"
                    >
                    <field-messages name="nombre" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                        <div slot="minlength" class="alert alert-danger mt-1">
                            Este campo debe poseer al menos {{ nombreMinLength }} caracteres.
                        </div>
                        <div slot="maxLength" class="alert alert-danger mt-1">
                            Este campo debe poseer al menos {{ nombreMaxLength }} caracteres.
                        </div>
                    </field-messages>
                </validate>

                <!-- ---------------------------------- -->
                <!--          CAMPO APELLIDO            -->
                <!-- ---------------------------------- -->
                <validate tag="div">
                    <label for="apellido">Apellido</label>
                    <input
                            type="text"
                            id="apellido"
                            class="form-control"
                            autocomplete="off"
                            v-model.trim="formData.apellido"
                            name="apellido"
                            required
                            :minlength="nombreMinLength"
                            :maxlength="nombreMaxLength"
                    >
                    <field-messages name="apellido" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                        <div slot="minlength" class="alert alert-danger mt-1">
                            Este campo debe poseer al menos {{ nombreMinLength }} caracteres.
                        </div>
                        <div slot="maxLength" class="alert alert-danger mt-1">
                            Este campo debe poseer al menos {{ nombreMaxLength }} caracteres.
                        </div>
                    </field-messages>
                </validate>

                <!-- ---------------------------------- -->
                <!--            CAMPO EMAIL             -->
                <!-- ---------------------------------- -->

                <validate tag="div">
                    <label for="email">Email</label>
                    <input
                            type="email"
                            id="email"
                            class="form-control"
                            autocomplete="off"
                            v-model.trim="formData.email"
                            name="email"
                            required
                    >
                    <field-messages name="email" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                        <div slot="email" class="alert alert-danger mt-1">Email no v??lido</div>
                    </field-messages>
                </validate>

                <!-- ---------------------------------- -->
                <!--           CAMPO TELEFONO           -->
                <!-- ---------------------------------- -->
                <validate tag="div">
                    <label for="telefono">Telefono</label>
                    <input
                            type="number"
                            id="telefono"
                            class="form-control"
                            autocomplete="off"
                            v-model.number="formData.telefono"
                            name="telefono"
                            required
                    >
                    <field-messages name="telefono" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                    </field-messages>
                </validate>
                <!-- ---------------------------------- -->
                <!--           CAMPO DIRECCION          -->
                <!-- ---------------------------------- -->
                <validate tag="div">
                    <label for="direccion">Direccion</label>
                    <input
                            type="text"
                            id="direccion"
                            class="form-control"
                            autocomplete="off"
                            v-model="formData.direccion"
                            name="direccion"
                            required
                    >
                    <field-messages name="direccion" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                    </field-messages>
                </validate>

                <button class="btn btn-success my-3" :disabled="formState.$invalid">Registrar Familiar</button>

            </vue-form>
        </div>
    </section>

</template>

<script>

export default {
    name: 'familiaresName',
    props: [],
    mounted() {

    },
    data() {
        return {
            formState: {},
            formData: this.getInitialData(),
            url: this.$store.state.urlFamiliares,
            minLength: 8,
            maxLength: 9,
            nombreMinLength: 3,
            nombreMaxLength: 25
        }
    },
    methods: {
        getInitialData() {
            return {
                dni: null,
                nombre: null,
                apellido: null,
                email: null,
                telefono: null,
                direccion: null,
            }
        },
        async enviar() {
            const familiar = {
                dni: this.formData.dni,
                nombre: this.formData.nombre,
                apellido: this.formData.apellido,
                email: this.formData.email,
                telefono: this.formData.telefono,
                direccion: this.formData.direccion,
            }
            try {
                await this.axios.post( this.url, familiar, { 'content-type': 'application/json' } )
            } catch ( error ) {
                console.error( 'Error en el guardado de la mascota:', error.message )
            }
            this.formData = this.getInitialData()
            this.formState._reset()
            window.location.reload();
        }
    },
    computed: {}
}


</script>

<style scoped lang="css">
.jumbotron {
    background: #F2CFB6;
}
</style>
