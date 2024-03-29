import './AboutUs.css';
import Footer from '../../footer/Footer';
import logo from '../../../static/images/ideal-java-engineer-logos.png';

function AboutUs() {

    return (
        <div className="outer-container">
            <div className='about-us-screen-container'>
                <div className='logo-container'>
                    {/* <img src={logo} className="image-style"/> */}
                    <div className="slogan-style">
                        <h1>Code For Life</h1>
                        <h3>100 lines of Code each day, will keep recession away.</h3>
                    </div>
                </div>
                <div className="about-us-content">
                    <div className='slogan-divide-inner-container-1'>
                        <img src={logo} className='image-logo-style'/>
                    </div>
                    <div className='slogan-divide-inner-container-2'>
                        <h1>Ideal Java Engineer</h1>
                        <p>The Website was first came to existense with the goal to redefine the thinking behind
                            being an Engineer.
                        </p>
                        <p>The thought is to make engineers understand the broad difference between software Engineer
                            and Developer.
                        </p>
                        <p>May be the name looks static and stiff but let me tell you we want to develop a mindset for 
                            all engineer to stay engineer and just not become a developer.
                        </p>
                        <p>
                            As you scroll down you will find the reason behind all this, and will try to tell you the structure
                            of the website and why its designed like that.
                        </p>
                    </div>
                </div>
                <div className="solution-content-container">
                    <div className='ideal-engineer-style'>
                        <h1>UNDERSTAND DIFF. BETWEEN ENGINEER & DEVELOPER:</h1>
                    </div>
                </div>
                <div className="about-us-content-1">
                    
                    <div className='ideal-engineer-style'>
                        <h1>Ideal Developer</h1>
                        <p>A developer is typically involved in writing code to create software applications, websites, or other digital products.
                        </p>
                        <p>Developers may specialize in various areas such as front-end development (working on the user interface), back-end development (working on server-side logic and databases), or full-stack development (working on both front-end and back-end aspects).
                        </p>
                        <p>
                        Developers focus on implementing features, fixing bugs, and improving the functionality of software products.
                        </p>
                        <p>
                        The term "developer" is often used in a broader sense and can refer to individuals with various levels of experience and expertise in programming.
                        </p>
                    </div>
                </div>
                <div className="about-us-content-2">
                    <div className='ideal-engineer-style'>
                        <h1>Ideal Engineer</h1>
                        <p>
                            An engineer is someone who applies scientific principles and mathematical analysis to design, develop, and maintain systems and products.
                        </p>
                        <p>
                            In the context of software development, a software engineer is typically involved in the entire software development lifecycle, from requirements analysis and design to implementation, testing, and maintenance.
                        </p>
                        <p>
                            Software engineers often have a deeper understanding of software architecture, design patterns, algorithms, and system optimization techniques.
                        </p>
                        <p>
                            The term "engineer" implies a higher level of expertise and may be associated with roles that require formal education or professional certification in engineering disciplines.    
                        </p>
                    </div>
                </div>
                <div className='solution-content-container'>
                    <div className='ideal-engineer-style'>
                        <h1>How to Use this Website for best Results;</h1>
                        <h4>Here we going to discuss how to use different Categories in website;</h4>
                        <p>
                            {"{ Lets write down the category but you can see them in navbar too. }"}
                        </p>
                        <h3>1-Road Map:</h3>
                        <p>Here you get all the road map for each Technology, or things related to ideal Engineers</p>
                        <h3>2-Tutorial:</h3>
                        <p>Here you get all blogs related or sub part of roadmap or sharing knowledge on different issue happend with Engineers</p>
                        <h3>3-Journal:</h3>
                        <p>That usually similar to sharing Journey, if you are interested in following the journey then you can follow the journal.</p>
                        <p>The important part is that journal helps you to convert from being a <strong>developer</strong> to <strong>Engineer</strong></p>
                        <h3>4-Review:</h3>
                        <p>It contain review of Technology or things belongs to an ideal Engineer.</p>
                    </div>
                </div>
                <div className="about-us-content-3">
                    <div className='ideal-engineer-style'>
                        <h1>
                            Theory Behind IT:
                        </h1>
                        <p>
                           The path we gonna choose is to be from a <strong>developer</strong> to be an <strong>Engineer</strong>.
                        </p>
                        <p>
                            We first work on Tech. that help us get a job so we can be secure for temporary time period.
                        </p>
                        <p>
                            Then, We gonna work on things tech. that make us a Engineer from a developer.
                        </p>
                        <p>
                            Being an Ideal Engineer is not a 6-13 months path it took time, need to learn lot of things that we dont want.
                        </p>
                        <p>
                            But that make our future secure from any other tool or tech. that are famous now a days.
                        </p>
                    </div>
                    </div> 
                    <div className="about-us-content-4" >
                        <div className='ideal-engineer-style'>
                            <h2>About The Speaker:</h2>
                            <p>Hi, I am Tanuj Yadav from India,  your friend and someone who stay with you on your journey</p>
                            <p>I am a software Developer and partially a software Engineer.</p>
                            <p>but i understand the requirement of being a Engineer in the future Industry</p>
                            <p>So, lets start our Journey.</p>
                            <p></p>
                        </div>
                    </div> 
                <Footer />
            </div>
        </div>
    )
}

export default AboutUs;