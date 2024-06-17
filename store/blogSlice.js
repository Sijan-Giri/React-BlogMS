import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/globals/status/Statuses";
import API from "../src/http";

const blogSlice = createSlice({
    name : 'blog',
    initialState : {
        blogs : null,
        singleBlog : {},
        status : null
    },
    reducers : {
        setBlogs(state,action) {
            state.blogs = action.payload;
        },
        setSingleBlog(state,action) {
            state.singleBlog = action.payload;
        },
        setStatus(state,action) {
            state.status = action.payload;
        }
    }
});

export const {setBlogs,setSingleBlog,setStatus} = blogSlice.actions;
export default blogSlice.reducer;

export function fetchBlog() {
    return async function fetchBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        const response = await API.get("blog");
        try {
            if(response.status === 200 && response.data.data) {
                dispatch(setBlogs(response.data.data));
                dispatch(setStatus(STATUSES.SUCCESS));
            }
            else {
                dispatch(setStatus(STATUSES.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}

export function createBlog(data) {
    return async function createBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        const response = await API.post('blog',data,{
            headers : {
                'Content-Type' : "multipart/form-data",
            },
        })
        try {
            if(response.status === 201) {
                dispatch(setStatus(STATUSES.SUCCESS));
            }
            else {
                dispatch(setStatus(STATUSES.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}

export function singleBlogs(id) {
    return async function singleBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        const response = await API.get(`blog/${id}`);
        try {
            if(response.status === 200){
                dispatch(setSingleBlog(response.data.data));
                dispatch(setStatus(STATUSES.SUCCESS));
            } 
            else {
                dispatch(setStatus(STATUSES.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}

export function deleteBlog(id) {
    return async function deleteBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await API.delete(`blog/${id}`);
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
            }
            else {
                dispatch(setStatus(STATUSES.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}

export function editBlog(id, data) {
    return async function editBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        const response = await API.patch(`blog/${id}`,data,{
            headers : {
                "Content-Type" : "multipart/form-data",
            }
        });
        try {
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(setSingleBlog(response.data.data));
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

