import { InputHTMLAttributes } from "vue"

export type FormInput = {
    id: "firstName" | "lastName" | "email" | "phonePrefix" | "phone" | "password" ,
    type: InputHTMLAttributes['type']
    value: string
    selectItems?: string[] 
}