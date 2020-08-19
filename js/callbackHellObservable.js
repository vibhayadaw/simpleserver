const bt = document.querySelector("button");
const result = document.getElementById("child")

const firstObserve = callBack => {
  result.textContent = "First Observable is loading";
  return Rx.Observable.create( observer => {
    setTimeout(() => {
      observer.next(true);
    }, 2000);
  })
};

const secondObserve = callBack => {
  return Rx.Observable.create(observer => {
    result.textContent = "Second Observable is loading";
    setTimeout(() => {
      observer.next(true);
    }, 2000);
  })
};

Rx.Observable.fromEvent(bt, 'click')
  .switchMap(event => firstObserve())
  .switchMap(isTrue => {
    if (isTrue) {
      return secondObserve()
    }
  })
  .subscribe( () => {
    result.textContent = "Got Apple";
  })