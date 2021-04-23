import 'bulma/css/bulma.min.css';
import useFetch from './useFetch';
import MemeList from './MemeList';
import Footer from './Footer';

export default function Home() {
    const {data: data, isPending, error} = useFetch('https://cataas.com/cat/gif?json=true');

    return (
        <>
            <section className="section pt-6 pb-5">
                <div className="columns is-centered">
                    <div className="column is-full-tablet is-half-desktop">
                        <h1 className="title">
                            Welcome to <strong>Ngemim</strong>!
                        </h1>
                        <p className="subtitle">
                            Memes boost mood 🚀
                        </p>
                    </div>
                </div>
            </section>

            <section className="section py-0">
                <div className="columns is-centered">
                    <div className="column is-full-tablet is-half-desktop">
                        {error && <div>{error}</div>}
                        {isPending && <div>Loading...</div>}
                        {data && <MemeList data={data} />}
                        
                        <p className="mt-5 has-text-centered">
                            <button 
                                className="button is-align-self-center"
                                onClick={() => window.location.reload()}
                            >
                                Show another ...
                            </button>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

/* 
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
*/