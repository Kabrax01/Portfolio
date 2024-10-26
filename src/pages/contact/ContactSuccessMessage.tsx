import { motion } from "framer-motion";
import { messageVariants } from "./framerVariants";
import { useEffect } from "react";

interface SuccessMessageProps {
    setSendEmailSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContactSuccessMessage({ setSendEmailSuccess }: SuccessMessageProps) {
    useEffect(() => {
        const remove = setTimeout(() => {
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
