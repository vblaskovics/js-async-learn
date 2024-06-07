import './style.css'
import { setupCounter } from './counter.ts'
import { resetAfterP } from './async.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

const btn = document.querySelector<HTMLButtonElement>('#counter');
setupCounter(btn!)

setTimeout(() => {
  resetAfterP(btn!, 3);
},3000)