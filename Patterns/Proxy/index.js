import Data from './Data'

export default (() => {
    let _data, _dataCache
    
    class DataProxy {
        constructor( ) {
            _data = new Data()
            _dataCache = []
        }
        result( prop ) {
            if( !_dataCache[ prop ] ) {
                _dataCache[ prop ] = _data.init( prop )
            }
            return _dataCache [ prop ]
        }
    }

    return DataProxy
})()