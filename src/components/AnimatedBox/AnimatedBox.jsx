import { useRef, useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 10,
  (x - rect.left - rect.width / 2) / 10,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function AnimatedBox({ children }) {
  const configList = Object.keys(config);
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const { preset } = {
    preset: { value: 'default', options: configList },
  };
  const props = useSpring({ xys, config: config[preset] });

  return (
    <div ref={ref}>
      <animated.div
        className="ccard"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={e => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
        {children}
      </animated.div>
    </div>
  );
}
