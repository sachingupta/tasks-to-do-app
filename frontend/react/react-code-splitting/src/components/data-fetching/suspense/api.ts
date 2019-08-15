let cache: any = null;

export const readCache = () => {
	if (cache) {
		return cache;
	}
	// we throw the fetch Promise if we don't have the data in cache
	throw get();
}

export const sleeper = (ms: number) => {
    return function(x: any) {
      return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
  }

export const get = () => {

	return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(resp => resp.json())
        .then(sleeper(2000))
		.then(data => {
			cache = data;
		});
}