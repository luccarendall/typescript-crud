import { Document } from "./Document";
import { CPF } from "./CPF";
import { CNPJ } from "./CNPJ";


export class DocumentFactory {
  static create(value: string): Document {
    if(CPF.isValid(value)){
      return new CPF(value)
    }
    if(CNPJ.isValid(value)){
      return new CNPJ(value)
    }
    throw new Error(`${value} is not a valid Document`)
  }
}