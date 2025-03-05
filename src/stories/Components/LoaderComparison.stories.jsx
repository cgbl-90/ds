import Loader from "../Atoms/Loader";
import "../Atoms/loader.css";

export default {
  title: "Components/LoaderGrid",
  component: Loader,
};

// Common styles
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "20px",
};

const loaderWrapperStyle = {
  padding: "50px",
  border: "1px solid #ddd",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
  textAlign: "center",
};

// Story Wrapper
const LoaderContainer = ({ title, children }) => (
  <div style={containerStyle}>
    <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>{title}</h3>
    {children}
  </div>
);

// Create a decorator that applies different parameters dynamically
const withParameterConfig = (config) => (Story) => <Story />;

export const LoaderVariant1 = () => (
  <LoaderContainer title="disableSnapshot: true">
    <div style={loaderWrapperStyle}>
      <Loader />
    </div>
  </LoaderContainer>
);
LoaderVariant1.parameters = { chromatic: { disableSnapshot: true } };
LoaderVariant1.decorators = [withParameterConfig(LoaderVariant1.parameters)];

export const LoaderVariant2 = () => (
  <LoaderContainer title="ignoreSelectors: ['#border-top']">
    <div style={loaderWrapperStyle}>
      <Loader />
    </div>
  </LoaderContainer>
);
LoaderVariant2.parameters = { chromatic: { ignoreSelectors: ["#border-top"] } };
LoaderVariant2.decorators = [withParameterConfig(LoaderVariant2.parameters)];

export const LoaderVariant3 = () => (
  <LoaderContainer title="pauseAnimationAtEnd: false">
    <div style={loaderWrapperStyle}>
      <Loader />
    </div>
  </LoaderContainer>
);
LoaderVariant3.parameters = { chromatic: { pauseAnimationAtEnd: false } };
LoaderVariant3.decorators = [withParameterConfig(LoaderVariant3.parameters)];

export const LoaderVariant4 = () => (
  <LoaderContainer title="pauseAnimationAtEnd: true">
    <div style={loaderWrapperStyle}>
      <Loader />
    </div>
  </LoaderContainer>
);
LoaderVariant4.parameters = { chromatic: { pauseAnimationAtEnd: true } };
LoaderVariant4.decorators = [withParameterConfig(LoaderVariant4.parameters)];

// Grid Layout for all variants
export const LoaderGrid = () => (
  <div style={gridStyle}>
    <LoaderVariant1 />
    <LoaderVariant2 />
    <LoaderVariant3 />
    <LoaderVariant4 />
  </div>
);
