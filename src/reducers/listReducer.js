
const initialState = {
    items : [
      {counter: 123},
    ]
  }
  
  function listReducer (state = initialState , action){
    switch (action.type) {
  
      case 'ADD_ITEM' : return  Object.assign( {}, state, {
          items : state.items.concat( {value : action.value} )
      })
  
      default : return state;
      
    }
  }
  
  
  export default listReducer