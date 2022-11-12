//to create an app
const app = Vue.createApp({
    //can set up any data or functions
    //to react to events we want

    //can also specify the component template i.e.
    //the component that will be rendered inside the app element

    //do this by creating the template property
    //which wil be a string
    // template: '<h2>I am a template</h2>'
    //but because creating templates here can get messy,
    //it is better to add the template directly

    //a variable can be created to show the value dynamically
    //by creating a data function
    //shorthand for a function inside an object
    //syntax- function name, brackets and paranthesis
    data() {
        //inside the function a data object can be returned
        //therefore, function must be created and must be returned inside it
        return {
            title: '1984',
            author: 'George Orwell',
            publicationYear: 1949
        }
    }
})

//tells the app at what point or
//where to mount the application
//here, it tells vue to take our app
//and mount it in the DOM where the 
//element with an id 'app' is present
app.mount('#app')