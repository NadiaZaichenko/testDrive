import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useWindowSize } from 'hook/useSize';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import { ContentWrapper, Main } from './Layout.styled';
import Header from 'components/Header/Header';

export const Layout = () => {
    const [screenWidth, screenHeight] = useWindowSize();
  

    return (
      <ContentWrapper>
        {/* <BtnScrollToTop /> */}
        <Header />
        <Main 
        screenHeight={screenHeight} screenWidth={screenWidth}
        >
          <Section>
            <Container>
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </Container>
          </Section>
        </Main>
      </ContentWrapper>
    );
  };