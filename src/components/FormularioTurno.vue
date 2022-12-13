<template>
    <section class="turnoComponent">
        <div class="jumbotron">
            <h2>Registrar Turno</h2>
            <vue-form :state="formState" @submit.prevent="enviar()">
                <validate tag="div">
                    <label for="familiar">Familiar</label>
                    <select
                        type="text"
                        name="familiar"
                        id="familiar"
                        v-model="formData.dni"
                        class="form-control"
                    >
                        <option
                            v-for="familiar in familiares"
                            :value="familiar.dni"
                            :key="familiar.dni"
                        >
                            {{ `${familiar.nombre} - ${familiar.dni}` }}
                        </option>
                    </select>
                </validate>

                <div>{{ this.formData.dni }}</div>

                <validate tag="div">
                    <label for="fecha">Fecha</label>
                    <input
                        type="date"
                        id="fecha"
                        class="form-control"
                        autocomplete="off"
                        v-model.trim="formData.fecha"
                        name="fecha"
                        required
                    />
                    <field-messages name="fecha" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">
                            Campo requerido
                        </div>
                    </field-messages>
                </validate>

                <validate tag="div">
                    <label for="hora">Hora</label>
                    <input
                        type="number"
                        id="hora"
                        class="form-control"
                        autocomplete="off"
                        v-model.number="formData.hora"
                        name="hora"
                        required
                    />
                    <field-messages name="hora" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">
                            Campo requerido
                        </div>
                    </field-messages>
                </validate>

                <validate tag="div">
                    <label for="mascota">Mascota</label>
                    <select
                        type="text"
                        id="mascota"
                        class="form-control"
                        v-model.trim="formData.id"
                        name="mascota"
                        required
                    >
                    <option
                        v-for="mascota in mascotas"
                        :value="mascota.id"
                        :key="mascota.id"
                    >
                        {{ `${mascota.nombre} - ${mascota.id}` }}
                    </option>
                    </select>
                    <field-messages name="mascota" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">
                            Campo requerido
                        </div>
                    </field-messages>
                </validate>

                <button
                    class="btn btn-success my-3"
                    :disabled="formState.$invalid"
                >
                    Registrar Turno
                </button>
            </vue-form>
        </div>
    </section>
</template>

<script>
export default {
    name: "turnoComponent",
    props: [],
    mounted() {
        this.getFamiliaresMDB();
        this.getMascotasMDB();
    },
    data() {
        return {
            formState: {},
            formData: this.getInitialData(),
            urlFamiliares: this.$store.state.urlFamiliares,
            urlMascotas: this.$store.state.urlMascotas,
            urlTurnos: this.$store.state.urlTurnos,
            familiares: [],
            mascotas:[]
        };
    },
    methods: {
        getInitialData() {
            return {
                fecha: null,
                hora: null,
                id: null,
                dni: null,
            };
        },
        async getFamiliaresMDB() {
            try {
                let respuesta = await this.axios(this.urlFamiliares);
                this.familiares = respuesta.data;
            } catch (error) {
                console.error(error);
            }
        },
        async getMascotasMDB() {
            try {
                let respuesta = await this.axios( this.urlMascotas );
                this.mascotas = respuesta.data;
            } catch ( error ) {
                console.error( error );
            }
        },
        async enviar() {
            console.log(this.formData.familiar);
            const turnoNew = {
                fecha: this.formData.fecha,
                hora: this.formData.hora,
                id: this.formData.id,
                dni: this.formData.dni,
            };
            try {
                await this.axios.post(this.urlTurnos, turnoNew, {
                    "content-type": "application/json",
                });
            } catch (error) {
                console.error(error);
            }
            this.formData = this.getInitialData();
            this.formState._reset();
            window.location.reload();
        },
    },
    computed: {},
};
</script>

<style scoped lang="css"></style>
