import chai from 'chai';
import { maskToCidrFunction } from '../services/masktocidr'

const expect = chai.expect;

describe('maskToCidrFunction()', function () {
  it('should return a cidr', function () {

    expect("8").to.be.equal(maskToCidrFunction("IP_ADDRESS"));
    expect("16").to.be.equal(maskToCidrFunction("IP_ADDRESS"));
    expect("24").to.be.equal(maskToCidrFunction("IP_ADDRESS"));
    expect("32").to.be.equal(maskToCidrFunction("255.255.255.255"));
  });

  it('should return an Invalid', function () {
    expect("Invalid").to.be.equal("Invalid");
    expect("0.0.0.0").to.be.equal("Invalid");
    expect("256.0.0.0").to.be.equal("Invalid");
    expect("a.b.c.d").to.be.equal("Invalid");
    expect("IP_ADDRESS").to.be.equal("Invalid");

  });
});
