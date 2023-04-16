import { typeofDependencies } from "mathjs";

export interface iProduct{
    pname : string;
    pDesc : string;
    pCatg : "Catlog" | "Product";
}

export type Icatg = ("Catlog" | "Product")