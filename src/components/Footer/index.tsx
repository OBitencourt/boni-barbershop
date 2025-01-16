import Image from "next/image"
import { InfoWrapper, StyledFooter } from './style'
import { Typography } from "@mui/material"

const Footer = () => {

    return (

        <>  
            <StyledFooter>
                
                <Image 
                    src='/images/boni-text-footer.png'
                    width={150}
                    height={130}
                    alt="logo-text"
                />

                <InfoWrapper>
                    <div>
                        <Typography
                            sx={{fontFamily: 'Cormorant'}}
                            fontWeight='700'
                            fontSize='1.2em'
                            gutterBottom
                            align="center"
                        >
                            Horários:
                        </Typography>
                        <div>
                            <Typography
                                sx={{fontFamily: 'Cormorant'}}
                                fontSize='1.2em'
                                fontWeight={500}
                            >
                                seg: 9:00 - 13:00 e 14:30 - 20:00
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                sx={{fontFamily: 'Cormorant'}}
                                fontSize='1.2em'
                                fontWeight={500}
                            >
                                ter-sab: 9:00 - 13:00 e 14:00 - 20:00
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <Typography
                            sx={{fontFamily: 'Cormorant'}}
                            fontWeight='700'
                            fontSize='1.2em'
                            gutterBottom
                            align="center"
                        >
                            Localização:
                        </Typography>
                        <div>
                            <Typography
                                sx={{fontFamily: 'Cormorant'}}
                                fontSize='1.2em'
                                fontWeight={500}
                            >
                                Av do Atlântico 331 R/C Amorosa
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <Typography
                            sx={{fontFamily: 'Cormorant'}}
                            fontWeight='700'
                            fontSize='1.2em'
                            align="center"
                        >
                            Contate
                        </Typography>
                        <div>
                            <Typography
                                sx={{fontFamily: 'Cormorant'}}
                                fontSize='1.2em'
                                fontWeight={500}
                            >
                                telefone: +351 961 555 833
                            </Typography>
                        </div>
                    </div>
                </InfoWrapper>
            </StyledFooter>
        </>
    )
}


export default Footer