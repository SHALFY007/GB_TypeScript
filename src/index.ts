import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
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
  renderUserBlock('Wade Warren', '/img/avatar.png', 0)
  renderSearchFormBlock(currentDate, nextTrip)
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
