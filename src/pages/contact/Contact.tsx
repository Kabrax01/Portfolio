import { useEffect } from "react";
import "./contact.scss";

function Contact() {
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

    return (
        <form className="contact_form">
            <div className="name">
                <label className="form_label" htmlFor="name">
                    Name:
                </label>
                <input className="input" type="text" name="name" id="name" />
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
                />
            </div>
            <div className="email">
                <label className="form_label" htmlFor="email">
                    E-mail:
                </label>
                <input className="input" type="text" name="email" id="email" />
            </div>
            <div className="message_container">
                <label className="form_label" htmlFor="message">
                    Message:
                </label>
                <textarea
                    className="message input"
                    name="message"
                    id="message"></textarea>
            </div>
            <button className="form_button" type="submit">
                Send
            </button>
        </form>
    );
}

export default Contact;

// function isValidEmail(email) {
//     const re =
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }
