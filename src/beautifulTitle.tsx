import React, { FC } from 'react';
interface TitleProps {
  title: string;
  subtitle?:string;
}
interface SectionHeaderProps {
  headerName:string;
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

export const SectionHeader: FC<SectionHeaderProps> = ({ headerName }) => { 
  return (
 <div className = 'sectionHeader'>
      <h3>{headerName}</h3>
      </div>
  );
};


export const Warning: FC<WarningProps> = ({ warningText }) => {
  return (
    <>
      <h1 style = {{color:"red"}}>{warningText}</h1>
    </>
  );
};