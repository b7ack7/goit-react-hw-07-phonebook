import styled from '@emotion/styled';
import {BiLoaderCircle} from 'react-icons/bi';

export const Preloader = styled.div`
fill: #4676D7;
display: flex;
`;

export const PreloaderImg = styled(BiLoaderCircle)`
width: 70px;
height: 70px;
text-align: center;
fill: inherit;
animation: preloader-rotate 2s infinite linear;
@keyframes preloader-rotate {
    100% {
      transform: rotate(360deg);
    }
`;
