import { renderBlock } from './lib.js'

export function renderSearchFormBlock (inp:Date, out:Date) {
  const generateLastDate = () => {
    return new Date(
      inp.getFullYear(),
      inp.getMonth() + 1,
      30
    )
  }
  const createDate = (data:Date) => {
    return data.toJSON().slice(0, 10)
  }
  console.log(generateLastDate().toJSON().slice(0, 10))
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${createDate(inp)}" min="${createDate(inp)}" max="${createDate(generateLastDate())}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${createDate(out)}" min="${createDate(out)}" max="${createDate(generateLastDate())}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
