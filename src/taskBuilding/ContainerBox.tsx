import React, {ReactNode} from 'react';
  interface ContainerBoxProps {
    children: ReactNode;
    styleObject?: React.CSSProperties
  }
  const colors = {
    lilypadOutline: '#484d14',
    lilypadLight: '#b5bfd', 
    lilypadShadow: '3f4d1a'
  }
 
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    margin: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    resize: 'both',
  };
  const greenBoxStyle: React.CSSProperties =  {
    borderColor: colors.lilypadShadow,
    width: '95%',
    borderStyle: 'dotted',
    padding: '20%',
    backgroundColor: colors.lilypadShadow
  }
  const defaultAllAttributesStyle = {...containerStyle, ...greenBoxStyle}

  export const ContainerBox: React.FC<ContainerBoxProps> = ({ children, styleObject = defaultAllAttributesStyle,}) => {
    return (
      <div style={styleObject ? styleObject : undefined} className="containerBox">
        {children}
      </div>
    );
  };