import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js'

export function toggleFavoriteItem (e, index) {
    let oldItems:Array<any> = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    let as:number = oldItems.find(a => {
        // console.log(a)
        return a.id == index.id
    })
    console.log(as)
    e.classList.toggle('active')
    if (e.classList.contains('active') && as) {
        localStorage.setItem('favoritesAmount', (+localStorage.getItem('favoritesAmount')+1).toString())
        oldItems.push(index);
        localStorage.setItem('favoriteItems', JSON.stringify(oldItems))
    } 
    else {
        oldItems.splice(oldItems.indexOf(as, 0), 1)
        localStorage.setItem('favoritesAmount', (+localStorage.getItem('favoritesAmount')-1).toString())
        localStorage.setItem('favoriteItems', JSON.stringify(oldItems))
    }
    renderUserBlock(getUserData().username, getUserData().avatarUrl, getFavoritesAmount())
}