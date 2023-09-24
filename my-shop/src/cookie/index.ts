
const cookie = {

  set(key: string, value: string) {
    const date = new Date(Date.now() + 86400e3);
    const lifeTime = date.toUTCString();
    document.cookie = 
    encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';expires=' + lifeTime;
  },

  get(name: string) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\\.$?*|{}\\(\\)\\[\]\\\\/\\+^])/g, '\\$1') + "=([^;]*)"
    ));
    let result = matches ? decodeURIComponent(matches[1]) : undefined;
    
      if(result){
        result = JSON.parse(result);
      } 

    return result;
  },

  reset() {
  	const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
      document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  }

}

export { cookie }