/* TypeScript file generated by genType. */

// tslint:disable-next-line:no-var-requires
const ColorSquareBS = require("./ColorSquare.bs");

// tslint:disable-next-line:no-var-requires
const Curry = require("bs-platform/lib/es6/curry.js");

// tslint:disable-next-line:no-var-requires
const ReasonReact = require("reason-react/src/ReasonReact.js");

// tslint:disable-next-line:interface-over-type-literal
export type Props = {
  readonly color: string;
  readonly size: string;
  readonly children?: any;
};

export const ColorSquare: React.ComponentClass<
  Props
> = ReasonReact.wrapReasonForJs(ColorSquareBS.component, function _(
  jsProps: Props
) {
  return Curry._3(
    ColorSquareBS.make,
    jsProps.color,
    jsProps.size,
    jsProps.children
  );
});

export default ColorSquare;
