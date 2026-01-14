// src/components/SaveTheDate.jsx
import { GiHeartInside } from "react-icons/gi";

export default function SaveTheDate() {
  const weddingDay = 31; // Change this number for your date
  const month = "JANUARY";
  const year = "2026";

  // Calendar starts on Sunday, November 2025 actually starts on Saturday
  // So first row: empty, empty, empty, empty, empty, 1, 2
  const days = [
    null, null, null, null, 1, 2,
    3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30,,31
  ];

  return (
    <section className="save-the-date">
      <div className="std-container">
        <h2 className="std-month">{month} {year}</h2>

        <div className="std-weekdays">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
            <div key={day} className="weekday">{day}</div>
          ))}
        </div>

        <div className="std-days">
          {days.map((day, index) => (
            <div
              key={index}
              className={`day-cell ${day === weddingDay ? "wedding-day" : ""} ${!day ? "empty" : ""}`}
            >
              {day && day === weddingDay ? (
                <div className="heart-day">
                  
                  <span className="day-number">{day}</span>
                </div>
              ) : (
                day || ""
              )}
            </div>
          ))}
        </div>

        <div className="std-footer">
          <h1 className="save-text">Save the Date</h1>
          <p className="date-text">
            {month} {weddingDay}, {year}
          </p>
        </div>
      </div>
    </section>
  );
}