import { renderSearchFormBlock } from './search-form.js'
import { SearchFormData, search } from './search.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js'
import { renderToast } from './lib.js'
import { ApiProvider } from './store/providers/api/api-provider.js'
import { SdkProvider } from './store/providers/sdk/sdk-provider.js'
import { SearchFilter } from './store/domain/search-filter.js'
import {toggleFavoriteItem} from './add-mark.js' 
import { Type } from './store/domain/type.js'
let now = new Date();
let currentDate:Date = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 2,
)
let nextTrip:Date = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() + 4
)
// 

window.addEventListener('DOMContentLoaded', () => {
  // let api = new ApiProvider()
  // let sdk = new SdkProvider()
  
  // const filter: SearchFilter = {
  //   type: Type.Homy
  // }

  // Promise.all([
  //   api.find(filter),
  //   sdk.find(filter)
  // ])
  // .then(res => console.log(res))

  // localStorage.setItem('favoriteItems', "0")
  localStorage.setItem('user', JSON.stringify({username: "Wade Warren", avatarUrl: "/img/avatar.png"}))
  // localStorage.setItem('favoritesAmount', '0')
  renderUserBlock(getUserData().username, getUserData().avatarUrl, getFavoritesAmount())
  renderSearchFormBlock(currentDate, nextTrip)
  renderSearchStubBlock()
  const input:HTMLInputElement | any = document.querySelector('.max-price')
  const btn:HTMLButtonElement | any = document.querySelector('button')
  btn.addEventListener('click', (e:Event) => {
    e.preventDefault()
    const formInfo: SearchFormData = {
      inputDate: currentDate,
      outPutDate: nextTrip,
      maxPrice: input.value
    }
    search(formInfo)
  })

  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
