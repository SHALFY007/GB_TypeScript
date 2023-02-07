import { Type } from "../../domain/type"

export interface PlaceListResponse {
    error?: string,
    items: Place[]
}

export interface PlaceResponse {
    error?: string,
    item: Place
}

export interface Place {
    id: string
    title: string,
    image: string,
    price: number,
    description: string,
    favorite: string,
    type: Type
}

// export interface Type {
//     type: string
// }