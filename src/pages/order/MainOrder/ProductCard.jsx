import styled from "styled-components";
import PropTypes from 'prop-types';

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};


export default function ProductCard({title, imageSource, price}) {
  return (
    <ProductCardStyled>
        <div className="image">
            <img src={imageSource} alt={title} />
         </div>

        <div className="info-text">
            <div className="title">{title} </div>

            <div className="description">
               <div className="price"> {price} </div>
               <button className="add-button"> Ajouter</button> 
            </div>
        </div> 
    </ProductCardStyled>
  )
}


const ProductCardStyled = styled.div`
   
        background: red ;
        width: 240px;
        height: 330px;
    
    .image{
        border : 1px solid fuchsia;
        width: 100px;
        height: auto;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .description{
       
            
    }
`;