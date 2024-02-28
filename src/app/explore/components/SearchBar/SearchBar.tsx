"use client";

import React from "react";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormWatch } from "react-hook-form";
import tw from "twin.macro";
import styled from "styled-components";

import { Input } from "@/components";
import { Cross, Search } from "@/components/icons";
import useTheme from "@/lib/hooks/useTheme";
import { NAV_HEIGHT, Z_INDEX } from "@/styles/theme";

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
        <label
          className="hidden"
          htmlFor={id}
        >
          Search
        </label>
        <Input
          register={register("keyword", {
            required: "Keyword is required",
          })}
          id={id}
          type="text"
          style={{
            backgroundColor: theme?.container_color,
            padding: "1.5rem 3rem",
            boxShadow: `0px 2px 7.8px 0px ${theme?.transparent_30}`,
          }}
          placeholder="지도 범위 내 검색 결과 키워드로 찾기."
          required={false}
          // onFocus={(e) => handleFocus(e)}
          // onBlur={(e) => handleBlur(e)}
        />
        <S.SearchIconWrapper>
          <Search className="h-6 w-6" />
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
