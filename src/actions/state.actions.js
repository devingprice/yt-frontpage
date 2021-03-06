import { stateConstants } from './actionTypes';

export const setHover = (input) => ({ type: stateConstants.SET_HOVER, hovering: input });
export const setShowChannels = (input) => ({ type: stateConstants.SET_SHOW_CHANNELS, showChannelPills: input });
export const setShelfDrag = (input) => ({ type: stateConstants.SET_SHELF_DRAG, draggableShelves: input});