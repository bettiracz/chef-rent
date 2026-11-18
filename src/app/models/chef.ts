/** A Firebase-ből érkező szakács egy adatrekordja. */
export interface Chef {
  id: number;
  name: string;
  cuisine: string;
  description: string;
  base_fee: number;
  daily_rate: number;
  image: string;
}
