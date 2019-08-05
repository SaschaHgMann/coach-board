import { keyframes } from "styled-components";

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

export const fadeInNav = keyframes`
from {
opacity: 0;
transform: translate3d(-200px, 0, 0)
}

to {
    opacity: 1;
    transform: translate3d(0, 0, 0)

}
`;

export const fadeOutNav = keyframes`
from {
opacity: 0;
transform: translate3d(0, 0, 0)
}

to {
    opacity: 1;
    transform: translate3d(-200px, 0, 0)

}
`;
