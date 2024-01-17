<template lang="">
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <br>
        <b-link :to="{name: 'asientos-reservados'}">Asientos reservados</b-link>
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
                {
                    text: 'Reserva de vuelos',
                    href: '#',
                    to: 'reserva-vuelos'
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>