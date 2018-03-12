import Subject from './Subject'

export default (() => {
    let _state
    class TestSubject extends Subject {
        constructor( ) {
            super( )
            _state = null
            console.log('create TestSubject')
        }
        getState( ) {
            return _state
        }
        setState( state ) {
            _state = state
            this.notify( )
        }
    }

    return TestSubject
})()