import React from 'react';
import { func, node, string } from 'prop-types';

import StyledButton, { StyledLinkButton } from './button.styles';

import IconBag from "../../../assets/images/icons/shopping-bag.svg";
import IconCart from "../../../assets/images/icons/shopping-cart.svg";
import IconPlus from "../../../assets/images/icons/plus.svg";
import IconUser from "../../../assets/images/icons/user.svg";
import IconX from "../../../assets/images/icons/x.svg";

const Icons = {
	bag: IconBag,
	cart: IconCart,
	plus: IconPlus,
	user: IconUser,
	x: IconX
};

const Button = ({ children, href, onClick, icon, variant }) => {
  if (!href)
    return (
      <StyledButton onClick={onClick} variant={variant}>
        {icon && <ButtonIcon name={icon} />}
        {children}
      </ StyledButton>
    );
  return (
    <StyledLinkButton href={href} variant={variant}>
      {icon && <ButtonIcon name={icon} />}
      {children}
    </StyledLinkButton>
  );
};

Button.PropTypes = {
  children: node.isRequired,
  href: string,
  icon: string,
  onClick: func,
};

Button.defaultProps = {
  children: "Button text",
  variant: "primary"
};

const ButtonIcon = ({ name }) => {
	// If icon name value doesn't match Icons object keys then return null
	if (Icons[name] === undefined) return null;
	// If icon found, return the icon in a span element
	const Icon = Icons[name];
	return (
		<span className="button__icon">
			<Icon />
		</span>
	);
};

// Button Icon component always expects on prop value for icon name
ButtonIcon.propTypes = {
	name: string.isRequired
};

export default Button;
