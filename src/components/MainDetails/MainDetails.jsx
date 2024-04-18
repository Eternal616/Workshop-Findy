import "./MainDetails.scss";
import { IconContext } from "react-icons";
import { HiPaperAirplane } from "react-icons/hi2";

const MainDetails = () => {
  return (
    <>
      <IconContext.Provider
        value={{ size: "1.3125rem", color: "#FF7674", className: "icon" }}
      >
        <main className="mainDetails">
          <section className="mainDetails__paragraph">
            <h2 className="mainDetails__paragraph-title"> [📌| ꜱᴋᴢ ʙʀᴇᴀᴋɪɴɢ ɴᴇᴡꜱ] </h2>
            <p className="mainDetails__paragraph-description">
              ¡Félix ya ha superado los 20.000.000 (20 millones) de seguidores
              en Instagram! Es el primer artista de JYP yKpop Idol de cuarta
              generación en superar este hito. 🔗
              <a href="http://instagram.com/yong.lixx">Publicación</a>
            </p>
            <p className="mainDetails__paragraph-hashtags">
              —🧸 <a href="#">#StrayKids</a> <a href="#">#스트레이키즈</a>{" "}
              <a href="#">#スキズ</a>
            </p>
          </section>
          <section className="mainDetails__visitor">
            <img
            className="mainDetails__visitor-img"
              src="https://i.pinimg.com/564x/38/ba/d3/38bad36b281ca828f912b6b13b39aff4.jpg"
              alt="Imagen del perfil visitante"
            />
              <input className="mainDetails__visitor-comment-input" type="text" placeholder="Write comment as username..." />
 <HiPaperAirplane /> 
          </section>
        </main>
      </IconContext.Provider>
    </>
  );
};

export default MainDetails;
