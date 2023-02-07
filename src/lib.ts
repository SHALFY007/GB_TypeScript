export function renderBlock (elementId:string, html:string) {
  const element: Element | any = document.getElementById(elementId)
  element.innerHTML = html
}

export function renderBlockMore(elementId:string, html:string) {
  const element: Element | any = document.querySelector(`.${elementId}`)
  element.insertAdjacentHTML('beforeend', html)
}
type Toast<T> = {
  text: T,
  type: T
}
type ToastAction<T> = {
  name: T,
  handler: CallableFunction
}
export function renderToast (message: Toast<Object> | null, action?:ToastAction<Object>) {
  let messageText = ''
  
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null)
    }
  }
}