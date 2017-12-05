export const CHANGE_CAPTION = 'CHANGE_CAPTION'
export const ADD_UPDATE_IMAGE_URL = 'ADD_UPDATE_IMAGE_URL'
export const CHANGE_TEXT_COLOR = 'CHANGE_TEXT_COLOR'
export const CHANGE_FILL_COLOR = 'CHANGE_FILL_COLOR'

export const changeCaption = caption => ({ type: CHANGE_CAPTION, caption })
export const addUpdateImageUrl = (size, url) => ({
  type: ADD_UPDATE_IMAGE_URL,
  size,
  url,
})
export const changeTextColor = color => ({ type: CHANGE_TEXT_COLOR, color })
export const changeFillColor = color => ({ type: CHANGE_FILL_COLOR, color })
