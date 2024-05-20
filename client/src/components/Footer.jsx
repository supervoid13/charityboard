import logo from '../assets/Artboard 1@3x.png';

export default function Footer(){
    
    return (
        <>
            <div className="footer">
                <div className="some-texts">
                    <span className="spa">ABOUT US</span>
                    <span className="spa">FAQ</span>
                    <span className="spa">DONATE TO DEVELOPERS</span>
                    <span className="spa">MEDIA</span>
                </div>
                <img src={logo} height="200px" className='logo-at-b'></img>
            </div>
        </>
    )
}