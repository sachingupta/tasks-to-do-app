let cache: any = null;

export const readCache = () => {
	return cache;
}

function sleeper(ms: number) {
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