import { Place, databaseEl } from './search.js';
import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js'

export function toggleFavoriteItem (e:Element, index:Place) {
    const items:string | null = localStorage.getItem('favoriteItems')
    if (items) {let oldItems:Array<any> = JSON.parse(items) || [];
    let as:number = oldItems.find(a => {
        return a.id == index.id
    })
    e.classList.toggle('active')
    if (e.classList.contains('active')) {
        localStorage.setItem('favoritesAmount', (+items+1).toString())
        oldItems.push(index);
        localStorage.setItem('favoriteItems', JSON.stringify(oldItems))
    } 
    else {
        oldItems.splice(oldItems.indexOf(as, 0), 1)
        localStorage.setItem('favoritesAmount', (+items-1).toString())
        localStorage.setItem('favoriteItems', JSON.stringify(oldItems))
    }
    renderUserBlock(getUserData().username, getUserData().avatarUrl, getFavoritesAmount())
}}