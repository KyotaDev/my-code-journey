export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1 : Passenger = {
    name: 'Kyota',
}

const passenger2 : Passenger = {
    name: 'Karzten',
    children: ['Natalia', 'Elizabeth']
}

const returnChildrenNumber = ( passenger : Passenger ) => {
    //const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length || 0;
    console.log(passenger.name, howManyChildren);
}

returnChildrenNumber( passenger1 );