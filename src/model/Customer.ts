import { Document } from "./Document"
import { Uuid } from "./Uuid";
import { DocumentFactory } from "./documentFactory";

export class Customer {
  private id: Uuid;
  private name: string;
  private document: Document; // document vai variar em CPF e CNPJ então vou criar uma interface pra ele
  constructor(id: Uuid,name: string,Document: Document){
      this.id = id
      this.name = name
      this.document = document
    }

    static create(id: string, name: string, document:string): Customer{
      const uuid = new Uuid(id)
      const documentIstance = DocumentFactory.create(document)

      return new Customer(uuid, name, documentIstance)
    }


}