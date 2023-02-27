export interface IAddressCreate{
    cep: string,
    state: string,
    city: string,
    street: string,
    number: string,
    complement?: string
}

export interface IUserCreate{
    name: string,
    email: string,
    cpf: string,
    cellPhone: string,
    birthDate: string,
    description: string,
    address: IAddressCreate,
    isAdvertiser: boolean,
    password: string,
}