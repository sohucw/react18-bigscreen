import styled from 'styled-components';

export const LeftPage = styled.div`
  width: 500px;
  height: auto;
  padding: 16px;
  padding-bottom: 0px;
`;

export const LeftTopBox = styled.div`
  position: relative;
  height: 350px;
  width: 100%;
  .left-top-borderBox12 {
    width: inherit;
    height: inherit;
    padding: 15px;
    .left-top {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: rgba(19, 25, 47, 0.6);
      .title-dis {
        margin-top: 15px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 16px;
        color: #c0c9d2;
        &-keyword {
          padding-left: 10px;
          color: #47dae8;
        }
      }
    }
  }
`;
export const LeftBottomBox = styled.div`
  position: relative;
  margin-top: 20px;
  height: 620px;
  width: 100%;
  .left-bottom-borderBox13 {
    width: inherit;
    height: inherit;
    padding: 20px 15px;
    .left-bottom {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: rgba(19, 25, 47, 0.6);
    }
  }
`;
