import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Picture from '../assets/images/FormPage.png';
import Picture2 from '../assets/images/SeetGeekLogin.PNG';
import Picture3 from '../assets/images/SeetGeekHome.PNG';

function ContactPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <h1>Ovarian Cancer Mobile App</h1>

            <p>The motivation for this project is the fact that 80% of ovarian cancer cases are not diagnosed until it has already reached an advanced stage, making it a much more threatening disease. The goal is to create a tool that will help general practitioners detect early signs of ovarian cancer. The hope is that patients with potential signs of ovarian cancer can go through the necessary testing in order to be diagnosed at an earlier stage, where it is far more likely to be treatable.</p>

            <p>View the source code on GitHub <a href="https://github.com/mmont429/OvarianCancerApp" target="_blank" rel="noopener noreferrer">here</a>.</p>

            <div className="d-inline-block g-card">
                <img className="g-ovarian-image" src={Picture}/>

            </div>

            <h1>Seet Geek Application</h1>

            <p>For this project, my small team of 3 others and myself created a locally hosted ticket buying/selling website with a backend SQLite database. We performed thorough automated testing using PyTest and SeleniumBase API. We also integrated the site into a Docker container.</p>
            
            <p>View the source code on GitHub <a href="https://github.com/15of11/seet-geek" target="_blank" rel="noopener noreferrer">here</a>.</p>
            
            <div className="d-inline-block g-card">
                <img className="g-seetgeek-image" src={Picture2}/>
                <img className="g-seetgeek2-image" src={Picture3}/>
            </div>

            <h1>Pizza Finder Application</h1>

            <p>For this project, my small team of 3 others and myself created a locally hosted website interface with user I/O using HTML. The site integrated google maps API and web scraping libraries to scan multiple restaurant websites with 95% accuracy on the tester website using Python. My team and I achieved 3rd place at the Queen’s Engineering Competition.</p>
            
            <p>View the source code on GitHub <a href="https://github.com/15of11/team5" target="_blank" rel="noopener noreferrer">here</a>.</p>

            </Content>
        </div>
    );

}

export default ContactPage;