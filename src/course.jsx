import AIpng from "./asset/img/AI.png";
import UIUX from "./asset/img/UIUX.png";
import UIUX2 from "./asset/img/UIUX2.png";
import web from "./asset/img/webdev.png";
import web2 from "./asset/img/webdev2.png";
import digmark from "./asset/img/digmark.png";
import star from "./asset/img/star.svg"
import arr from "./asset/img/arrDown.svg"
import ("./App.css");

function Course(){
    return(
        <div className="container2">
            <div className="isiCourse">
                <h1 id="CourseSection" className="courseText">OUR COURSE</h1>
                <div className="courseMenu">
                    <button className="butMenu rat">Top Rated</button>
                    <button className="butMenu dev" style={{marginLeft: 18}}>Development</button>
                    <button className="butMenu des" style={{marginLeft: 18}}>Design</button>
                    <button className="butMenu mus" style={{marginLeft: 18}}>Music</button>
                    <button className="butMenu mar" style={{marginLeft: 18}}>Marketing</button>
                    <button className="butMenu bus" style={{marginLeft: 18}}>Business</button>
                    <button className="butMenu pho" style={{marginLeft: 18}}>Photograpgy</button>
                </div>
                <div className="cardContainer">
                    <div className="card1">
                        <img src={AIpng} alt=""  />
                        <div className="boxName">Artificial Intelligence</div>
                        <h1 className="cardJudul">Modern Artificial Intelligence <br /> with zero coding</h1>
                        <p className="mentor">Jhon David</p>
                        <div className="star">
                            <img src={star} alt="" />
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <p className="rating">4.9</p>
                        </div>
                        <div className="priceBut">
                            <h1 className="price">$ 49.99</h1>
                            <button className="priceButton">Buy Now</button>
                        </div>
                    </div>

                    <div className="card1">
                        <img src={UIUX} alt=""  />
                        <div className="boxName">UX/UI Designing</div>
                        <h1 className="cardJudul">Figma UX/UI Design essentials</h1>
                        <p className="mentor">Daniel Walter Scott</p>
                        <div className="jarak">
                            <div className="star">
                                <img src={star} alt="" />
                                <img src={star} alt="" style={{marginLeft: 3}}/>
                                <img src={star} alt="" style={{marginLeft: 3}}/>
                                <img src={star} alt="" style={{marginLeft: 3}}/>
                                <img src={star} alt="" style={{marginLeft: 3}}/>
                                <p className="rating">4.9</p>
                            </div>
                            <div className="priceBut">
                                <h1 className="price">$ 49.99</h1>
                                <button className="priceButton">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card1">
                        <img src={UIUX2} alt=""  />
                        <div className="boxName">UX/UI Designing</div>
                        <h1 className="cardJudul">Complete figma mega course: <br /> UX/UI Design Beginner to Expert</h1>
                        <p className="mentor">Kaleb Kingston</p>
                        <div className="star">
                            <img src={star} alt="" />
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <p className="rating">4.9</p>
                        </div>
                        <div className="priceBut">
                            <h1 className="price">$ 49.99</h1>
                            <button className="priceButton">Buy Now</button>
                        </div>
                    </div>

                    <div className="card1">
                        <img src={web} alt=""  />
                        <div className="boxName">Web Development</div>
                        <h1 className="cardJudul">The Complete 2022 Fullstack <br /> Web Developer course</h1>
                        <p className="mentor">Mark Lassoff</p>
                        <div className="star">
                            <img src={star} alt="" />
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <p className="rating">4.9</p>
                        </div>
                        <div className="priceBut">
                            <h1 className="price">$ 49.99</h1>
                            <button className="priceButton">Buy Now</button>
                        </div>
                    </div>

                    <div className="card1">
                        <img src={web2} alt=""  />
                        <div className="boxName">Web Development</div>
                        <h1 className="cardJudul">Javascript for beginners</h1>
                        <p className="mentor">Jhon David</p>
                        <div className="jarak">
                            <div className="star">
                                <img src={star} alt="" />
                                <img src={star} alt="" style={{marginLeft: 3}}/>
                                <img src={star} alt="" style={{marginLeft: 3}}/>
                                <img src={star} alt="" style={{marginLeft: 3}}/>
                                <img src={star} alt="" style={{marginLeft: 3}}/>
                                <p className="rating">4.9</p>
                            </div>
                            <div className="priceBut">
                                <h1 className="price">$ 49.99</h1>
                                <button className="priceButton">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card1">
                        <img src={digmark} alt=""  />
                        <div className="boxName">Digital Marketing</div>
                        <h1 className="cardJudul">Digital Advertising and <br /> Marketing 101: The Complete...</h1>
                        <p className="mentor">Ben Silverstain</p>
                        <div className="star">
                            <img src={star} alt="" />
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <img src={star} alt="" style={{marginLeft: 3}}/>
                            <p className="rating">4.9</p>
                        </div>
                        <div className="priceBut">
                            <h1 className="price">$ 49.99</h1>
                            <button className="priceButton">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="showMore">
                    <a href=" " className="show">Show more <img src={arr} alt="" /></a>
                </div>
            </div>
        </div>
    );
}

export default Course;