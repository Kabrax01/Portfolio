import technologies from "../assets/technologies";

function Main() {
    return (
        <div className="main">
            <div className="main__text">
                <h1>Arnold Rogalski</h1>
                <h2>Frontend Developer</h2>
                <p>
                    With a solid foundation in frontend technologies I am
                    excited to embark on my professional journey as a frontend
                    developer, ready to tackle new challenges, learn and grow
                    alongside a supportive team, and contribute to the success
                    of innovative web projects.
                </p>
                <div className="main__tech">
                    <h3>Tech stack:</h3>
                    <ul>
                        {technologies.map((tech) => {
                            return (
                                <div className="technologies">
                                    <p>{tech.name}</p>
                                    <img src={tech.img} alt="" />
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <img className="main__photo" src="/no-bg-2.png" alt="" />
        </div>
    );
}

export default Main;
