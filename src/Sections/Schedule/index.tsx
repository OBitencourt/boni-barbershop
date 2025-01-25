import { Container, Typography } from "@mui/material"
import Image from "next/image"
import { PrimaryButton } from "./style"

const Schedule = () => {

    return (

        <>  
            <section id="schedule" style={{padding: '30px 0px 50px 0px'}}>

                <Typography
                    sx={{fontFamily: 'Cinzel'}}
                    textAlign='center'
                    color="white"
                    fontSize='2.8em'
                    gutterBottom
                >
                    Agende
                </Typography>
                <Container
                    maxWidth='sm'
                    sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}
                >
                    <Image 
                        src='/images/boni-logo-white.png'
                        width={200}
                        height={250}
                        alt="logo-white"
                        style={{marginLeft: '-10px'}}
                    />
                    <Typography
                        sx={{
                            fontFamily: 'Lora', 
                            marginTop: '24px',
                            '@media (max-width: 420px)': {  
                                padding: '30px'
                            },
                            fontSize: '1.1em'
                        }}
                        align="center"
                        color="white"
                        gutterBottom
                    >
                        Quer transformar seu visual com um corte impecável ou dar aquele cuidado especial para a barba? Agendar seu horário nunca foi tão fácil! Basta um clique e você estará em contato direto conosco pelo WhatsApp.
                    </Typography>

                    <PrimaryButton>
                        Marque Agora!
                    </PrimaryButton>
                </Container>
            </section>
        </>
    )
}


export default Schedule