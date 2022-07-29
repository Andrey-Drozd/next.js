import Head from 'next/head'
import MLink from "../components/MLink";

const Index = () => {
    return (
        <>
            <Head>
                <meta keywords='learn NEXTJS'></meta>
                <title>Главная страница</title>
            </Head>

            <div className='navbar'>
                <MLink
                    href='/'
                    text='Главная'
                />
                <MLink
                    href='/users'
                    text='Пользователи'
                />
            </div>

            <h1>Главная команда</h1>

            <style jsx>
                {`
                  .navbar {
                      background: orange;
                      padding: 15px;
                  }
                `}
            </style>
        </>
    )

}

export default Index;