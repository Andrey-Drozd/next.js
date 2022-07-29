import MainContainer from "../components/MainContainer";

const Index = () => {
    const seo = 'главная страница'

    return (
        <MainContainer keywords={seo} title={seo}>
            <h1>Главная страница</h1>
        </MainContainer>
    )

}

export default Index;