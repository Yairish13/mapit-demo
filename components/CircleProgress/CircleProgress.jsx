"use client"
import { useState, useEffect } from 'react';
import styles from './CircleProgress.module.css';
import { useSelector } from 'react-redux';

const CircleProgress = ({  }) => {
  const percentage = useSelector((state) => state.general.percentage);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const circleWidth = 200;
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * currentPercentage) / 100;

  useEffect(() => {
    const animationDuration = 500;

    let animationFrameId;
    let startTime;
    let startPercentage;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
        startPercentage = currentPercentage;
      }

      const elapsedTime = timestamp - startTime;
      const progress = elapsedTime / animationDuration;
      let updatedPercentage = startPercentage + (percentage - startPercentage) * progress;
      updatedPercentage = updatedPercentage > 100 ? 100 : updatedPercentage;
      setCurrentPercentage(updatedPercentage);

      if (elapsedTime < animationDuration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [percentage]);

  return (
    <>
      <div className={styles.circleDiv}>
        <div className={styles.outerWrapper}>
          <svg width="100px" height="100px" viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
            <circle
              cx={circleWidth / 2}
              cy={circleWidth / 2}
              strokeWidth="15px"
              r={radius}
              className={styles.circleBackground}
            />

            <circle
              cx={circleWidth / 2}
              cy={circleWidth / 2}
              strokeWidth="15px"
              r={radius}
              className={styles.circleProgress}
              style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
              transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
            ></circle>
          </svg>
          <div className={styles.percentageWrapper}>
            <text x="50%" y="50%" dy="0.3em" textAnchor="middle" className={styles.circleText}>
              {Math.round(currentPercentage)}%
            </text>
          </div>
        </div>
        {/* <div>
          <button onClick={(e) => setpercentage(prev => prev + 5)} />
        </div> */}
      </div>
    </>
  );
};

export default CircleProgress;
