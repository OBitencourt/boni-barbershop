import Image from "next/image"
import { SpecialButton, StyledButton, StyledHeader, StyledNavbar } from "./style"

const Header = () => {

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
                    <StyledButton>
                        Início
                    </StyledButton>
                    <StyledButton>
                        Sobre Nós
                    </StyledButton>
                    <StyledButton>
                        Serviços
                    </StyledButton>
                    <StyledButton>
                        Galeria
                    </StyledButton>
                    <SpecialButton>
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