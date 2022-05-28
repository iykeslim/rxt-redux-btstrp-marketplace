// ADD TO CART FUNCTIONALITY
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

//REMOVE FROM CART FUNCT
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}