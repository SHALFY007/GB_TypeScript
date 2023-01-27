import { Type } from './type.js'

export class Place {
    constructor(
        public readonly provider: string,
        public readonly description: string,
        public readonly id: string,
        public readonly photo: string,
        public readonly price: number,
        public readonly title: string,
        public readonly type: Type
    ) {}
}