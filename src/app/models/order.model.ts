export interface Order {
    id: number;
    paymentReference: string;
    totalPrice: number;
    registerDate: Date;
    paymentDate: Date;
    deliveryDate: Date;
    clientId: string;
    shoppingCartId: number;
    orderStatusId: number;
    addressID: number;
}