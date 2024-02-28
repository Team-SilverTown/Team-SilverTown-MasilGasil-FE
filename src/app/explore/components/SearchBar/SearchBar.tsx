"use client";

import React from "react";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormWatch } from "react-hook-form";

import { Input } from "@/components";
import { Cross, Search } from "@/components/icons";
import useTheme from "@/lib/hooks/useTheme";

import { SearchProps } from "../../Explore.controller";
import * as S from "./SearchBar.styles";

interface SearchBarProps {
  id?: string;
  register: UseFormRegister<SearchProps>;
  handleSubmit: UseFormHandleSubmit<SearchProps>;
  watch: UseFormWatch<SearchProps>;
  clearHandler: Function;
  onSubmit: (data: SearchProps) => void;
  onInvaild: (data: FieldErrors) => void;
}

const SearchBar = ({
  id = "search",
  register,
  handleSubmit,
  watch,
  clearHandler,
  onSubmit,
  onInvaild,
}: SearchBarProps) => {
  const theme = useTheme();

  return (
    <S.SearchBarContainer>
      <S.SearchForm onSubmit={handleSubmit(onSubmit, onInvaild)}>
        <Input
          register={register("keyword", {
            required: "Keyword is required",
          })}
          id={id}
          type="text"
          style={{ backgroundColor: theme?.container_color, padding: "1.5rem 3rem" }}
          placeholder="지도 범위 내 키워드로 검색하기."
          required={false}
          // onFocus={(e) => handleFocus(e)}
          // onBlur={(e) => handleBlur(e)}
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