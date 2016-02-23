import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/svg-icon';

let BankNote = (props) => (
  <SvgIcon {...props}>
    
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px"
	 height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<g id="Frames-24px">
	<rect width="24" height="24"/>
</g>
<g id="Solid">
	<g>
		<path d="M2,5v14h20V5H2z M9,17l-5-5V7h11l5,5v5H9z"/>
		<circle cx="12" cy="12" r="3"/>
	</g>
</g>
</
  </SvgIcon>
);
BankNote = pure(BankNote)
BankNote.displayName = 'BankNote';

export default BankNote;
