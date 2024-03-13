"use client";

import React, { useRef } from "react";
import { FieldErrors, useForm } from "react-hook-form";

import { TopNavigator } from "@/components/navigators/TopNavigator";

import ExploreView from "./Explore.view";
import { BottomSheetSection, MapSection } from "./sections";
import { SearchBar } from "./components";
import useExploreModel from "./Explore.model";

export interface SearchProps {
  keyword: string;
}

const ExploreController = () => {
  const { locationData, setLocationData } = useExploreModel();

  const { register, handleSubmit, watch, setValue, setFocus } = useForm<SearchProps>({
    mode: "onChange",
  });

  const onValid = (data: SearchProps) => {
    console.log(data);
  };
  const onInvalid = (errors: FieldErrors) => {
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
            onValid={onValid}
            onInvalid={onInvalid}
          />
        }
        rightSectionStyle={{ width: "calc(100%)" }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ExploreView>
        <MapSection setLocationData={setLocationData} />
        <BottomSheetSection locationData={locationData} />
      </ExploreView>
    </>
  );
};

export default ExploreController;
