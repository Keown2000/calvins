function MenuCard({ item }) {
  return (
    <div className="menu-card">

      <img 
        src={item.image}
        alt={item.name}
      />

      <div className="menu-info">

        <h3>
          {item.name}
        </h3>

        <p>
          {item.description}
        </p>

        <span>
          {item.price}
        </span>

      </div>

    </div>
  );
}

export default MenuCard;

