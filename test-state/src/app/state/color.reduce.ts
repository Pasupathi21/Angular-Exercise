import { createReducer, on } from "@ngrx/store";
import { changeColor } from "./color.actions";
import { initialColor } from "./color.state"

const colorValues = ['blue', 'green', 'violet', 'yellow', 'black']
export const _changeColor = createReducer(initialColor, on(changeColor, (action) => colorValues[Math.random() * colorValues.length]));

export function callReducer(state: any, action: any) {
    return _changeColor(state, action)
}