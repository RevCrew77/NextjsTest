import {
  SectionBigHeading,
  SectionInnerHeading,
  SectionSubheading,
  SectionParagraph,
} from "../../components/Typography";
import {
  Container,
  ContainerA,
  ContainerHeading,
  MainWrapper,
} from "./elements";
import image from "/public/img/background.png";
import { Card } from "../Card";
import { VideoImg } from "../Card/elements";
import video from "../../public/img/video.png";
import Image from 'next/image'

export const Main = (props) => {
  return (
    <>
      <MainWrapper image={image}>
        <ContainerHeading>
          <SectionBigHeading>{"Managed agency selection"}</SectionBigHeading>
          <SectionSubheading>
            {"Stenthen your onboarding process"}
          </SectionSubheading>
        </ContainerHeading>
        <Container>
          <Image src={video} width={'350px'} height={'600px'}/>
          <ContainerA>
            <Card
              width={"500px"}
              height={"150px"}
              backgroundColor={"#F9F9F9"}
              Heading={"Brief"}
              Paragraph={`Complete brief writing or simple guidance on what to include, we've got you covered`}
            ></Card>
            <Card
              width={"550px"}
              height={"150px"}
              backgroundColor={"#F4F4F4"}
              Heading={"Search"}
              Paragraph={`In-depth agency search covering; criteria matching, door knocking and due-diligence vetting.`}
            ></Card>
            <Card
              width={"600px"}
              height={"150px"}
              backgroundColor={"#F1F1F1"}
              borderColor={'#0D75FC'}
              color={'#0D75FC'}
              line={'underline'}
              Heading={"Pitch"}
              Paragraph={`Comprehensive pitch management, including comms, diary management and pitch hosting`}
            ></Card>
          </ContainerA>
        </Container>
      </MainWrapper>
    </>
  );
};
