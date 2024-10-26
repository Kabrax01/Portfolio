import { motion } from "framer-motion";
import { messageVariants } from "./framerVariants";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface SuccessMessageProps {
    setSendEmailSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContactSuccessMessage({ setSendEmailSuccess }: SuccessMessageProps) {
    const navigate = useNavigate();

    useEffect(() => {
        const remove = setTimeout(() => {
            navigate("/Portfolio/");
            setSendEmailSuccess(false);
        }, 4000);

        return () => clearTimeout(remove);
    });

    return (
        <motion.div
            className="success__message"
            variants={messageVariants}
            initial="initial"
            animate="animate"
            exit="exit">
            <h3>Message sent !</h3>
            <p>
                Thank you for getting in touch. I will respond as soon as
                possible.
            </p>
        </motion.div>
    );
}

export default ContactSuccessMessage;
