const cheeses = require('../data/cheeses');
/**
 * @module cheeses
 */
module.exports = {
    /**
     * getAll
     * returnerer et JSON objekt med alle oste
     * @returns {Object}
     */
    'getAll': () => cheeses,
    
    /**
     *getOne
     *Returnerer et JSON objekt med en enkelt ost
     *@param {string} varenr -varenummeret på en ost
     *@returns {object}
     */
    'getOne': (varenr) => {
        let currentCheese = null;
        cheeses.forEach((cheese) => {
            if (cheese.varenr == varenr) {
                currentCheese = JSON.stringify(cheese);
            }
        });
        if (currentCheese != null){
            return currentCheese;
        } else {
            return {
                "code": "ResourceNotFound", 
                "message": varenr + " does not exist"
            };
        }
    }
};