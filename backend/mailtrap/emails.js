import { mailtrapClient, sender } from "../config/mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recepient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recepient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken ),
            category: "Verification Email",
        })
        console.log("Verification email sent successfully", response);
    } catch (error) {
        console.error("Error sending verification email", error);
        throw new Error(`Error sending verification email: ${error.message}`);
    }
};