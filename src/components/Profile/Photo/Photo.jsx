import React from 'react';
import style from "./photo.module.css"

function Photo() {
    return (
      <div className={style.photobody}>
        <div className={style.photodiv}>
          <img src="/Vignesh_main-pic.png" />
        </div>
      </div>
    );
}

export default Photo
