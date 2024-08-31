function validationFields(fields){
    return fields.every(field=>field)
}

function emailValidation(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

function pwdValidation(password){
    const passwordRejex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRejex.test(password)
}


module.exports = {
    validationFields,
    emailValidation,
    pwdValidation
}