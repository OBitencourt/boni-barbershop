import Image from "next/image"
import { MainInfo } from "./style"
import { Container, Typography } from "@mui/material"


const About = () => {

    return (

        <>
            <section id="about" style={{height: '100vh', backgroundColor: '#301E09', zIndex: '3', padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative'}}>
                <Container maxWidth='xs' sx={{display: 'flex', mb: 4}}>
                    <Image 
                        src='/images/scissor-white.png'
                        alt="white-scissor"
                        width={50}
                        height={50}
                    />
                    <Typography
                        variant="h3"
                        sx={{fontFamily: 'Cinzel', margin: '0 14px'}}
                        color="white"
                    >
                        Sobre Nós
                    </Typography>
                    <Image 
                        src='/images/scissor-white.png'
                        alt="white-scissor"
                        width={50}
                        height={50}
                    />
                </Container>
                <Container maxWidth='lg' sx={{display: 'flex'}}>
                    <Image 
                        src='/images/imagem7.jpg'
                        alt="white-scissor"
                        width={500}
                        height={420}
                        style={{borderRadius: '4px'}}
                    />
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
                                    alt="main-logo-white"                        
                                />
                            </div>
                        </div>
                        <p>
                            Nós somos movidos por valores como excelência, respeito e inovação. Acreditamos que o cuidado com o visual vai além da estética — é uma forma de expressão e autoconfiança. E é por isso que nos dedicamos a transformar cada visita em uma experiência única, que reflete a essência e o estilo de cada cliente.
                        </p>
                    </MainInfo>
                    <Image 
                        src='/images/boni-logo-marrom-branco.png'
                        alt="logo"
                        width={140}
                        height={160}
                        style={{position: 'absolute', bottom: 20, left: '30px'}}
                    />
                </Container>
            </section>
        </>
    )
}


export default About