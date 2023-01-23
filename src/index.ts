import { renderSearchFormBlock } from './search-form.js'
import { SearchFormData, search } from './search.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js'
import { renderToast } from './lib.js'

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

const formInfo: SearchFormData = {
  inputDate: currentDate,
  outPutDate: nextTrip,
  maxPrice: 10
}

window.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('user', JSON.stringify({username: "Wade Warren", avatarUrl: "/img/avatar.png"}))
  localStorage.setItem('favoritesAmount', '/img/avatar.png')

  search(formInfo)
  renderUserBlock(getUserData().username, getUserData().avatarUrl, getFavoritesAmount())
  renderSearchFormBlock(currentDate, nextTrip)
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
