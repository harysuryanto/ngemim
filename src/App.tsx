import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <>
      {/* Header */}
      <section className="section pt-6 pb-5">
        <div className="columns is-centered">
            <div className="column is-full-tablet is-half-desktop">
                <h1 className="title">
                    Ngemim
                </h1>
                <p className="subtitle">
                    powers up your mood 🔥
                </p>
            </div>
        </div>
      </section>
    
      {/* Body, contains main content (feed) */}
      <Home />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
