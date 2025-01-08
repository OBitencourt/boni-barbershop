import Footer from "@/src/components/Footer"
import Header from "@/src/components/Header"
import About from "@/src/Sections/About"
import Gallery from "@/src/Sections/Gallery"
import Hero from '@/src/Sections/Hero'
import Schedule from "@/src/Sections/Schedule"
import Services from "@/src/Sections/Services"

const Index = () => {
    
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Schedule />
            <Footer />
        </>
    )
}


export default Index