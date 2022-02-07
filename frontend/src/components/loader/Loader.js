import "./Loader.css";

const Loader = () => {
    return (
        <div className="loader">
            <div className="spinner-border">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loader;