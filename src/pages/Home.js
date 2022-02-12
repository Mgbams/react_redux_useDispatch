import Paragraphe from "../components/commons/Paragraphe";

const Home = () => {
    const date = Date()

    return (
        <div>
            <h1>Home page {date}</h1>
            <Paragraphe>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h
            </Paragraphe>
        </div>
    )
}

export default Home
