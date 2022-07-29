import MLink from "./MLink";
import Head from "next/head";

const MainContainer = ({children, keywords, title}) => {
    return (
        <>
            <Head>
                <meta keywords={`learn NEXTJS + ${keywords}`}></meta>
                <title>{title}</title>
            </Head>

            <div className='navbar'>
                <MLink href='/' text='Главная'/>
                <MLink href='/users' text='Пользователи'/>
            </div>

            <div>
                {children}
            </div>

            <style jsx>
                {`
                  .navbar {
                      background: orange;
                      padding: 15px;
                  }
                `}
            </style>
        </>
    );
};

export default MainContainer;