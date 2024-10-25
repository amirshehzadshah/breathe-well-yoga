import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Base({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className='flex justify-center items-center'>
                <Header />
            </header>
            <main className='flex flex-col justify-center items-center flex-1'>
                {children}
            </main>
            <footer className='flex justify-center items-center'>
                <Footer />
            </footer>
        </div>
    )
}

export default Base