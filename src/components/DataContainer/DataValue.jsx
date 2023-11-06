const DataValue = ({ item }) => {
  return (
    <ul
      key={item.personId}
      className="data-container__row data-container__row--data"
    >
      <li className="data-container__value data-container__value--item">
        {item.name}
      </li>
      <li className="data-container__value data-container__value--item">
        {item.status}
      </li>
      <li className="data-container__value data-container__value--item">
        {item.gender}
      </li>
      <li className="data-container__value data-container__value--item">
        {item.points}
      </li>
      <li className="data-container__value data-container__value--item">
        {item.personId}
      </li>
      <li className="data-container__value data-container__value--item">
        {item.mail}
      </li>
      <li className="data-container__value data-container__value--item">
        {item.phone}
      </li>
      <li className="data-container__value data-container__value--item">
        {item.address}
      </li>
      <li className="data-container__value data-container__value--item">
        {item.birthDate}
      </li>
    </ul>
  );
};
export default DataValue;
