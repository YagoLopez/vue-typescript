// todo: review
export const FACE_NUMBERS: string[] = ['1', '2', '3', '4', '5', '6']

export const LOCAL_STORAGE_DICES_KEY = 'dicesCollection'

export const EVENT_NAME = {
  onAddDice: 'onAddDice',
  onRemoveDice: 'onRemoveDice',
  onRemoveAllDices: 'onRemoveAllDices',
  onSaveDices: 'onSaveDices',
  onLoadDices: 'onLoadDices',
  onRollDices: 'onRollDices'
}

export const GAME_NAME = 'The Settlers Of Catan'

/**
 * Get random number between max and min
 * Used to roll the dices
 * @param {number} max
 * @param {number} min
 */
export const getRandomNumbersBetween = (max: number, min: number): number => {
  return Math.floor(Math.random() * max) + min
}

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9)
}
