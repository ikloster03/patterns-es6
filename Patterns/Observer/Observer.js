export default (() => {
    class Observer {
        constructor( id ) {
            this._id = id
            console.log('create Observer', this._id)
        }
        getId ( ) {
            return this._id
        }
        update( ) {

        }
    }

    return Observer
})()