function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
         <div>
           <div className="items">
            {items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className="cartItemImg"
                ></div>
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price}</b>
                </div>
                <img
                  onClick={() => onRemove(obj.id)}
                  className="removeBtn"
                  src="/img/btn-remove.svg"
                  alt="Remove"
                />
              </div>
            ))}
          </div>
          <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>64 995 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>2074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/strela.svg" alt="Arrow" />
          </button>
        </div>
         </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.svg"
              alt="Empty"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-q">Вы ничего не добавили в корзину</p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/strela.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}

        
      </div>
    </div>
  );
}

export default Drawer;
