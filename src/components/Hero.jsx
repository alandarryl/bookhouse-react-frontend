
import React from 'react'

function Hero() {
    return (
        <section>
            <div className='container' >
                <div className='row align-items-center' >
                    <div className='col' >
                        <h1>
                            Redécouvrez des <span className='text-muted' >trésors littéraires</span>
                        </h1>
                        <p className='lead' >
                            Achetez ou vendez des livres d'occasion en quelques clics
                        </p>
                        <button className='btn btn-dark' >Publiez une annonce</button>
                    </div>

                    <div className='col' >
                        <img/>
                        <img/>
                        <img/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;



