import styled from "styled-components";
import PropTypes from 'prop-types';
import PrimaryButton from "../../../components/reusable-ui/PrimaryButton";
import { theme } from "../../../theme";

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};


export default function ProductCard({title, imageSource, price}) {
  return (
    <ProductCardStyled>
        <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
            <div className="title">{title}</div>
            <div className="description">
                <div className="left-description">{price}</div>
                <div className="right-description">
                    <PrimaryButton className="primary-button" label={"Ajouter"} />
                </div>
            </div>
      </div>
    </ProductCardStyled>
  )
}


const ProductCardStyled = styled.div`
   
    background: ${theme.colors.white};
    width: 200px;
    height: 300px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};

    .image {
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
        display: grid;
        grid-template-rows: 30% 70%;
        padding: 5px;

        .title {
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
            text-overflow: ellipsis; // ... si le texte est trop long
            font-family: "Amatic SC", cursive;
        }

        .description {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-weight: ${theme.fonts.weights.medium};
            white-space: nowrap;
            overflow: hidden; // si le texte est trop long
            text-overflow: ellipsis;
            font-weight: ${theme.fonts.weights.medium};
            color: ${theme.colors.primary};
        }

        .right-description {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: ${theme.fonts.size.P1};

            .primary-button {
            font-size: ${theme.fonts.size.XS};
            cursor: pointer;
            padding: 12px;
            }
        }
    }
  }
`
