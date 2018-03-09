import Singleton from './Patterns/Singleton'
import Factory from './Patterns/Factory'
import { Test, TestChild, TestCollection } from './Patterns/Iterator'


// Singleton
console.log('************Singleton************')

let s1 = new Singleton()
s1.publicMethod()
s1.publicMethod2()

s1.publicProp = 'sssss'
s1.publicProp2 = 'aaaaaaaaa'
console.log('------change------')
s1.publicMethod()
s1.publicMethod2()
console.log('------s2------')
let s2 = new Singleton()
s2.publicMethod()
s2.publicMethod2()

console.log('s1 === s2: ' + s1 === s2)
console.log('\n')

// Factory
console.log('************Factory************')

Factory.F1 = function( ) {
    this.prop1 = 1
}

Factory.F2 = function( ) {
    this.prop1 = 2
}

Factory.F3 = function( ) {
    this.prop1 = 3
}

let f1 = Factory.factory('F1')
let f2 = Factory.factory('F2')
let f3 = Factory.factory('F3')

console.log(f1.test())
console.log(f2.test())
console.log(f3.test())


let str1 = Factory.factory('STR1')
let str2 = Factory.factory('STR2')
let str3 = Factory.factory('STR2')

console.log(str1.test2())
console.log(str2.test2())
console.log(str3.test2())
console.log('\n')

// Iterator
console.log('************Iterator************')

let tc = new TestCollection([
    new Test(1),
    new TestChild(2),
    new Test(3),
    new TestChild(4),
])
console.log('test: next()')

while( tc.hasNext() ) {
    console.log(tc.next().value.test2())
}
tc.rewind()
console.log('test: rewind()')
while( tc.hasNext() ) {
    tc.next().value.test()
}

console.log('test: entries()')
for( let [ key, value ] of tc.entries() ) {
    value.test()
}
console.log('test: *[Symbol.iterator]()')
for ( let t of tc ) {
    console.log(t.test2())
}
console.log('\n')