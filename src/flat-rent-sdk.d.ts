import { SearchFormData } from "./search"

declare module "flat-rent-sdk"

export function cloneDate(date:Date):DateConstructor

export function addDays(date:Date, days:string):string

export const backendPort:number

export const localStorageKey:string

export class FlatRentSdk{
    database:any
    get(id:string):Promise<Object|null>
    search(parameters:SearchFormData):Object[]
    book(flatId:number, checkInDate:Date, checkOutDate:Date):number
    _resetTime(date:Date):void
    _calculateDifferenceInDays(startDate:Date, endDate:Date):number
    _generateDateRange(from:Date, to:Date):Date[]
    _generateTransactionId():number
    _areAllDatesAvailable(flat:any, dateRange:Array<any>):boolean
    _readDatabase():Storage
    _writeDatabase(database:Array<Object>):void
    _syncDatabase(database:Array<Object>):void
}

