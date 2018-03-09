export default (( ) => {
    let _price, _decoratorsList

    class Sale {
        constructor( price ) {
            if ( price > 0 ) {
                _price = price
            } else {
                _price = 100
            }
            _decoratorsList = []
            this.decorators = {}

            this.decorators.fedtax = {
                getPrice( price ) {
                    return price + price * 0.2
                }
            }

            this.decorators.money = {
                getPrice( price ) {
                    return '$' + price.toFixed(2)
                }
            }
        }
        decorate( decorator ) {
            _decoratorsList.push( decorator )
        }

        getPrice( ) {
            let price = _price
            for (const decorator of _decoratorsList) {
                price = this.decorators[decorator].getPrice( price )
            }
            return price
        }
    }
    
    return Sale
})()