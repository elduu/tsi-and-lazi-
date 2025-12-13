// src/components/Countdown.jsx
import { useState, useEffect } from "react";

const Countdown = () => {
  // YOUR WEDDING DATE — CHANGE THIS!
  const weddingDate = new Date("2026-01-31T16:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="countdown-section">
      <div className="section__container">
        <h2 className="section__header">~ WE'RE GETTING MARRIED IN ~</h2>

        <div className="countdown-grid">
          {/* 4 different photo backgrounds */}
          <div className="countdown-box">
            <div className="countdown-number">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </div>

          <div className="countdown-box" >
            <div className="countdown-number">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>

          <div className="countdown-box" >
            <div className="countdown-number">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>

          <div className="countdown-box" >
            <div className="countdown-number">{timeLeft.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;   // This line is required!