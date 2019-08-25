import { keyframes } from "styled-components";

export const fadeInLogo = keyframes`
from {
  opacity: 0;
  transform: translate3d(-20px, -20px, -150px) rotate3d(1, -1, 0, 35deg);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;

export const fadeInBottom = keyframes`
from {
opacity: 0;
transform: translate3d(0, 100px, 0)
}

to {
    opacity: 1;
    transform: translate3d(0, 0, 0)

}
`;
