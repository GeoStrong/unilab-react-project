import { json } from 'react-router-dom';
import Header from '../UI/Header/Header';

const ApiLayout = () => {
  return (
    <>
      <Header />
    </>
  );
};
export default ApiLayout;

export const loader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    return json({ message: 'Something went wrong' }, { status: 500 });
  } else {
    const data = await response.json();
    console.log(data);
    return data;
  }
};
