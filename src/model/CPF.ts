import { Document } from "./Document";

export class CPF implements Document {
  private value: string

  constructor(value: string) {
    if(!CPF.isValid(value)){
      throw new Error(`${value} is not a valid CPF`)
    }
    this.value = value
  }

  static isValid(value: string): boolean {
    return value.length == 11;
  }

  getDocument(): Document {
   return this
  }
  getValue(): string {
    return this.value
   }
}