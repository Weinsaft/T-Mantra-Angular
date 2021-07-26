export class Product {
    constructor(
      public id: number, 
      public name: string,
      public img: string,
      public price: number,
      public description: string,
      public available: boolean, 
      public gender: string
      ) 
    {}
  }