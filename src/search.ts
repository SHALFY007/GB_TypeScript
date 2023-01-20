import {renderSearchResultsBlock, renderSearchResultsBlockOne} from './search-results.js'
import {toggleFavoriteItem} from './add-mark.js'

export interface SearchFormData {
    inputDate: Date,
    outPutDate: Date,
    maxPrice: string
  }
interface Place {
  id: string
  name: string,
  image: string,
  price: number,
  description: string,
  favorite: string
}
let list = []
let favorite:string = ''

export async function search(SearchFormData:SearchFormData):Promise<void> {
  if (list.length>0) list = [] 
  for (let i=1; i <=4; i++) {
    await fetch(`http://localhost:3030/places/${i}`)
    .then(data => data.json())
    .then(res => {
      console.log(res)
      console.log(JSON.parse(localStorage.getItem('favoriteItems')))
      if (res.price <= +SearchFormData.maxPrice) {
        if (res.id == 5 && JSON.parse(localStorage.getItem('favoriteItems'))) {
          favorite = 'active'
        }
        let Place:Place = {
          id: res.id,
          name: res.name,
          image: res.image,
          price: res.price,
          description: res.description,
          favorite: favorite
        }
        list.push(Place)
      }
    })
  }
  renderSearchResultsBlock()
  list.forEach(e => renderSearchResultsBlockOne(e))
  let b = document.querySelectorAll('.favorites')
  b.forEach((e, index) => {
    e.addEventListener('click', (e) => {
      toggleFavoriteItem(e.target, list[index])
  })
  })
  
}