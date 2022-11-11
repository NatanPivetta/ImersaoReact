import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosDaHomePage = {
        // backgroundColor: "red" 
    };
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                {/* Prop Drilling */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                    Conteúdo
                </Timeline>
                {/* <Favorites favoritos={config.favoritos} /> */}
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

    background-color: ${({ theme }) => theme.backgroundLevel1};

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
const StyledBanner = styled.div`
    background-size: cover;
    background-color: blue;
    background-image: url(${({ bg }) => bg});
    /* background-image: url(${config.bg}); */
    height: 230px;
`;
function Header() {
    return (
        <StyledHeader>
            <StyledBanner bg={config.bg} />
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

function Timeline({ searchValue, ...propriedades }) {
    // console.log("Dentro do componente", propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                // console.log(playlistName);
                // console.log(videos);
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
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
        </StyledTimeline>
    )
}


// const StyledFav = styled.div`
    
    
//     .user-info {
//         display: flex;
//         align-items: center;
//         width: 100%;
//         padding: 16px;
//         gap: 16px;
//     }
//     img {
//         /* FavoriteCard */
        
//         border-radius: 50%;

//         /* Auto layout */

//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         padding: 8px;
//         gap: 8px;

//         width: 100px;
//         height: 100px;


//         /* Inside auto layout */

//         /* flex: none;
//         order: 0;
//         flex-grow: 0; */
//     }
//     p{
//         font-size: small;
//         font-weight: lighter;
//         padding: 8px;
//     }
// `;

// function Favorites({ searchValue, ...propriedades }) {
//     // console.log("Dentro do componente", propriedades.playlists);
//     const favNames = Object.keys(propriedades.favoritos);
//     // Statement
//     // Retorno por expressão
//     return (
//         <StyledFav>
//             {favNames.map((favName) => {
//                 const favs = propriedades.favNames[favName];
//                 // console.log(playlistName);
//                 // console.log(videos);
//                 return (
//                     <section key={favName}>
//                         <h2>{favName}</h2>
//                         <div>
//                             {favs
//                                 .map((fav) => {
//                                     return (
//                                         <a key={fav.url} href={fav.url}>
//                                             <img src={fav.thumb} />
//                                             <span>
//                                                 {fav.user}
//                                             </span>
//                                         </a>
//                                     )
//                                 })}
//                         </div>
//                     </section>
//                 )
//             })}
//         </StyledFav>
//     )
// }