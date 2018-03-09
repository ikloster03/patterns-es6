import Test from './Test'

export default class TestChild extends Test {
    constructor ( prop ) {
        super(prop)
    }
    test ( ) {
        console.log('test child!!!')
    }
}