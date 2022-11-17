<template>
    <section class="src-components-formulario-mascota">
        <div class="jumbotron">
            <h2>Registrar Mascota</h2>
            <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- ---------------------------------- -->
        <!--            CAMPO ID               -->
        <!-- ---------------------------------- -->
        <validate tag="div">
          <label for="id">ID</label>
          <input 
            type="text" 
            id="id" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.id" 
            name="id"
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
            required
          >
          <field-messages name="raza" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          </field-messages>
        </validate>

        <!-- ---------------------------------- -->
        <!--        CAMPO FECHA NACIEMIENTO     -->
        <!-- ---------------------------------- -->

        <validate tag="div">
          <label for="fechaNacimiento">Fecha nacimiento</label>
          <input 
            type="email" 
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
          <label for="edad">edad</label>
          <input 
            type="number" 
            id="edad" 
            class="form-control" 
            autocomplete="off"
            v-model.number="formData.edad" 
            name="edad"
            required
          >
          <!-- mensajes de validación -->
          <field-messages name="edad" show="$dirty">
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
        <!--           CAMPO PESO               -->
        <!-- ---------------------------------- -->
        <validate tag="div">
          <label for="peso">Peso</label>
          <input 
            type="text" 
            id="peso" 
            class="form-control" 
            autocomplete="off"
            v-model="formData.peso" 
            name="peso"
            required
          >
          <field-messages name="peso" show="$dirty">
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
export default {
    name: "src-components-formulario-mascota",
    props: [],
    mounted() {},
    data() {
        return {
        formState : {},
        formData: this.getInitialData(),
      };
    },
    methods: {
      getInitialData(){
        return {
          id: null,
          nombre: null,
          raza: null,
          fechaNacimiento: null,
          edad: null,
          peso: null,
        }
      },
      enviar(){
        console.log({...this.formData})

        this.formData = this.getInitialData()
        this.formState._reset()
      }
    },
    computed: {},
};
</script>

<style scoped lang="css"></style>
