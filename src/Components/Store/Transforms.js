import { createTransform } from "redux-persist";

const SetTransform = createTransform(
    (inboundState, key) => {
        return { ...inboundState, mySet: [...inboundState.mySet] };

    },

    (outboundState, key) => {
        return {...outboundState,mySet: new Set(outboundState.mySet)};
    },
    {whitelist:['cart']}

)

export default SetTransform;