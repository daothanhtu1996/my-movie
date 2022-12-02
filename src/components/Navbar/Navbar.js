import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/Movies.png";
import { MdSearch } from "react-icons/md";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [scrollY, setScollY] = useState(0);
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();

  const handelScrollY = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setScollY(scrollY);
  };

  const handleChaneInput = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);

    if (keywords.length > 0) {
      navigate(`/search?keywords=${keywords.trim()}`);
    }else navigate ('/')
  };

  useEffect(() => {
    handelScrollY();
    window.addEventListener("scroll", handelScrollY);
    return () => {
      window.removeEventListener("scroll", handelScrollY);
    };
  }, []);

  const goHome = () =>{
    navigate('/');
    setKeywords('')
  }

  
  return (
    <div
      className="Navigation"
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }
    >
      <div className="navContainer">
        <div className="logo" onClick={goHome}>
          <img src={Logo} alt="" />
        </div>
        <div className="navSearch">
          <MdSearch className="iconSearch" />
          <input
            type="text"
            placeholder="Input title, name, genres,people"
            onChange={handleChaneInput}
            value={keywords}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
