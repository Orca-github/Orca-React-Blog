
const initState=0
export default function reducer(preState=initState,action) {
   
    const {type,data} = action
    console.log('in reducer,preState:',preState,'data:',data)
    switch(type){
        case 'increase':
            return preState + data
        case 'decrease':
            return preState - data
        default:
            return preState

    }
}
