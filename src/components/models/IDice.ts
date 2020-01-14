export interface IDice {
  name: string,
  sides: string[],
  current: string
}

export interface IDiceComponent {
  dice: IDice
  isRolling: boolean,
  currentValue: string
}
