export default function MemeList(props: any) {
    const meme = props.meme;

    return (
        <div className="container">
            <div className="content">
                <div className="card">
                    <div className="card-image">
                        <figure className="image m-0">
                            <img src={'https://cataas.com' + meme.url} alt="name" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <p>#{meme.tags.join(' #')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}