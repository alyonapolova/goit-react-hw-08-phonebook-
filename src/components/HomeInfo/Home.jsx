import { useNavigate } from 'react-router-dom';
import { HomeDiv, LeftDiv, RightDiv, Title2 } from './Home.styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import img from './img.jpeg';

const HomeInfo = () => {
  const navigate = useNavigate();
  return (
    <HomeDiv>
      <LeftDiv>
        <h1>The Free Online Contact Book </h1>
        <Title2>
          The Easiest Way to Collect All Your Friends' Phone Numbers
        </Title2>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => {
              navigate('/register');
            }}
            variant="contained"
            color="secondary"
          >
            Get started
          </Button>
        </Stack>
      </LeftDiv>
      <RightDiv>
        <img alt="Contact book" src={img} width="400" />
      </RightDiv>
    </HomeDiv>
  );
};

export default HomeInfo;
