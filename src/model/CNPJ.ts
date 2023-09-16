import { Document } from "./Document";

export class CNPJ implements Document {
  private value: string

  constructor(value: string) {
    if(!CNPJ.isValid(value)){
      throw new Error(`${value} is not a valid CNPJ`)
    }
    this.value = value
  }

  static isValid(value: string): boolean {
    return value.length == 14;
  }

  getDocument(): Document {
   return this
  }
  getValue(): string {
    return this.value
   }
}