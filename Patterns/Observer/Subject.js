export default (() => {
    let _observers
    class Subject {
        constructor( ) {
            _observers = []
            console.log('create Subject')
        }
        add( observer ) {
            _observers.push( observer )
            console.log('add observer ', observer.getId())
        }

        remove( observer ) {
           for ( let i = 0; i < _observers.length; i++ ) {
               if ( _observers[i].getId() === observer.getId() ) {
                    _observers.splice(i, 1)
                    console.log('remove ', i, observer.getId())
               }
           }          
        }

        notify( ) {
            console.log('run notify')
            for (const observer of _observers) {
                console.log('notify observer', observer.getId())
                observer.update(this)
            }
        }
    }

    return Subject
})()