import MemeItem from './MemeItem';
import useFetch from './useFetch';

export default function MemeList() {
    const {data: memeData, isPending, error} = useFetch('https://cataas.com/cat/gif?json=true');

    return (
        <>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {memeData && <MemeItem meme={memeData} />}
        </>
    );
}