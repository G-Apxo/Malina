import styled from 'styled-components';

export const Nav = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    max-width: 100%;
    width:100%;
    height: auto;
    padding: 12px 0;
`;
export const Ul = styled.ul `
    display:flex;
    list-style:none;
    padding:0;
`;
export const NavItem = styled.li `
display: block;
padding: 0.5rem 1rem;
color: #297FCA;
text-decoration: none;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
`;