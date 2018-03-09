export default (() => {
    let _tests = [],
    _current

    class TestCollection {
        constructor( tests ) {
            // console.log(tests)
            _tests = [].concat(tests)
            _current = 0
        }
        
        add( test ) {
            _tests.push( test )
        }

        remove ( ) {
            return _tests.pop( )
        }

        entries() {
            return Object.entries( _tests )
        }

        *[Symbol.iterator]() {
            for (let test of _tests) {
                yield test
            }
        }

        next() {
            if ( _current < _tests.length ) {
                return {
                    done: false,
                    value: _tests[ _current++ ]
                }
            } else {
                return {
                    done: true
                }
            }
        }
        hasNext() {
            return _current < _tests.length
        }

        rewind() {
            _current = 0
        }
    }

    return TestCollection
})()