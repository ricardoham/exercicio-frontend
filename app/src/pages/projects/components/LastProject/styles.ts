import styled from 'styled-components';

export const LastProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const WrapperRibbon = styled.div`
  position: relative;
`;

export const Ribbon = styled.div`
  position: absolute;
  top: 4px;
  right: -36px;
  padding: 11px 48px;
  background-color: #4a9fc6;
  color: #fff;
  font-weight: 600;
  transform: rotate(45deg);
  clip-path: polygon(30% 20%, 70% 20%, 100% 100%, 0% 100%);
`;

export const ProjectImg = styled.img`
  width: 100%;
`;

export const LastProjectHeader: any = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`;

LastProjectHeader.Title = styled.h3`
  color: #98a0a9;
  font-weight: 600;
`;

LastProjectHeader.Subtitle = styled.h4`
  color: #98a0a9;
  font-weight: 200;
`;
