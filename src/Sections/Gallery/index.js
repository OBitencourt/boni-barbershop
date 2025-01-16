
import Image from "next/image"
import { Typography } from "@mui/material"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // CSS básico
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';



const Gallery = () => {

    return ( 
        <>
            <section id="gallery" style={{ backgroundColor: '#301E09', zIndex: '3', padding: '50px', position: 'relative'}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>

                    <Image 
                        src='/images/hair-clipper-white.png'
                        alt="white-scissor"
                        width={40}
                        height={40}
                    />
                    <Typography
                        variant="h3"
                        sx={{fontFamily: 'Cinzel', margin: '0 14px'}}
                        color="white"
                        align="center"
                        fontSize='2.4em'
                    >
                        Galeria
                    </Typography>
                    <Image 
                        src='/images/hair-clipper-white.png'
                        alt="white-scissor"
                        width={40}
                        height={40}
                    />
                </div>
                <Typography
                    variant="h3"
                    sx={{fontFamily: 'Cormorant', margin: '24px 0px', fontStyle: 'italic'}}
                    color="#DBAA68"
                    align="center"
                    fontSize={18}
                >
                    Momentos que definem estilo e cuidado.
                </Typography>
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 3,
                        gap: '1rem',
                        autoplay: true,
                        pauseOnHover: false,
                        resetProgress: false,
                        autoScroll: {
                        speed: 1, // Velocidade do scroll
                        },
                        breakpoints: {
                            1024: {
                              perPage: 3, // Mostra 3 slides em telas menores que 1024px
                              gap: '1rem',
                              
                            },
                            768: {
                              perPage: 2, // Mostra 2 slides em telas menores que 768px
                              gap: '0.5rem',
                            },
                            480: {
                              perPage: 1, // Mostra 1 slide em telas menores que 480px
                              gap: '5rem',
                              speed: 2,
                            },
                        }
                    }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
                        <Image 
                            src='/images/imagem7.jpg'
                            width={350}
                            height={300}
                            alt="imagem7"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image 
                            src='/images/imagem17.jpg'
                            width={350}
                            height={300}
                            alt="imagem7"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image 
                            src='/images/imagem14.jpg'
                            width={350}
                            height={300}
                            alt="imagem7"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image 
                            src='/images/imagem21.jpg'
                            width={350}
                            height={300}
                            alt="imagem7"
                        />
                    </SplideSlide>
                </Splide>
                <br></br>
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 3,
                        gap: '2rem',
                        autoplay: true,
                        pauseOnHover: false,
                        resetProgress: false,
                        autoScroll: {
                        speed: -1, // Velocidade do scroll
                        },
                        breakpoints: {
                            1024: {
                              perPage: 3, // Mostra 3 slides em telas menores que 1024px
                              gap: '1rem',
                            },
                            768: {
                              perPage: 2, // Mostra 2 slides em telas menores que 768px
                              gap: '5rem',
                            },
                            480: {
                              perPage: 1, // Mostra 1 slide em telas menores que 480px
                              gap: '5rem',
                              speed: 2,
                            },
                        }
                    }}
                    extensions={{ AutoScroll }}
                    
                >
                    <SplideSlide>
                        <Image 
                            src='/images/imagem18.jpg'
                            alt="imagem18"
                            width={350}
                            height={300}
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image 
                            src='/images/imagem16.jpg'
                            alt="imagem18"
                            width={350}
                            height={300}
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image 
                            src='/images/imagem10.jpg'
                            alt="imagem18"
                            width={350}
                            height={300}
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image 
                            src='/images/imagem20.jpg'
                            alt="imagem18"
                            width={350}
                            height={300}
                        />
                    </SplideSlide>
                </Splide>
            </section>
        </>
    )
}

export default Gallery