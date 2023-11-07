import { json, useLoaderData, useNavigation } from 'react-router-dom';
import Header from '../components/UI/Header/Header';
import Pagination from '../components/Pagination/Pagination';
import useDataPage from '../components/hooks/useDataPage';
import DataContainer from '../components/DataContainer/DataContainer';
import { Suspense } from 'react';

const ApiPage = () => {
  const apiData = useLoaderData();
  const navigation = useNavigation();
  const { newData, dataPerPage } = useDataPage(apiData);

  const rowValues = Array.from(
    new Set(apiData.map((item) => Object.keys(item)).flat())
  );

  console.log(navigation);

  return (
    <>
      <Header />
      {/* <Suspense
        fallback={
          <p style={{ textAlign: 'center', color: 'white' }}>Loading...</p>
        }
      > */}
      <DataContainer dataPerPage={dataPerPage} rowValues={rowValues} />
      <Pagination data={newData} />
      {/* </Suspense> */}
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
