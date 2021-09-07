import { ICity } from 'app/components/SearchBar/i-city';
import cities from 'cities.json';
import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { Key } from 'ts-key-enum';

const INPUT_ID = 'autocomplete-input';

export interface ISearchBarProps {
  onSubmit?: (city: ICity) => void;
}

export default function SearchBar({ onSubmit }: ISearchBarProps) {
  const inputRef = useRef<HTMLInputElement>();
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
    setSearchValue(searchResults[highlightedIndex]?.name);
    inputRef.current.value = searchResults[highlightedIndex]?.name || '';
    setSearchResults([]);
    (event.target as HTMLInputElement).blur();
  };

  const didHoverSearchResult = (index: number) => {
    setHighlightedIndex(index);
    console.log(index);
  };

  return (
    <SearchBarContainer>
      <SearchContainer htmlFor={INPUT_ID}>
        <StyledInput
          ref={inputRef}
          id={INPUT_ID}
          type="text"
          placeholder="Enter a city"
          onInput={didChangeInput}
          onKeyDown={didKeyPressInput}
          autoComplete="off"
        />
        {searchResults.length !== 0 && (
          <Dropdown>
            {searchResults.map((result, resultIndex) => (
              <DropdownSearchResult
                type="button"
                onClick={didClickSearch}
                onMouseOver={() => didHoverSearchResult(resultIndex)}
                key={`${result.name}${result.lat}${result.lng}`}
                highlighted={resultIndex === highlightedIndex}
              >
                <b>{result.name.slice(0, searchValue.length)}</b>
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
  border-bottom-left-radius: 0.1875rem;
  border-bottom-right-radius: 0.1875rem;
  box-sizing: border-box;
  margin: 0 2.5rem;
  position: absolute;
  top: 5.1875rem;
  white-space: nowrap;
  width: calc(100% - 5rem);
`;

const DropdownSearchResult = styled.button<{ highlighted: boolean }>`
  background: ${p => (p.highlighted ? '#eceff1' : 'transparent')};
  border: 0;
  display: flex;
  font-family: 'Raleway', sans-serif;
  overflow: hidden;
  padding: 0.625rem 1.25rem;
  text-overflow: ellipsis;
  width: 100%;
`;

const SearchContainer = styled.label`
  display: flex;
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
  color: #007c91;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 1.25rem 2.5rem;

  :hover {
    background: #f5f5f5;
  }

  :active {
    background: #eee;
  }
`;

const StyledInput = styled.input`
  background: transparent;
  border: 0.1875rem solid #fff;
  border-radius: 0.1875rem;
  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-size: 2rem;
  font-weight: 300;
  margin: 0 2.5rem 2.5rem;
  outline: 0;
  padding: 1.25rem 0;
  text-align: center;
  width: 100%;

  :focus {
    background: #006978;
  }

  ::placeholder {
    color: #fff;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;
