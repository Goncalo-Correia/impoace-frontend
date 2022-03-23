import { BinaryFile } from "../models/binaryfile.model";
import { Class } from "../models/class.model";
import { Product } from "../models/product.model";
import { ShoppingCart } from "../models/shoppingcart.model";
import { SubClass } from "../models/subclass.model";
import { SuperClass } from "../models/superclass.model";

export class Response {
    message: string | undefined;
    binaryFile: BinaryFile | undefined;
    classs: Class | undefined;
    product: Product | undefined;
    shoppingCart: ShoppingCart | undefined;
    subClass: SubClass | undefined;
    superClass: SuperClass | undefined;

    products: Product[] | undefined;
    binaryFiles: BinaryFile[] | undefined;
    classes: Class[];
    shoppingCarts: ShoppingCart[] | undefined;
    subClasses: SubClass[] | undefined;
    superClasses: SuperClass[];

    constructor() {
        this.classes = new Array<Class>();
        this.superClasses = new Array<SuperClass>();
    }
}