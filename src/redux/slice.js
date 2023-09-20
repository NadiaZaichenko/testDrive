import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import {getAllNotices, getNoticeById} from './operation';

const initialState = {
    items: [],
    isLoading: false,
    notice: {},
}

export const noticeSlice = createSlice({
    name: 'notices',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(getAllNotices.fulfilled, (state, action) => {
            return {
                ...state,
               items: action.payload,
               isLoading: false,
            }
        })
        .addCase(getNoticeById.fulfilled, (state, action)=> {
            return{
                ...state,
                notice: action.payload,
            }
        })
        .addMatcher(isAnyOf(getAllNotices.pending, getNoticeById.pending), state => {
              state.isLoading = true;
            })
        .addMatcher(isAnyOf(getAllNotices.rejected, getNoticeById.rejected), state => {
            return{...state,
                items: [],
                isLoading: false,
                notice: {},
            }
        })
    },
    reducers: {},
})
