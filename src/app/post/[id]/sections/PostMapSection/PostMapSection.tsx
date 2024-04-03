import * as S from "./PostMapSection.styles";

import { Button } from "@/components";
import MasilMap from "@/components/MasilMap/MasilMap";
import { Center } from "@/components/icons";
import { GeoPosition } from "@/types/OriginDataType";
import { PostDetailResponse } from "@/types/Response/Post";

interface PostMapSectionProps {
  postData: PostDetailResponse;
  currentPinIndex: number;
  mapCenter: GeoPosition;
  handlePinIndex: (pinIndex: number) => void;
  handleClickCenter: () => void;
}

const PostMapSection = ({
  postData,
  mapCenter,
  currentPinIndex,
  handlePinIndex,
  handleClickCenter,
}: PostMapSectionProps) => {
  return (
    <S.MapContainer>
      <MasilMap
        center={mapCenter}
        path={postData.path}
        pins={postData.pins}
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
