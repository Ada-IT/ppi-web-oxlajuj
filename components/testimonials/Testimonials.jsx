const Testimonials = () => {
    return (
        <div /* className='container' */>
            <h2>Testimonios</h2>
            <div className='row'>
                <div className='col-4'>
                    <video width='100%' controls>
                        <source src='./video/1.mp4' type='video/mp4' />
                    </video>

                    {/* <figure>
                        <blockquote class='blockquote'>
                            <p>Escuela de empoderamiento feminista.</p>
                        </blockquote>
                        <figcaption class='blockquote-footer'>
                            <cite title='testimonio'>
                                "Lo que más me gusto del curso de empoderamiento feminista fue
                                que pude aprender lo que en verdad es el feminismo y los
                                distintos tipos que representan al movimiento, así pude aprender
                                a valorar más nuestro papel como mujeres más de lo que ya las
                                valoraba y me aprendí a querer más a mí misma, y pues ahora
                                tengo mucho más conocimiento para brindar mi apoyo"
              </cite>
                        </figcaption>
                    </figure>
                    <blockquote></blockquote> */}
                </div>
                <div className='col-4'>
                    <video width='100%' controls>
                        <source src='./video/2.mp4' type='video/mp4' />
                    </video>
                </div>
                <div className='col-4'>
                    <video width='100%' controls>
                        <source src='./video/3.mp4' type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;