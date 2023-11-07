import { json, useLoaderData } from 'react-router-dom';
import Header from '../components/UI/Header/Header';
import Pagination from '../components/Pagination/Pagination';
import useDataPage from '../components/hooks/useDataPage';
import DataContainer from '../components/DataContainer/DataContainer';

const ApiPage = () => {
  const apiData = useLoaderData();
  const { newData, dataPerPage } = useDataPage(apiData);

  const rowValues = Array.from(
    new Set(apiData.map((item) => Object.keys(item)).flat())
  );

  return (
    <>
      <Header />
      <DataContainer dataPerPage={dataPerPage} rowValues={rowValues} />
      <Pagination data={newData} />
    </>
  );
};
export default ApiPage;

export const loader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    return json({ message: 'Something went wrong' }, { status: 404 });
  } else {
    const data = await response.json();
    return data;
  }
};
