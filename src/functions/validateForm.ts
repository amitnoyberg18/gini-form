import { FormInput } from "../types/Form";

export function validateForm(fromFields: FormInput[]): string[]{

    const numbersRegex = /^\d+$/
    const stringRegex = /^[a-zA-Z]*$/
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    return fromFields.map(field => {
        const valueLength = field.value.length

        if(field.value.length === 0) return `${field.id} is empty fix it`
        

        switch (true) {
            case field.id === "firstName" && (!stringRegex.test(field.value) || 2 > valueLength || valueLength > 12):
                return `${field.id}: Should not contain numbers. Should contain a minimum of two characters and up to 12`
            case field.id === "lastName" && (!stringRegex.test(field.value) ||  2 > valueLength || valueLength > 15): 
                return `${field.id}: Should not contain numbers. Should contain a minimum of two characters and up to 15`
            case field.id === "email" && !emailRegex.test(field.value): 
                return `${field.id}: Should be a valid email`
            case field.id === "phone" && (!numbersRegex.test(field.value) || field.value.toString().length != 7):                
                return `${field.id}: Should only contain numbers - exactly 7 digits`
            case field.id === 'password' && !passwordRegex.test(field.value):
                return `${field.id}: Make sure it contains letters, numbers and special characters (! @ # $ etc)`
            default:
                return ""
        }
    }).filter(value => value);
}