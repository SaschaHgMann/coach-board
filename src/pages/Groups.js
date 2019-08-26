import React from "react";
import Header from "../components/Header";
import PropTypes from "prop-types";
import Container from "../components/Container";
import Card from "../components/Card";
import styled from "styled-components";
import MemberCard from "../components/MemberCard";
import { MemberButton } from "../components/Buttons";
import colors from "../utils/colors";
import { fadeInGroup } from "../utils/animations";

const ImageContainer = styled.div`
  position: relative;
  height: 190px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MemberContainer = styled.div`
  margin: 0;
  padding: 5px;
  background: ${colors.light};
  display: ${props => (props.active ? "block" : "none")};
`;

const StyledImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const BannerTitle = styled.div`
  color: #fff8f0;
  display: flex;
  justify-content: flex-end;
  font-family: "Bahianita", "cursive";
  font-size: 30px;
  position: absolute;
  bottom: 30px;
  margin: 0 10px;
`;

const BannerDetails = styled.div`
  color: #fff8f0;
  font-size: 16px;
  display: flex;
  position: absolute;
  bottom: 5px;
  margin: 0 10px;
`;

const Icon = styled.div`
  margin-right: 5px;
`;

const StyledMemberButton = styled(MemberButton)`
  position: absolute;
  right: 10px;
  bottom: 30px;
  box-shadow: 3px 2px 4px rgba(255, 248, 240, 0.5);
`;

const StyledCard = styled(Card)`
  max-width: 350px;
  animation: ${fadeInGroup} 1s ease-out 1 both;
`;

function Groups({ members, history }) {
  const [showBonsais, setShowBonsais] = React.useState(false);
  const [showKids, setShowKids] = React.useState(false);
  const [showYouth, setShowYouth] = React.useState(false);
  const [showSeniors, setShowSeniors] = React.useState(false);

  function renderGroupMember(memberCard, index) {
    return (
      <MemberCard
        key={index}
        {...memberCard}
        history={history}
        members={memberCard}
      />
    );
  }

  return (
    <>
      <Header title="Groups" />
      <Container>
        <StyledCard>
          <ImageContainer>
            <StyledImage src="./images/Group_Bonsais.jpg" />
            <BannerTitle>
              <div>Bonsais</div>
            </BannerTitle>
            <StyledMemberButton
              onClick={() => setShowBonsais(!showBonsais)}
              active={showBonsais}
            >
              <i className="fas fa-users" />
              {members.filter(member => member.group === "Bonsais").length}
            </StyledMemberButton>
            <BannerDetails>
              <Icon>
                <i className="fas fa-clock" />
              </Icon>
              Mo. 16:00-17:00
            </BannerDetails>
          </ImageContainer>
          <MemberContainer active={showBonsais}>
            {members
              .filter(member => member.group === "Bonsais")
              .map((member, index) => renderGroupMember(member, index))}
          </MemberContainer>
        </StyledCard>
        <StyledCard>
          <ImageContainer>
            <StyledImage src="./images/Group_Kids.jpg" />
            <BannerTitle>
              <div>Kids</div>
            </BannerTitle>
            <StyledMemberButton
              onClick={() => setShowKids(!showKids)}
              active={showKids}
            >
              <i className="fas fa-users" />
              {members.filter(member => member.group === "Kids").length}
            </StyledMemberButton>
            <BannerDetails>
              <Icon>
                <i className="fas fa-clock" />
              </Icon>
              Mi. 18:00-19:00 & Fr. 18:00-19:00
            </BannerDetails>
          </ImageContainer>
          <MemberContainer active={showKids}>
            {members
              .filter(member => member.group === "Kids")
              .map((member, index) => renderGroupMember(member, index))}
          </MemberContainer>
        </StyledCard>
        <StyledCard>
          <ImageContainer>
            <StyledImage src="./images/Group_Youth.jpg" />
            <BannerTitle>
              <div>Youth</div>
            </BannerTitle>
            <StyledMemberButton
              onClick={() => setShowYouth(!showYouth)}
              active={showYouth}
            >
              <i className="fas fa-users" />
              {members.filter(member => member.group === "Youth").length}
            </StyledMemberButton>
            <BannerDetails>
              <Icon>
                <i className="fas fa-clock" />
              </Icon>
              Mi. 19:00-20:00 & Fr. 19:00-20:00
            </BannerDetails>
          </ImageContainer>
          <MemberContainer active={showYouth}>
            {members
              .filter(member => member.group === "Youth")
              .map((member, index) => renderGroupMember(member, index))}
          </MemberContainer>
        </StyledCard>
        <StyledCard>
          <ImageContainer>
            <StyledImage src="./images/Group_Seniors.jpg" />
            <BannerTitle>
              <div>Seniors</div>
            </BannerTitle>
            <StyledMemberButton
              onClick={() => setShowSeniors(!showSeniors)}
              active={showSeniors}
            >
              <i className="fas fa-users" />
              {members.filter(member => member.group === "Seniors").length}
            </StyledMemberButton>
            <BannerDetails>
              <Icon>
                <i className="fas fa-clock" />
              </Icon>
              Mo. 19:30-21:00 & Mi. 20:00-21:00
            </BannerDetails>
          </ImageContainer>
          <MemberContainer active={showSeniors}>
            {members
              .filter(member => member.group === "Seniors")
              .map((member, index) => renderGroupMember(member, index))}
          </MemberContainer>
        </StyledCard>
      </Container>
    </>
  );
}

Groups.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Groups;
