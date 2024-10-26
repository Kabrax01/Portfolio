import "./contact.scss";
import { useEffect, useState } from "react";
import PhoneSvg from "./PhoneSvg";
import { AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

function Contact() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const unmountSvg = setTimeout(() => {
            setShow(false);
        }, 2000);

        return () => clearTimeout(unmountSvg);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {show ? <PhoneSvg key="SVG" /> : <ContactForm key="contact" />}
            </AnimatePresence>
        </>
    );
}

export default Contact;
