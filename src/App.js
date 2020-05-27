import React from "react";
import domtoimage from "dom-to-image-more";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import Header from "./components/header";
import Content from "./components/content";
import Result from "./components/result";

function App() {
  let contentContainerRef = React.useRef();
  let resultContainerRef = React.useRef();

  const [images, setImages] = React.useState([]);
  const [activeImage, setActiveImage] = React.useState("");
  const [topText, setTopText] = React.useState("");
  const [bottomText, setBottomText] = React.useState("");
  const [isMemeGenerated, setIsMemeGenerated] = React.useState("");

  async function fetchImage() {
    const imgData = await fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .catch((err) => console.error(err));
    const { memes } = imgData.data;

    await setImages(memes);
    await setActiveImage(memes[0].url);
  }

  function handleInputChange(event) {
    if (event.target.name === "top-text") {
      setTopText(event.target.value);
    } else {
      setBottomText(event.target.value);
    }
  }

  function handleImageChange() {
    const image = images[Math.floor(Math.random() * images.length)];
    setActiveImage(image.url);
  }

  function handleImageInputChange(event) {
    setActiveImage(window.URL.createObjectURL(event.target.files[0]));
  }

  function handleMemeGeneration() {
    if (resultContainerRef.current.childNodes.length > 0) {
      resultContainerRef.current.removeChild(
        resultContainerRef.current.childNodes[0]
      );
    }
    domtoimage.toPng(contentContainerRef.current).then((dataUrl) => {
      const img = new Image();
      img.src = dataUrl;
      resultContainerRef.current.appendChild(img);
      setIsMemeGenerated(true);
    });
  }

  function handleMemeReset() {
    resultContainerRef.current.removeChild(
      resultContainerRef.current.childNodes[0]
    );
    setIsMemeGenerated(false);
  }

  React.useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <Header />
      <Content
        contentContainerRef={contentContainerRef}
        activeImage={activeImage}
        topText={topText}
        bottomText={bottomText}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        handleMemeGeneration={handleMemeGeneration}
        handleImageInputChange={handleImageInputChange}
        handleMemeReset={handleMemeReset}
        isMemeGenerated={isMemeGenerated}
      />
      <Result resultContainerRef={resultContainerRef} />
    </>
  );
}

export default App;
