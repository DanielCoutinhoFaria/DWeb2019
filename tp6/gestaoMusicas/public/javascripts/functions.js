function apagaItem(id){
    axios.delete('/' + id)
        .then(response => window.location.assign('/'))
        .catch(error => console.log(error))
}

