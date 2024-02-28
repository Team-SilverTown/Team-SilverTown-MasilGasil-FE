"use client";

import React from "react";
import { FieldErrors, useForm } from "react-hook-form";

import { TopNavigator } from "@/components/navigators/TopNavigator";

import ExploreView from "./Explore.view";
import { BottomSheetSection, MapSection } from "./sections";
import { SearchBar } from "./components";

export interface SearchProps {
  keyword: string;
}

const ExploreController = () => {
  const { register, handleSubmit, watch, setValue, setFocus } = useForm<SearchProps>({
    mode: "onChange",
  });

  const onSubmit = (data: SearchProps) => {
    console.log(data);
  };
  const onInvaild = (errors: FieldErrors) => {
    console.log(errors);
  };

  const searchClearHandler = () => {
    setValue("keyword", "");
    setFocus("keyword");
  };

  return (
    <>
      <TopNavigator
        rightChildren={
          <SearchBar
            register={register}
            handleSubmit={handleSubmit}
            watch={watch}
            clearHandler={searchClearHandler}
            onSubmit={onSubmit}
            onInvaild={onInvaild}
          />
        }
        rightSectionStyle={{ width: "calc(100%)" }}
      />
      <ExploreView>
        <MapSection />
        <BottomSheetSection />
      </ExploreView>
    </>
  );
};

export default ExploreController;
