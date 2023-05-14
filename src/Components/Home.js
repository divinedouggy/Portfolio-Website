//dev icons
import reactLogo from '../Images/react.png';
import htmlLogo from '../Images/html.png';
import cssLogo from '../Images/css.png'
import javascriptLogo from '../Images/javascript.png'
import expressLogo from '../Images/express.png'
import mongoLogo from '../Images/mongodb.png'
import mySQLLogo from '../Images/mysql.png'
import nodeLogo from '../Images/node.png'
// project pictures
import movieBuffaloPic from '../Images/movie_buffalo.png'
import movieBuffaloPic2 from '../Images/movie_buffalo_2.png'
import movieBuffaloPic3 from '../Images/movie_buffalo_3.png'
import whackAMolePic from '../Images/whackamole.png'
import whackAMolePic2 from '../Images/whackamole_2.png'
import whackAMolePic3 from '../Images/whackamole_3.png'
import youZooPic from '../Images/youzoo.png'
import youZooPic2 from '../Images/youzoo_2.png'
import youZooPic3 from '../Images/youzoo_3.png'
import specialIngredientsPic from '../Images/special_ingredients.png'
import specialIngredientsPic2 from '../Images/special_ingredients_2.png'
import specialIngredientsPic3 from '../Images/special_ingredients_3.png'
//hobby icons
import tree from '../Images/tree.png'
import controller from '../Images/controller.png'
import book from '../Images/book5.png'
import paw from '../Images/paw2.png'
import musicNote from '../Images/music_note.png'
import paintBrush3 from '../Images/paintbrush3.png'
import pencil from '../Images/pencil2.png'
import recycle from '../Images/recycle.png'
//other
import perScholasCert from '../Images/cert.png'
import toTop from '../Images/toTop2.png'
import myResume from '../Images/Doug Harmon\'s Resume.pdf'
import smallResume from '../Images/Resume.jpg'


import { useState, useEffect, useRef } from 'react';

