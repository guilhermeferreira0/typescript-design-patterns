export type DeliveryLocationData = {
  readonly street: string;
  readonly city: string;
};

export type DeliveryLocationDictionary = { [k: string]: DeliveryLocationData };
