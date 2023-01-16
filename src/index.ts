import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('user', JSON.stringify({username: "Wade Warren", avatarUrl: "/img/avatar.png"}))
  localStorage.setItem('favoritesAmount', '/img/avatar.png')
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
  console.log(getUserData())
  renderUserBlock(getUserData().username, getUserData().avatarUrl, getFavoritesAmount())
  renderSearchFormBlock(currentDate, nextTrip)
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
