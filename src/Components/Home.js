import reactLogo from '../Images/react.png';

function Home() {
    return (
        <div className="home-master-container">
            <div><p>Hello, I'm Doug, a full-stack software developer and web designer.</p></div>
            <div className="home-container-top">

                <div className="home-top-subcontainer1">
                    <div className="home-child-top1">
                        <h1 style={{ fontSize: 45, marginRight:20 }}>Hello, </h1>
                        <h1 style={{ fontSize: 55, marginRight:15  }}>I'm Doug.</h1>

                    </div>

                    <div className="home-child-top2">

                        <h1>I am a</h1>
                        <h1>full-stack</h1>
                        <h1>software developer</h1>
                    </div>

                </div>

                <div className="home-top-subcontainer2">

                    <div className="home-child-top3">
                        <h1> and</h1>
                        <h1>web designer.</h1>
                    </div>

                    <div className="home-child-top4">
                        <h1>I have skills in HTML, CSS, Javascript, React, MongoDB, MySQL</h1>
                    </div>

                </div>
            </div>

            <div className="home-container-bottom">
                <div className="home-bottom-subcontainer1">
                    <div className="home-child-bottom1">
                        <p>This is my website</p>
                    </div>
                    <div className="home-child-bottom2">
                        <h3>Weee</h3>
                    </div>

                </div>

                <div className="home-bottom-subcontainer2">
                    <div className="home-child-bottom3">
                        <p>This is my website</p>
                    </div>
                    <div className="home-child-bottom4">
                        <h3>Weee</h3>
                        <img className='dev-icon' src={reactLogo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home