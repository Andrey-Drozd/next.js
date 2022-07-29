import Link from "next/link";

const Index = () => {
    return (
        <>
            <div className='navbar'>
                <Link href='/'>
                    <a className='link'>Главная</a>
                </Link>
                <Link href='/users'>
                    <a className='link'>Пользователи</a>
                </Link>
            </div>

            <h1>Главная команда</h1>

            <style jsx>
                {`
                  .navbar {
                      background: orange;
                      padding: 15px;
                  }
                  .link {
                      text-decoration: none;
                      color: white;
                      font-size: 20px;
                      margin: 10px;
                  }
                `}
            </style>
        </>
    )

}

export default Index;