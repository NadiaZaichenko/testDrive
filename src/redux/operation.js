import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL= 'https://6506f91f3a38daf4803ef2e8.mockapi.io';

export const getAllNotices = createAsyncThunk(
    '/notices',
    async(_, thunkAPI) => {
        try {
            const responce = await axios.get('/adverts');
            console.log(responce.data)
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('');
        }
    }
);

export const getNoticeById = createAsyncThunk(
    '/notices/noticeId',
    async(itemId, thunkAPI) => {
        console.log(itemId)
        try {
            const responce = await axios.get(`/adverts/${itemId}`);
            const data = responce.data;
            console.log(responce)
            return data;
        } catch (error) {
            if (error.response) {
                console.error('Server Error:', error.response.status);
                console.error('Error Data:', error.response.data);
              } else if (error.request) {
                console.error('Request Error:', error.request);
              } else {
                console.error('Error:', error.message);
              }
        }
    }
)