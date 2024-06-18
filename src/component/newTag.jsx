import React, { useEffect, useRef } from "react";
import JWordCloud from "jwordcloud";

const NewTag = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const words = {
      JWordCloud: 101,
      "3d": 42,
      JavaScript: 23,
      CSS3: 45,
      Animation: 109,
      React: 56,
      Vue: 78,
      Jvue: 107,
      App: 118,
      Web: 109,
      Html5: 67,
      Java: 69
    };

    new JWordCloud(contentRef.current, words, {
      // 词云渲染区域大小
      radius: 300,
      // 词云动画速度模式 slow, normal, fast
      maxSpeed: "normal",
      initSpeed: "normal",
      // 词云颜色板
      colors: [
        "red",
        "blue",
        "orange",
        "green",
        "purple",
        "yellow",
        "skyblue",
        "#673ab7",
        "#3f51b5",
        "#ff5722",
        "#607d8b"
      ],
      // 词云标准值字体大小
      fontSize: 20
    });
  }, []);

  return <div className="content" ref={contentRef}></div>;
};

export default NewTag;