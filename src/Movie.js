import { useState, useEffect } from "react";

function Movie() {
    const [loading, setLoading] = useState(true);
    const [photos, setPhotos] = useState([]);
    const getPhotos = async () => {
        const json = await (
            await fetch("https://jsonplaceholder.typicode.com/photos")
        ).json();

        setPhotos(json);
        setLoading(false);
    };

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <div>
                    {photos.map((photo, idx) => (
                        <div key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                            <h2>
                                <a href={photo.url}>{photo.title}</a>
                            </h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Movie;
