import User from "../models/userModel.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        // Prevent to have the current authenticated user profile in the user lists $ne
        const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar:", error.message);
        res.status(500).json({ error: "Internal server error" });
    };
};