import Image from "next/image"
import { ButtonMobile, InstaButton, MenuButton, MenuMobile, NavMobile, SpecialButton, StyledButton, StyledHeader, StyledNavbar } from "./style"
import { useState, useEffect } from "react";

const Header = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"; // Bloqueia o scroll
        } else {
            document.body.style.overflow = "auto"; // Restaura o scroll
        }
    
        // Limpa o estilo ao desmontar o componente
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    const handleButtonClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

        setOpen(false)
    }

    return (
        <>
            <StyledHeader>
                <Image 
                    src='/images/boni-logo-golden.png'
                    width={60}
                    height={80}
                    alt="golden-logo"
                />

                <StyledNavbar>
                    <StyledButton onClick={() => handleButtonClick('hero')}>
                        Início
                    </StyledButton>
                    <StyledButton onClick={() => handleButtonClick('about')}>
                        Sobre Nós
                    </StyledButton>
                    <StyledButton onClick={() => handleButtonClick('services')}>
                        Serviços
                    </StyledButton>
                    <StyledButton onClick={() => handleButtonClick('gallery')}>
                        Galeria
                    </StyledButton>
                    <SpecialButton onClick={() => handleButtonClick('schedule')}>
                        Agende
                    </SpecialButton>
                </StyledNavbar>

                <MenuMobile isOpen={open}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}> 
                        <Image 
                            src='/images/boni-logo-white.png'
                            width={140}
                            height={180}
                            alt="golden-logo"
                            style={{margin: '20px auto'}}
                        />
                        <NavMobile>
                            <ButtonMobile onClick={() => handleButtonClick('hero')}>
                                Início
                            </ButtonMobile>
                            <ButtonMobile onClick={() => handleButtonClick('about')}>
                                Sobre Nós
                            </ButtonMobile>
                            <ButtonMobile onClick={() => handleButtonClick('services')}>
                                Serviços
                            </ButtonMobile>
                            <ButtonMobile onClick={() => handleButtonClick('gallery')}>
                                Galeria
                            </ButtonMobile>
                            <ButtonMobile onClick={() => handleButtonClick('schedule')}>
                                Agende
                            </ButtonMobile>
                        </NavMobile>
                        <div style={{margin: '30px auto'}}>
                            <a href="https://www.instagram.com/sr.sra.boni/" target="_blank">
                            
                                <Image 
                                    src='/images/instagram-icon.svg'
                                    width={35}
                                    height={35}
                                    alt="golden-logo"
                                    
                                />
                            </a>
                        </div>
                    </div>

                    <div style={{position: 'absolute', right: '30px', top: '30px'}} onClick={() => setOpen(!open)}>
                        <Image 
                            src='/images/close-icon.svg'
                            width={50}
                            height={50}
                            alt="golden-logo"
                        />

                    </div>

                </MenuMobile>

                <InstaButton>
                    <a href="https://www.instagram.com/sr.sra.boni/" target="_blank">
                    
                        <Image 
                            src='/images/instagram-icon.svg'
                            width={30}
                            height={30}
                            alt="golden-logo"
                            
                        />
                    </a>
                </InstaButton>

                <MenuButton onClick={() => setOpen(true)}>
                    <Image 
                        src='/images/menu-icon.svg'
                        width={40}
                        height={40}
                        alt="golden-logo"
                        
                    />
                </MenuButton>
            </StyledHeader>
        </>
    )
}


export default Header