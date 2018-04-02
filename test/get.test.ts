import * as chai from 'chai';
import * as mocha from 'mocha';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /locations', () => {

  it('should be JSON', () => {
    return chai.request(app).get('/locations')
    .then(res => {
        expect(res.type).to.eql('application/json');
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
    });
  });

  it('should include Reveille Coffee Co', () => {
    return chai.request(app).get('/locations')
      .then(res => {
        let Reveille = res.body.find(coffeeShop => coffeeShop.id === 49);
        expect(Reveille).to.exist;
        expect(Reveille).to.have.all.keys([
          'id',
          'name',
          'address',
          'latitude',
          'longitude'
        ]);
      });
  });

});

describe('GET /locations/:id', () => {

    it('responds with single JSON object', () => {
    return chai.request(app).get('/locations/49')
        .then(res => {
            expect(res.status).to.equal(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
        });
      });
    
    it('should return Reveille Coffee Co', () => {
    return chai.request(app).get('/locations/49')
        .then(res => {
            expect(res.body.coffeeShop.name).to.equal('Réveille Coffee Co.');
            expect(res.body.coffeeShop.address).to.equal('610 Long Bridge St');
            expect(res.body.coffeeShop.latitude).to.equal('37.773347990695086');
            expect(res.body.coffeeShop.longitude).to.equal('-122.39145373080255');
        });
    });

});