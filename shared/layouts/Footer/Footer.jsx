import React from 'react';
import { blue100 } from 'material-ui/lib/styles/colors';

const contStyle = {
  position: 'absolute',
  bottom: '0',
  right: '0',
};

const textStyle = {
  fontSize: '0.8em',
  color: blue100,
  paddingRight: '2em',
};

const hrefStyle = {
  color: blue100,
};

function Footer() {
  return (
    <div style={contStyle} className="row end-xs">
      <p style={textStyle}>
        A project by &nbsp;
        <a style={hrefStyle} href={'https://github.com/RobertRiachi'} target="_blank">
          Robert Riachi
        </a>, &nbsp;
        <a style={hrefStyle} href={'https://github.com/micklethepickle'} target="_blank">
          Michel Ma
        </a>, &nbsp;
        <a style={hrefStyle} href={'https://github.com/lorix-lpan'} target="_blank">
          @lorix-lpan
        </a>, &nbsp;
        <a href={'http://pineappleprograms.com/'} target="_blank" >
          <img src ="http://pineappleprograms.com/images/pplogo.png" alt="PineapplePrograms" width="15"></img>
        </a>
      </p>
    </div>
  );
}

export default Footer;
