import axios, {AxiosResponse} from "axios";
import {currentImageType, imagesType} from "../reducer/app-reducer";
const instance = axios.create({
    baseURL: 'https://boiling-refuge-66454.herokuapp.com/'
})

export const appAPI = {
    getImages() {
        return instance.get<null,AxiosResponse<Array<imagesType>>>('images')
    },
    getImageAndComments(id: number) {
        return instance.get<{id:number},AxiosResponse<currentImageType>>(`images/${id}`)
    },
    sendComment(id: number, comment: string) {
        return instance.post(`images/${id}/comments`, {name:'Some Name',comment:comment})
    }

}
