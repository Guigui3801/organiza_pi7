import React, {useState, createContext} from "react";

type RegisterContextData ={
    newUser: newUserProps;
}

type newUserProps  ={
    name: string;
    email: string;
    senha: string;
}

export const RegisterContext = createContext({});