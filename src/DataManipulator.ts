import { ServerRespond } from './DataStreamer';

export interface Row {
  price_abc: number,
  price_def: number,
  ratio: number,
  timestamp: Date,
  upper_bound: number,
  lower_bound: number,
  trigger_alert: number | undefined,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]): Row[] {
    return serverResponds.map((el: any) => {
      return {
        price_abc: el.price_a,
        price_def: el.price_b,
        ratio: el.price_abc/el.price_def,
        timestamp: el.timestamp,
        upper_bound: 1+ 0.5,
        lower_bound: 1+ 0.5,
        trigger_alert: el.top_ask && el.top_ask.price || 0,
      };
    })
  }
}
