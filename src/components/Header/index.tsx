import Image from "next/image"
import { SpecialButton, StyledButton, StyledHeader, StyledNavbar } from "./style"

const Header = () => {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

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
                    <StyledButton onClick={() => scrollToSection('hero')}>
                        Início
                    </StyledButton>
                    <StyledButton onClick={() => scrollToSection('about')}>
                        Sobre Nós
                    </StyledButton>
                    <StyledButton onClick={() => scrollToSection('services')}>
                        Serviços
                    </StyledButton>
                    <StyledButton onClick={() => scrollToSection('gallery')}>
                        Galeria
                    </StyledButton>
                    <SpecialButton onClick={() => scrollToSection('schedule')}>
                        Agende
                    </SpecialButton>
                </StyledNavbar>

                <Image 
                    src='/images/instagram-icon.svg'
                    width={30}
                    height={30}
                    alt="golden-logo"
                />
            </StyledHeader>
        </>
    )
}


export default Header