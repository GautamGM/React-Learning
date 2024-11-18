import axios from "axios"

const url= import.meta.env.VITE_BASE_URL_POSTS
console.log(url,"url")

const api=axios.create({
    baseURL:url
})

export const getpost=(endpoint)=>{
    return api.get(endpoint)
}

// delete data

export const deletePost=(id)=>{
    return api.delete(`/posts/${id}`)
}