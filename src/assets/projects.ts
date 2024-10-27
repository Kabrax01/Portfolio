export interface ProjectsType {
    name: string;
    siteUrl: string;
    githubUrl: string;
    img: string;
    tabletsImg?: string;
    mobileImg?: string;
    description: string;
    id: number;
}
const projects: ProjectsType[] = [
    {
        name: "Chatrix",
        siteUrl: "https://kabrax01.github.io/Chatrix/",
        githubUrl: "https://github.com/Kabrax01/Chatrix",
        img: `${import.meta.env.BASE_URL}./projects/chatrix_large`,
        tabletsImg: `${import.meta.env.BASE_URL}./projects/chatrix_medium`,
        mobileImg: `${import.meta.env.BASE_URL}./projects/chatrix_mobile`,
        description:
            "Chatrix is a real-time communication application that allows users to send text and multimedia messages in private chats. The app offers features such as registration, login, user profile management (changing name, profile picture), and searching for other users to start a conversation. It provides a simple interface with a chat list view, enabling users to easily switch between conversations, as well as intuitive messaging and multimedia sharing.",
        id: 1,
    },
    {
        name: "React Quiz",
        siteUrl: "https://kabrax01.github.io/React_Quiz/",
        githubUrl: "https://github.com/Kabrax01/React_Quiz",
        img: `${import.meta.env.BASE_URL}./projects/react_quiz_large`,
        tabletsImg: `${import.meta.env.BASE_URL}./projects/react_quiz_medium`,
        mobileImg: `${import.meta.env.BASE_URL}./projects/react_quiz_mobile`,
        description:
            "Quiz app with time restrictions, score counter, and minimalistic interface for testing knowledge about React framework. It uses firebase to store questions, enabling future expanding for multi topics selection",
        id: 2,
    },
    {
        name: "Tomasz Gruchacz Racing",
        siteUrl: "https://kabrax01.github.io/Tomasz_Gruchacz_Racing/",
        githubUrl: "https://github.com/Kabrax01/Tomasz_Gruchacz_Racing",
        img: `${import.meta.env.BASE_URL}./projects/TGR_large`,
        tabletsImg: `${import.meta.env.BASE_URL}./projects/TGR_medium`,
        mobileImg: `${import.meta.env.BASE_URL}./projects/TGR_mobile`,
        description:
            "Landing page for Tomasz Gruchacz - motorcycle racer. With on-scroll animations, auto image slider and contact form. Written in vanilla JavaScript",
        id: 3,
    },
    {
        name: "Notes",
        siteUrl: "https://kabrax01.github.io/Notes/",
        githubUrl: "https://github.com/Kabrax01/Notes",
        img: `${import.meta.env.BASE_URL}./projects/notes_large`,
        tabletsImg: `${import.meta.env.BASE_URL}./projects/notes_medium`,
        mobileImg: `${import.meta.env.BASE_URL}./projects/notes_mobile`,
        description:
            "Notes is simple application allowing users to add, delete and edit notes. It stores data in browser storage. Builded without using context API to face the problem of props-drilling",
        id: 4,
    },
    {
        name: "Weather Forecast",
        siteUrl: "https://kabrax01.github.io/Weather_App/",
        githubUrl: "https://github.com/Kabrax01/Weather_App",
        img: `${import.meta.env.BASE_URL}./projects/WeatherForecast_large`,
        tabletsImg: `${
            import.meta.env.BASE_URL
        }./projects/WeatherForecast_medium`,
        mobileImg: `${
            import.meta.env.BASE_URL
        }./projects/WeatherForecast_mobile`,
        description:
            "Weather app for displaying weather forecast for current and searched location. Builded mainly for mobile devices",
        id: 5,
    },
    {
        name: "Tic-Tac-Toe",
        siteUrl: "https://kabrax01.github.io/Tic-Tac-Toe/",
        githubUrl: "https://github.com/Kabrax01/Tic-Tac-Toe",
        img: `${import.meta.env.BASE_URL}./projects/TTT_large`,
        tabletsImg: `${import.meta.env.BASE_URL}./projects/TTT_medium`,
        mobileImg: `${import.meta.env.BASE_URL}./projects/TTT_mobile`,
        description: "Classic Tic-Tac-Toe game",
        id: 6,
    },
];

export default projects;
