const FormularioContacto = () => {
  return (
    <div className='mapouter'>
      <div className='gmap_canvas'>
        <iframe
          width='600'
          height='500'
          id='gmap_canvas'
          src='https://maps.google.com/maps?q=guatemala&t=&z=13&ie=UTF8&iwloc=&output=embed'
          frameborder='0'
          scrolling='no'
          marginheight='0'
          marginwidth='0'
        ></iframe>
        <a href='https://www.whatismyip-address.com'></a>
      </div>
    </div>
  );
};

export default FormularioContacto;
