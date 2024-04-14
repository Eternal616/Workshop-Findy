import "./ProfilePost.scss";

const ProfilePost = () => {
  return (
    <main className="main">
      <ul className="main__filter">
        <li>
          <a className="main__filter-link main__filter-link--active" href="#">Photos</a>
        </li>
        <li>
          <a className="main__filter-link" href="#">Videos</a>
        </li>
        <li>
          <a className="main__filter-link" href="#">Album</a>
        </li>
        <li>
          <a className="main__filter-link" href="#">Tag</a>
        </li>
      </ul>
      <section className="main__post">
        <img
          className="main__post-container"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCw2b2l7g98U1IDr6RtGZ5Br7i0tMP_5FZW12sqNhJbg&s"
          alt="Post"
        />
        <img
          className="main__post-container"
          src="https://w0.peakpx.com/wallpaper/1003/954/HD-wallpaper-jisung-han-han-jisung-stray-kids-thumbnail.jpg"
          alt="Post"
        />
        <img
          className="main__post-container"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFV_pNlHBY22GGTm0tU7QJOMdQMimA9CaUOTgu0IZQA&s"
          alt="Post"
        />
        <img
          className="main__post-container"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zoRqv34m-jWQ40i2_IAZYo7an_nDy0P-VMRZYEYbKA&s"
          alt="Post"
        />
        <img
          className="main__post-container"
          src="https://i.pinimg.com/736x/24/72/c2/2472c2154a304803d59ad7f03e2b74eb.jpg"
          alt="Post"
        />
        <img
          className="main__post-container"
          src="https://i.pinimg.com/736x/5d/5c/71/5d5c712a0f61aa3567378c617c8dbcaa.jpg"
          alt="Post"
        />
        <img
          className="main__post-container"
          src="https://kpopping.com/documents/12/3/240226-CHANGBIN-Instagram-Update-documents-2.jpeg?v=ec566"
          alt="Post"
        />
        <img
          className="main__post-container"
          src="https://altselection.com/wp-content/uploads/2021/03/jyp-critique-anniversaire-hyunjin.jpeg"
          alt="Post"
        />
        <img
          className="main__post-container"
          src="https://larepublica.cronosmedia.glr.pe/migration/images/ZMIRYGI7RVEKDPVYRPRDOQXTEE.jpg"
          alt="Post"
        />
        <img
          className="main__post-container"
          src="https://i.pinimg.com/474x/1a/be/2d/1abe2d71cae8c6f6aa8d80ed8daa234e.jpg"
          alt="Post"
        />
        <img
          className="main__post-container"
          src="https://m.media-amazon.com/images/I/51ovU22yyVL._AC_SL1100_.jpg"
          alt="Post"
        />
      
      </section>
    </main>
  );
};

export default ProfilePost;
