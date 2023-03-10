import {renderSearchResultsBlock, renderSearchResultsBlockOne} from './search-results.js'
import {toggleFavoriteItem} from './add-mark.js'
// @ts-ignore  
import {FlatRentSdk} from './flat-rent-sdk.js'

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
console.log(new FlatRentSdk().database)
let list:Array<Place> = []
let favorite:string = ''
let conditional:Array<String> = []


function addSearch(res:Place) {
  if (localStorage.getItem('favoriteItems')) {
    JSON.parse(localStorage.getItem('favoriteItems')).forEach(el => {
      if (res.id === el.id) {
        favorite = 'active'
      }
    })
  }
  // favorite = ''
}

function searchConditionals() {
  const provider:any = document.querySelectorAll('input[name="provider"]')
  for (const i of provider) {
    if (i.checked) {
    conditional.push(i.value)
    }
  }
}

async function searchFlat() {
  for (let i=1; i <=4; i++) {
    await fetch(`http://localhost:3030/places/${i}`)
    .then(data => data.json())
    .then(res => {
      addSearch(res)
      let Place:Place = {
        id: res.id,
        name: res.name,
        image: res.image,
        price: res.price,
        description: res.description,
        favorite: favorite
      }
      list.push(Place)
      favorite = ''
    })
    
    favorite = ''
  }
}

function searchHomy() {
  let a =  new FlatRentSdk().database
    a.forEach(e => {
      addSearch(e)
      let Place:Place = {
        id: e.id,
        name: e.title,
        image: `./img/${e.photos[0]}`,
        price: e.price,
        description: e.details,
        favorite: favorite
      }
      
      list.push(Place)
      favorite = ''
    })
}

export async function search(SearchFormData:SearchFormData):Promise<void> {
  conditional = []
  searchConditionals()
  if (list.length>0) list = []
  if (conditional.includes('flat-rent'))await searchFlat()
  if (conditional.includes('homy')) searchHomy()
  
  renderSearchResultsBlock()
  list.forEach(e => {
    renderSearchResultsBlockOne(e)})
  let b = document.querySelectorAll('.favorites')
  b.forEach((e, index) => {
    e.addEventListener('click', (e) => {
      toggleFavoriteItem(e.target, list[index])
  })
  })
  
}