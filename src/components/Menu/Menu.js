import React from "react";
import MenuItem from "./MenuItem";
import {
  FcHome,
  FcCamcorderPro,
  FcPhotoReel,
  FcSportsMode,
  FcUpload,
  FcLike,
  FcBiohazard,
} from "react-icons/fc";

import "./styles.scss";

function Menu() {
  return (
    <div className="menuPane">
      <MenuItem Icon={FcHome} name="NEW" to='new'/>
      <MenuItem Icon={FcCamcorderPro} name="Trending" to='trending'/>
      <MenuItem Icon={FcPhotoReel} name="Top Rated" to='topRated'/>
      <MenuItem Icon={FcSportsMode} name="Action" to='action'/>
      <MenuItem Icon={FcUpload} name="Comedy" to='comedy'/>
      <MenuItem Icon={FcLike} name="Romance" to='romance'/>
      <MenuItem Icon={FcBiohazard} name="Documentaries" to='documentaries'/>
    </div>
  );
}

export default Menu;
