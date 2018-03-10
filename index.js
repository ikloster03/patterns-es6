import Singleton from './Patterns/Singleton'
import Factory from './Patterns/Factory'
import { Test, TestChild, TestCollection } from './Patterns/Iterator'
import Sale from './Patterns/Decorator'
import Validator from './Patterns/Validator'

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


// Decorator
console.log('************Decorator************')

let sale = new Sale()

sale.decorators.newtax = {
    getPrice( price ) {
        return price + price * 0.2
    }
}

sale.decorate('fedtax')
sale.decorate('newtax')
sale.decorate('money')
console.log(sale.getPrice())
console.log('\n')


// Validator
console.log('************Validator************')
let data = {
    firstName: '',
    lastName: 'Smith',
    age: 'kkkk',
    username: 'archer01@@'
}

let config = {
    firstName: 'isNonEmpty',
    age: 'isNumber',
    username: 'isAlphNum'
}

let validator = new Validator( config )

validator.types.isNonEmpty = {
    validate( value ) {
        return value !== ''
    },
    instructions: 'the value cannot be empty'
}

validator.types.isNumber = {
    validate( value ) {
        return !isNaN( value )
    },
    instructions: 'the value can only be a valid number, e.g. 1,3.14 or 2010'
}

validator.types.isAlphNum = {
    validate( value ) {
        return !/[^a-z0-9]/i.test( value )
    },
    instructions: 'the value can only contain characters and numbers, no special symbols'
}

validator.validate( data )

if( validator.hasErrors( ) ) {
    validator.prinErrors( )
}