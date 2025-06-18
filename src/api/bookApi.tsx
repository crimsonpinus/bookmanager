import axios from "axios";

export const API_SERVER_HOST = "http://localhost:7077"

const prefix = `${API_SERVER_HOST}/api/books`

export const  getOne = async (bno: number) => {
    const res = await axios.get(`${prefix}/${bno}`)
    return res.data.body
}

export const getList = async (page: number, size: number, searchType: string, searchText: string) => {
    let name: string = null
    let author: string = null
    if (searchType === 'name') {
        name = searchText
    } else {
        author = searchText
    }
    const res = await axios.get(`${prefix}/search`, {params: {page, size, name ,author}})
    return res.data.body
}

export const postAdd = async (bookObj: BookAdd) => {
    const res = await axios.post(`${prefix}/`, bookObj)
    return res.data.body
}

export const deleteOne = async (bno: number) => {
    const res = await axios.delete(`${prefix}/${bno}`)
    return res.data.body
}

export const putOne = async (book: BookModify) => {
    const res = await axios.put(`${prefix}/${book.id}`, book)
    return res.data.body
}
