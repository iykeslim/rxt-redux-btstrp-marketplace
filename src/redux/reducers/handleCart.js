const cart = []

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch(action.type) {
        case "ADDITEM":
            // Check to see if product exists first
            const exist = state.find((x)=> x.id ===product.id); 
            if(exist){
                // Icrease its quantity
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty + 1} : x);
            }else{
                const product = action.payload
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            

            case "DELITEM":
                const unexist = state.find((x) => x.id === product.id);
                if(unexist.qty === 1){
                    return state.filter((x) => x.id !== unexist.id);
                }else{
                    return state.map((x) => 
                        x.id === product.id ? {...x, qty: x.qty - 1} : x
                    );
                }
                

            default:
                return state;
                
    }
}

export default handleCart