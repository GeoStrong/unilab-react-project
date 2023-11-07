import { useSelector } from 'react-redux';

const useDataPage = (data) => {
  const { activePage } = useSelector((state) => state.dataFilter);
  const newData = data.map((item, id) => {
    const page = Math.floor(id / 7) + 1;
    return { ...item, page };
  });

  const dataPerPage = newData.filter((item) => item.page === activePage);
  return { newData, dataPerPage };
};
export default useDataPage;
