/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();


var Information = function(fullname, gender, email, pm){ // 单个用户信息
  this.fullname = fullname;
  this.gender = gender;
  this.email = email;
  this.payment_method = pm;
}

var vm = new Vue({
  el: '#main',
  data: {
    burger1: 'Burger 1',
    burger2: 'Burger 2',
    burger3: 'Burger 3',
    image1: '<img src="https://www.101cookingfortwo.com/wp-content/uploads/2017/07/How-to-Grill-an-Excellent-Burger-1-2.jpg" title="Burger 1" width="200">',
    image2: '<img src="https://www.incimages.com/uploaded_files/image/970x450/getty_92020133_20001527181884336163_327730.jpg" title="Burger 2" width="200">',
    image3: '<img src="https://us.123rf.com/450wm/cookelma/cookelma1502/cookelma150200141/36986768-tasty-and-appetizing-hamburger-cheeseburger.jpg?ver=6" title="Burger 3" width="200">',
    desc1_1: 'Best Burger in the world!',
    desc1_2: 'Contains lactose',
    desc1_3: 'Contains gluten',
    desc2_1: 'Best Burger in the world!',
    desc2_2: 'Contains lactose',
    desc3_1: 'Best Burger in the world!',
    desc3_2: 'Contains lactose',
    desc3_3: 'Contains gluten',

    orders: {},
    fullname: '',
    gender: '',
    email: '',
    payment_method: '',
    details: {x:0, y:0},
  },
  methods: {
    displayOrder: function () {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.details = {x: event.clientX - 10 - offset.x,
                      y: event.clientY - 10 - offset.y};
    },
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function () {
      socket.emit("addOrder", { orderId: "T",
                                details: this.details,
                                orderItems: [this.fullname, this.gender, this.email, this.payment_method]
                              });
    }
  }
});







