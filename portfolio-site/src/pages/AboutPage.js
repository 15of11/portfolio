import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Owen Ford. I'm a computer engineer with experience in React, ReactJS, Node JS, SQL, Python, and more.</p>

            <p>I am currently finishing my last year of computer engineering at Queen's University.</p>

            <p>I'm constantly learning new things. Currently, those things include gaining more experience with React, React Native, Node JS, SQL, and Python.</p>

            <p>My latest project, the Ovarian Cancer mobile app, is an app that allows doctors to fill out patient information and receive feedback such as possible testing. You can check it out <a href="https://github.com/mmont429/OvarianCancerApp" target="_blank" rel="noopener noreferrer">here</a>, or on the projects page. It is built with React Native, AWS, and Node JS.</p>
            </Content>
        </div>
    );

}

export default AboutPage;