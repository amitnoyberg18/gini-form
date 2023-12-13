<script setup lang="ts">
import { ref } from 'vue';
import { FormInput } from "../../types/Form";
import { validateForm } from '../../functions/validateForm';

const fromFields = ref<FormInput[]>([
  {id: "firstName", type: "text", value: ""},
  {id: "lastName", type: "text", value: ""},
  {id: "email", type: "email", value: ""},
  {id: "phonePrefix", type: "tel",value: "050", selectItems: ['050', '052', '054']},
  {id: "phone", type: "number", value: ""},
  {id: "password", type: "password", value: ""},
])

const errorMessages = ref<string[]>([])

const handleSubmit = (e:Event) => {
    e.preventDefault()
    const validationMessages = validateForm(fromFields.value)
    errorMessages.value = validationMessages
    
    if(validationMessages.length > 0) return 
    
    const submittedObject = fromFields.value.reduce((newFormField ,field) => (
        {
            ...newFormField,
            [field.id]: field.value,
        }
    ),{})    

    console.log(submittedObject);
    
}

</script>

<template>
    <div class="page">
        <form class="form" v-on:submit="handleSubmit">
            <div class="field" v-for="item in fromFields" :key="item.id">
                <label>{{ item.id }}</label>
                <input
                    v-if="!('selectItems' in item)"
                    v-model="item.value"
                    :type="item.type"
                    :value="item.value"
                    @change="e => {
                        item.value = (e.target as HTMLInputElement).value}">
    
                <select
                    v-if="('selectItems' in item)"
                    v-model="item.value">
                        <option v-for="option in item.selectItems" 
                            >
                            {{ option }}
                        </option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
        <ul>
            <li v-for="message in errorMessages" :key="message">
                {{ message }}
            </li>
        </ul>
    </div>
</template>


<style scoped>

    .page {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    /* error message */
    .page ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        margin-left: 1rem;
    }

    .page ul li {
        color:white;
        background-color: rgb(235, 91, 91);
        border-radius: 10px;
        margin-bottom: .5em;
        display: inline-block;
        padding: 1rem;
        font-size: 1.2rem;
        letter-spacing: 1px;
    }

    .field {
        border-radius: 10px;
        padding: .5rem;
        text-align: left;
    }
    .field label {
        color: #aaa;
        display: inline-block;
        font-size: .6rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    .field input, .field select {
        display: block;
        width: 100%;
        padding: 10px 6px;
        border-radius: 10px;
        border: 2px solid #ddd;
    }

    .form button {
        text-align: center;
        margin: 1rem auto;
        transition: .2s ease-in-out all;
    }
    .form button:hover {
        transform: scale(1.05);
    }
</style>