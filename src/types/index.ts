export interface Item {
    id: number,
    name: string,
    imageUrl: string,
    price: number
}

export type Size = "s" | "m" | "l" | "xl";

export interface CartItem extends Item {
    quantity: number,
    size: Size
}

export interface Category {
    id: string | number,
    title: string,
    routeUrl: string,
    items: Array<Item>,
}

export type Categories = "mens" | "womens" | "bags"
    | "watches" | "shoes" | "caps" | "jackets" | "mobiles"

export type CollectionData = Record<Categories, Category>

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never

export interface User {
    id: string,
    displayName: string,
    email: string,
    creationDate: Date,
    phoneNumber: string | null
}

export interface CategoryType extends Omit<Category, "items"> {
    imageUrl: string
}