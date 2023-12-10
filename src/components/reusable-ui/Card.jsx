import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { TiDelete } from "react-icons/ti";

// import Button from "./Button";
import { theme } from "../../theme";

Card.propTypes = {
  title: PropTypes.string,
  imageSource: PropTypes.string,
  leftDescription: PropTypes.string,
  isModeAdmin: PropTypes.bool,
  onClick: PropTypes.func,
  isHoverable: PropTypes.bool,
  isSelected: PropTypes.bool,
  onDeleteCard: PropTypes.func,
  onAdd: PropTypes.func,
};

export default function Card({
  title,
  imageSource,
  leftDescription,
  isModeAdmin,
  onClick,
  isHoverable,
  isSelected,
  onDeleteCard,
  onAdd,
}) {
  return (
    <CardStyled
      onClick={onClick}
      isHoverable={isHoverable}
      isSelected={isSelected}
      // data-is-hoverable={isHoverable} gestion warning console
      // data-is-selected={isSelected}
    >
      <div className="card">
        {isModeAdmin && (
          <button className="delete-button" aria-label="delete-button">
            <TiDelete className="icon" onClick={onDeleteCard} />
          </button>
        )}
        <div className="image">
          <img src={imageSource} alt={title} />
        </div>
        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{leftDescription}</div>
            <div className="right-description">
              {/* <Button
                className="primary-button"
                label={"Ajouter"}
                onClick={onAdd}
              /> */}
              <button className="primary-button" onClick={onAdd}>
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  ${({ isHoverable }) => isHoverable && hoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  height: 330px;

  .card {
    background: ${theme.colors.white};
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
    position: relative;

    .delete-button {
      /* pointer-events: none; */
      outline: none;
      border: 1px solid red;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: ${theme.colors.primary};
      z-index: 2;
      padding: 0;
      border: none;
      background: none;
      transform: none;
      transition: none;

      .icon {
        height: 100%;
        width: 100%;

        :hover {
          color: ${theme.colors.red};
          border: none;
        }
      }

      :hover {
        border: none;
        color: ${theme.colors.red};
      }
      :active {
        color: ${theme.colors.primary};
      }
    }

    .image {
      pointer-events: none;
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .text-info {
      //pointer-events: none;
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        pointer-events: none;
        margin: auto 0;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: "Amatic SC", cursive;
      }

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
          pointer-events: none;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${theme.fonts.weights.medium};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: ${theme.fonts.weights.medium};
          color: ${theme.colors.primary};
        }

        .right-description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: ${theme.fonts.size.P1};

          /* .primary-button {
            font-size: ${theme.fonts.size.XS};
            cursor: pointer;
            padding: 12px;
          } */
          .primary-button {
            font-size: ${theme.fonts.size.XS};
            cursor: pointer;
            padding: 12px;
            border: 1px solid ${theme.colors.primary};
            border-radius: ${theme.borderRadius.round};
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
            transition: all 200ms ease-out;
            :hover {
              background: ${theme.colors.white};
              color: ${theme.colors.primary};
              transition: all 200ms ease-out;
            }
            :active {
              background: ${theme.colors.primary};
              color: ${theme.colors.white};
            }
          }
        }
      }
    }

    ${(
      { isHoverable, isSelected } //on regarde si la carte est hoverable et si elle est sélectionnée
    ) =>
      isHoverable &&
      isSelected &&
      selectedStyle}//si oui, on applique le style selectedStyle
  }
`;

const hoverableStyle = css`
  :hover {
    transform: scale(1.05);
    transition: ease-out 0.4s;
    cursor: pointer;
    box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);
    border: 2px solid ${theme.colors.primary};

    //on évite que les enfants soient ait le transform
    > * {
      transform: none;
      transition: ease-out 0.4s;
      border: none;
      box-shadow: none;
    }
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};

  .primary-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      :active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }

  .delete-button {
    color: ${theme.colors.white};

    :active {
      color: ${theme.colors.white};
    }
  }

  .text-info {
    .description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  }
`;
