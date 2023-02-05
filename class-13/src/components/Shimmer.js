const Shimmer = () => {
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" />
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurant-list" data-testid={'shimmer'}>
                {Array(12)
                    .fill(0)
                    .map((value, index) => (
                        <ShimmerCards key={index} />
                    ))}
            </div>
        </>
    );
};

const ShimmerCards = () => {
    return (
        <div className="shimmer-card shimmer">
            <div className="shimmer-image"></div>
            <h2 className="shimmer-name"></h2>
            <h3 className="shimmer-cuisines"></h3>
            <h4 className="shimmer-ratings"></h4>
        </div>
    );
};

export default Shimmer;
