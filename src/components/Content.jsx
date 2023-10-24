import React from 'react';
import Hairstyles from "../assets/Hairstyles.png"

const Content = () => {
    return (
        <main>
            <section>
                <div className='hairstyle-section'>
                    <div className='hairstyle-block'>
                        <div>
                            <h2>Hairstyle Reflects</h2>
                            <h2>The Personality</h2>
                            <h2>Inside You</h2>
                        </div>
                        <div>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page
                            w
                            hen looking at.
                        </div>
                        <button className='button'>Get Started</button>
                    </div>
                    <div className='hairstyle-image'>
                        <img src={Hairstyles} alt="hairstyles-image"/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Content;