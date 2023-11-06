import { useSelector } from 'react-redux';
import DataContainer from '../DataContainer/DataContainer';
import Header from '../UI/Header/Header';
import Pagination from '../Pagination/Pagination';

const FormLayout = () => {
  const { filterData } = useSelector((state) => state.dataFilter);

  const data = filterData.map((item, id) => {
    const page = Math.floor(id / 7) + 1;
    return { ...item, page };
  });

  return (
    <>
      <Header />
      <DataContainer data={data} />
      <Pagination data={data} />
    </>
  );
};
export default FormLayout;
