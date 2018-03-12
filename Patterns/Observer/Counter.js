export default (() => {
    let _counter
    class Counter {
        constructor ( ) {
            _counter = 1
        }
        next() {
            return _counter++
        }
        reset() {
            _counter = 1
        }
    }

    return Counter
})()