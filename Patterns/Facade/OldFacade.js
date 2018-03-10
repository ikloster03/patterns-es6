export default (() => {
    let _prop 
    class OldFacade {
        constructor( prop ) {
            _prop = prop
        }

        method1( ) {
            console.log('First - start', _prop)
        }
        method2( test ) {
            console.log('Second', test)
        }
        method3( ) {
            console.log('Third - end')
        }
    }

    return OldFacade
})()