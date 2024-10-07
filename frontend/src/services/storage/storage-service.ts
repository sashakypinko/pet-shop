export default class StorageService {
  constructor(protected readonly prefix: string) {

  }

  store = (key: string, value: any): void => {
    localStorage.setItem(`${this.prefix}.${key}`, JSON.stringify(value));
  };

  get = (key: string): any => {
    const data = localStorage.getItem(`${this.prefix}.${key}`);
    if (!data) return null;
    return JSON.parse(data);
  };

  remove = (key: string): void => {
    localStorage.removeItem(`${this.prefix}.${key}`);
  };
}
