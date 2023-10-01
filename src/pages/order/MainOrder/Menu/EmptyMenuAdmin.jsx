// import styled from "styled-components";
import PropTypes from "prop-types";

EmptyMenuAdmin.propTypes = {
  resetMenu: PropTypes.func,
};

export default function EmptyMenuAdmin({ resetMenu }) {
  return (
    <div className="empty">
      <span> Aucun produit</span>
      <button onClick={resetMenu}> Générer de nouveaux produits </button>
    </div>
  );
}
