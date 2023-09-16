import { Uuid } from "./Uuid";

export class Customer {
  private id: Uuid;
  private name: string;
  private document: Document; // document vai variar em CPF e CNPJ então vou criar uma interface pra ele
}