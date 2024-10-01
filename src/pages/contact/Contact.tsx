import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

function Contact() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        const form = document.querySelector<HTMLFormElement>(".contact_form");

        function moveUp(e: MouseEvent | KeyboardEvent) {
            const target = e.target as HTMLElement;

            if (target && target.classList.contains("input")) {
                const label =
                    target.previousElementSibling as HTMLElement | null;

                if (label) {
                    label.style.transform = "translateY(-2.2rem)";
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

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

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

                if (res.text === "OK") console.log("Success");
            } catch (error) {
                console.error(`${error as Error}.message`);
            } finally {
                setIsLoading(false);
            }
        }

        sendEmail();
    }
    return (
        <div className="contact">
            <h1>Get in touch !</h1>
            <form
                className="contact_form"
                ref={formRef}
                onSubmit={handleSubmit}>
                <div className="name">
                    <label className="form_label" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="input"
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="surname">
                    <label className="form_label" htmlFor="surname">
                        Surname:
                    </label>
                    <input
                        className="input"
                        type="text"
                        name="surname"
                        id="surname"
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <div className="email">
                    <label className="form_label" htmlFor="email">
                        E-mail:
                    </label>
                    <input
                        className="input"
                        type="text"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="message_container">
                    <label className="form_label" htmlFor="message">
                        Message:
                    </label>
                    <textarea
                        className="message input"
                        name="message"
                        id="message"
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button
                    className="form_button"
                    type="submit"
                    disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    );
}

export default Contact;

// function isValidEmail(email) {
//     const re =
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }
