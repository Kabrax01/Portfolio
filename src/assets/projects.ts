export interface ProjectsType {
    name: string;
    siteUrl: string;
    githubUrl: string;
    img: string;
    description: string;
    id: number;
}
const projects: ProjectsType[] = [
    {
        name: "Chatrix",
        siteUrl: "https://kabrax01.github.io/Chatrix/",
        githubUrl: "https://github.com/Kabrax01/Chatrix",
        img: "../../public/chatrix.webp",
        description:
            "Chatrix is a real-time communication application that allows users to send text and multimedia messages in private chats. The app offers features such as registration, login, user profile management (changing name, profile picture), and searching for other users to start a conversation. It provides a simple interface with a chat list view, enabling users to easily switch between conversations, as well as intuitive messaging and multimedia sharing.",
        id: 1,
    },
    {
        name: "React Quiz",
        siteUrl: "https://kabrax01.github.io/React_Quiz/",
        githubUrl: "https://github.com/Kabrax01/React_Quiz",
        img: "../../public/react_quiz.webp",
        description:
            "Quiz app with time restrictions, score counter, and minimalistic interface for testing knowledge about React framework. It uses firebase to store questions, enabling future expanding for multi topics selection",
        id: 2,
    },
    {
        name: "Tomasz Gruchacz Racing",
        siteUrl: "https://kabrax01.github.io/Tomasz_Gruchacz_Racing/",
        githubUrl: "https://github.com/Kabrax01/Tomasz_Gruchacz_Racing",
        img: "../../public/TGR.webp",
        description:
            "Landing page for Tomasz Gruchacz - motorcycle racer. With on-scroll animations and contact form. Written in vanilla JavaScript",
        id: 3,
    },
    {
        name: "Notes",
        siteUrl: "https://kabrax01.github.io/Notes/",
        githubUrl: "https://github.com/Kabrax01/Notes",
        img: "../../public/notes.webp",
        description:
            "Landing page for Tomasz Gruchacz - motorcycle racer. With on-scroll animations and contact form. Written in vanilla JavaScript",
        id: 4,
    },
];

export default projects;
