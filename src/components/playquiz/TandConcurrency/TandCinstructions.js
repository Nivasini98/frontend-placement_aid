import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import "../../styles/_quiz_instructions.scss";

const TandCinstructions = () => (
<Fragment>
<Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
<div className="instructions container">
<h2>Instructions</h2>
<ul className="browser-default" id="main-list">
    <li>The quiz has a duraction of 15 minutes and ends as soon as your time elapses.</li>
    <li>Quiz consists of 15 questions.</li>
    {/* <li>Every question contains 4 options.
    <img src={question} alt="Quiz App options example"/>   </li>
    <li>Select the option which best answers the question by clicking or selecting it.</li>
     */}<li>The timer will Start as soon as the quiz starts </li>
    {/* <li>You can quit in between your score will be released afterwards </li>
     */}<li>Your score will be released once you finish attending the test </li>
</ul>
<div className="auth-container">
    <span><Link to="/TandCplay" className="game">Start Test</Link></span>
</div>
</div>
</Fragment>





);

export default TandCinstructions;