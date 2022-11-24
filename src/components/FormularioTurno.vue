<template>

  <section class="turnoComponent">
      <div class="jumbotron">
          <h2>Registrar Turno</h2>
          <vue-form :state="formState" @submit.prevent="enviar()">

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
                  >
                  <field-messages name="fecha" show="$dirty">
                      <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                  </field-messages>
              </validate>

              <validate tag="div">
                  <label for="hora">Hora</label>
                  <input
                          type="time"
                          id="hora"
                          class="form-control"
                          autocomplete="off"
                          v-model.trim="formData.hora"
                          name="hora"
                          required
                  >
                  <field-messages name="hora" show="$dirty">
                      <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                  </field-messages>
              </validate>

              <validate tag="div">
                  <label for="familiar">Familiar</label>
                  <select name="familiar" id="familiar" v-model="familiarSeleccionado" class="form-control">
                      <option v-for="familiar in familiares" :value="familiar" :key="familiar.dni">{{ `${familiar.dni} - ${familiar.nombre}` }}</option>
                  </select>
              </validate>

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

  export default  {
    name: 'turnoComponent',
    props: [],
    mounted () {

    },
    data () {
      return {
          formState: {},
          formData: this.getInitialData(),
          url: "http://localhost:8080/api/familiares",
          familiarSeleccionado: {},
          familiares: []
      }
    },
    methods: {
        getInitialData() {
            return {
                fecha:null,
                hora: null,
                familiar: null,
                mascota: null,
            }
        },
        async getFamiliaresMDB() {
            try {
                let respuesta = await this.axios( this.url );
                this.familiares = respuesta.data;
            } catch ( error ) {
                console.error( error );
            }
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>
