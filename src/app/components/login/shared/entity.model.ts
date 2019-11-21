export class Entity {
    name: string;
    cep: string;
    number: string;
    email: string;
    username: string;
    password: string;
    passwordConfirmation: string;
    categories: {
        clothes: boolean,
        toys: boolean,
        furniture: boolean,
        food: boolean,
        musicalInstrument: boolean,
        books: boolean,
        cleaningProducts: boolean,
        medical: boolean,
        scholarMaterial: boolean,
        personalHygiene: boolean,
    };
    loged: boolean;
    lat: number;
    long: number;
    points: number;
}
