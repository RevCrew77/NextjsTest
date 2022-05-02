import {
  SectionHeading,
  SectionInnerHeading,
  SectionBigHeading,
  SectionTinyHeading,
  SectionSubheading,
  SectionParagraph,
} from "../../components/Typography";
import { VideoImg, Wrapper } from "./elements";
import video from "/public/img/video.png";

// The Card to be exported goes here
export const Card = (props) => {
  return (
    <>
      <Wrapper
        backgroundColor={props.backgroundColor}
        width={props.width}
        borderColor={props.borderColor}
        height={props.height}
      >
        <SectionHeading
        color={props.color}
        line={props.line}
        >{props.Heading}</SectionHeading>
        <SectionParagraph>{props.Paragraph}</SectionParagraph>
      </Wrapper>
    </>
  );
};
