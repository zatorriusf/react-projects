const reducer = (state, action) =>{
    if(action.type === 'CLEAR_CART'){
        return{...state,cart : []}
    }
    if(action.type === 'REMOVE_ITEM'){
        return{...state,cart : state.cart.filter(item => item.id !== action.payload)}
    }
    if(action.type === 'UPDATE_TOTALS'){
        let {total,amount} = state.cart.reduce((cartTotal,item) =>{
            const{price,amount} = item;
            cartTotal.amount += amount;
            cartTotal.total += price * amount;

            return  cartTotal;

        },{total:0,amount:0})
        total = parseFloat(total.toFixed(2))
        return {...state,total,amount}
    }
    if(action.type === 'LOADING'){
        return {...state , loading : true}
    }
    if(action.type === 'DISPLAY_ITEMS'){
        return {...state, loading : false, cart : action.payload}
    }
    if(action.type === 'ALTER_ITEM_COUNT'){
        let tempCart = state.cart.map(item => {
            if(item.id === action.payload.id){
                return {...item, amount : item.amount + action.payload.addedAmount}
            }
            return item
        }).filter(item => item.amount >=1);
        return {...state,cart:tempCart}; 
    }
    console.error(`${action.type} is an unhandled action`)
    return state;
}

export default reducer;