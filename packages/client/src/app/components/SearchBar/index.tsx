import cities from "cities.json";
import React, { useState } from "react";
import styled from "styled-components/macro";
import { Key } from "ts-key-enum";
import { ICity } from "./i-city";

const INPUT_ID = "autocomplete-input";

export interface ISearchBarProps {
  onSubmit?: (city: ICity) => void;
}

export default function SearchBar({ onSubmit }: ISearchBarProps) {
  const [searchResults, setSearchResults] = useState<Array<ICity>>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchValue, setSearchValue] = useState("");

  const didChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value.trim().toLowerCase().replaceAll(/\s/g, "");

    const filteredCities = (cities as Array<ICity>).filter(({ name }) =>
      name.trim().toLowerCase().replaceAll(/\s/g, "").startsWith(inputValue)
    );

    setSearchResults(inputValue.length === 0 ? [] : filteredCities.slice(0, 5));
    setSearchValue(inputValue);
  };

  const didKeyPressInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case Key.ArrowDown:
        event.preventDefault();

        setHighlightedIndex(
          highlightedIndex === searchResults.length - 1
            ? 0
            : highlightedIndex + 1
        );
        break;

      case Key.ArrowUp:
        event.preventDefault();

        setHighlightedIndex(
          highlightedIndex === 0
            ? searchResults.length - 1
            : highlightedIndex - 1
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
        : searchResults[highlightedIndex]
    );
    setSearchValue(searchResults[highlightedIndex].name);
    setSearchResults([]);
    (event.target as HTMLInputElement).blur();
  };

  return (
    <StyledNav>
      <SearchContainer htmlFor={INPUT_ID}>
        <input
          id={INPUT_ID}
          type="text"
          placeholder="Search"
          onInput={didChangeInput}
          onKeyDown={didKeyPressInput}
          autoComplete="off"
          value={searchValue}
        >
          {searchResults.length !== 0 && (
            <Dropdown>
              {searchResults.map((result, resultIndex) => (
                <DropdownSearchResult
                  key={`${result.name}${result.lat}${result.lng}`}
                  highlighted={resultIndex === highlightedIndex}
                >
                  {`${result.name}, ${result.country}`}
                </DropdownSearchResult>
              ))}
            </Dropdown>
          )}
        </input>
      </SearchContainer>

      <button type="button" onClick={didClickSearch}>
        Search
      </button>
    </StyledNav>
  );
}

const Dropdown = styled.div`
  background: #fff;
  box-sizing: border-box;
  border: 0.0625rem solid grey;
  position: absolute;
  white-space: nowrap;
  width: 100%;
`;

const DropdownSearchResult = styled.div<{ highlighted: boolean }>`
  background: ${(p) => (p.highlighted ? "#42a5f5" : "transparent")};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SearchContainer = styled.label`
  position: relative;
`;

const StyledNav = styled.nav`
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1.25rem;
`;
