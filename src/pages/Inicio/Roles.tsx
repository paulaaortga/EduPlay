import { useNavigate } from "react-router-dom";
import "./Roles.css";

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="inicio-container">
      <div className="inicio-content">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
      <path fill="#ee3e54" d="M12.875,26.958c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S13.98,26.958,12.875,26.958z"></path><path fill="#f1bc19" d="M76.875,11.958c-0.551,0-1,0.449-1,1s0.449,1,1,1s1-0.449,1-1S77.426,11.958,76.875,11.958z"></path><path fill="#fce0a2" d="M49.875,12.958c-20.434,0-37,16.566-37,37s16.566,37,37,37s37-16.566,37-37 S70.309,12.958,49.875,12.958z"></path><path fill="#f1bc19" d="M82.875,10.958c-2.211,0-4,1.789-4,4s1.789,4,4,4s4-1.789,4-4S85.086,10.958,82.875,10.958z"></path><path fill="#ee3e54" d="M86.875,21.958c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S87.98,21.958,86.875,21.958z"></path><path fill="#fbcd59" d="M80.875,73.958c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S81.98,73.958,80.875,73.958z M14.875,58.958c-2.211,0-4,1.789-4,4s1.789,4,4,4s4-1.789,4-4S17.086,58.958,14.875,58.958z"></path><path fill="#ee3e54" d="M24.875,84.958c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S25.98,84.958,24.875,84.958z"></path><path fill="#fff" d="M18.375,40.958c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5 S19.754,40.958,18.375,40.958z"></path><path fill="#f1bc19" d="M20.875,64.958c-0.551,0-1,0.449-1,1s0.449,1,1,1s1-0.449,1-1S21.426,64.958,20.875,64.958z"></path><path fill="#fff" d="M79.875,31.958c-0.551,0-1,0.449-1,1s0.449,1,1,1s1-0.449,1-1S80.426,31.958,79.875,31.958z"></path><path fill="#beace5" d="M74,49.777l-1.2,1.2h-6.048c0.036-0.396,0.048-0.792,0.048-1.2c0-9.276-7.524-16.8-16.8-16.8 c-0.408,0-0.804,0.012-1.2,0.048v-6.048l1.2-1.2c6.624,0,12.624,2.688,16.968,7.032C71.648,37.489,74,43.633,74,49.777z"></path><path fill="#ef657d" d="M74,49.777c0,6.624-2.688,12.624-7.032,16.968c-4.68,4.68-10.824,7.032-16.968,7.032l-1.2-1.2 v-6.048c0.396,0.036,0.792,0.048,1.2,0.048c8.868,0,16.14-6.888,16.752-15.6c0.036-0.396,0.048-0.792,0.048-1.2H74z"></path><path fill="#6ee7ea" d="M50,66.577v7.2c-6.624,0-12.624-2.688-16.968-7.032C28.34,62.065,26,55.921,26,49.777l1.2-1.2h6.048 c-0.036,0.396-0.048,0.792-0.048,1.2c0,8.868,6.888,16.14,15.6,16.752C49.196,66.565,49.592,66.577,50,66.577z"></path><path fill="#f8e55b" d="M50,25.777v7.2c-0.408,0-0.804,0.012-1.2,0.048c-8.316,0.588-14.964,7.236-15.552,15.552 c-0.036,0.396-0.048,0.792-0.048,1.2H26c0-6.624,2.688-12.624,7.032-16.968C37.712,28.117,43.856,25.777,50,25.777z"></path><path fill="#472b29" d="M49.999,26.177c13.014,0,23.601,10.586,23.601,23.599c0,13.014-10.587,23.601-23.601,23.601 c-13.012,0-23.599-10.587-23.599-23.6S36.987,26.177,49.999,26.177 M49.999,24.777c-13.785,0-24.999,11.215-24.999,25 s11.214,25,24.999,25C63.785,74.777,75,63.561,75,49.776S63.785,24.777,49.999,24.777L49.999,24.777z"></path><path fill="#472b29" d="M49.999,34.177c8.602,0,15.601,6.998,15.601,15.599c0,8.602-6.998,15.601-15.601,15.601 c-8.601,0-15.599-6.998-15.599-15.6S41.398,34.177,49.999,34.177 M49.999,32.777c-9.374,0-16.999,7.626-16.999,17 s7.626,17,16.999,17C59.374,66.777,67,59.151,67,49.777S59.374,32.777,49.999,32.777L49.999,32.777z"></path><rect width="7.5" height="1" x="26" y="48.777" fill="#472b29"></rect><rect width="7.5" height="1" x="66.5" y="49.777" fill="#472b29"></rect><g><rect width="1" height="7.5" x="50" y="25.777" fill="#472b29"></rect></g><g><rect width="1" height="7.5" x="49" y="66.277" fill="#472b29"></rect></g><path fill="none" stroke="#472b29" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".5" d="M34.57,34.377 c0.269-0.27,0.546-0.533,0.829-0.789"></path><path fill="none" stroke="#472b29" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".5" d="M30.2,40.643 c0.851-1.842,1.952-3.545,3.259-5.066"></path><path fill="none" stroke="#472b29" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".5" d="M29.217,43.177 c0.107-0.337,0.222-0.67,0.344-1"></path><path fill="none" stroke="#472b29" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".5" d="M28.378,46.977 c0.087-0.677,0.205-1.344,0.352-2"></path><path fill="none" stroke="#472b29" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".5" d="M66.541,63.978 c-1.738,2.023-3.842,3.724-6.208,5"></path><path fill="none" stroke="#472b29" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".5" d="M69.675,59.177 c-0.467,0.976-1.004,1.911-1.606,2.8"></path><path fill="none" stroke="#472b29" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".5" d="M71.536,53.177 c-0.227,1.453-0.598,2.858-1.098,4.2"></path>
      </svg>
      <h1 className="inicio-subtitle">Bienvenido a EduPlay</h1>
        <h2 className="inicio-title">Identíficate como</h2>

        <button
          onClick={() => navigate("/listar")}
          className="inicio-button"
        >
          Rol Maestro
        </button>

        <button
          onClick={() => navigate("/alumno")}
          className="inicio-button"
        >
          Rol Alumno
        </button>
      </div>
    </div>
  );
}