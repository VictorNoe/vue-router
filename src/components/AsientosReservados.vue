<template lang="">
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <br>
        <b-link :to="{name: 'reservas-vuelos'}">anterior</b-link>
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
                    to: 'reservas-vuelos'
                },
                {
                    text: 'Asientos reservados',
                    href: '#',
                    to: 'asientos-reservados'
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>