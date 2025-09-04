import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Header} from './Header.jsx'
import {Footer} from './Footer.jsx'
import {MainContent} from './Main-Content.jsx'

const root = createRoot(document.getElementById('root'));

//earlier code
function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
            
        </>
    )
}

// redering the new code for app
root.render(
    <App />
)