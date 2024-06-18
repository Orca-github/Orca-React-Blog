import React, { useEffect, useState, useRef } from "react";

const DyTag =  () =>  {
    const [contentEle, setContentEle] = useState([]);
  const [direction, setDirection] = useState("-1");
  const [speed, setSpeed] = useState(3000);
  const animationFrameId = useRef(null);

  const data = [
    '云图', '是个啥', '他啥都不是', '他就是词云', '就是他呆子', '傻子和疯子', '营养快线', '哈哈哈到家',
    '瑞士军刀', 'DW情侣对表', '清风抽纸', '这一刻更清晰', '债券评级', '呵呵旧宫style', '云图', '是个啥', 
    '他啥都不是', '他就是词云', '就是他呆子', '傻子和疯子', '营养快线', '哈哈哈到家', '瑞士军刀', 
    'DW情侣对表', '清风抽纸', '这一刻更清晰', '债券评级', '呵呵旧宫style'
  ];
  
  const colors = ['#2D4DB6', '#04B67C', '#D1AF07', '#E27914', '#CB4A4D', '#B02690'];

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  useEffect(() => {
    const handleAnimation = () => {
      animate();
      animationFrameId.current = requestAnimationFrame(handleAnimation);
    };

    animationFrameId.current = requestAnimationFrame(handleAnimation);
    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [contentEle, direction, speed]);

  const init = () => {
    const width = 500;
    const height = 500;
    const RADIUSX = (width - 50) / 2;
    const RADIUSY = (height - 50) / 2;
    let newContentEle = [];

    for (let i = 0; i < data.length; i++) {
      const k = -1 + (2 * (i + 1) - 1) / data.length;
      const a = Math.acos(k);
      const b = a * Math.sqrt(data.length * Math.PI);
      const x = RADIUSX * Math.sin(a) * Math.cos(b);
      const y = RADIUSY * Math.sin(a) * Math.sin(b);
      const z = RADIUSX * Math.cos(a);
      newContentEle.push({ x, y, z, style: {} });
    }
    
    setContentEle(newContentEle);
  };

  const animate = () => {
    let newElements = rotateX(contentEle);
    newElements = rotateY(newElements);
    move(newElements);
  };

  const rotateX = (elements) => {
    const angleX = ['-1', '1'].includes(direction) ? Math.PI / Infinity : Math.PI / ((Number(direction) / 2) * Number(speed));
    const cos = Math.cos(angleX);
    const sin = Math.sin(angleX);

    return elements.map(t => {
      const y1 = t.y * cos - t.z * sin;
      const z1 = t.z * cos + t.y * sin;
      return { ...t, y: y1, z: z1 };
    });
  };

  const rotateY = (elements) => {
    const angleY = ['-2', '2'].includes(direction) ? Math.PI / Infinity : Math.PI / (Number(direction) * Number(speed));
    const cos = Math.cos(angleY);
    const sin = Math.sin(angleY);

    return elements.map(t => {
      const x1 = t.x * cos - t.z * sin;
      const z1 = t.z * cos + t.x * sin;
      return { ...t, x: x1, z: z1 };
    });
  };

  const move = (elements) => {
    const width = 500;
    const height = 500;
    const CX = width / 2;
    const CY = height / 2;
    const RADIUS = (width - 50) / 2;
    const fallLength = 500;

    const newElements = elements.map(t => {
      const { x, y, z } = t;
      const scale = fallLength / (fallLength - z);
      const alpha = (z + RADIUS) / (2 * RADIUS);
      const left = `${x + CX - 15}px`;
      const top = `${y + CY - 15}px`;
      const transform = `translate(${left}, ${top}) scale(${scale})`;
      return {
        ...t,
        style: {
          ...t.style,
          opacity: alpha + 0.5,
          zIndex: parseInt(scale * 100, 10),
          transform,
        },
      };
    });

    setContentEle(newElements);
  };

  const handleRotate = (value) => {
    setDirection(value);
  };

  const handleSpeed = (value) => {
    const speedObj = {
      fast: -50,
      slow: 50,
    };
    let newSpeed = speed + speedObj[value];
    if (newSpeed === 0) newSpeed = 50;
    setSpeed(newSpeed);
  };

  return (
    <div id="main">
      <div className="wordCloud__tagBall" style={{ width: '500px', height: '500px' }}>
        {contentEle.map((ele, index) => (
          <div
            key={index}
            className="wordCloud__tag"
            style={{
              color: colors[index % colors.length],
              opacity: ele.style.opacity,
              transform: ele.style.transform,
              zIndex: ele.style.zIndex,
            }}
          >
            {data[index]}
          </div>
        ))}
      </div>
      <div className="wordCloud__home">
        <button className="btn0" type="button" onClick={() => handleSpeed('slow')}>降低速度</button>
        <button className="btn1" type="button" onClick={() => handleRotate('-1')}>横向顺时针</button>
        <button className="btn2" type="button" onClick={() => handleRotate('1')}>横向逆时针</button>
        <button className="btn3" type="button" onClick={() => handleRotate('-2')}>纵向顺时针</button>
        <button className="btn4" type="button" onClick={() => handleRotate('2')}>纵向逆时针</button>
        <button className="btn5" type="button" onClick={() => handleSpeed('fast')}>增加速度</button>
      </div>
    </div>
  );
};

export default  DyTag;





