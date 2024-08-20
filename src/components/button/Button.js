import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab,margin=0}) {
  return (
    <div className={className} style={{margin:margin}}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
