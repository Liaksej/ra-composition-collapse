"use client";

import { useRef, useState } from "react";
import { MouseEvent } from "react";

interface CollapseProps {
  collapsedLabel?: string;
  expandedLabel?: string;
}

export const Collapse = ({
  collapsedLabel = "Развернуть",
  expandedLabel = "Свернуть",
}: CollapseProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const button = useRef<HTMLButtonElement | null>(null);
  const wraper = useRef<HTMLDivElement | null>(null);

  function handlerClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!(button.current && wraper.current)) {
      return;
    }

    if (collapsed == true) {
      button.current.textContent = expandedLabel;
      wraper.current.style.maxHeight = wraper.current?.scrollHeight + "px";
      setCollapsed(false);
    } else {
      wraper.current.style.maxHeight = "";
      button.current.textContent = collapsedLabel;
      setCollapsed(true);
    }
  }

  return (
    <div className="container">
      <button className="btn" ref={button} onClick={handlerClick}>
        {collapsedLabel}
      </button>
      <div className="text-box-wrapper" ref={wraper}>
        <div className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          distinctio eius molestias natus nemo, quisquam sapiente similique
          soluta tenetur velit. Architecto aspernatur dolor ea nostrum porro
          saepe sint veniam veritatis!
        </div>
      </div>
    </div>
  );
};
