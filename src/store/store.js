import {configureStore,getDefaultMiddleware,applyMiddleware } from '@reduxjs/toolkit'
import thunk from "redux-thunk" 
import authReducer from '../store/slices/authSlice'
import watchlistReducer from '../store/slices/watchlistSlice'
import {cryptoApi} from '../assets/services/cryptoApi'
import {cryptoNewsApi} from '../assets/services/cryptoNewsApi'

export default configureStore({
    reducer:{
        authApi:authReducer.reducer,
        watchlistApi:watchlistReducer.reducer,
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,

    },
    // middleware: getDefaultMiddleware({
    //     serializableCheck: false
    //   }),
}, applyMiddleware(thunk))