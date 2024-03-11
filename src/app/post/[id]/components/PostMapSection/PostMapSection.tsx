import { PostsDataType } from "../../Post.constants";
import { GeoPosition } from "@/types/OriginDataType";

import MasilMap from "@/components/MasilMap/MasilMap";
import { Button } from "@/components";
import { Center } from "@/components/icons";

import * as S from "./PostMapSection.styles";

interface PostMapSectionProps {
  postsData: PostsDataType;
  currentPinIndex: number;
  mapCenter: GeoPosition;
  handlePinIndex: (pinIndex: number) => void;
  handleClickCenter: () => void;
}

const PostMapSection = ({
  postsData,
  mapCenter,
  currentPinIndex,
  handlePinIndex,
  handleClickCenter,
}: PostMapSectionProps) => {
  return (
    <S.MapContainer>
      <MasilMap
        center={mapCenter}
        path={postsData.path}
        pins={postsData.pins}
        onClickPin={handlePinIndex}
        selectedPinIndex={currentPinIndex}
        isShowCenterMarker={false}
      />
      <S.ButtonWrapper>
        <Button
          variant="neumorp"
          useRipple={true}
          style={{ padding: "1rem" }}
          onClickHandler={handleClickCenter}
        >
          <Center />
        </Button>
      </S.ButtonWrapper>
    </S.MapContainer>
  );
};

export default PostMapSection;
