const DataValue = ({ item }) => {
  return (
    <ul className="data-container__row data-container__row--data">
      {Object.values(item).map((item, index) => (
        <li
          key={index}
          className="data-container__value data-container__value--item"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
export default DataValue;
