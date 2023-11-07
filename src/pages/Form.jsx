import { useSelector } from 'react-redux';
import DataContainer from '../components/DataContainer/DataContainer';
import Header from '../components/UI/Header/Header';
import Pagination from '../components/Pagination/Pagination';
import useDataPage from '../components/hooks/useDataPage';

const FormPage = () => {
  const { filterData } = useSelector((state) => state.dataFilter);
  const { newData, dataPerPage } = useDataPage(filterData);

  const rowValues = [
    'სტუდენტის სახელი და გვარი',
    'სტატუსი',
    'სქესი',
    'ქულები',
    'პირადი ნომერი',
    'მაილი',
    'მობილურის ნომერი',
    'მისამართი',
    'დაბადების თარიღი',
  ];

  return (
    <>
      <Header />
      <DataContainer dataPerPage={dataPerPage} rowValues={rowValues} />
      <Pagination data={newData} />
    </>
  );
};
export default FormPage;
