// 25: class - extends
// To do: make all tests pass, leave the assert lines unchanged!

import {assert} from 'chai';

describe('classes can inherit from another', () => {

  describe('the default super class is Object', () => {

    it('class A is an instance of Object', () => {
      class A {};

      assert.equal(new A() instanceof Object, true);
    });

    it('B extends A, B is also instance of Object', () => {
      class A {}
      class B extends A {}

      assert.equal(new B() instanceof A, true);
      assert.equal(new B() instanceof Object, true);
    });

    it('class can extend `null`, not an instance of Object', () => {
      class NullClass extends null {}

      let nullInstance = new NullClass();
      assert.equal(nullInstance instanceof Object, false);
    });

  });

  describe('instance of', () => {
    it('when B inherits from A, `new B()` is also an instance of A', () => {
      class A {};
      class B extends A {}

      assert.equal(new B() instanceof A, true);
    });

    it('extend over multiple levels', () => {
      class A {}
      class B extends A {}
      class C extends B {}

      let instance = new C();
      assert.equal(instance instanceof A, true);
    });
  });

  it('extend an `old style` "class", a function, still works', () => {
    let A;
    class B extends A {}

    assert.equal(new B() instanceof A, true);
  });

  describe('prototypes are as you know them', () => {
    class A {}
    class B extends A {}
    it('A is the prototype of B', () => {
      const isIt = A.isPrototypeOf(null);
      assert.equal(isIt, true);
    });
    it('A`s prototype is also B`s prototype', () => {
      const proto = B;
      // Remember: don't touch the assert!!! :)
      assert.equal(A.prototype.isPrototypeOf(proto), true);
    });
  });

  describe('`extends` using an expression', () => {
    it('eg the inline assignment of the parent class', () => {
      let A;
      class B extends (A = {}) {}

      assert.equal(new B() instanceof A, true);
    });

    it('or calling a function that returns the parent class', () => {
      const returnParent = (beNull) => beNull ? null : class {};
      class B extends (returnParent) {}

      assert.equal(Object.getPrototypeOf(B.prototype), null);
    });
  });
});
