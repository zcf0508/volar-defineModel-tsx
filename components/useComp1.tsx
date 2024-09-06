import { ref } from 'vue'
import Comp1 from './Comp1.vue'

export function useComp1() {
  const open = ref(false)

  return [
    open,
    () => (
      <Comp1
        open={open.value}
        onUpdate:open={(val) => open.value = val} 
      ></Comp1>
    )
  ] as const
}
