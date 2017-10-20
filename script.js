/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var circles = [];

$(function () {

    $('#action').click(function () {

        var numCont = rand(1, 2);

        var container = $('#cont_' + numCont);

        var circle = new Circle(container);
        circle.draw();

        circles.push(circle);
    });
});

function colorize(color) {
    circles.forEach(function (c) {
        c.setColor(color);
    });
}

function setBorder(color, width) {
    circles.forEach(function (c) {
        c.border(color, width);
    });
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Circle(container) {

    this.container = container;

    this.color = 'rgb(' + rand(0, 255) + ',' + rand(0, 255) + ',' + rand(0, 255) + ')';
    this.borderColor = 'rgb(' + rand(0, 255) + ',' + rand(0, 255) + ',' + rand(0, 255) + ')';

    this.borderWidth = rand(1, 5);
    this.radius = rand(10, 30);

    this.element = $('<div class="circle">');

    this.container.append(this.element);

    //console.log(left, top);
}

Circle.prototype = {
    draw: function () {

        this.left = rand(this.radius, this.container.width() - this.radius * 2);
        this.top = rand(this.radius, this.container.height() - this.radius * 2);

        this.element.width(this.radius * 2);
        this.element.height(this.radius * 2);

        this.element.css({
            'background': this.color,
            'left': this.left,
            'top': this.top,
            'border-color': this.borderColor,
            'border-width': this.borderWidth + 'px'
        });
    },
    setRadius: function (r) {
        this.radius = r;
        this.draw();
    },
    border: function (color, width) {
        this.borderColor = color;
        this.borderWidth = width;
        this.draw();
    },
    setColor: function (color) {
        this.color = color;
        this.draw();
    },
    setContainer: function (container) {
        this.container = container;
        container.append(this.element);
        this.draw();
    },
}