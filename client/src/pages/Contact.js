import React from 'react';

function Contact() {
    return (
        <main className="container">
            <section className="row">
                <div className="col-lg-10 col-md-10">
                    <article className="block">
                        <h1 className="block-header"><i className="far fa-address-card"></i> Contact</h1>
                        <hr />
                        <figure className="col-sm-12 col-md-12 col-lg-12">
                            <h3 className="block-header">Social Media Profiles: </h3>
                            <a id="btn-github" title="GitHub" href="https://github.com/GuilleMGN" target="_blank" rel="noopener noreferrer"></a>
                            <a id="btn-linkedin" title="LinkedIn" href="https://www.linkedin.com/in/matthewguillen/" target="_blank" rel="noopener noreferrer"></a>
                            <a id="btn-stack" title="StackOverflow" href="https://stackoverflow.com/users/14578633/matthew-guillen?tab=profile" target="_blank" rel="noopener noreferrer"></a>
                            <h3 className="block-header">Download my Resume: </h3>
                            <a id="btn-resume" title="Resume" href="MatthewGuillenResume.pdf" download="MatthewGuillenResume"></a>
                            <h3 className="block-header">Contact Information: </h3>
                            <p><span className="block-header"><i className="fas fa-at"></i> Email: </span>matthewguillen777@gmail.com</p>
                            <p><span className="block-header"><i className="fas fa-mobile-alt"></i> Phone Number: </span>(437)-771-1225</p>
                        </figure>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Contact;