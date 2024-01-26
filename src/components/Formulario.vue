<template>
    <b-container>
        <b-row>
            <b-col cols="4">
                <b-form id="app" @submit="onCheckInfo" method="post" novalidate="true">
                    
                    <label class="sr-only" for="inline-form-input-name">Nombre</label>
                    <b-form-input v-model="nombre" class="mb-2 mr-sm-2 mb-sm-0"
                        ></b-form-input>

                    <label clas="sr-only" for="inline-form-input-name">Apellido Paterno</label>
                    <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0"
                    v-model="apellidoP"></b-form-input>

                    <label clas="sr-only" for="inline-form-input-name">Apellido Materno</label>
                    <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0"
                    v-model="apellidoM" ></b-form-input>

                    <label clas="sr-only" for="inline-form-input-name">CP</label>
                    <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0"
                         type="number" v-model="cp"></b-form-input>

                    <label clas="sr-only" for="inline-form-input-name">Calle</label>
                    <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0"
                    v-model="calle" ></b-form-input>

                    <label clas="sr-only" for="inline-form-input-name">Numero de calle</label>
                    <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0"
                        type="number" v-model="numeroC"></b-form-input>

                    <label clas="sr-only" for="inline-form-input-name">Ciudad</label>
                    <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0"
                       v-model="ciudad" ></b-form-input>

                    <label clas="sr-only" for="inline-form-input-name">Fecha de nacimiento</label>
                    <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0"
                        type="date" v-model="fechaN"></b-form-input>

                    <label clas="sr-only" for="inline-form-input-name">Correo electronico</label>
                    <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0"
                       type="email" v-model="correo"></b-form-input>

                    <label clas="sr-only" for="inline-form-input-name">Numero telefonico</label>
                    <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0"
                        type="tel" maxlength="10" v-model="telefono"></b-form-input>

                    <label clas="sr-only" for="inline-form-input-name">Imagen</label>
                    <b-form-file v-model="foto" :state="Boolean(file1)" 
                        drop-placeholder="Drop file here..."></b-form-file>
                    <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>

                    <b-button variant="primary" type="submit">Guardar</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    el: '#app',
    data: {
        errors: [],
        nombre: null,
        apellidoP: null,
        apellidoM: null,
        cp: null,
        calle: null,
        numeroC: null,
        ciudad: null,
        fechaN: null,
        correo: null,
        telefono: null,
        foto: null
    },
    methods: {
        onCheckInfo: function (e) {
            const today = new Date();
            const birthdate = new Date(this.fechaN);
            const age = today.getFullYear() - birthdate.getFullYear();
            const validateTel = /^\d{10}$/;

            this.errors = [];

            if (!this.nombre) {
                this.errors.push('El nombre es obligatorio.');
            }
            if (!this.apellidoP) {
                this.errors.push('El apellido paterno es obligatorio.');
            }
            if (!this.cp) {
                this.errors.push('El codigo postal es obligatorio.');
            }
            if (!this.calle) {
                this.errors.push('La calle es obligatorio.');
            }
            if (!this.numeroC) {
                this.errors.push('El numero de calle es obligatorio.');
            }
            if (!this.ciudad) {
                this.errors.push('La ciudad es obligatorio.');
            }
            if (!this.fechaN) {
                this.errors.push('La fecha de nacimiento es obligatorio.');
            } else if (age < 18 ) {
                this.errors.push('Debes tener mas de 18 años.');
            }
            if (!this.correo) {
                this.errors.push('El correo es obligatorio.');
            } else if (!this.validEmail(this.correo)) {
                this.errors.push('El correo electrónico debe ser válido.');
            }
            if (!this.telefono) {
                this.errors.push('El telefono es obligatorio.');
            } else if (validateTel.test(this.telefono)) {
                this.errors.push('El telefono no es el formato requerido.');
            }
            if (!this.foto) {
                this.errors.push('El foto es obligatorio.');
            } else if (!(this.foto && this.foto.size > 3 * 1024 * 1024)) {
                this.errors.push('Exede el tamaño de 3 megas.');
            }

            alert(this.errors);
            e.preventDefault();
        },
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>
<style lang="">
    
</style>