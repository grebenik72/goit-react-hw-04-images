import { SearchForm, SearchFormButton, SearchFormInput, SearchbarStyle } from "./Searchbar.styled";

export const Searchbar = ({ onSubmitSearchBar }) => (
  <SearchbarStyle>
    <SearchForm onSubmit={onSubmitSearchBar}>
      <SearchFormButton>
        <span>Search</span>
      </SearchFormButton>

      <SearchFormInput
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </SearchForm>
  </SearchbarStyle>
);

