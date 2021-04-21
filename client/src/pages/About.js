import React from "react";
import pfp from "../imgs/profile.jpg";

function About() {
    return (
        <main className="container">
        <section className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <article className="block">
              <h1 className="about-me-header"><i className="far fa-question-circle"></i> About Me</h1>
              <hr />
              <div className="row">
                <div className="col-lg-3 col-md-5 col-sm-8">
                  <img src={pfp} alt="matthew-guillen-image" id="about-image" aria-hidden />
                </div>
                <div><br /></div>
                <div className="col-lg-8 col-md-6" id="description">
                  <p>
                    Hello, my name is Matthew Guillen, welcome to my portfolio! I'm 19 years old living
                    in Canada with my family. My goal is to become a full-stack web developer, and I'm 
                    looking forward to an opportunity to improve my skills in this field. I've know how  
                    to code in HTML, CSS, and JavaScript. You can also check out my other projects and 
                    collaborations that I've done in the portfolio section, which include using third 
                    party API calls, jQuery, CSS frameworks, LocalStorage, MySQL, MongoDB, Node, Handlebars 
                    and much more!
                  </p>
                  <p>
                    Here you can learn more about me, explore what I've learned, and contact me if you have any 
                    questions, comments, or suggestions. <br /> 
                    Thank you for coming by! <br />
                  </p>
                  <p> - Matt G. </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    );
}

export default About;