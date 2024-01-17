<template lang="">
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <br>
        <b-link :to="{name: 'reservas-vuelos'}">Reservas de vuelos</b-link>
        <br>
        <b-link :to="{name: 'vuelos-disponibles'}">Vuelos disponibles</b-link>
        <br>
        <b-link :to="{name: 'vuelos-cancelados'}">Vuelos cancelados</b-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Inicio Landpage',
                    href: '#',
                    to: 'inicio-landpage'
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>