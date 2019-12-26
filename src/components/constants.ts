export const FACE_NUMBERS: string[] = ['1', '2', '3', '4', '5', '6']

export const LOCAL_STORAGE_DICES_KEY = 'dicesCollection'

export const DICES_EVENT_NAMES = {
  onAddDice: 'onAddDice',
  onRemoveDice: 'onRemoveDice',
  onRemoveAllDices: 'onRemoveAllDices',
  onSaveDices: 'onSaveDices',
  onLoadDices: 'onLoadDices',
  onRollDices: 'onRollDices'
}

/**
 * Get random number between max and min
 * Used to roll the dices
 * @param {number} max
 * @param {number} min
 */
export const getRandomNumbersBetween = (max: number, min: number): number => {
  return Math.floor(Math.random() * max) + min
}
