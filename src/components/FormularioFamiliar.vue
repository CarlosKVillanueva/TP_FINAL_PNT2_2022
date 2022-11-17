<template>

  <section class="src-components-formulario-familiar">
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
          >
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
            no-espacios
          >
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo debe poseer al menos {{ nombreMinLength }} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              Este campo no permite espacios intermedios
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
          >
          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
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
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
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
          <!-- mensajes de validación -->
          <field-messages name="telefono" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <!-- 
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima debe ser {{ edadMin }} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima debe ser {{ edadMax }} años.
            </div> -->
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
            <!--
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima debe ser {{ edadMin }} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima debe ser {{ edadMax }} años.
            </div> -->
          </field-messages>
        </validate>

        <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>

      </vue-form>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-formulario-familiar',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData: this.getInitialData(),
        nombreMinLength: 3,
      }
    },
    methods: {
      getInitialData(){
        return {
          dni: null,
          nombre: null,
          apellido: null,
          email: null,
          telefono: null,
          direccion: null,
        }
      },
      enviar(){
        console.log({...this.formData})

        this.formData = this.getInitialData()
        this.formState._reset()
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron{
    background: #F2CFB6;
  }
</style>
