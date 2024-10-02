export interface Errors {
    name?: string;
    surname?: string;
    email?: string;
    message?: string;
}

function isValidEmail(email: string) {
    const testRegExp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return testRegExp.test(String(email).toLowerCase());
}

export function validateForm(
    name: string,
    surname: string,
    email: string,
    message: string
) {
    const errors: Errors = {};

    if (name === "") errors.name = "Field is required";
    if (surname === "") errors.surname = "Field is required";
    if (email === "") {
        errors.email = "Field is required";
    } else if (!isValidEmail(email)) {
        errors.email = "Invalid email";
    }
    if (message === "") errors.message = "Field is required";

    return { errors };
}
