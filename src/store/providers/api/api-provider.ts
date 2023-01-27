import { Type } from "../../domain/type.js";
import {Place} from '../../domain/place.js';
import {Provider} from '../../domain/provider.js'
import { SearchFilter } from "../../domain/search-filter.js"; 
import { HttpHelper } from "../../utils/http-helper.js";
import { PlaceListResponse, PlaceResponse, Place as PlaceApi } from "./response.js";

export class ApiProvider implements Provider {
    public static provider = 'api'
    private static apiUrl = 'http://localhost:3030/places/1'
    public find(filter: SearchFilter): Promise<Place[]> {
        return HttpHelper.fetchAsJson<PlaceListResponse>(
            ApiProvider.apiUrl
        // создадим соответствующую строку запроса из объекта фильтра
        
        )
        .then((response) => {
        // проверим, что с ответ корректный
        // сконвертируем JSON-ответ в экземпляры Book
        return this.convertPlaceListResponse(response)
        })

    
}
private convertPlaceListResponse(response: PlaceListResponse): Place[] {
    return response.items.map((item) => {
    return this.convertBookResponse(item)
    })
    }
private convertBookResponse(item: PlaceApi): Place {
    return new Place(
    ApiProvider.provider,
    item.description,
    String(item.id),
    item.image,
    item.price,
    item.title,
    item.type
    )
    }
}