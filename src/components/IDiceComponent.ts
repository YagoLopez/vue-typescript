import { IDice } from '@/components/models/IDice'

export interface IDiceComponent {
  dice: IDice
  isRolling: boolean,
  currentValue: string
}
