import styled from 'styled-components';

export const CenterPage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const CenterBottom = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 70px;
  width: 100%;
  height: 260px;
  .detail-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-between;
    justify-content: space-around;
    width: 100%;
    &-item {
      display: flex;
      align-items: center;
      position: relative;
      height: 125px;
      padding: 0 10px;
      width: 32%;
      border-radius: 5px;
      border: 1px solid #343f4b;
      background-color: rgba(19, 25, 47, 0.8);
      img {
        width: 100px;
        height: 100px;
      }
      .detail-item-text {
        margin-left: 10px;
        h3 {
          color: #bcdcff;
          font-size: 16px;
          margin-bottom: 20px;
        }
        span {
          font-weight: 500px;
          font-size: 20px;
          font-weight: bolder;
          background: linear-gradient(to bottom, #fff, #4db6e5);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
        .unit {
          font-size: 16px;
          margin-left: 10px;
        }
      }
    }
  }
`;
