"use client";

import React from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

import { Input } from "@/components";
import { Cross, Search } from "@/components/icons";
import useTheme from "@/lib/hooks/useTheme";

import { SearchProps } from "../../Explore.controller";
import * as S from "./SearchBar.styles";

interface SearchBarProps {
  id?: string;
  register: UseFormRegister<SearchProps>;
  watch: UseFormWatch<SearchProps>;
  clearHandler: Function;

  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({
  id = "search",
  register,
  watch,
  clearHandler,

  onChangeHandler,
}: SearchBarProps) => {
  const theme = useTheme();

  return (
    <S.SearchBarContainer>
      <S.SearchForm>
        <Input
          register={register("keyword")}
          id={id}
          type="text"
          style={{
            backgroundColor: theme?.container_color,
            padding: "1.5rem 3rem",
            boxShadow: `0px 2px 7.8px 0px ${theme?.transparent_30}`,
          }}
          placeholder="지도 범위 내 검색 결과 키워드로 찾기"
          onChange={onChangeHandler}
        />
        <S.SearchIconWrapper>
          <label htmlFor={id}>
            <Search className="h-6 w-6" />
          </label>
        </S.SearchIconWrapper>
        {watch("keyword") && (
          <S.CrossIconWrapper>
            <S.CrossButton
              onClick={() => clearHandler()}
              type="button"
            >
              <Cross
                className="h-4 w-4"
                strokeWidth={2}
                stroke={theme?.white}
              />
            </S.CrossButton>
          </S.CrossIconWrapper>
        )}
      </S.SearchForm>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
