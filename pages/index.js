import Head from "next/head";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import StyledTimeline from "../src/components/Timeline";


function HomePage() {
    const HomePage = { backgroundColor: "red" };
    // const mensagem = 'Bem bindo ao AluraTube!'


    console.log(config.playlist);

    return (
        <>
            <CSSReset />
            <div style={HomePage}>
                <Menu />
                <Header />
                <Timeline playlist={config.playlist} />

            </div>
        </>
    );
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )

// }

const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;

    }
`;
function Header() {
    return (
        <StyledHeader>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {
    // console.log("Dentro do componente", props.playlist);
    const playlistNames = Object.keys(props.playlist);
    // Laço For: Statemente
    // Laço For Each: Retorno por expressão
    // Utilizar map
    return (
        <div>
            {playlistNames.map((playlistNames) => { //arrow function no lugar de: function(playlistNames)
                const videos = props.playlist[playlistNames];
                return (
                    <section>
                        <h2>{playlistNames}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}

