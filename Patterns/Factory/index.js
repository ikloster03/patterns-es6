let Factory = (() => {
    let _props = new WeakMap( )
    let _methods = new WeakMap( )

    class Factory {
        constructor( ) {
            _props.set(this, {
                strProp: 'ggg'
            })
         }
        
        test( ) {
            return 'test ' + this.prop1
        }

        test2( ) {
            const _pp = _props.get(this)
            return _pp.strProp
        }

        static factory( type ) {
            if ( typeof Factory[ type ] !== 'function' ) {
                throw Error(type + " doesn't exist")
            }

            if ( typeof Factory[ type ].test !== 'function' ) {
                Factory[ type ].prototype = new Factory( )
            }

            let newFactory = new Factory[ type ]( )

            return newFactory
        }
    }

    Factory.STR1 = function( ) {
        let tmp = Object.assign( {}, _props.get(this) )
        tmp.strProp = 'aaa'
        _props.set( this, tmp )
    }
    
    Factory.STR2 = function( ) {
        let tmp = Object.assign( {}, _props.get(this) )
        tmp.strProp = 'bbb'
        _props.set( this, tmp )
    }
    
    Factory.STR3 = function( ) {
        let tmp = Object.assign( {}, _props.get(this) )
        tmp.strProp = 'ccc'
        _props.set( this, tmp )
    }

    return Factory
})( )

Factory.F1 = function( ) {
    this.prop1 = 1
}

Factory.F2 = function( ) {
    this.prop1 = 2
}

Factory.F3 = function( ) {
    this.prop1 = 3
}

export default Factory