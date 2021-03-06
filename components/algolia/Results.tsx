import { connectStateResults } from 'react-instantsearch-core';

const Results: React.FC<any> = ({ searchState, searchResults, children }) => {
  return searchResults && searchResults.nbHits ? (
    children
  ) : searchState.query ? (
    <div className="flex flex-col items-center justify-center h-36">
      <h1 className="mt-4 font-medium text-base text-gray-600">
        No result for &quot;{searchState.query}&quot;.
      </h1>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-36">
      <h1 className="mt-4 font-medium text-base text-gray-600">
        No product to display.
      </h1>
    </div>
  );
};
const CustomResults = connectStateResults(Results);

export default CustomResults;
