import {legacy_createStore as createStore,applyMiddleware, combineReducers, compose} from "redux"
import {thunk} from "redux-thunk"
import { userLoginReducer } from "./reducers/userReducers"
import { movieDetailsReducer, movieListReducer } from "./reducers/movieReducers"

const rootReducer=combineReducers({
    userLogin:userLoginReducer,
    movieList:movieListReducer,
    movieDetails:movieDetailsReducer
})

// Local storage data in order to persist it
const userInfoFromLocalStorage=localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null

const initialState={
    userLogin:{userInfo:userInfoFromLocalStorage}
}

const middleware=[thunk]

const composedEnhancer=(process.env.NODE_ENV!=="production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||compose

const composedEnhancers=composedEnhancer(applyMiddleware(...middleware));

const store=createStore(
    rootReducer,
    initialState,
    composedEnhancers
)

export default store
