export interface SearchFormData {
    inputDate: Date,
    outPutDate: Date,
    maxPrice: number
  }

export function search(SearchFormData):void {
    console.log(SearchFormData)
}