//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let env = require("dotenv").config()
let db = require("../db/db")
let mongoose = require("mongoose");
let Order = require('../app/orders/order').Order;

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app').server;
let should = chai.should();
chai.use(chaiHttp);

describe('Orders', () => {

  describe('/GET order', () => {
    it('it should get an order on the basis of an order number', (done) => {
      chai.request(server)
      .get('/api/order/1')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
  });

  describe('/POST order', () => {
    it('it should create an order', (done) => {
      let order = {
        productName: "SWGen2dx",
        shippingAddress: {
          address: "#121 Test Apartment",
          city: "Ghaziabad",
          state: "UP"
        },
        billingAddress: {
          address: "#121 Test Apartment",
          city: "Ghaziabad",
          state: "UP"
        },
        shippingMethod: "free|premium",
        quantity: "2",
        customer: {
          firstName: "Kumar",
          lastName: "Navneet",
          email: "kumar.navneet@cygrp.com",
          phoneNumber: "9444203020"
        }
      }
      chai.request(server)
      .post('/api/orders')
      .send(order)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.data.should.have.property('state').eql('pending');
        res.body.should.have.property('message').eql('Order Created Successfully!');
        done();
      });
    });
  });

  describe('/PUT order', (done) => {
    it('it should modify an order on the basis of an order number', (done) => {
      let order = {
        productName: "SWGen2dx",
        shippingAddress: {
          address: "#121 Test Apartment",
          city: "Ghaziabad",
          state: "UP"
        },
        billingAddress: {
          address: "#121 Test Apartment",
          city: "Ghaziabad",
          state: "UP"
        },
        shippingMethod: "free|premium",
        quantity: 1,
        customer: {
          firstName: "Kumar",
          lastName: "Navneet",
          email: "kumar.navneet@cygrp.com",
          phoneNumber: "9444203020"
        }
      }
      Order.create(order, (err,data) => {
        chai.request(server)
        .put('/api/order/' + data.orderNumber)
        .send({quantity: 2})
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message').eql('Order Updated Successfully!');
          done();
        });
      });
    });
  });

  describe('/DELETE order', () => {
    it('it should delete an order on the basis of an order number', (done) => {
      let order = {
        productName: "SWGen2dx",
        shippingAddress: {
          address: "#121 Test Apartment",
          city: "Ghaziabad",
          state: "UP"
        },
        billingAddress: {
          address: "#121 Test Apartment",
          city: "Ghaziabad",
          state: "UP"
        },
        shippingMethod: "free|premium",
        quantity: 1,
        customer: {
          firstName: "Kumar",
          lastName: "Navneet",
          email: "kumar.navneet@cygrp.com",
          phoneNumber: "9444203020"
        }
      }
      Order.create(order, (err,data) => {
        chai.request(server)
        .delete('/api/order/' + data.orderNumber)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message').eql('Order Deleted Successfully!');
          done();
        });
      });
    });
  });

});