function Home() {
    const [imageToDisplay, setImageToDisplay] = useState("")

    function getBigImage(event) {
        setImageToDisplay(<img src={event.target.src} alt="screenshot" />)
    }

    function closeImage() {
        setImageToDisplay("")
    }

    const ref = useRef(null);
    const myRef = useRef(null)
    const myRef2 = useRef(null)
    const myRef3 = useRef(null)
    const myRef4 = useRef(null)

    const clickHandle = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const clickHandle2 = () => {
        myRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const clickHandle3 = () => {
        myRef2.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const clickHandle4 = () => {
        myRef3.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const clickHandle5 = () => {
        myRef4.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home-master-container">
            <div className="header" ref={myRef2}>

                <p id='doug'>Doug Harmon</p>
                <p onClick={clickHandle}>My Portfolio</p>
                <p onClick={clickHandle4}>My Credentials</p>
                <p onClick={clickHandle5}>More About Me</p>
                <p onClick={clickHandle2}>Contact Me</p>

            </div>

            <div className="home-container-top">

                <div className="home-top-subcontainer1">
                    <div className="home-child-top1">
                        <img className='dev-icon' src={htmlLogo} />
                    </div>

                    <div className="home-child-top2">
                        <img className='dev-icon' src={cssLogo} />
                    </div>

                </div>

                <div className="home-top-subcontainer2">
                    <p>Hello, I'm Doug. <br />
                        I am a full-stack software developer</p>
                </div>
            </div>

            <div className="home-container-bottom">
                <div className="home-bottom-subcontainer1">
                    <div className="home-child-bottom1">
                        <img className='javascript-icon' src={javascriptLogo} />

                    </div>
                    <div className="home-child-bottom2">
                        <img className='react-icon' src={reactLogo} />
                    </div>

                </div>

                <div className="home-bottom-subcontainer2">
                    <p>and web designer.</p>
                </div>
            </div>
            <div className="home-container-top">

                <div className="home-top-subcontainer1">
                    <p>I have graduated from Per Scholas</p>
                </div>

                <div className="home-top-subcontainer2">

                    <div className="home-child-top3">
                        <img className='express-icon' src={expressLogo} />
                    </div>

                    <div className="home-child-top4">
                        <img className='mongodb-icon' src={mongoLogo} />
                    </div>

                </div>
            </div>

            <div className="home-container-bottom">
                <div className="home-bottom-subcontainer1">
                    <p>Software Engineering intensive</p>
                </div>

                <div className="home-bottom-subcontainer2">
                    <div className="home-child-bottom3">
                        <img className='mysql-icon' src={mySQLLogo} />
                    </div>
                    <div className="home-child-bottom4">
                        <img className='node-icon' src={nodeLogo} />
                    </div>
                </div>
            </div>

            <h1 className='section-header' ref={ref}>Have a look at my projects. <br /><br /></h1>

            <div className="screenshot" onClick={closeImage}>{imageToDisplay}</div>

            <div className='all-film'>
                <div className='filmstrip'>
                    <p>&nbsp;&nbsp;&nbsp; Whack-A-Mole&nbsp;&nbsp;&nbsp;</p>
                    <img className='smallpic' onClick={getBigImage} src={whackAMolePic} />
                    <img className='smallpic' onClick={getBigImage} src={whackAMolePic2} />
                    <img className='smallpic' onClick={getBigImage} src={whackAMolePic3} />
                </div>

                <div className='filmstrip'>
                    &nbsp;
                    <img className='smallpic' onClick={getBigImage} src={movieBuffaloPic} />
                    <img className='smallpic' onClick={getBigImage} src={movieBuffaloPic2} />
                    <img className='smallpic' onClick={getBigImage} src={movieBuffaloPic3} /> <p>&nbsp;&nbsp;&nbsp;MOVIE BUFFalo</p>
                </div>

                <div className='filmstrip'>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YouZoo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <img className='smallpic' onClick={getBigImage} src={youZooPic} />
                    <img className='smallpic' onClick={getBigImage} src={youZooPic2} />
                    <img className='smallpic' onClick={getBigImage} src={youZooPic3} />
                </div>

                <div className='filmstrip'>
                    &nbsp;
                    <img className='smallpic' onClick={getBigImage} src={specialIngredientsPic} />
                    <img className='smallpic' onClick={getBigImage} src={specialIngredientsPic2} />
                    <img className='smallpic' onClick={getBigImage} src={specialIngredientsPic3} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>Special<br /> Ingredients</p>
                </div>
            </div>

            <div className='credentials' ref={myRef3}>
                <h1 className='section-header'>...and my credentials.</h1>
                <img className='certification' src={perScholasCert} />
                <div className='resume'>
                    <a className='resume-text'><b>Resume</b> <br></br>
                        (Click to download full-size PDF)</a>
                    <a href={myResume} download="Doug Harmon's Resume"><img className='small-resume' src={smallResume} /></a>
                </div>
            </div>

            <h1 className='section-header' ref={myRef4}>More of my interests.</h1>
            <p className='sub-header'>( What you might find me doing when I'm not coding )</p>
            <div className='hobbies'>
                <img className='hobby-icon' src={tree} />
                <img className='hobby-icon-wide' src={controller} />
                <img className='hobby-icon-wide' src={book} />
                <img className='hobby-icon' src={paw} />
            </div>

            <div className='hobbies'>
                <img className='hobby-icon' src={musicNote} />
                <img className='hobby-icon' src={paintBrush3} />
                <img className='hobby-icon' src={pencil} />
                <img className='hobby-icon-wide' src={recycle} />
            </div>

            <img className='to-top-icon'  onClick={clickHandle3} src={toTop} />

            <div className='contact' ref={myRef}>
                <h1 className='section-header'>Contact me.</h1>

                <div className='email-phone'>
                    <p >Email: douggyharmon@gmail.com</p>
                    <p>Phone: 574-318-6037</p>
                </div>


                <div className='all-contact-icons'>
                    <a href="https://github.com/divinedouggy" target="_blank" rel="noreferrer">
                        <img className='contact-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                    </a>
                    <a href="https://linkedin.com/in/doug-harmon-ab0779241" target="_blank" rel="noreferrer">
                        <img className='contact-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                    </a>
                </div>
            </div>

            <div className='hobbies'></div>

        </div>

    )
}

export default Home