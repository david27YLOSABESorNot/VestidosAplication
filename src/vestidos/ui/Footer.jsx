import IconFacebook from '/public/icons/icons8-facebook.svg';
import IconInstagram from '/public/icons/icons8-instagram.svg';
import IconTwitter from '/public/icons/icons8-twitter.svg';
import IconWhatsapp from '/public/icons/icons8-whatsapp.svg';


export const Footer = () => {
  return (
    <footer  className="footer ">
        <div className="contain contain-footer">
            <h3>Novias y Eventos J E S</h3> 
            <p>Derechos Reservados Por NoviasYEventosJES</p>  


            <div className="social">
                <p>Siguenos En Nuestras Redes Sociales</p>

                <div className="contain-logos">
                    <img src={IconFacebook} alt='icono facebook' />
                    <img src={IconTwitter} alt='icono facebook' />
                    <img src={IconInstagram} alt='icono facebook' />
                    <img src={IconWhatsapp} alt='icono facebook' />
                </div>
            </div>  
        </div>
    </footer >
  )
}

