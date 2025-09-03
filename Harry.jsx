import { useEffect } from "react";

function Harry() {
  useEffect(() => {
    // Inject Botpress webchat script first
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    let script2 = null;
    script1.onload = () => {
      // Inject custom bot script only after inject.js is loaded
      script2 = document.createElement("script");
      script2.src = "https://files.bpcontent.cloud/2025/09/03/08/20250903083153-S0UV0R0N.js";
      script2.defer = true;
      document.body.appendChild(script2);
    };

    // Cleanup scripts on unmount
    return () => {
      if (script1.parentNode) document.body.removeChild(script1);
      if (script2 && script2.parentNode) document.body.removeChild(script2);
    };
  }, []);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#000000ff",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        position: "relative",
      }}
    >
      {/* Bot chat container in bottom-right */}
      <div
        id="webchat"
        style={{
          position: "relative",
          width: 400,
          minHeight: 500,
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      />
      {/* Arrows and label in bottom-right, pointing to chat */}
      <div
        style={{
          position: "absolute",
          bottom: 90,
          right: 150, // moved further right
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "red",
            textShadow: "0 2px 8px #000",
          }}
        >
          ↘↘↘
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 22,
            color: "red",
            fontWeight: "bold",
            textShadow: "0 2px 8px #000",
          }}
        >
          Chat is here
        </div>
      </div>
    </div>
  );
}

export default Harry;


