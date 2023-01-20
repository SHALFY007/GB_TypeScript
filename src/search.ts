import {renderSearchResultsBlock, renderSearchResultsBlockOne} from './search-results.js'

export interface SearchFormData {
    inputDate: Date,
    outPutDate: Date,
    maxPrice: string
  }

let asd = []

export async function search(SearchFormData:SearchFormData):Promise<void> {
  if (asd.length>0) asd = [] 
  for (let i=1; i <=4; i++) {
    await fetch(`http://localhost:3030/places/${i}`)
    .then(data => data.json())
    .then(res => {
      console.log(res)
      if (res.price <= +SearchFormData.maxPrice) {
        asd.push(res)
      }
    })
  }
  renderSearchResultsBlock()
  asd.forEach(e => renderSearchResultsBlockOne(e))
  
  
}