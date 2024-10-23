
const NoResult = ({data}) => {
  return (
    <div className='search-list'>
        <h3 style = {{textAlign: 'center'}}> No search results found for {data}</h3>
    </div>
  )
};

export default NoResult;
