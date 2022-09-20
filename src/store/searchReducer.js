import { SEARCH } from "./actions";
import { data } from "./data";

const initialState = {data:[...data], value:'', works:[]};

export default function searchReducer(state = initialState, action) {
  switch(action.type) {
      case SEARCH: {
          const {value} = action;
          const works = state.data.filter((val) => val.username.includes(value) || val.action.includes(value) || 
          val.action_createad_at.includes(value))
          return {data: state.data, value: value, works: works}
      }
      default: return state;
  }
}
