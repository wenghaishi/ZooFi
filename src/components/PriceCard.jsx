const PriceCard = (props) => {
  return (
    <div className="flex flex-col">
      <h1>{props.coinName}</h1>
      <h1>${props.coinPrice}</h1>
    </div>
  );
};

export default PriceCard;
