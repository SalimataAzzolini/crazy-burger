import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../../../../theme";
import { fadeInFromRight } from "../../../../../theme/animation";

ImagePreview.propTypes = {
  imageSource: PropTypes.string,
  title: PropTypes.string,
};

export default function ImagePreview({ imageSource, title }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? (
        <img src={imageSource} alt={title} />
      ) : (
        <div className="empty-image">Aucune Image</div>
      )}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInFromRight} ${theme.animations.speed.slow} ease-out;

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    object-position: center;
  }

  .empty-image {
    /* background-color: green; */
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }
`;
