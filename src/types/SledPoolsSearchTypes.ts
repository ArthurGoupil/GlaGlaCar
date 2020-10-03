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
  src: string;
  alt: string;
}
