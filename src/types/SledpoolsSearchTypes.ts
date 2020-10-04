export interface ISearchProps {
  departure: string;
  arrival: string;
  date: Date;
  numberOfPassenger: number;
}

export interface IHoursAndPlacesProps {
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
}

export interface IProfileDisplayProps {
  name: string;
  picture: string;
  alt: string;
}

export interface ISledDisplayProps {
  dogs: number;
  seats: number;
  availableSeats: number;
}

export interface ISledpoolUser {
  name: string;
  picture: string;
}

export interface ISledpoolData {
  id: string;
  departure: string;
  departureHour: string;
  arrival: string;
  arrivalHour: string;
  date: Date;
  price: number;
  seats: number;
  availableSeats: number;
  dogs: number;
  user: ISledpoolUser;
}

export interface ISledpoolBlocProps extends ISledpoolData {
  hasNoMarginBottom?: boolean;
}
