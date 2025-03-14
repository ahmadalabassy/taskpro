import React from "react";
// import styles from "./header.module.css";

import styled from "styled-components";

const SvgSearchIcon = styled.img`
  position: absolute;
  top: 14px;
  left: 14px;
  transition: all 0.3s ease;
`;

const Input = styled.input`
  width: 400px;
  padding: 10px 0 10px 38px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  background-color: var(--secondary-color);
  font-weight: bold;
  transition: all 0.3s ease;
  position: relative;
  text-transform: capitalize;
  caret-color: var(--primary-color);

  &:hover ~ img,
  &:focus ~ img {
    transform: scale(1.2);
  }

  &::placeholder {
    color: var(--text-header-color);
  }

  &:focus {
    outline: none;
    border: none;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 1024px) {
    width: 164px;
  }
`;

export default function SearchBar() {
  return (
    <div className="position-relative">
      <Input placeholder="Search Tasks ..." type="text" />
      <SvgSearchIcon src="/path-to-icon.svg" alt="Search Icon" />
    </div>
  );
}
