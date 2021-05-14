import 'bulma/css/bulma.min.css';
import { useEffect } from 'react';
import MemeList from './MemeList';
import { useState } from 'react';

export default function Home() {
    console.log('🔃 Rendered');

    const buttonStatus = [
        'button is-align-self-center is-loading', // means button is disabled
        'button is-align-self-center' // means button is enabled
    ];

    // Set button to disabled at startup
    const [showMeme, setShowMeme] = useState(false);

    // Default button status is enabled
    const [buttonClassName, setButtonClassName] = useState(buttonStatus[1]);

    const setButtonEnabled = () => {
        setButtonClassName(buttonStatus[1]);
    }

    const setButtonDisabled = () => {
        setButtonClassName(buttonStatus[0]);
    }

    const handleRefreshClick = () => {
        setShowMeme(false);
        setButtonDisabled();
    }

    useEffect(() => {
        // Set button to enabled every render
        setShowMeme(true);

        // Give button time to get back from disabled to enabled
        setTimeout(() => {
            setButtonEnabled();
        }, 1000);

        // console.log('showMeme:', showMeme);

        // eslint-disable-next-line
    }, [showMeme]);

    return (
        <section className="section py-0">
            <div className="columns is-centered">
                <div className="column is-full-tablet is-half-desktop">
                    {showMeme ? <MemeList /> : null}

                    <p className="mt-5 has-text-centered">
                        <button
                            className={buttonClassName}
                            onClick={handleRefreshClick}
                        >
                            Show more
                        </button>
                    </p>
                </div>
            </div>
        </section>
    );
}