import { useRef } from "react";
import { 
  GiMirrorMirror, 
  GiLinkedRings, 
  GiFlowerPot, 
  GiChurch, 
  GiDiamondRing, 
  GiWineGlass 
} from "react-icons/gi";

const weddingTimeline = [
  { time: "10:00 AM", title: "Groom's House",       icon: <GiMirrorMirror /> },
  { time: "12:30 PM", title: "Bride's House",       icon: <GiLinkedRings /> },
  { time: "1:00 PM",  title: "Photos",              icon: <GiFlowerPot /> },
  { time: "2:00 PM",  title: "Church Arrival",      icon: <GiChurch /> },
  { time: "3:00 PM",  title: "Wedding Ceremony",    icon: <GiDiamondRing /> },
  { time: "4:00 PM",  title: "Cake Cutting",        icon: <GiWineGlass /> },
];

export default function Services() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
  scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  triggerGlow();
};

const scrollRight = () => {
  scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  triggerGlow();
};

const triggerGlow = () => {
  const el = scrollRef.current;
  el.classList.remove("timeline-glow-active");

  // force reflow to restart animation
  void el.offsetWidth;

  el.classList.add("timeline-glow-active");
};

  return (
    <section className="service" id="service">
      <div className="section__container service__container">
        <h2 className="section__header">~ WEDDING DAY TIMELINE ~</h2>
        <p className="section__description">
          Every precious moment, perfectly timed.
        </p>

        <div className="timeline-wrapper">
          <button onClick={scrollLeft} className="nav-arrow left"></button>
          
          <div className="timeline-horizontal" ref={scrollRef}>
            {weddingTimeline.map((event, index) => (
              <div
                key={index}
                className="timeline-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-label">
                  <div className="timeline-time">{event.time}</div>
                  <div className="timeline-title">{event.title}</div>
                </div>
                <div className="timeline-circle">
                  {event.icon}
                </div>
              </div>
            ))}
          </div>

          <button onClick={scrollRight} className="nav-arrow right"></button>
        </div>
      </div>
    </section>
  );
}