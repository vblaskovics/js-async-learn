import { Observable } from "rxjs";

/**
 * Reset the counter after p seconds
 */
export function resetAfterP(element: HTMLButtonElement, p: number) {
  // sleepSync(p * 1000)
  // element.innerHTML = `reset`

  // sleepAsyncCallback(p * 1000, () => {
  //   element.innerHTML = `reset`;
  // });

  // sleepAsyncPromise(p * 1000).then(() => {
  //   element.innerHTML = `reset`;
  // });

  // (async () => {
  //   const promiseObj = sleepAsyncAwait(p * 1000);
  //   console.log('promiseObj already created')
  //   await promiseObj

  //   element.innerHTML = `reset`;
  // })();

  sleepAsyncObservable(p * 1000).subscribe({
    next: () => {
      console.log("sleep next has been called")
      element.innerHTML = `reset`;
    },
    complete: () => console.log("Observable completed"),
  });


}

function sleepSync(ms: number) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // Busy-wait loop
  }
}

function sleepAsyncCallback(ms: number, call: () => void) {
  console.log("sleepAsyncCallback", ms);
  setTimeout(call, ms);
}

function sleepAsyncPromise(ms: number): Promise<void> {
  console.log("sleepAsyncPromise", ms);
  return new Promise((resolve) => {
    console.log('promise has been called')
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function sleepAsyncAwait(ms: number): Promise<void> {
  console.log("sleepAsync", ms);
  await sleepAsyncPromise(ms);
}

function sleepAsyncObservable(ms: number): Observable<void> {
  console.log("sleepAsyncObservable", ms);
  return new Observable((observer) => {
    let counter = 0
    setInterval(() => {
      observer.next();
      if (counter++ == 3) {
        observer.complete();
      }
    }, ms);
  });
}
