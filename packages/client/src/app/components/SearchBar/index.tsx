import { ICity } from 'app/components/SearchBar/i-city';
import cities from 'cities.json';
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Key } from 'ts-key-enum';

const INPUT_ID = 'autocomplete-input';

export interface ISearchBarProps {
  onSubmit?: (city: ICity) => void;
}

export default function SearchBar({ onSubmit }: ISearchBarProps) {
  const [searchResults, setSearchResults] = useState<Array<ICity>>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchValue, setSearchValue] = useState('');

  const didChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value.trim().toLowerCase().replaceAll(/\s/g, '');

    const filteredCities = (cities as Array<ICity>).filter(({ name }) =>
      name.trim().toLowerCase().replaceAll(/\s/g, '').startsWith(inputValue),
    );

    setSearchResults(inputValue.length === 0 ? [] : filteredCities.slice(0, 5));
    setSearchValue(input.value);
  };

  const didKeyPressInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case Key.ArrowDown:
        event.preventDefault();

        setHighlightedIndex(
          highlightedIndex === searchResults.length - 1
            ? 0
            : highlightedIndex + 1,
        );
        break;

      case Key.ArrowUp:
        event.preventDefault();

        setHighlightedIndex(
          highlightedIndex === 0
            ? searchResults.length - 1
            : highlightedIndex - 1,
        );
        break;

      case Key.Enter:
        didClickSearch(event as any);
        break;
    }
  };

  const didClickSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSubmit?.(
      highlightedIndex === -1
        ? ({ name: (event.target as HTMLInputElement).value } as ICity)
        : searchResults[highlightedIndex],
    );
    setSearchValue(searchResults[highlightedIndex].name);
    setSearchResults([]);
    (event.target as HTMLInputElement).blur();
  };

  return (
    <SearchBarContainer>
      <SearchContainer htmlFor={INPUT_ID}>
        <StyledInput
          id={INPUT_ID}
          type="text"
          placeholder="Enter a city"
          onInput={didChangeInput}
          onKeyDown={didKeyPressInput}
          autoComplete="off"
          value={searchValue}
        />
        {searchResults.length !== 0 && (
          <Dropdown>
            {searchResults.map((result, resultIndex) => (
              <DropdownSearchResult
                key={`${result.name}${result.lat}${result.lng}`}
                highlighted={resultIndex === highlightedIndex}
              >
                <b>{`${searchValue}`}</b>
                {`${result.name.slice(searchValue.length)}, ${result.country}`}
              </DropdownSearchResult>
            ))}
          </Dropdown>
        )}
      </SearchContainer>

      <ButtonContainer>
        <SearchButton type="button" onClick={didClickSearch}>
          GET WEATHER
        </SearchButton>
      </ButtonContainer>
    </SearchBarContainer>
  );
}

const Dropdown = styled.div`
  background: #fff;
  border: 0.0625rem solid #bdbdbd;
  box-sizing: border-box;
  position: absolute;
  white-space: nowrap;
  width: 100%;
`;

const DropdownSearchResult = styled.div<{ highlighted: boolean }>`
  background: ${p => (p.highlighted ? '#42a5f5' : 'transparent')};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SearchContainer = styled.label`
  position: relative;
`;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
  width: 100%;
`;

const SearchButton = styled.button`
  background: #fff;
  border: 0;
  border-radius: 0.1875rem;
  color: #00acc1;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 1.25rem 2.5rem;
`;

const StyledInput = styled.input`
  background: transparent;
  border: 0.1875rem solid #fff;
  border-radius: 0.1875rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  margin: 0 2.5rem 2.5rem;
  padding: 1.25rem 0;
  text-align: center;
  width: 100%;

  ::placeholder {
    color: #fff;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;
