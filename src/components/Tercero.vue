<template lang="">
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Inicio',
                    href: '#',
                    to: 'inicio'
                },
                {
                    text: 'Main',
                    href: '#',
                    to: 'main'
                },
                {
                    text: 'Tercero',
                    href: '#',
                    to: 'tercero'
                }
            ]
        }
    }
}
</script>
<style lang="">
    
</style>