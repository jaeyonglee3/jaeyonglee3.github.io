import { ChakraProvider, Box, useColorMode } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/navigation/Navbar';
import Intro from './components/sections/Intro';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Photos from './components/sections/Photos';
import Footer from './components/navigation/Footer';
import theme from './theme';
import ExperienceDetail from './components/sections/ExperienceDetail';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function GridBackground() {
    const { colorMode } = useColorMode();
    const lineColor = colorMode === 'dark' ? 'rgba(255, 255, 255, 0.045)' : 'rgba(0, 0, 0, 0.07)';

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            w="100%"
            h="100%"
            zIndex={0}
            style={{
                backgroundImage: `linear-gradient(${lineColor} 1px, transparent 1px),
                                  linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                backgroundPosition: '0px 60.6px',
            }}
        />
    );
}

function PageShell({ children }) {
    return (
        <Box display="flex" flexDirection="column" minH="100vh">
            <NavBar />
            {children}
            <Footer />
        </Box>
    );
}

function Home() {
    return (
        <PageShell>
            <Intro />
        </PageShell>
    );
}

function AboutPage() {
    return (
        <PageShell>
            <About />
        </PageShell>
    );
}

function ProjectsPage() {
    return (
        <PageShell>
            <Projects />
        </PageShell>
    );
}

function ExperiencePage() {
    return (
        <PageShell>
            <Experience />
        </PageShell>
    );
}

function SkillsPage() {
    return (
        <PageShell>
            <Skills />
        </PageShell>
    );
}

function PhotosPage() {
    return (
        <PageShell>
            <Photos />
        </PageShell>
    );
}

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <ScrollToTop />
                <Box position="relative" minH="100vh">
                    <GridBackground />
                    <Box position="relative" zIndex={1}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/biography" element={<AboutPage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/experience" element={<ExperiencePage />} />
                            <Route path="/skills" element={<SkillsPage />} />
                            <Route path="/photos" element={<PhotosPage />} />
                            <Route path="/experience/:slug" element={<ExperienceDetail />} />
                        </Routes>
                    </Box>
                </Box>
            </Router>
        </ChakraProvider>
    );
}

export default App;
