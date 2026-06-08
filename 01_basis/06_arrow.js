const detail ={
    title: "Arrow",
    id: "aloo",

    welcome: function(){
    //    console.log(`Welcome ${this.title} to Arrow Function`);
    }
}
detail.welcome();

// *************************************Arrow function****************************************
const welcomeArrow = () => {
    console.log(`Welcome ${detail.title} to Arrow Function`);
};
welcomeArrow();