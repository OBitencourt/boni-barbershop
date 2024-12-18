import { Container, Typography } from "@mui/material"
import { MainInfo, PrimaryButton, SecondaryButton } from "./style"
import Image from "next/image"


const Hero = () => {

    return (
        <>
            <Container maxWidth='lg' sx={{height: '100vh', width: '90%', display: 'flex', justifyContent: 'space-between'}}>

                <MainInfo>
                    <Image 
                        src='/images/boni-logo-white-text.png'
                        width={410}
                        height={230}
                        alt="main-logo-white"                        
                    />
                    
                    <h1>
                        Transformando <span>Estilo</span> em <span>Confiança</span> 
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
                        <PrimaryButton>
                            Agendar Horário
                        </PrimaryButton>
                        <SecondaryButton>
                            Conheça Nossos Serviços!
                        </SecondaryButton>
                    </div>
                </MainInfo>
                
                <div style={{backgroundColor: '#C38C47', padding: '1px', minHeight: '610px', zIndex: '-1'}}>

                    <Image 
                        src='/images/imagem1-inicio.jpg'
                        width={500}
                        height={600}
                        alt="main-logo-white"                        
                    />
                </div>
            </Container>
        </>
    )
}


export default Hero 