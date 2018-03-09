export default (( ) => {
    let _props = new WeakMap();
    let _methods = new WeakMap();

    class Singleton {
        constructor( ) {
            if( !Singleton.instance ) {
                Singleton.instance = this
            }

            const self = Singleton.instance

            // declare private props
            _props.set(self, {
                privateProp: 21,
                privateProp2: 44,
            })
            // declare private methods
            _methods.set(self, {
                privateMethod() {
                    const _pp = _props.get(self)
                    console.log('Private method', _pp.privateProp, _pp.privateProp2);
                }
            })
            // declare public props
        
            self.publicProp = "ddddd"
            self.publicProp2 = "zzzzzzz"

            return self
        }
    
        publicMethod( ) {
            const self = Singleton.instance
            console.log('Public: ' + self.publicProp + ' --- ' + self.publicProp2)
        }
        publicMethod2( ) {
            const self = Singleton.instance
            const _pp = _props.get(self)
            const _pm = _methods.get(self)
            _pm.privateMethod()
            console.log('Private: ' + _pp.privateProp + ' --- ' + _pp.privateProp2)
        }
    }

    return Singleton;
})( )