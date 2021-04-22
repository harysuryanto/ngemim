export default function MemeList(props: any) {
    const data = props.data;

    return (
        <div className="container">
            <div className="content">
                <div className="card">
                    {/* <div className="card-header">
                        <p className="card-header-title">{data.id}</p>
                    </div> */}
                    <div className="card-image">
                        <figure className="image m-0">
                            <img src={'https://cataas.com' + data.url} alt="name" />
                        </figure>
                    </div>
                    <div className="card-content">
                        {/* <div className="title">name</div> */}
                        <div className="content">
                            {/* Lorem ipsum dolor sit amet, consectetur. */}
                            <p>Tags: {data.tags}</p>
                        </div>
                    </div>
                    {/* <div className="card-footer">
                        <p>bottomText</p>
                    </div> */}
                </div>
                
                {/* {data.map((meme:any) => (
                    <div className="card" key={meme.image}>
                        <div className="card-header">
                            <p className="card-header-title">{data.t}</p>
                        </div>
                        <div className="card-image">
                            <figure className="image is-half">
                                <img src="https://imgflip.com/s/meme/Good-Guy-Greg.jpg" alt="name" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="title">name</div>
                            <div className="content">
                                Lorem ipsum dolor sit amet, consectetur.
                                <a href="#">#tag</a>
                            </div>
                        </div>
                        <div className="card-footer">
                            <p>bottomText</p>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>

        
    );
}