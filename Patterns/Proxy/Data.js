export default (() => {
    let _result
    class Data {
        constructor ( ) {

        }

        init( prop ) {
            console.log('Some hard calculating...') 
            _result = this.getResult( prop )
            return _result
        }

        getResult( prop ) {
            return 'result ' + prop
        }
    }
    
    return Data
})()