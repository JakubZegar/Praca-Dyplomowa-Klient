import { Stage, Layer, Image, Circle } from 'react-konva';
import styled from 'styled-components';

export const StyledKonvaImage = styled(Image)`
    display: flex;
    flex: 1;
    width: 100px;
    border: 10px red;
`

export const HeatmapContainer = styled.div`
    display: flex;
    border-width: 10px;
    border-style: solid;
    flex: 1;
`