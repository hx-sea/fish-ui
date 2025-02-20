import React from "react";

export type WatermarkProps = Omit<
  React.HtmlHTMLAttributes<HTMLDivElement>,
  "content"
> & {
  /**
   * default: 120
   */
  width?: number;

  /**
   * @default 64
   */
  height?: number;

  /**
   * @default true
   */
  inherit?: boolean;

  /**
   * @default -22
   */
  rotate?: number;
  /**
   * @default 9
   */
  zIndex?: number;

  /**
   */
  image?: string;

  /**
   * @default FishUI-bubucuo
   */
  content?: string | string[];

  /**
   * Text style
   * @default Font
   */
  font?: {
    /**
     * @default rgba(0,0,0,0.15)
     */
    color?: string;

    /**
     * @default 20
     */
    fontSize?: string | number;

    /**
     * @default normal
     */
    fontWeight?: "normal" | "light" | "weight" | number;

    /**
     * @default none
     */
    fontStyle?: "none" | "normal" | "italic" | "oblique";

    /**
     * @default Arial
     */
    fontFamily?: string;
  };

  /**
   * @default [100, 100]
   */

  gap?: [number, number];

  /**
   * @default [gap[0]/2, gap[1]/2]
   */
  offset?: [number, number];
};
