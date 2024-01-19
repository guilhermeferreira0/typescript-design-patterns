import { promises } from 'fs';
import { CustomerDataParser } from './customer-data-parser';
import { CustomerData } from './cutomer-data';

export class CustomerDataParserJson extends CustomerDataParser {
  protected async parseDate(): Promise<CustomerData[]> {
    const rawData = promises.readFile(this.filePath);

    const data = JSON.parse((await rawData).toString());

    const customerData = [];

    for (const customer of data) {
      const { name, age, cpf } = customer;
      customerData.push({ name, age, cpf, nova: 'testando' });
    }

    return customerData;
  }
}
