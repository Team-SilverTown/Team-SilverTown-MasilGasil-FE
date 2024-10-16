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

import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";
import { useUI } from "@/components/uiContext/UiContext";
import { postPostCreate } from "@/lib/api/Post/client";
import { POST_KEY } from "@/lib/api/queryKeys";
import useImageUpload from "@/lib/hooks/useImageUpload";
import calculatePathCenter from "@/lib/utils/calculatePathCenter";
import checkErrorCode from "@/lib/utils/checkErrorCode";
import { GeoPosition } from "@/types/OriginDataType";
import { PostCreateRequest } from "@/types/Request";
import { useMutation } from "@tanstack/react-query";

import {
  POST_CREATE_DEFAULT_REQUEST_VALUE,
  POST_CREATE_REDUCER_ACTION,
} from "../PostCreate.constants";
import {
  HandleClickPin,
  HandleCompleteStepOne,
  HandleRemovePin,
  PostCreatePageStep,
} from "../PostCreate.types";
import postCreateReducer from "./reducer/PostCreateReducer";

import { useRouter } from "next/navigation";

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
  handleCreatePost: () => void;
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
  handleCreatePost: () => {},
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
  const imageMutation = useImageUpload();
  const postMutation = useMutation({
    mutationKey: [POST_KEY.POST_CREATE_POST],
    mutationFn: (postData: PostCreateRequest) => postPostCreate({ postData }),
  });

  const router = useRouter();

  useEffect(() => {
    dispatch({ type: POST_CREATE_REDUCER_ACTION.INIT, payload: { defaultData } });
  }, []);

  /**
   * @function handleCompleteStepOne
   *
   * @summary Step 1 완료시 title, content, isPublic 값을 postData에 갱신시켜줍니다.
   */
  const handleCompleteStepOne: HandleCompleteStepOne = (newData) => {
    dispatch({ type: POST_CREATE_REDUCER_ACTION.COMPLETE_STEP_ONE, payload: newData });
  };

  /**
   * @function handleClickPin
   *
   * @summary Pin 클릭시 여러 동작을 수행합니다.
   * 1. 맵의 센터를 현재 선택한 Pin의 위치로 변경합니다.
   * 2. Pin 수정 모달을 제공합니다.
   */
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

  /**
   * @function handleRemovePin
   *
   * @summary 선택한 Pin을 제거합니다
   */
  const handleRemovePin: HandleRemovePin = (pinIndex: number) => {
    dispatch({ type: POST_CREATE_REDUCER_ACTION.PIN_REMOVE, payload: { pinIndex } });
  };

  /**
   * @function handleClickCenterButton
   *
   * @summary Pin 클릭시 혹은 변경된 Map의 Center위치를 다시 경로의 중간 지점으로 변경합니다.
   */
  const handleClickCenterButton = () => {
    setMapCenter(pathCenter);
    setIsOutCenter(false);
  };

  /**
   * @function handleCreatePost
   *
   * @summary thumbnail의 존재 여부에 따라 uploadPost 함수를 실행하여 Post를 생성합니다.
   */
  const handleCreatePost = () => {
    if (thumbnail) {
      imageMutation.mutate(thumbnail, {
        onSuccess: ({ imageUrl }) => {
          const newPostData: PostCreateRequest = {
            ...postData,
            thumbnailUrl: imageUrl,
          };

          uploadPost(newPostData);
        },
      });

      return;
    }

    uploadPost(postData);
  };

  /**
   * @function uploadPost
   *
   * @summary 전달받은 newPost 데이터를 통해 새로운 Post를 생성합니다.
   */
  const uploadPost = (newPost: PostCreateRequest) => {
    setModalView("CONFIRM_VIEW");

    openModal({
      message: "산책로를 공유하시겠나요?",
      acceptButtonText: "등록",
      onClickAccept: () => {
        postMutation.mutate(newPost, {
          onSuccess: ({ id }) => {
            router.push(`/post/${id}`);

            setModalView("DONE_VIEW");
            openModal({ message: "산책로가 등록되었습니다!" });
          },

          onError: ({ message }) => {
            setModalView("ANIMATION_ALERT_VIEW");
            openModal({
              message: checkErrorCode({
                errorCode: message,
                defaultMessage: `산책로 저장에 오류가 발생하였습니다.<br>잠시 후 다시 시도해주세요.`,
              }),
            });
          },
        });
      },
    });
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
        handleCreatePost,
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
