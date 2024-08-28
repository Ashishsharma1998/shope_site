import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import About from "./components/about/About";
import Review from "./components/Reviews/Review";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="dummyTxt">
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          egestas cursus velit. Integer aliquam, felis id feugiat gravida, nunc
          mauris maximus velit.”
        </p>
        <img
          src="https://s3-alpha-sig.figma.com/img/5b02/f95c/47ac52325032053505bda015b334bfa0?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K66jjmTjof4c3oh-CV72H6WlA~LaxfHToaPHspQs3BJWm8~YSu4rK0JdyczEQq5OMJLR2NUhMZsx9qRX4bzsfVE3t-rIFMDwOJLgijkD2X~ZqPNi2uQAIbcin3ZR55gpYqS83krRDBLjFYmLa-JIL~CWQTVOgN80qYbGgPU5qnsFBlMy8r-0Gd919enC3pLA3Y7L8jT56xqTkfgfstngx2sF5DZriC82iPZcOczP97OyKXErFJ7m3tHJ~tmtNRGhcMeYsajbeXqcB9ZmjjSHVz9pw1cbW9zG56fVkr-g2GfhEPCQOUskdPUGIy58vssU-zieBVfNC4npjsuExtxfBg__"
          className="dummyImg"
          alt=""
        />
      </div>
      <Products />
      <About />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
