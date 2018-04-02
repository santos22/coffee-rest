import * as chai from 'chai';
import * as mocha from 'mocha';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('DELETE /locations/:id', () => {

    it('responds with single JSON object', () => {
      return chai.request(app).del('/locations/1')
        .then(res => {
          expect(res.status).to.equal(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
        });
    });

    it('responds with single JSON object and error message', () => {
      return chai.request(app).del('/locations/500')
        .then(res => {
          expect(res.status).to.equal(404);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.eql('No coffee shop found with the given id.');
        });
    });
  
});