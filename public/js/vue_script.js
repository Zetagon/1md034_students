
const mv = new Vue({
    el: "#vue",
    data: {
        burgers: burgers,
        fullname:"",
        email: "",
        address:"",
        housenumber:"",
        gender:"",
        paymentmethod:"Cash",
        submitted:false,
        submit: function() {
            this.submitted = true;
            console.log ( [
                this.fullname, this.address, this.housenumber, this.gender, this.paymentmethod
            ] )
        }
    }
})
