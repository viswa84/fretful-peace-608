import './Slider.css'

const data = [
  "https://www.smatbot.com/img/companies/mahindra.svg",
  "https://www.smatbot.com/img/companies/fnc.svg",
  "https://www.smatbot.com/img/companies/saint_gobain.svg",
  "https://www.smatbot.com/img/companies/kch.svg",
  "https://www.smatbot.com/img/companies/ramoji.svg",
  "https://www.smatbot.com/img/companies/forward_parcel.svg",
  "https://www.smatbot.com/img/companies/firstmeridian.svg",
  "https://www.smatbot.com/img/companies/tata.svg",
  "https://www.smatbot.com/img/companies/cinepolis.svg",
  "https://www.smatbot.com/img/companies/mahindra.svg",
  "https://www.smatbot.com/img/companies/fnc.svg",
  "https://www.smatbot.com/img/companies/saint_gobain.svg",
  "https://www.smatbot.com/img/companies/kch.svg",
  "https://www.smatbot.com/img/companies/ramoji.svg",
  "https://www.smatbot.com/img/companies/forward_parcel.svg",
  "https://www.smatbot.com/img/companies/firstmeridian.svg",
  "https://www.smatbot.com/img/companies/tata.svg",
  "https://www.smatbot.com/img/companies/cinepolis.svg",
];

// /



export default function Imgslider() {
  return (
    <div>
      <div id="viswa">
        <div id="slider">
          <div id="slider-track">
            {data.map((e, i) => (
              <div key={i} id="slider-element">
                <img src={e} alt={e} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
