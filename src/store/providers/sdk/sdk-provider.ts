import { Type } from "../../domain/type.js";
import {Place} from '../../domain/place.js';
import {Provider} from '../../domain/provider.js'
import { SearchFilter } from "../../domain/search-filter.js"; 
import { HttpHelper } from "../../utils/http-helper.js";
import { PlaceListResponse, PlaceResponse, Place as PlaceSDK } from "./response.js";

export class SdkProvider implements Provider {
    public static provider = 'api'
    private static apiUrl = '../../../flat-rent-sdk.js'
    public find(filter: SearchFilter): Promise<Place[]> {
        return HttpHelper.fetchAsJson<PlaceListResponse>(
            SdkProvider.apiUrl
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
private convertBookResponse(item: PlaceSDK): Place {
    return new Place(
        SdkProvider.provider,
    item.description,
    String(item.id),
    item.image,
    item.price,
    item.name,
    item.type
    )
    }
}