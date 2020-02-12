'use strict;'

const socket = io();

const mv = new Vue({
    el: "#vue",
    created: function() {},
    data: {
        orderNr: 0,
        position: {},
        orders: {},
        burgers: burgers,
        fullname:"",
        email: "",
        address:"",
        housenumber:"",
        gender:"",
        paymentmethod:"Cash",
        submitted:false,
        orderedBurgers: [],
        submit: function() {
            this.submitted = true;
            console.log ("submit: " + [
                this.fullname, this.gender, this.paymentmethod
            ] )
        }
    },

    methods: {
        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            return ++this.orderNr;
        },
        displayOrder: function(event) {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            this.position = {
                x: event.clientX - 10 - event.currentTarget.getBoundingClientRect().left,
                y: event.clientY - 10 - event.currentTarget.getBoundingClientRect().top,
            };
        },
        addOrder: function() {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            socket.emit('addOrder', {
                orderId: this.getNext(),
                details: this.position,
                orderItems: this.orderedBurgers,
            });
        },
    },
})
