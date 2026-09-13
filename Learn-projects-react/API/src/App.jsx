import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';

dayjs.locale('ar'); 

function App() {
  const [locel, setlocal] = useState("ar")
  const [temperature, setTemperature] = useState({
    temp: null,
    min: null,
    max: null,
    description: "",
    icon: null,
  });



  useEffect(() => {
    const control = new AbortController();

    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=30.0333&lon=31.2333&appid=bdc36c23828ca70eafb1a14accb000e7&units=metric",
        {
          signal: control.signal,
        },
      )
      .then((response) => {
        setTemperature({
          temp: Math.round(response.data.main.temp),
          min: Math.round(response.data.main.temp_min),
          max: Math.round(response.data.main.temp_max),
          description: response.data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      control.abort();
    };
  }, []);

    function handleLanguche(){
      setlocal(locel == "en" ? "ar" : "en")
    }
  return (
    <div
      className="bg-[#1e5ee5] h-screen flex justify-center items-center flex-col w-full"
      dir="rtl"
    >
      <div className="bg-[#1b4db1] w-[500px] rounded-2xl p-6 text-white shadow-xl flex flex-col justify-between">
        {/* Heaher Start */}
        <div className="flex justify-between items-center pb-4 border-b border-blue-400/30 ">
          <h2 className="text-5xl font-bold">القاهره</h2>
          <h4 className="text-lg font-bold text-gray-200">١١-٩-٢٠٢٦</h4>
        </div>
        {/* Heaher End */}

        {/* Context start */}
        <div className="flex justify-between items-center my-8">
          {/* درجة الحرارة وحالة الجو */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <span className="text-8xl font-light">{temperature.temp}</span>
              <img src={temperature.icon} alt="" />
            </div>
            <span className="text-gray-100 text-xl font-bold mt-3">
              {temperature.description}
            </span>
          </div>

          {/* أيقونة السحابة الكبيرة */}
          <div className="flex items-center cursor-pointer hover:scale-110 duration-300">
            <svg
              className="w-32 h-32 text-white fill-current drop-shadow-md"
              viewBox="0 0 24 24"
            >
              <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z" />
            </svg>
          </div>
        </div>
        {/* Context End */}

        {/* الجزء السفلي: الصغرى والكبرى */}
        <div className="flex justify-start gap-x-3 text-md text-white pt-2">
          <span>الصغرى: {temperature.min}</span>
          <span> | </span>
          <span>الكبري : {temperature.max}</span>
        </div>
      </div>

      {/* زر اللغة في الزاوية */}
      <button className="text-xl font-bold bg-white text-blue-500 cursor-pointer mt-4 py-3 px-5 rounded-lg hover:bg-blue-500 hover:text-white duration-400 absolute top-[68%] left-[37.6%]" onClick={handleLanguche}>
        {locel == "ar" ? "English" : "عربي"}
      </button>
    </div>
  );
}

export default App;
