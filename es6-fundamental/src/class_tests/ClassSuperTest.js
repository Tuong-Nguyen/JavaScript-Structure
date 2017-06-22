// 27: class - super inside a method
// To do: make all tests pass, leave the assert lines unchanged!

import {assert} from 'chai';

describe('inside a class use `super` to access parent methods', () => {

  it('use of `super` without `extends` fails (already when transpiling)', () => {
    class Parent { hasSuper() {return false;}}
    class A extends Parent {hasSuper() { return super.hasSuper(); }}

    assert.equal(new A().hasSuper(), false);
  });

  it('`super` with `extends` calls the method of the given name of the parent class', () => {
    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { return super.hasSuper(); }}

    assert.equal(new B().hasSuper(), true);
  });

  it('when overridden a method does NOT automatically call its super method', () => {
    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { }}

    assert.equal(new B().hasSuper(), void 0);
  });

  it('`super` works across any number of levels of inheritance', () => {
    class A {iAmSuper() { return this.youAreSuper; }}
    class B extends A {constructor() { super(); this.youAreSuper = true; } }
    class C extends B {
      iAmSuper() {
        return super.iAmSuper();
      }
    }

    assert.equal(new C().iAmSuper(), true);
  });

  it('accessing an undefined member of the parent class returns `undefined`', () => {
    class A {}
    class B extends A {getMethod() { return super.undefinedMember; }}

    assert.equal(new B().getMethod(), void 0);
  });

});
describe('class', () => {

  it('if you `extend` a class, use `super()` to call the parent constructor', () => {
    class A {constructor() { this.levels = 1; }}
    class B {
      constructor() {
        this.levels++;
      }
    }

    assert.equal(new B().levels, 2);
  });

  it('`super()` may also take params', () => {
    class A {constructor(startValue=1, addTo=1) { this.counter = startValue + addTo; }}
    class B extends A {
      constructor(...args) {
        super();
        this.counter++;
      }
    }

    assert.equal(new B(42, 2).counter, 45);
  });

  it('it is important where you place your `super()` call!', () => {
    class A {inc() { this.countUp = 1; }}
    class B extends A {
      inc() {
        super.inc();
        this.countUp = 2;
        return this.countUp;
      }
    }

    assert.equal(new B().inc(), 1);
  });

  it('use `super.constructor` to find out if there is a parent constructor', () => {
    class A extends null {
      constructor() {
        super();
        this.isTop = !!super.constructor;
      }
    }

    assert.equal(new A().isTop, false);
  });

});
