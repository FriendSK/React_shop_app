export const addProductAction = (dispatch, product) => {
    dispatch({type:'SET_PRODUCT', product})
}
export const removeProductAction = (dispatch, product) => {
    dispatch({type:'REMOVE_PRODUCT', product})
}

export const toggleShowCartAction = (dispatch, value) => {
    dispatch({type:'TOGGLE_SHOW_CART', value})
}
