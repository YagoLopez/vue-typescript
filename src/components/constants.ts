export const LOCAL_STORAGE_GAMES_KEY = 'dicesGames'

export const EVENT_NAME = {
  onAddDice: 'onAddDice',
  onRemoveDice: 'onRemoveDice',
  onRemoveAllDices: 'onRemoveAllDices',
  onSaveGame: 'onSaveGame',
  onLoadGames: 'onLoadGames',
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
