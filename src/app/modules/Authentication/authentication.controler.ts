import catchAsync from "../../utils/catchAsync";
import { authenticationServices } from "./authentication.services";

const logInUser = catchAsync(async (req, res) => {
    const result = await authenticationServices.loginUser(req?.body)
    res.status(200).json({
        success: true,
        message: "User id logged in successfully",
        data: result
    })
})
const changePassword = catchAsync(async (req, res) => {
    const result = await authenticationServices.changePassword(req.user,req?.body)
    res.status(200).json({
        success: true,
        message: "password change  successfully",
        data: result
    })
})




export const authenticationController = {
    logInUser,
    changePassword
}