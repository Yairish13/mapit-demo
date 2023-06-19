export const cellphonePattern = /^\s*05(([0-9]-[0-9])|([0-9]{2}-?))[0-9]{6}$/;
export const otpPattern = /^\d{6}$/;
export const recaptchaAction = "LOGIN";

export const isErrored = (errors, questionNumber) => {
  return Object.keys(errors).some((error) => error.split('_')[0] === questionNumber)
};
export const isAnswered = (objOfValues, name) => {
  // const newArr = Object.keys(objOfValues).filter((el) => el.split('_')[0] === name).map(key => { return { [key]: objOfValues[key] } });
  const newArr = Object.keys(objOfValues).filter((el) => el.split('_')[0] === name).map(key => objOfValues[key]);
  return newArr.every(el => el === true)
};

export const getErrored = (errors) => {
  const firstError = Object.keys(errors).reduce((field, a) => {
    return !!errors[field] ? field : a;
  }, null);

  if (firstError) {
    const errorInput = document.querySelector(`input[name="${firstError}"]`);
    console.log(firstError);
    if (errorInput) {
      return errorInput;
    }
    return false;
  }
  return false;
}
export const handleQuestionNine = (arrayOne, arrayTwo, arrayThree) => {
  const newArray = arrayOne.filter(obj => !arrayTwo.some(item => item.id === obj.id));
  return [...newArray, ...arrayThree]
}
export const handleRecaptcha = async (action, key) => {
  const token = await grecaptcha.enterprise?.execute(key, {
    action: action,
  });
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token:token, action: action }),
  };
  let res = await fetch("/api/recaptcha", options);
  const resJson = await res.json();
  const score = await resJson?.score;
  if (score > 0.6) {
    return true;
  } else {
    return false;
  }
};