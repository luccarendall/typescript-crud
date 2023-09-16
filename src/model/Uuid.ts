import { validate as validateUuid, v4 as uuidV4 } from "uuid";

export class Uuid {
  private value: string;

  constructor(value: string) {
    if(!validateUuid(value)){
      throw new Error(`${value} is not a valid Uuid`)
    }
    this.value = value
  }

  static randomGenerator(): Uuid {
    return new Uuid(uuidV4())
  }
}