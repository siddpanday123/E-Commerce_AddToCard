
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, } from 'react-redux';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchBarStyle';
import { updateSearchInput } from '../../Redux/Slices/SearchKeySlice';
const SearchBar = () => {
  const dispatch = useDispatch();
  const SearchWord = (e)=>{
    dispatch(updateSearchInput(e.target.value));
  }
  return (
    <Search>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      onChange={SearchWord}
    />
  </Search>
  )
}

export default SearchBar