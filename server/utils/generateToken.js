import jwt from "jsonwebtoken";

// Generate JWT token and set it in the res cookie

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // The lifetime of the cookie
        httpOnly: true, // Prevent XSS attacks (cross-site scripting attacks)
        sameSite: "strict", // CSRF attacks (cross-site request forgery attacks)
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;