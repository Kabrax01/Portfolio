import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import { Errors, validateForm } from "../../utils/formValidation";
import { AnimatePresence, motion } from "framer-motion";
import { containerVariants, formVariants, h1Variants } from "./framerVariants";
import ContactSuccessMessage from "./ContactSuccessMessage";

function ContactForm() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [sendEmailSuccess, setSendEmailSuccess] = useState(false);
    const [errors, setErrors] = useState<Errors | null>(null);
    const [sendingError, setSendingError] = useState(false);

    const formRef = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        const form = document.querySelector<HTMLFormElement>(".contact_form");

        function moveUp(e: MouseEvent | KeyboardEvent) {
            const target = e.target as HTMLElement;

            if (target && target.classList.contains("input")) {
                const label =
                    target.previousElementSibling as HTMLElement | null;

                if (label) {
                    label.style.transform =
                        "translateY(-2.2rem) translateX(-1rem)";
                    label.style.color = "white";
                }
            }
        }

        function tabMoveUp(e: KeyboardEvent) {
            if (e.key === "Tab") {
                moveUp(e);
            }
        }

        form?.addEventListener("keyup", tabMoveUp);
        form?.addEventListener("click", moveUp);

        return () => {
            form?.removeEventListener("click", moveUp);
            form?.removeEventListener("keyup", tabMoveUp);
        };
    }, []);

    useEffect(() => {
        const clearError = setTimeout(() => setSendingError(false), 4000);

        return () => clearTimeout(clearError);
    }, [sendingError]);

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        const { errors } = validateForm(name, surname, email, message);

        setErrors(errors);

        if (Object.keys(errors).length) return;

        async function sendEmail() {
            if (!formRef.current) return;

            setIsLoading(true);
            try {
                const res = await emailjs.sendForm(
                    "service_h2z696d",
                    "template_j47nrcg",
                    formRef.current,
                    {
                        publicKey: "2t1w6xXx4e1E_CJEV",
                    }
                );

                if (res.text === "OK") setSendEmailSuccess(true);
            } catch (error) {
                console.error(`${error as Error}.message`);
                setSendingError(true);
            } finally {
                setIsLoading(false);
            }
        }

        sendEmail();
    }

    return (
        <AnimatePresence mode="wait">
            {!sendEmailSuccess && (
                <motion.div
                    className="contact"
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key="1">
                    <motion.h1 variants={h1Variants}>Get in touch !</motion.h1>
                    <motion.form
                        variants={formVariants}
                        className="contact_form"
                        ref={formRef}
                        onSubmit={handleSubmit}>
                        <motion.div className="name" variants={formVariants}>
                            {errors?.name && (
                                <p className="error">{errors.name}</p>
                            )}
                            <label className="form_label" htmlFor="name">
                                Name * :
                            </label>
                            <input
                                className="input"
                                type="text"
                                name="name"
                                id="name"
                                maxLength={24}
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </motion.div>
                        <motion.div className="surname" variants={formVariants}>
                            {errors?.surname && (
                                <p className="error">{errors.surname}</p>
                            )}
                            <label className="form_label" htmlFor="surname">
                                Surname * :
                            </label>
                            <input
                                className="input"
                                type="text"
                                name="surname"
                                id="surname"
                                maxLength={24}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </motion.div>
                        <motion.div className="email" variants={formVariants}>
                            {errors?.email && (
                                <p className="error">{errors.email}</p>
                            )}
                            <label className="form_label" htmlFor="email">
                                Email * :
                            </label>
                            <input
                                className="input"
                                type="text"
                                name="email"
                                id="email"
                                maxLength={40}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </motion.div>
                        <motion.div
                            className="message_container"
                            variants={formVariants}>
                            {errors?.message && (
                                <p className="error">{errors.message}</p>
                            )}
                            <label className="form_label" htmlFor="message">
                                Message * :
                            </label>
                            <textarea
                                className="message input"
                                name="message"
                                id="message"
                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }></textarea>
                        </motion.div>

                        <motion.button
                            className="form_button"
                            type="submit"
                            style={{ background: sendingError ? "red" : "" }}
                            disabled={isLoading}
                            variants={formVariants}>
                            {isLoading
                                ? "Sending..."
                                : sendingError
                                ? "Something went wrong... try again later"
                                : "Send"}
                        </motion.button>
                    </motion.form>
                </motion.div>
            )}
            {sendEmailSuccess && (
                <ContactSuccessMessage
                    setSendEmailSuccess={setSendEmailSuccess}
                    key="message"
                />
            )}
        </AnimatePresence>
    );
}

export default ContactForm;
