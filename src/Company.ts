import faker from "faker";
import { Mappable } from "./CustomMap/types";

export class Company implements Mappable {
  companyName: string;
  catchParse: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    (this.companyName = faker.company.companyName()),
      (this.catchParse = faker.company.catchPhrase()),
      (this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      });
  }

  markerContent(): string {
    return `
      <div>
        <h1>公司名: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchParse}</h3>
      </div>
    `;
  }
}
