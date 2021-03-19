import React from "react";
import { BrowserRouter as Link } from 'react-router-dom';
import '../../../src/rb.css';

class RB extends React.Component {
    render() {
       return (
         <div class="container rb">
        <blockquote class="blockquote">
           <h6> A resume is a brief summary of your skills and experience over one or two pages.</h6>
        </blockquote> 
        <ol>
           <br/>
        <li><strong>Single Page Resume</strong>: The most common mistake that everyone makes is to write every possible detail about themselves in their resume which makes their resumes lengthy up to 2-3 pages. Recruiters do not have this much of time to read a complete resume of 2-3 pages, they hardly pay around 20-30 seconds on each resume. So, keep your resume short up to a single page. Also, when you are writing less then you will write only important things about you.</li>
        <br/>
        <li><strong>No Career Objective</strong>: This is also a common mistake done by job aspirants. A career objective generally read as, “<b>Objective:</b> To utilize my knowledge, skills, and abilities as a Software Engineer”. Focusing on this quoted sentence it basically states the position you are applying for and your interests which the recruiter already knows. So, including this will only end up eating space in your resume.  </li>
        
        <br/><li><strong>Include Accomplishments</strong>: Try to make your resume <b>accomplishment-oriented</b> and not responsibilities oriented. Accomplishments state the things you have achieved and how well do you have managed your responsibilities.  </li>
        <br/><li><strong>Count Matters</strong>: Do not get confuse with the word <em>count</em> here. By count, we mean that you should always specify the count whenever you are including any accomplishment in your resume. For Example, if you have <b>won any competition</b> then do specify this achievement along with your <em>rank</em>.</li>
        <br/> <li><strong>Avoid Grammatical Mistakes</strong>: Do read your resume multiple times to check if there is any <b>grammatical error</b>. </li>
        <br/><li><strong>More content, less space</strong>: Use a good resume template, with columns. This will allow you to <b>fit more content </b>on your resume while making it easier to scan for <b>key information</b> like company names and titles.</li>    
        <br/><li><strong>Projects</strong>: You must pick your <b>top 2-3 projects</b> to list on your resume. It does not matter if these projects are a part of your academic projects or it is an independent one. You may also list an ongoing project if the project matches with the tech stack of the company you are applying to. For example, if you are working on an ongoing project based on ReactJS and the company for which you want to apply also uses ReactJS then you should include that project in your resume. This is said because many companies have a <b>resume filtering</b> option. That is when you apply for a vacancy on their website your resume passes through an initial keyword matching process before it reaches to the hiring team. </li>
        <br/><li><strong>Additional Experience</strong>: You may also add additional experiences but it will be of benefit to you only when your additional experiences match with the position you are applying for. For example, consider that you are applying for a technical role and you have added an additional experience of “<em>Content Writer</em>“. This will not seek the attention of the recruiter in any way. But if you add an additional experience of “<em>Technical Content Writer</em>” then it will surely credit some score to your resume.</li>
        <br/><li><strong>Do not Fake</strong>: Do not ever fake on resume. Listing something fake on your resume have a very high chance of getting you into trouble. Recruiter always tries to ask questions based on the resume. That is, things you have listed you have expertise in.</li>
        <br/>
        <h6>Here is a <a target="_blank" href="https://drive.google.com/file/d/1IltOmwTSvO82nQO9UuBxPa8ft5EuKAlK/view?usp=sharing"><strong>sample resume</strong></a> to help you understand the above points more clearly.</h6>
        <br/>
        </ol>
    </div>

       )
    }
 }



export default RB;