

const FoodCard = ({ item }) => {
    const { image, price, recipe, name } = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 p-3 bg-slate-900 text-white">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;