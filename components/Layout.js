import Head from 'next/head';
import Link from 'next/Link';
import Image from 'next/image';

/*
 * README:
 *This file ensures that each page has a consistent layout
 */
const Layout = ({children, title='Crypto Tracker'}) => {
    return (
        <div className='layout'>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className='header'>
        <img src="../../../assets/crypto-pattern.png" alt="logo" className="crypto-logo"/>
        </header>
        <main>{children}</main>
        </div>
    );
};

export default Layout;