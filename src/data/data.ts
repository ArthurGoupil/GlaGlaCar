import { getDateWithDaysOffset } from '../helpers/globalHelpers';

const tomorrow = getDateWithDaysOffset(new Date(), 1);

export const data = [
  {
    id: '1',
    departure: 'Paris',
    departureHour: '10h30',
    arrival: 'Lapland',
    arrivalHour: '19h45',
    date: tomorrow,
    price: 125,
    seats: 5,
    availableSeats: 2,
    dogs: 5,
    user: {
      name: 'Unnuk',
      picture:
        'https://res.cloudinary.com/goupil/image/upload/v1601632612/glaglacar/inuit1_naous8.png',
    },
  },
  {
    id: '2',
    departure: 'Paris',
    departureHour: '11h30',
    arrival: 'Lapland',
    arrivalHour: '18h45',
    date: tomorrow,
    price: 160,
    seats: 6,
    availableSeats: 5,
    dogs: 8,
    user: {
      name: 'Ukiuk',
      picture:
        'https://res.cloudinary.com/goupil/image/upload/v1601632612/glaglacar/inuit-f1_vizwcb.png',
    },
  },
  {
    id: '3',
    departure: 'Paris',
    departureHour: '13h30',
    arrival: 'Lapland',
    arrivalHour: '21h30',
    date: tomorrow,
    price: 110,
    seats: 3,
    availableSeats: 3,
    dogs: 3,
    user: {
      name: 'Tatkret',
      picture:
        'https://res.cloudinary.com/goupil/image/upload/v1601632612/glaglacar/inuit2_fco5bw.png',
    },
  },
  {
    id: '4',
    departure: 'Paris',
    departureHour: '14h30',
    arrival: 'Lapland',
    arrivalHour: '21h30',
    date: tomorrow,
    price: 200,
    seats: 8,
    availableSeats: 5,
    dogs: 9,
    user: {
      name: 'Takiyok',
      picture:
        'https://res.cloudinary.com/goupil/image/upload/v1601632611/glaglacar/inuit-f2_fztwmj.png',
    },
  },
  {
    id: '5',
    departure: 'Paris',
    departureHour: '16h00',
    arrival: 'Lapland',
    arrivalHour: '22h00',
    date: tomorrow,
    price: 150,
    seats: 6,
    availableSeats: 5,
    dogs: 6,
    user: {
      name: 'Nirliq',
      picture:
        'https://res.cloudinary.com/goupil/image/upload/v1601632611/glaglacar/inuit3_eqlc0w.png',
    },
  },
  {
    id: '6',
    departure: 'Paris',
    departureHour: '17h00',
    arrival: 'Lapland',
    arrivalHour: '23h00',
    date: tomorrow,
    price: 145,
    seats: 4,
    availableSeats: 4,
    dogs: 5,
    user: {
      name: 'Masaaraq',
      picture:
        'https://res.cloudinary.com/goupil/image/upload/v1601632611/glaglacar/inuit-f3_ewfnz9.png',
    },
  },
  {
    id: '7',
    departure: 'Paris',
    departureHour: '17h15',
    arrival: 'Lapland',
    arrivalHour: '23h00',
    date: tomorrow,
    price: 160,
    seats: 2,
    availableSeats: 2,
    dogs: 2,
    user: {
      name: 'Aipalovik',
      picture:
        'https://res.cloudinary.com/goupil/image/upload/v1601632611/glaglacar/inuit4_ybjjxx.png',
    },
  },
  {
    id: '8',
    departure: 'Paris',
    departureHour: '18h00',
    arrival: 'Lapland',
    arrivalHour: '00h00',
    date: tomorrow,
    price: 120,
    seats: 4,
    availableSeats: 3,
    dogs: 4,
    user: {
      name: 'Sialuk',
      picture:
        'https://res.cloudinary.com/goupil/image/upload/v1601632611/glaglacar/inuit-f4_mipdjh.png',
    },
  },
  {
    id: '9',
    departure: 'Paris',
    departureHour: '18h30',
    arrival: 'Lapland',
    arrivalHour: '00h00',
    date: tomorrow,
    price: 160,
    seats: 6,
    availableSeats: 2,
    dogs: 7,
    user: {
      name: 'Tekkeitsertok',
      picture:
        'https://res.cloudinary.com/goupil/image/upload/v1601632611/glaglacar/inuit5_zr0sfj.png',
    },
  },
];
