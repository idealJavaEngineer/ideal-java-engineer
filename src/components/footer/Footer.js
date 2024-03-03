import './Footer.css';
import dtdJournalLogo from '../../static/images/ideal-java-engineer-logos-footer.png';

function Footer() {

    return (
        <div className="footer-container">
            <hr className="line-division"></hr>
            <p className='content-p-style'>I.J.E is optimized for learning, knowledge gethering and sharing your thoughts on any subject over the internet.</p>
            <hr className="line-division"></hr>
            <div className="container">
                <div className="row justify-content-center copyright">
                    <div className="col-lg-7 text-center">
                        {/* <div className="widget">
                            <ul className="social list-unstyled">
                                <li><a href="#"><span className="icon-facebook"></span></a></li>
                                <li><a href="#"><span className="icon-twitter"></span></a></li>
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-youtube-play"></span></a></li>
                            </ul>
                        </div> */}
                        <div className="widget">
                            <p className='content-p-style'>Copyright ©<script>document.write(new Date().getFullYear());</script>2024 All rights reserved</p>
                            <div className="d-block">
                                <a href="#" className="m-2">Terms &amp; Conditions</a>/
                                <a href="#" className="m-2">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <hr className="line-division"></hr> */}
            {/*  <img className="navbar-brand logo-size-end" src={dtdJournalLogo} alt="DTD JOURNAL" /> */}
        </div>    
    )
}

export default Footer;