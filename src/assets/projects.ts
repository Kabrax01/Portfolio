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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum quae architecto labore et excepturi! Totam optio provident non ipsum!",
        id: 1,
    },
    {
        name: "Projekt 2",
        siteUrl: "https://kabrax01.github.io/Chatrix/",
        githubUrl: "https://github.com/Kabrax01/Chatrix",
        img: "../../public/chatrix.webp",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum quae architecto labore et excepturi! Totam optio provident non ipsum!",
        id: 2,
    },
    {
        name: "Projekt 3",
        siteUrl: "https://kabrax01.github.io/Chatrix/",
        githubUrl: "https://github.com/Kabrax01/Chatrix",
        img: "../../public/chatrix.webp",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum quae architecto labore et excepturi! Totam optio provident non ipsum!",
        id: 3,
    },
];

export default projects;
