import { Container, Typography } from "@mui/material"
import { MainInfo, PhotosWrapper, PrimaryButton, SecondaryButton } from "./style"
import Image from "next/image"


const Hero = () => {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <section id="hero">

                <Container
                    maxWidth='lg'
                    sx={{ 
                        width: '90%', 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        
                    }}
                >

                    <MainInfo>
                        <Image 
                            src='/images/boni-logo-white-text.png'
                            width={410}
                            height={230}
                            alt="main-logo-white"
                            style={{width: '370px', height: 'auto', marginLeft: '-5px'}}                        
                        />
                        
                        <h1>
                            Transformando <span>Estilo</span> em <span>Confiança</span>.
                        </h1>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            height: '1px',
                            backgroundColor: 'white',
                            marginTop: '10px',
                            width: '100%',
                            alignSelf: 'center'
                        }}>

                            <div style={{
                                backgroundColor: '#422b0f', /* Cor de fundo do site */
                                padding: '0 20px',
                                zIndex: 2,
                            }}>
                                <Image 
                                    src='/images/moustache-white.png'
                                    width={50}
                                    height={50}
                                    alt="main-logo-white"                        
                                />
                            </div>
                        </div>

                        <div style={{display: 'flex'}}>
                            <PrimaryButton onClick={() => scrollToSection('schedule')}>
                                Agendar Horário
                            </PrimaryButton>
                            <SecondaryButton onClick={() => scrollToSection('services')}>
                                Conheça Nossos Serviços!
                            </SecondaryButton>
                        </div>
                    </MainInfo>
                    
                    <PhotosWrapper >

                        <Image 
                            src='/images/imagem8.jpg'
                            width={550}
                            height={600}
                            alt="main-logo-white"       
                            style={{height: 'auto'}}                 
                        />
                    </PhotosWrapper>
                </Container>
            </section>
        </>
    )
}


export default Hero 