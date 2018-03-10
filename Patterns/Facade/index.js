import OldFacade from './OldFacade'

export default (() => {
    let _old
    class NewFacade {
        constructor ( prop ) {
            _old = new OldFacade( prop )
        }
        method( test ) {
            _old.method1( )
            _old.method2( test )
            _old.method3( )
        }
    }

    return NewFacade
})()