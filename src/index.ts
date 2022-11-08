interface RootObject {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  domain: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
}

interface Company {
  address: Address2;
  department: string;
  name: string;
  title: string;
}

interface Address2 {
  address: string;
  city?: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Address {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Hair {
  color: string;
  type: string;
}

async function beolvas() {
    let response = await fetch("../users.json");
    let vals : RootObject = await response.json(); 
    console.log(vals.users)

    vals.users.sort(function (a, b) {
        if (a.lastName < b.lastName) {
          return -1;
        }
        if (a.lastName > b.lastName) {
          return 1;
        }
        return 0;
      });
    console.log(vals.users)

    let szuloElem = document.getElementById('namelist');
    for(let k of vals.users)
    {
        let listaElem = document.createElement('li');
        listaElem.textContent = k.lastName + " " + k.firstName;
        szuloElem?.appendChild(listaElem);
    }

    
  
}

document.addEventListener('DOMContentLoaded',()=> {
    beolvas()
})