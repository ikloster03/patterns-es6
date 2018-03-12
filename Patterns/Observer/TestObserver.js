import Observer from './Observer'

export default (() => {
    let _state
    class TestObserver extends Observer {
        constructor ( id ) {
            super( id )
            _state = null
            console.log('create TestObserver', this.getId())
        }
        update( subject ) {
            _state = subject.getState()
            console.log('by notify ' + _state)
        }
    }

    return TestObserver
})()