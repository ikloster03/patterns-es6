export default class Test {
    constructor ( prop ) {
        this.publicProp = prop
    }

    test( ) {
        console.log('tttest: ' + this.publicProp)
    }
    test2( ) {
        return this.publicProp
    }
}