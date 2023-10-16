import React, { FC } from 'react';

interface TitleProps {
  title: string;
  subtitle?:string;
}
interface WarningProps {
  warningText: string;
}

 
const Title: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </>
  );
};

export default Title;

export const Warning: FC<WarningProps> = ({ warningText }) => {
  return (
    <>
      <h1 style = {{color:"red"}}>{warningText}</h1>
    </>
  );
};