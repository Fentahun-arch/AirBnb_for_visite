import React from 'react'
import './Footer.css'
import {SingleLinksColumn} from '../GetComponents'
import {LanguageIcon, Facebook, Telegram, Instagram, LinkedIn} from '../GetIcons'
import {Link} from 'react-router-dom'
// import Button from '@material-ui/core/Button'

const data = [
    {
        id: 1,
        title: 'Back ground ',
        links: [
            {
                id: 1,
                name: 'How Airbnb works',
                url: 'https://www.google.com',
            },
            {
                id: 2,
                name: 'Newsroom',
                url: 'https://www.google.com',
            },

            {
                id: 3,
                name: 'Motivations',
                url: 'https://www.google.com',
            },  
        ],
    },
    {
        id: 2,
        title: 'community',
        links: [
            {
                id: 1,
                name: 'Diversity & Belonging',
                url: '/',
            },
            {
                id: 2,
                name: 'Against Discrimination',
                url: '/',
            },
        ],
    },
    {
        id: 3,
        title: 'host',
        links: [
            {
                id: 1,
                name: 'Host your home',
                url: '/',
            },
            {
                id: 2,
                name: 'Host an Online Experience',
                url: '/',
            },
        ],
    },
    {
        id: 4,
        title: 'support',
        links: [
            {
                id: 1,
                name: 'Our COVID-19 Response',
                url: '/',
            },
            {
                id: 2,
                name: 'Help Center',
                url: '/',
            },
        ],
    },
]

function Footer() {
    return (
        <section className='footer MT5'>
            <div className='footerContainer'>
                {data.map(item => {
                    return <SingleLinksColumn key={item.id} {...item} />
                })}
            </div>
            <FooterBottom />
        </section>
    )
}
function FooterBottom() {
    return (
        <div className='footerBottom'>
            <div className='footerBottomLeft'>
                <p className='copyright'>© 2022 Airbnb Internship!</p>
                <p>
                    <Link className='footerBottomLink' to='/'>
                        Privacy
                    </Link>
                </p>
                <p>
                    <Link className='footerBottomLink' to='/'>
                        Terms
                    </Link>
                </p>
                <p>
                    <Link className='footerBottomLink' to='/'>
                        Sitemap
                    </Link>
                </p>
            </div>
            <div className='footerBottomCenter'>
                <a
                    href='https://www.facebook.com/profile.php?id=100075868836530'
                    target=' '
                >
                    Developed with <span className='heart'>❤</span> by{' '}
                    <span className='developerName'>FEEE AASTU</span>
                </a>
            </div>
            <div className='footerBottomRight'>
                <div className='footerBottomRightLinks'>
                    <Link to='/'>
                        <LanguageIcon />
                        <span className='lang ML05'> English (US)</span>
                    </Link>
                    <Link to='/'>
                        <span className='currency'>$ USD</span>
                    </Link>
                </div>
                <div className='footerBottomRightSocialIcons'>
                    <a
                        href='https://www.facebook.com/profile.php?id=100075868836530'
                        target='facebook'
                    >
                        <Facebook />
                    </a>
                    <a href='FEEE AASTU' target='_blank'>
                        <Telegram />
                    </a>
                    <a
                        href='FEEE AASTU'
                        target='_blank'
                    >
                        <Instagram />
                    </a>
                     <a
                        href='FEEE AASTU'
                        target='_blank'
                    >
                        <LinkedIn />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
