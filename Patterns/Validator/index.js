import ValidationError from './ValidationError'
export default (() => {
    let _config, _messages
    class Validator {
        constructor( config = { } ) {
            _config = config
            _messages = [ ]
            this.types = { }
            
        }

        validate( data ) {
            let message, type, checker, result

            for ( const key in data ) {
                if ( data.hasOwnProperty( key ) ) {
                    type = _config[ key ]
                    checker = this.types[ type ]

                    if( !type ) {
                        continue
                    }

                    if( !checker ) {
                        throw new ValidationError( 'No handler to validate type ' + type )
                    }

                    result = checker.validate( data[ key ] )

                    if( !result ) {
                        message = 'Invalid value for *' + key + '*, ' + checker.instructions
                        _messages.push( message )
                    }
                }
            }
        }

        hasErrors( ) {
            return _messages.length !== 0
        }

        prinErrors( ) {
            console.error( _messages.join( "\n" ) )
        }
    }

    return Validator
})()