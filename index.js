//@flow

import { NativeModules, findNodeHandle } from "react-native";

const { RNViewShot } = NativeModules;

export function takeSnapshot(
  view: number | ReactElement<any>,
  options ?: {
    width ?: number;
    height ?: number;
    filename ?: string;
    format ?: "png" | "jpg" | "jpeg" | "webm";
    quality ?: number;
    result ?: "file" | "base64" | "data-uri";
  }
): Promise<string> {
  if (typeof view !== "number") {
    const node = findNodeHandle(view);
    if (!node) return Promise.reject(new Error("findNodeHandle failed to resolve view="+String(view)));
    view = node;
  }
  return RNViewShot.takeSnapshot(view, options);
}

export default { takeSnapshot };
