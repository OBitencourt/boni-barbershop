import { Container, Typography } from "@mui/material"
import Image from "next/image"
import { MainInfo, ServicesDiv } from "./style"


const Services = () => {

    return (

        <>
            <section style={{height: '100vh', backgroundColor: 'transparent', zIndex: '3', padding: '50px', position: 'relative'}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>

                    <Image 
                        src='/images/spinning-barbershop-icon.png'
                        alt="white-scissor"
                        width={50}
                        height={50}
                    />
                    <Typography
                        variant="h3"
                        sx={{fontFamily: 'Cinzel', margin: '0 14px'}}
                        color="white"
                        align="center"
                    >
                        Serviços
                    </Typography>
                    <Image 
                        src='/images/spinning-barbershop-icon.png'
                        alt="white-scissor"
                        width={50}
                        height={50}
                    />
                </div>

                <Container maxWidth='lg' sx={{display: 'flex', alignItems: 'center', width: '90%'}}>
                    <MainInfo>
                        <p>
                            Na <span>Sr e Sra Boni</span>, cada serviço é pensado para oferecer o melhor em cuidados masculinos. Combinamos técnicas tradicionais e modernas para atender às necessidades de quem busca estilo, conforto e excelência. De um corte impecável à barba alinhada, estamos aqui para transformar sua visita em uma experiência única.
                        </p>
                    </MainInfo>

                    <ServicesDiv>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', padding: '12px', borderRight: '1px solid #DBAA68', borderBottom: '1px solid #DBAA68'}}>
                            <Image 
                                src='/images/shave-icon.svg'
                                alt="hair"
                                width={50}
                                height={50}
                            />
                            <Typography
                                color="#DBAA68"
                                sx={{fontFamily: 'Cormorant'}}
                                fontWeight={700}
                                fontSize={18}
                                gutterBottom
                            >
                                Corte de Cabelo
                            </Typography>
                            <Typography
                                fontSize={16}
                                color="#D9D9D9"
                                sx={{fontFamily: 'Cormorant'}}
                                
                            >
                                Transforme seu visual com um corte moderno e impecável, ajustado ao seu estilo e personalidade.
                            </Typography>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', padding: '12px', borderLeft: '1px solid #DBAA68', borderBottom: '1px solid #DBAA68'}}>
                            <Image 
                                src='/images/beard-icon.svg'
                                alt="hair"
                                width={50}
                                height={50}
                            />
                            <Typography
                                color="#DBAA68"
                                sx={{fontFamily: 'Cormorant'}}
                                fontWeight={700}
                                fontSize={18}
                                gutterBottom
                            >
                                Barba Completa
                            </Typography>
                            <Typography
                                fontSize={16}
                                color="#D9D9D9"
                                sx={{fontFamily: 'Cormorant'}}
                            >
                                Dê à sua barba o cuidado que ela merece. Oferecemos alinhamento, hidratação e finalização com produtos premium.
                            </Typography>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', padding: '6px', borderTop: '1px solid #DBAA68', borderRight: '1px solid #DBAA68'}}>
                            <Image 
                                src='/images/nose-icon.svg'
                                alt="hair"
                                width={50}
                                height={50}
                            />
                            <Typography
                                color="#DBAA68"
                                sx={{fontFamily: 'Cormorant'}}
                                fontWeight={700}
                                fontSize={18}
                                gutterBottom
                            >
                                Depilação de Nariz
                            </Typography>
                            <Typography
                                fontSize={16}
                                color="#D9D9D9"
                                sx={{fontFamily: 'Cormorant'}}
                            >
                                Elimine o desconforto e mantenha uma aparência limpa e bem cuidada com nossa depilação de nariz rápida e eficaz.
                            </Typography>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', padding: '12px', borderTop: '1px solid #DBAA68', borderLeft: '1px solid #DBAA68'}}>
                            <Image 
                                src='/images/ear-icon.svg'
                                alt="hair"
                                width={50}
                                height={50}
                            />
                            <Typography
                                color="#DBAA68"
                                sx={{fontFamily: 'Cormorant'}}
                                fontWeight={700}
                                fontSize={18}
                                gutterBottom
                            >
                                Depilação de Ouvido
                            </Typography>
                            <Typography
                                fontSize={16}
                                color="#D9D9D9"
                                sx={{fontFamily: 'Cormorant'}}
                            >
                                Cuidado discreto e essencial para quem busca sofisticação em cada detalhe. Nossa depilação de ouvido proporciona um visual impecável com conforto e higiene.
                            </Typography>
                        </div>
                    </ServicesDiv>
                </Container>
            </section>
        </>
    )
}


export default Services