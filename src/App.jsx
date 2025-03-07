import { useState } from "react";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import Linkedin from '../src/assets/link.svg'
import GitHub from '../src/assets/github.svg'

function App() {
  const [input, setInput] = useState("");
  const [qrcodeLink, setQrCodeLink] = useState("");

  function handleLink(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQrCodeLink(url);
    })
      
  }

  function toggleElement(e) {
    setInput(e.target.value);
    handleLink(e.target.value);
  }

  return (
    <>
      <div className="flex justify-center mt-12 sm:mt-20">
        <h1 className="text-4xl sm:text-6xl font-bold italic text-white">
          Gerador de QR Code
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="text-base sm:text-2xl text-black font-mono mt-4 sm:mt-12">
          Desenvolvido por{" "}
          <a target="_blank" href="https://gpimenta07.netlify.app/">
            <span className="text-white italic cursor-pointer">
              Gabriel Pimenta
            </span>
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 sm:gap-10 mt-16 sm:mt-30">
        <QRCode value={input}></QRCode>

        <input
          value={input}
          onChange={(e) => toggleElement(e)}
          placeholder="Digite seu link"
          className="bg-white items-start pl-3 rounded-lg px-18 py-3 outline-black font-serif"
          type="text"
        />
        <button
          className="font-medium text-lg text-white rounded-2xl py-2 px-4 cursor-pointer shadow-[0_20px_50px_rgba(19,_24,_25,_0.8)] hover:opacity-80 bg-black"
          href={qrcodeLink}
          download={`qrcode.png`}
        >
          Baixar QR Code
        </button>
      </div>

      <div className="flex justify-center mt-5 gap-2">
        <a className="duration-500 hover:scale-110" href="https://www.linkedin.com/in/gpimenta07/">
          <img src={Linkedin} alt="logo-linkedin" />
        </a>
        <a className="duration-500 hover:scale-110" href="https://github.com/gpimenta07">
          <img src={GitHub} alt="logo-github" />
        </a>
        
      </div>
    </>
  );
}

export default App;
