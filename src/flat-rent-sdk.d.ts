declare module "flat-rent-sdk"

export function cloneDate(date):DateConstructor

export function addDays(date, days):string

export const backendPort:number

export const localStorageKey:string

export class FlatRentSdk{
    database:any
    get(id:string):Promise<Object|null>
    search(parameters):Object[]
    book(flatId:number, checkInDate:Date, checkOutDate:Date):number
    _resetTime(date):void
    _calculateDifferenceInDays(startDate, endDate):number
    _generateDateRange(from, to):Date[]
    _generateTransactionId():number
    _areAllDatesAvailable(flat, dateRange):boolean
    _readDatabase():Storage
    _writeDatabase(database):void
    _syncDatabase(database):void
}

