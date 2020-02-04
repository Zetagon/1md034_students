
const mv = new Vue({
    el: "#vue",
    data: {
        burgers: burgers,
        fullname:"",
        email: "",
        address:"",
        housenumber:"",
        gender:"",
        paymentmethod:"",
        submit: function() {
            console.log ( [
                this.fullname, this.address, this.housenumber, this.gender, this.paymentmethod
            ] )
        }
    }
})
