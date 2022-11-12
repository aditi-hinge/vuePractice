const list = Vue.createApp({
    data() {
        return {
            fairies:[
                {
                    name: 'bloom',
                    colour: 'blue'
                },
                {
                    name: 'stella',
                    colour: 'yellow'
                },
                {
                    name: 'musa',
                    colour: 'red'
                }
            ]
        }
    }
})

list.mount('#list')