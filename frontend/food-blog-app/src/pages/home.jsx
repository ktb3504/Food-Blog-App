import foodRecipe from '../assets/image.jpeg'


function Home(){
    return(<>
        <section className = "home">
            <div className = "left">
                <h1>Food Recipe</h1>
                <h5>Welcome to Eatify! Here you'll find easy, no-fuss, tested recipes made with fresh, seasonal ingredients. Whether you need a quick 30-minute weeknight dinner or a comforting weekend meal, we make home cooking simple and delicious</h5>
                <button>Share your recipe</button>
            </div>
            <div className="right">
                <img src = {foodRecipe} width = '320px' height = "300px" ></img>
            </div>
        </section>
        <div className="bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,128L26.7,106.7C53.3,85,107,43,160,42.7C213.3,43,267,85,320,90.7C373.3,96,427,64,480,85.3C533.3,107,587,181,640,218.7C693.3,256,747,256,800,256C853.3,256,907,256,960,234.7C1013.3,213,1067,171,1120,154.7C1173.3,139,1227,149,1280,176C1333.3,203,1387,245,1413,266.7L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
        </div>
    </>)
}

export default Home