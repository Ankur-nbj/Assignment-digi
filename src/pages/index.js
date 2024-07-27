import Head from "next/head";
import { useEffect, useState } from "react";

const Home = () => {
  const [showWave, setShowWave] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then(
        function (registration) {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        function (err) {
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    }
  }, []);

  const handleNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Hello, World!");
      createWaveEffect();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Hello, World!");
          createWaveEffect();
        }
      });
    }
  };

  const createWaveEffect = () => {
    setShowWave(true);
    setTimeout(() => setShowWave(false), 2000);
  };

  return (
    <>
    <Head>
        <title>Assignment- DiGiLABs</title>
        <meta name="description" content="Assignment" />
      </Head>
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#2C2143] to-[#000000] text-white">
      <h1 className="text-4xl font-bold my-10">Hola!</h1>
      <div className="background-image flex items-center justify-center p-5 my-10 relative">
        <div className="inner flex items-center justify-center p-10 rounded-full bg-gradient-to-b from-[#190E3466] to-[#190E3400] relative">
          <div className="flex items-center justify-center p-10 bg-[#190E3466] rounded-full border-2 border-[#49318266] relative">
            <div className="flex items-center justify-center p-10 rounded-full border border-[#644D9A] relative">
              <div className="flex items-center justify-center bg-[#2F1A6199] rounded-full relative">
                {showWave && (
                  <div
                    className="wave-effect"
                    style={{
                      width: '200%',
                      height: '200%',
                      background: 'rgba(255, 255, 255, 0.3)',
                    }}
                  ></div>
                )}
                <div className="relative z-10">
                  <img src="/Vector.png" alt="ring" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-2xl font-bold mb-2 mt-20">Lorem Ipsum...</p>
      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet.</p>
      <button
        className="bg-[#1D103A] text-xl text-white font-bold py-2 px-20 my-20 transition-colors duration-300 border-2 border-[#6434CE] rounded-lg"
        onClick={handleNotification}
        style={{ boxShadow: '0px 1px 2px 0px #0000001F' }}
        >
        Send Notification
      </button>
    </div>
        </>
  );
};

export default Home;
