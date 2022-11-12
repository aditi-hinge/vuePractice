const list = Vue.createApp({
    data() {
        return {
            urlWebsite:'https://www.winxclub.com/en',
            urlEveryoneTogether: 'https://images.app.goo.gl/wW2NR4HJDrQ2otYPA',
            fairies:[
                {
                    name: 'bloom',
                    colour: 'blue',
                    img: './assets/bloom.jpg'
                },
                {
                    name: 'stella',
                    colour: 'yellow',
                    img: './assets/stella.jpg'
                },
                {
                    name: 'musa',
                    colour: 'red',
                    img: './assets/musa.png'
                }
            ]
        }
    }
})

list.mount('#list')