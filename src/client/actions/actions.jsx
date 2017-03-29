
export function setNameActionCreator (name) {
    return {
        type: 'SET_NAME',
        name: name
    }
}

export function zhuanliSearch(data) {
    return{
        types:['GET_Zhuanli_Search_REQUEST', 'GET_Zhuanli_Search_SUCCESS', 'GET_Zhuanli_Search_FAILURE'],
        data:data,
        promise:()=>{
            return new Promise((resolve, reject) => {
                var req = new Request(URL, {method: 'GET', data: data});
                fetch(req).then(function(response) {
                    var body = response.body
                    resolve({data:body})
                }).catch(function(err) {
                    reject({err:err})
                });
            })
        }
    }

}