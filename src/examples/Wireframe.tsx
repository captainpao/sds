import { Hero, TestimonialCard } from "compositions";
import { placeholder } from "images";
import { Flex, FlexItem, Section } from "layout";
import { Button, ButtonGroup, Text, TextHeading } from "primitives";
import { Footer } from "compositions";

export function Wireframe() {
  return (
    <div style={{ backgroundColor: "var(--sds-color-background-default-default)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      
      <Hero variant="subtle">
        <Flex direction="column" gap="400" alignPrimary="center" alignSecondary="center">
          <Flex direction="column" gap="200" alignPrimary="center" alignSecondary="center">
            <TextHeading style={{ fontSize: "var(--sds-typography-title-hero-size)", textAlign: "center" }}>Title</TextHeading>
            <Text style={{ fontSize: "var(--sds-typography-subtitle-size-base)", color: "var(--sds-color-text-default-secondary)", textAlign: "center" }}>
              Subtitle
            </Text>
          </Flex>
          <ButtonGroup>
            <Button onPress={() => {}} variant="neutral">Button</Button>
            <Button onPress={() => {}} variant="primary">Button</Button>
          </ButtonGroup>
        </Flex>
      </Hero>

      <div style={{ height: "400px", backgroundColor: "var(--sds-color-background-neutral-tertiary)", width: "100%" }} />

      <Section padding="1200">
        <Flex container gap="1200" direction="column" alignSecondary="stretch">
          <Flex direction="column" gap="200" alignPrimary="center" alignSecondary="center">
            <TextHeading style={{ textAlign: "center" }}>Heading</TextHeading>
            <Text style={{ color: "var(--sds-color-text-default-secondary)", textAlign: "center" }}>Subheading</Text>
          </Flex>
          <FlexItem>
            <Flex wrap type="third" gap="1200">
              <TestimonialCard heading="&quot;Quote&quot;" src={placeholder} name="Title" username="Description" />
              <TestimonialCard heading="&quot;Quote&quot;" src={placeholder} name="Title" username="Description" />
              <TestimonialCard heading="&quot;Quote&quot;" src={placeholder} name="Title" username="Description" />
              <TestimonialCard heading="&quot;Quote&quot;" src={placeholder} name="Title" username="Description" />
              <TestimonialCard heading="&quot;Quote&quot;" src={placeholder} name="Title" username="Description" />
              <TestimonialCard heading="&quot;Quote&quot;" src={placeholder} name="Title" username="Description" />
            </Flex>
          </FlexItem>
        </Flex>
      </Section>

      <Footer />
    </div>
  );
}
