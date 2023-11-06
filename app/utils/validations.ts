export const isEmpty = (input: string) => {
    return input.trim().length === 0;
};

export const isEmail = (input: string) => {
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(input);
};

export const isPassword = (input: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(input);
};

export const isPhoneNumber = (input: string) => {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(input);
};

export const isName = (input: string) => {
    const nameRegex = /^[a-zA-Z ]*$/;
    return nameRegex.test(input);
};

export const isAddress = (input: string) => {
    const addressRegex = /^[a-zA-Z0-9 ]*$/;
    return addressRegex.test(input);
};

export const isZipCode = (input: string) => {
    const zipCodeRegex = /^\d{5}$/;
    return zipCodeRegex.test(input);
};

export const isDate = (input: string) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(input);
};

export const isTime = (input: string) => {
    const timeRegex = /^\d{2}:\d{2}$/;
    return timeRegex.test(input);
};

export const isDateAndTime = (input: string) => {
    const dateAndTimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
    return dateAndTimeRegex.test(input);
};
