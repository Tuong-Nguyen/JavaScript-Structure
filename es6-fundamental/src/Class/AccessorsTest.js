/**
 * Created by nkim on 6/20/2017.
 */
import {assert} from 'chai';

// 23: class - accessors
// To do: make all tests pass, leave the assert lines unchanged!

describe('class accessors (getter and setter)', () => {

  it('only a getter is defined like a method prefixed with `get`', () => {
    class MyAccount {
      get balance() { return Infinity; }
    }

    assert.equal(new MyAccount().balance, Infinity);
  });

  it('a setter has the prefix `set`', () => {
    class MyAccount {
      get balance() { return this.amount; }
      set balance(amount) { this.amount = amount; }
    }

    const account = new MyAccount();
    account.balance = 23;
    assert.equal(account.balance, 23);
  });

  describe('dynamic accessors', () => {

    it('a dynamic getter name is enclosed in [ and ]', function() {
      const balance = 'yourMoney';
      class YourAccount {
        get [balance]() { return -Infinity; }
      }

      assert.equal(new YourAccount().yourMoney, -Infinity);
    });

    it('a dynamic setter name as well', function() {
      const propertyName = 'balance';
      class MyAccount {
        get [propertyName]() { return this.amount; }
        set [propertyName](amount) { this.amount = amount; }
      }

      const account = new MyAccount();
      account.balance = 23;
      assert.equal(account.balance, 23);
    });
  });

});
