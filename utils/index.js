export const cellphonePattern = /^\s*05(([0-9]-[0-9])|([0-9]{2}-?))[0-9]{6}$/;
export const otpPattern = /^\d{6}$/;

export const isErrored = (errors, questionNumber) => {
    return Object.keys(errors).some((error) => error.split('_')[0] === questionNumber)
}
;
