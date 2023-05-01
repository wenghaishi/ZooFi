const PriceCard = (props) => {
  return (
    <div className="flex flex-col bg-white w-full h-32 rounded-lg justify-evenly items-center">
      <h1>{props.coinName}</h1>
      <h1>${props.coinPrice}</h1>
    </div>
  );
};

export default PriceCard;
