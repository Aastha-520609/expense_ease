import styled from "styled-components";

const LogoIcon = styled.img`
  height: 65px;
  width: 40px;
  position: relative;
  border-radius: 50%;
  object-fit: cover;
`;
const Expenseease = styled.div`
  position: relative;
`;
const ExpenseEaseText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
`;
const PersonalExpensesFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const PersonalExpenseManagment = styled.div`
  width: 304px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  white-space: nowrap;
`;
const WhyExpenseease = styled.div`
  position: relative;
  white-space: nowrap;
`;
const Features = styled.div`
  align-self: stretch;
  height: 27px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  white-space: nowrap;
`;
const FeaturesText = styled.div`
  width: 103px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xs) 0px 0px;
  box-sizing: border-box;
`;
const Contact = styled.div`
  height: 27px;
  width: 94px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const LoginFrame = styled.div`
  height: 29px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  max-width: 100%;
`;
const LogIn = styled.b`
  position: relative;
  white-space: nowrap;
  z-index: 1;
`;
const BackgroundRectangle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-5xs);
`;
const FeaturesFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    display: none;
  }
`;
const WhyEEContactFrame = styled.div`
  width: 936px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  font-family: var(--font-calibri);
  @media screen and (max-width: 1125px) {
    width: 0px;
  }
`;
const SubheaderFrameRoot = styled.header`
  position: absolute;
  top: 42px;
  left: 39px;
  width: 1314px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
  font-family: var(--font-calistoga);
`;

const SubheaderFrame = () => {
  return (
    <SubheaderFrameRoot>
      <PersonalExpensesFrame>
        <LogoIcon loading="eager" alt="" src="/logo@2x.png" />
        <ExpenseEaseText>
          <Expenseease>ExpenseEase</Expenseease>
        </ExpenseEaseText>
      </PersonalExpensesFrame>
      <WhyEEContactFrame>
        <FeaturesFrame>
          <PersonalExpenseManagment>
            Personal Expense Managment
          </PersonalExpenseManagment>
          <LoginFrame>
            <WhyExpenseease>Why ExpenseEase</WhyExpenseease>
            <FeaturesText>
              <Features> Features</Features>
            </FeaturesText>
            <Contact>Contact</Contact>
          </LoginFrame>
          <BackgroundRectangle>
            <LogIn>Log In</LogIn>
          </BackgroundRectangle>
        </FeaturesFrame>
      </WhyEEContactFrame>
    </SubheaderFrameRoot>
  );
};

export default SubheaderFrame;