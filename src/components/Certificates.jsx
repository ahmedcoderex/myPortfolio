// import Swiper core and required modules
import { A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Certificates() {
  return (
    <div className="py-18">
      <h2 className="header-section">Certificates</h2>
      <div className="container">
        <Swiper
          // install Swiper modules
          modules={[A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {["1", "2", "4", "5", "6", "7", "8", "10", "11", "12", "13"].map(
            (e) => {
              return (
                <SwiperSlide>
                  <img
                    src={`./certificates/v${e}.png`}
                    alt="photo certificates"
                    className="rounded-md shadow-md shadow-gray-300"
                    loading="lazy"
                  />
                </SwiperSlide>
              );
            },
          )}
        </Swiper>
      </div>
    </div>
  );
}
