import reactLogo from '../Images/react.png';
import htmlLogo from '../Images/html.png';
import cssLogo from '../Images/css.png'
import javascriptLogo from '../Images/javascript.png'
import expressLogo from '../Images/express.png'
import mongoLogo from '../Images/mongodb.png'
import mySQLLogo from '../Images/mysql.png'
import nodeLogo from '../Images/node.png'
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
import perScholasCert from '../Images/cert.png'

import { useState, useEffect, useRef } from 'react';

function Home() {
    const [imageToDisplay, setImageToDisplay] = useState("")

    
    function getBigImage(event) {
        setImageToDisplay(<img src={event.target.src} alt="screenshot"/>)
    }

    function closeImage() {
        setImageToDisplay("")
    }

 

    const ref = useRef(null);
    const myRef = useRef(null)
    const clickHandle = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const clickHandle2 = () => {
        myRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
 
   

    return (
        <div className="home-master-container">
            <div className="header">

                <p>Home</p>
                <p>About Me</p>
                <p onClick={clickHandle}>Projects</p>
                <p onClick={clickHandle2}>Contact</p>

            </div>

            <div className="home-container-top">

                <div className="home-top-subcontainer1">
                    <div className="home-child-top1">
                        {/* <h1 style={{ fontSize: 45, marginRight:20 }}>Hello, </h1>
                        <h1 style={{ fontSize: 55, marginRight:15  }}>I'm Doug.</h1> */}

                        <img className='dev-icon' src={htmlLogo} />
                    </div>

                    <div className="home-child-top2">
                        <img className='dev-icon' src={cssLogo} />
                        {/* <h1>I am a</h1>
                        <h1>full-stack</h1>
                        <h1>software developer</h1> */}
                    </div>

                </div>

                <div className="home-top-subcontainer2">

                    {/* <div className="home-child-top3"style={{ display:"none" }}>
                        <h1> and</h1>
                        <h1>web designer.</h1>
                    </div>

                    <div className="home-child-top4"style={{ display:"none" }}>
                        <h1>I have skills in HTML, CSS, Javascript, React, MongoDB, MySQL</h1>
                    </div> */}
                    <p>Hello, I'm Doug. <br/>
                    I am a full-stack software developer</p>
                </div>
            </div>

            <div className="home-container-bottom">
                <div className="home-bottom-subcontainer1">
                    <div className="home-child-bottom1">
                        {/* <p>This is my website</p> */}
                        <img className='javascript-icon' src={javascriptLogo} />

                    </div>
                    <div className="home-child-bottom2">
                        {/* <h3>Weee</h3> */}
                        <img className='react-icon' src={reactLogo} />
                    </div>

                </div>

                <div className="home-bottom-subcontainer2">
                    {/* <div className="home-child-bottom3"style={{ display:"none" }}>
                        <p>This is my website</p>
                    </div>
                    <div className="home-child-bottom4"style={{ display:"none" }}>
                        <h3>Weee</h3>
                        <img className='dev-icon' src={reactLogo} />
                    </div> */}
                    <p>and web designer.</p>
                </div>
            </div>
            <div className="home-container-top">

                <div className="home-top-subcontainer1">
                    {/* <div className="home-child-top1" style={{ display:"none" }}>
                        <h1 >Hello, </h1>
                        <h1 style={{ fontSize: 55, marginRight:15  }}>I'm Doug.</h1>

                    </div>

                    <div className="home-child-top2"style={{ display:"none" }}>

                        <h1>I am a</h1>
                        <h1>full-stack</h1>
                        <h1>software developer</h1>
                    </div> */}
               <p>I have graduated from Per Scholas</p>
                </div>

                <div className="home-top-subcontainer2">

                    <div className="home-child-top3">
                        {/* <h1> and</h1>
                        <h1>web designer.</h1> */}
                        <img className='express-icon' src={expressLogo} />
                    </div>

                    <div className="home-child-top4">
                        <img className='mongodb-icon' src={mongoLogo} />
                        {/* <h1>I have skills in HTML, CSS, Javascript, React, MongoDB, MySQL</h1> */}
                    </div>

                </div>
            </div>

            <div className="home-container-bottom">
                <div className="home-bottom-subcontainer1">
                    {/* <div className="home-child-bottom1"style={{ display:"none" }}>
                        <p>This is my website</p>
                    </div>
                    <div className="home-child-bottom2"style={{ display:"none" }}>
                        <h3>Weee</h3>
                    </div> */}
                    <p>Software Engineering intensive</p>
                </div>

                <div className="home-bottom-subcontainer2">
                    <div className="home-child-bottom3">
                        <img className='mysql-icon' src={mySQLLogo} />
                        {/* <p>This is my website</p> */}
                    </div>
                    <div className="home-child-bottom4">
                        <img className='node-icon' src={nodeLogo} />
                        {/* <h3>Weee</h3> */}

                    </div>
                </div>
            </div>
            <p className='projects' ref={ref}>Have a look at my projects. <br/><br/></p>


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
                <img className='smallpic' onClick={getBigImage} src={specialIngredientsPic3} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>Special<br/> Ingredients</p>
            </div>
            </div>

            <img className='certification' ref={myRef} src={perScholasCert}/>



        </div>
      
    )
}

export default Home