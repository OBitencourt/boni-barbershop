import Image from "next/image"
import { ImageDiv, LogoDiv, MainInfo, StyledSection } from "./style"
import { Container, Typography } from "@mui/material"


const About = () => {

    return (

        <>
            <StyledSection id="about">
                <Container maxWidth='xs' sx={{display: 'flex', mb: 4, justifyContent: 'center'}}>
                    
                    <Image 
                        src='/images/scissor-white.png'
                        alt="white-scissor"
                        width={40}
                        height={40}
                    />
                    <Typography
                        variant="h3"
                        sx={{fontFamily: 'Cinzel', margin: '0 14px'}}
                        color="white"
                        fontSize='2.4em'
                        align="center"
                    >
                        Sobre Nós
                    </Typography>
                    <Image 
                        src='/images/scissor-white.png'
                        alt="white-scissor"
                        width={40}
                        height={40}
                    />
                </Container>
                <Container maxWidth='lg' sx={{display: 'flex', alignItems: 'center'}}>
                    <ImageDiv>

                        <Image 
                            src='/images/imagem14.jpg'
                            alt="white-scissor"
                            width={550}
                            height={420}
                            style={{borderRadius: '4px', height: 'auto'}}
                        />
                    </ImageDiv>
                    <MainInfo>
                        <h3>
                            Sr. e Sra. Boni
                        </h3>
                        <p>
                            A Sr e Sra Boni não é apenas uma barbearia; é um espaço onde estilo, tradição e inovação se encontram para criar experiências inesquecíveis. Fundada em 2024, nossa história começou com o desejo de resgatar a essência das barbearias clássicas e combiná-la com as tendências modernas, criando um ambiente sofisticado, acolhedor e repleto de personalidade.
                        </p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            height: '1px',
                            backgroundColor: 'white',
                            marginTop: '40px',
                            width: '100%',
                            alignSelf: 'center',

                        }}>
                        
                            <div style={{
                                backgroundColor: '#301E09', /* Cor de fundo do site */
                                padding: '0 20px',
                                zIndex: 2,
                            }}>
                                <Image 
                                    src='/images/white-chair-icon.svg'
                                    width={50}
                                    height={50}
                                    alt="white-chair"                        
                                />
                            </div>
                        </div>
                        <p>
                            Nós somos movidos por valores como excelência, respeito e inovação. Acreditamos que o cuidado com o visual vai além da estética — é uma forma de expressão e autoconfiança. E é por isso que nos dedicamos a transformar cada visita em uma experiência única, que reflete a essência e o estilo de cada cliente.
                        </p>
                    </MainInfo>
                    <LogoDiv>

                        <Image 
                            src='/images/boni-logo-marrom-branco.png'
                            alt="logo"
                            width={140}
                            height={160}
                            style={{position: 'absolute', bottom: 20, left: '30px'}}
                        />
                    </LogoDiv>
                </Container>
            </StyledSection>
        </>
    )
}


export default About