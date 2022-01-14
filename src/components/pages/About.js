import React, { Fragment } from 'react'

function About() {
    return (
        <Fragment>
            <h1>About this app</h1>
            <p className='col-12 col-md-6 col-lg-4'>This app was created to search Github users. It was created by <a href="https://github.com/julianyo">Julian Ruiz Rodriguez</a> using React and bootstrap while following the course provided by <a href="https://www.traversymedia.com/">Brad Traversy</a> on Udemy.</p>
            <p>Illustrations used on the app were from <a href="https://undraw.co/">Undraw</a>!</p>
            <p>Version 1.0.0</p>
        </Fragment>
    )
}

export default About
