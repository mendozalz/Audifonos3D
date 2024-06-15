import ContenidoHtml from "./components/ContenidoHtml";
import Scene from "./components/Scene";

function App() {
  const isMobile = window.innerWidth < 600

  return (
    <div id="app" className="noScroll">
      {isMobile ? (
        <>
          <small style={{ textAlign: "center", fontSize: 16, padding: 15 }}>
            Para disfrutar de esta experiencia debes visualizarlo en un dispositivo de escritorio ya que maneja distintos tipos de movimiento de cámara con el evento de scroll que no son compatibles con dispositivos móviles en la actualidad. 😔
          </small>
        </>
      ) : (
        <>
          <Scene />
          <ContenidoHtml />
        </>
      )}
    </div>
  );
}

export default App;
