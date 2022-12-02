import React, { useCallback, useState } from "react";
import ReactPlayer from "react-player";
import "./styles.scss";
import { CiBellOn, CiBellOff } from "react-icons/ci";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlinePause } from "react-icons/ai";

function Intro() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlay, setIsPlay] = useState(true);

  const handleBtnMuted = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  const handleBtnPlay = useCallback(() => {
    setIsPlay((prev) => !prev);
  }, []);

  return (
    <div className="IntroContainer">
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        playing={isPlay}
        volume={1}
        loop={true}
        muted={isMuted}
        url="https://vimeo.com/306783762"
        className="videoIntro"
      ></ReactPlayer>

      <div className="infoIntro">
        <h1 className="headingIntro">Lorem Ipsum</h1>
        <p className="overviewIntro">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>

      <div className="shadowBottom">
        {isPlay ? (
          <AiOutlinePause onClick={handleBtnPlay} className="btnPlay" />
        ) : (
          <AiFillCaretRight onClick={handleBtnPlay} className="btnPlay" />
        )}
        {isMuted ? (
          <CiBellOff onClick={handleBtnMuted} className="btnVolume" />
        ) : (
          <CiBellOn onClick={handleBtnMuted} className="btnVolume" />
        )}
      </div>
    </div>
  );
}

export default Intro;
