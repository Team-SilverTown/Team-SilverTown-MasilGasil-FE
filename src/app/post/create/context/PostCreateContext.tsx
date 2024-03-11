import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import {
  HandleClickPin,
  HandleCompleteStepOne,
  HandleRemovePin,
  PostCreatePageStep,
} from "../PostCreate.types";
import postCreateReducer from "./reducer/PostCreateReducer";
import {
  POST_CREATE_DEFAULT_REQUEST_VALUE,
  POST_CREATE_REDUCER_ACTION,
} from "../PostCreate.constants";
import { PostCreateRequest } from "@/types/Request";
import { useUI } from "@/components/uiContext/UiContext";
import { GeoPosition } from "@/types/OriginDataType";
import calculatePathCenter from "@/lib/utils/calculatePathCenter";
import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";

interface PostCreateContextProviderProps {
  defaultData: PostCreateRequest;
  children: React.ReactNode;
}

interface PostCreateContextValues {
  mapCenter: GeoPosition;
  postData: PostCreateRequest;
  pageStep: PostCreatePageStep;
  currentPinIndex: number;
  defaultData: PostCreateRequest;
  thumbnail: File | null;
  setThumbnail: Dispatch<SetStateAction<File | null>>;
  setPageStep: Dispatch<SetStateAction<PostCreatePageStep>>;
  handleCompleteStepOne: HandleCompleteStepOne;
  handleClickPin: HandleClickPin;
  handleRemovePin: HandleRemovePin;
  handleClickCenterButton: () => void;
}

const PostCreateContext = createContext<PostCreateContextValues>({
  mapCenter: { lat: 0, lng: 0 },
  postData: POST_CREATE_DEFAULT_REQUEST_VALUE,
  pageStep: "POST_CREATE_TEXT_EDIT",
  currentPinIndex: -1,
  defaultData: POST_CREATE_DEFAULT_REQUEST_VALUE,
  thumbnail: null,
  setThumbnail: () => {},
  setPageStep: () => {},
  handleCompleteStepOne: () => {},
  handleClickPin: () => {},
  handleRemovePin: () => {},
  handleClickCenterButton: () => {},
});

export const PostCreateContextProvider = ({
  children,
  defaultData,
}: PostCreateContextProviderProps) => {
  const [postData, dispatch] = useReducer(postCreateReducer, defaultData);

  const [pageStep, setPageStep] = useState<PostCreatePageStep>("POST_CREATE_TEXT_EDIT");
  const [currentPinIndex, setCurrentPinIndex] = useState(-1);
  const [mapCenter, setMapCenter] = useState<GeoPosition>(calculatePathCenter(defaultData.path));

  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const { setModalView, openModal, closeModal } = useUI();
  const { setIsOutCenter } = useMasilMapStore();

  const pathCenter = useMemo(() => calculatePathCenter(defaultData.path), [defaultData.path]);

  useEffect(() => {
    dispatch({ type: POST_CREATE_REDUCER_ACTION.INIT, payload: { defaultData } });
  }, []);

  const handleCompleteStepOne: HandleCompleteStepOne = (newData) => {
    dispatch({ type: POST_CREATE_REDUCER_ACTION.COMPLETE_STEP_ONE, payload: newData });
  };

  const handleClickPin: HandleClickPin = (pinIndex) => {
    setCurrentPinIndex(pinIndex);
    setModalView("PIN_EDIT_VIEW");
    setMapCenter(postData.pins[pinIndex].point);
    setIsOutCenter(false);

    openModal({
      onClickAccept: (imageUrl: string | null, pinContent: string | null) => {
        dispatch({
          type: POST_CREATE_REDUCER_ACTION.PIN_UPDATE,
          payload: {
            pinIndex,
            imageUrl,
            pinContent,
          },
        });
        setCurrentPinIndex(-1);
        closeModal();
      },

      onClickRemove: (pinIndex: number) => {
        handleRemovePin(pinIndex);
        closeModal();
      },

      pinIndex,
      pin: postData.pins[pinIndex],
    });
  };

  const handleRemovePin: HandleRemovePin = (pinIndex: number) => {
    dispatch({ type: POST_CREATE_REDUCER_ACTION.PIN_REMOVE, payload: { pinIndex } });
  };

  const handleClickCenterButton = () => {
    setMapCenter(pathCenter);
    setIsOutCenter(false);
  };

  return (
    <PostCreateContext.Provider
      value={{
        mapCenter,
        defaultData,
        pageStep,
        setPageStep,
        postData,
        currentPinIndex,
        thumbnail,
        setThumbnail,
        handleCompleteStepOne,
        handleClickPin,
        handleRemovePin,
        handleClickCenterButton,
      }}
    >
      {children}
    </PostCreateContext.Provider>
  );
};

const usePostCreateContext = () => {
  const contextValue = useContext(PostCreateContext);
  return contextValue;
};

export default usePostCreateContext;
