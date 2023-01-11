import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  const currentDate:string = new Date().toJSON().slice(0, 10)
  const nextTrip:string = currentDate.slice(0,8)+ Number(currentDate.slice(9,10))+3
  renderUserBlock('Wade Warren', '/img/avatar.png', 0)
  renderSearchFormBlock(currentDate, nextTrip)
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
