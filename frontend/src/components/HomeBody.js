import "./HomeBody.css";

const HomeBody = () => {
    return ( 
        <div className="homeBody">
            <div className="container-fluid" id="header">
                <div className="container">
                    <h1 className="title">LAKSHYA 2022</h1>
                    <h1>Subtitle</h1>
                </div>
            </div>
            <div className="container-fluid" id="about">
                <div className="container">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, soluta, facere dolore porro, modi laudantium eligendi deleniti voluptates fuga nemo dolores. Quidem quo, officiis maiores architecto similique aspernatur harum animi nam saepe sequi nihil voluptatum adipisci consectetur sint iure, quaerat voluptas ipsa quam! Sapiente, aut consequuntur architecto culpa vel cumque!</p>

                </div>
            </div>
            <div className="container-fluid" id="events">
                <div className="container">
                    <h1>Events</h1>
                    {/* Will potentially use cards for the events page, WIP */}
                </div>
            </div>
        </div>
     );
}
 
export default HomeBody;