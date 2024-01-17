import React, { useEffect, useState } from "react";

function Counter({count}) {
  const [visible, setVisible] = useState(false);
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("your-section-id");
      const rect = section.getBoundingClientRect();
      setVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    };

    const updateCounter = () => {
      if (visible) {
        const increment = Math.ceil(count / 300);
        const interval = setInterval(
          () =>
            setCurrentCount((prevCount) =>
              prevCount + increment >= count ? count : prevCount + increment
            ),
          16
        );
        return () => clearInterval(interval);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, count]);

  return <div>Counter</div>;
}

export default Counter;
