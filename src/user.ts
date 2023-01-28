import { renderBlock } from './lib.js'


export function getUserData ():Storage | any  {
  const user:string | null = localStorage.getItem('user')
  if (user) return JSON.parse(user)
  
}
export function getFavoritesAmount ():string | any {
  return localStorage.getItem('favoritesAmount')
}
export function renderUserBlock (name:string, link:string, amount:string) {
  const favoritesCaption = +amount >=  1 ? amount : 'ничего нет'
  const hasFavoriteItems = +amount >=  1 ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${link}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
