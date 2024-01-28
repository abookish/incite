import React, { FC } from 'react';
//cloud styling from https://lauryndbrown.github.io/2017/06/08/creating-clouds-in-css.html
interface TitleProps {
  title: string;
  subtitle?:string;
}
interface WarningProps {
  warningText: string;
}

 
const Title: FC<TitleProps> = ({ title, subtitle }) => { 
  return (
 <div className = 'App-header'>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      </div>
    
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