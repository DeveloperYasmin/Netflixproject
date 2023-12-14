export const checkvalidatedata=(Email,Password)=>{
const isEmailValidate=/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email)

const isPasswordValidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password)


if(!isEmailValidate)
return "Invalid Email Address"
if(!isPasswordValidate)
return "Incorrect Password"


return null
}
